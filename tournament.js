// A run through the World Cup as one team. No drawing or input, so it can be tested.
//
// Everything happens as it really did, except the player's own games. The player
// takes one team's place in the real bracket, and every other game stays the same
// as far as possible.

import { GROUPS, REAL_THIRDS, RANKS, GROUP_MATCHES, KNOCKOUT, CODES } from './tournament-data.js';

const QUALIFYING_THIRDS = 8;
const KNOCKOUT_BY_NUM = new Map(KNOCKOUT.map((match) => [match.num, match]));
const ROUND_ORDER = ['R32', 'R16', 'QF', 'SF', '3RD', 'F'];

export const ROUND_NAMES = {
  R32: 'Round of 32',
  R16: 'Round of 16',
  QF: 'Quarter-final',
  SF: 'Semi-final',
  '3RD': 'Third-place match',
  F: 'Final',
};

export const ALL_GROUPS = GROUPS;

/** A team's three-letter code, for places where the full name doesn't fit. */
export function codeOf(team) {
  return CODES[team] || team;
}

export function groupOf(team) {
  return Object.keys(GROUPS).find((group) => GROUPS[group].includes(team));
}

/** How hard a team is to beat, from 1 to 5, based on its FIFA ranking. */
export function strengthOf(team) {
  const rank = RANKS[team];
  if (rank <= 10) return 5;
  if (rank <= 20) return 4;
  if (rank <= 35) return 3;
  if (rank <= 60) return 2;
  return 1;
}

export function newRun(team) {
  return { team, results: [] };
}

const groupResults = (run) => run.results.filter((result) => result.match === null);
const knockoutResult = (run, num) => run.results.find((result) => result.match === num);
const won = (result) => result.goalsFor > result.goalsAgainst;

/** The player's three group games in their real order. */
function groupFixtures(team) {
  const group = groupOf(team);
  return GROUP_MATCHES.filter((m) => m.group === group && (m.team1 === team || m.team2 === team))
    .map((m) => (m.team1 === team ? m.team2 : m.team1));
}

/** Real games in this group, with each game's round from 1 to 3. */
function groupRounds(group) {
  const played = {};
  return GROUP_MATCHES.filter((m) => m.group === group).map((m) => {
    played[m.team1] = (played[m.team1] || 0) + 1;
    played[m.team2] = (played[m.team2] || 0) + 1;
    return { ...m, round: played[m.team1] };
  });
}

/** Scores in this group, with the player's shootouts replacing their real games. */
function groupGames(group, run, upToRound = 3) {
  const mine = run && groupOf(run.team) === group ? run : null;
  const games = groupRounds(group)
    .filter((m) => m.round <= upToRound)
    .filter((m) => !mine || (m.team1 !== mine.team && m.team2 !== mine.team));
  if (mine) {
    for (const result of groupResults(mine)) {
      games.push({
        team1: mine.team,
        team2: result.opponent,
        goals1: result.goalsFor,
        goals2: result.goalsAgainst,
      });
    }
  }
  return games;
}

function tally(teams, games) {
  const rows = new Map(teams.map((team) => [team, { team, played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0, gf: 0, ga: 0 }]));
  for (const game of games) {
    const one = rows.get(game.team1);
    const two = rows.get(game.team2);
    if (!one || !two) continue;
    for (const [row, scored, conceded] of [[one, game.goals1, game.goals2], [two, game.goals2, game.goals1]]) {
      row.played += 1;
      if (scored > conceded) row.won += 1;
      else if (scored === conceded) row.drawn += 1;
      else row.lost += 1;
      row.gf += scored;
      row.ga += conceded;
      row.gd += scored - conceded;
      row.points += scored > conceded ? 3 : scored === conceded ? 1 : 0;
    }
  }
  return [...rows.values()];
}

/**
 * FIFA's order: points, then games between the tied teams, then overall goals.
 * Fair play and rankings break any tie left, which is what the real order holds.
 */
function rankGroup(group, games) {
  const rows = tally(GROUPS[group], games);
  const realOrder = (team) => GROUPS[group].indexOf(team);
  const headToHead = new Map();
  for (const row of rows) {
    const tied = rows.filter((other) => other.points === row.points).map((other) => other.team);
    const mini = tally(tied, games).find((other) => other.team === row.team);
    headToHead.set(row.team, mini);
  }
  return rows.sort((a, b) => {
    const miniA = headToHead.get(a.team);
    const miniB = headToHead.get(b.team);
    return (
      b.points - a.points ||
      miniB.points - miniA.points ||
      miniB.gd - miniA.gd ||
      miniB.gf - miniA.gf ||
      b.gd - a.gd ||
      b.gf - a.gf ||
      realOrder(a.team) - realOrder(b.team)
    );
  });
}

/**
 * The games in a group so far, as { team1, team2, goals1, goals2 }: all six real
 * ones, or for the player's group only as far as the player has got.
 */
export function groupMatches(group, run = null) {
  if (!run || groupOf(run.team) !== group) return groupGames(group);
  return groupGames(group, run, groupResults(run).length);
}

/** The real table for a group, or the player's table as it stands so far. */
export function standings(group, run = null) {
  if (!run || groupOf(run.team) !== group) return rankGroup(group, groupGames(group));
  // Every team has played as many games as the player, so nothing later is given away.
  return rankGroup(group, groupGames(group, run, groupResults(run).length));
}

export function isGroupStageDone(run) {
  return groupResults(run).length === groupFixtures(run.team).length;
}

/** Third-placed teams best first, with the player's group using the player's table. */
function rankThirds(run, table) {
  const group = groupOf(run.team);
  const entries = Object.keys(GROUPS).map((other) => (
    other === group ? table[2] : rankGroup(other, groupGames(other))[2]
  ));
  const realOrder = (team) => {
    const index = REAL_THIRDS.indexOf(team);
    return index === -1 ? REAL_THIRDS.length : index;
  };
  return entries.sort((a, b) => (
    b.points - a.points || b.gd - a.gd || b.gf - a.gf || realOrder(a.team) - realOrder(b.team)
  ));
}

function findSlot(code) {
  for (const match of KNOCKOUT) {
    const side = match.slots ? match.slots.indexOf(code) : -1;
    if (side !== -1) return { num: match.num, side };
  }
  return null;
}

function slotOfTeam(team) {
  for (const match of KNOCKOUT) {
    if (!match.slots) continue;
    if (match.team1 === team) return { num: match.num, side: 0 };
    if (match.team2 === team) return { num: match.num, side: 1 };
  }
  return null;
}

const realTeamInSlot = (slot) => {
  const match = KNOCKOUT_BY_NUM.get(slot.num);
  return slot.side === 0 ? match.team1 : match.team2;
};

/**
 * A third-placed player takes their own group's third-place slot if it exists.
 * Otherwise they push out the lowest real qualifier, skipping any slot that would
 * mean an instant rematch with their own group's winner.
 */
function thirdPlaceSlot(group) {
  const own = findSlot(`3${group}`);
  if (own) return own;
  const qualified = REAL_THIRDS.slice(0, QUALIFYING_THIRDS).reverse();
  for (const team of qualified) {
    const slot = slotOfTeam(team);
    const match = KNOCKOUT_BY_NUM.get(slot.num);
    const opponentCode = match.slots[slot.side === 0 ? 1 : 0];
    if (opponentCode[1] !== group) return slot;
  }
  return null;
}

/** How the group stage ended for the player, once all three games are played. */
export function placement(run) {
  if (!isGroupStageDone(run)) return null;
  const group = groupOf(run.team);
  const table = rankGroup(group, groupGames(group, run));
  const position = table.findIndex((row) => row.team === run.team) + 1;
  const thirds = rankThirds(run, table);
  const thirdRank = position === 3 ? thirds.findIndex((row) => row.team === run.team) + 1 : null;

  let slot = null;
  if (position <= 2) slot = findSlot(`${position}${group}`);
  else if (position === 3 && thirdRank <= QUALIFYING_THIRDS) slot = thirdPlaceSlot(group);

  const realSlot = slotOfTeam(run.team);
  const sameSlot = slot && realSlot && slot.num === realSlot.num && slot.side === realSlot.side;
  const replaces = slot && !sameSlot ? realTeamInSlot(slot) : null;
  return { group, position, thirdRank, table, qualified: slot !== null, slot, realSlot, replaces, sameSlot };
}

/** The teams in each Round of 32 game once the player has taken their place. */
function roundOf32(run, place) {
  const teams = new Map(KNOCKOUT.filter((m) => m.slots).map((m) => [m.num, [m.team1, m.team2]]));
  if (!place) return teams;
  const { slot, realSlot, table, sameSlot } = place;
  if (sameSlot) return teams;

  const inBracket = new Set([...teams.values()].flat());
  if (realSlot) {
    // The player's real slot needs a new team. Whoever they displaced moves there,
    // or if they went out, the best team left in their group.
    const filler = slot
      ? realTeamInSlot(slot)
      : table.find((row) => row.team !== run.team && !inBracket.has(row.team)).team;
    teams.get(realSlot.num)[realSlot.side] = filler;
  }
  if (slot) teams.get(slot.num)[slot.side] = run.team;
  return teams;
}

/**
 * Every knockout game as it plays out in this run. A real result is used when the
 * same two teams really played. If not, the team that really reached this game
 * goes through, which keeps the rest of the tournament as close to real as possible.
 */
export function resolveBracket(run) {
  const place = placement(run);
  const firstRound = roundOf32(run, place);
  const games = new Map();

  const decideWithoutPlayer = (real, team1, team2) => {
    const sameGame = new Set([real.team1, real.team2, team1, team2]).size === 2;
    if (sameGame) return { winner: real.winner, score: real.score, real: true };
    const oneIsReal = [real.team1, real.team2].includes(team1);
    const twoIsReal = [real.team1, real.team2].includes(team2);
    if (oneIsReal !== twoIsReal) return { winner: oneIsReal ? team1 : team2, score: null, real: false };
    return { winner: RANKS[team1] <= RANKS[team2] ? team1 : team2, score: null, real: false };
  };

  for (const real of KNOCKOUT) {
    let team1;
    let team2;
    if (real.slots) {
      [team1, team2] = firstRound.get(real.num);
    } else {
      const pick = real.num === 103 ? 'loser' : 'winner';
      [team1, team2] = real.feeders.map((num) => games.get(num)?.[pick] ?? null);
    }

    const game = {
      num: real.num, round: real.round, slots: real.slots, team1, team2, winner: null, loser: null, score: null,
    };
    games.set(real.num, game);
    if (!team1 || !team2) continue;

    const playerIsIn = team1 === run.team || team2 === run.team;
    if (playerIsIn) {
      const result = knockoutResult(run, real.num);
      if (!result) continue;
      game.winner = won(result) ? run.team : result.opponent;
      const first = team1 === run.team ? [result.goalsFor, result.goalsAgainst] : [result.goalsAgainst, result.goalsFor];
      game.score = `${first[0]}–${first[1]}`;
      game.played = true;
    } else {
      const decided = decideWithoutPlayer(real, team1, team2);
      game.winner = decided.winner;
      game.score = decided.score;
    }
    game.loser = game.winner === team1 ? team2 : team1;
  }
  return games;
}

/**
 * What the player does next: a game to play, or how the run ended.
 * A game looks like { stage, match, opponent, strength }.
 */
export function nextStep(run) {
  const played = new Set(groupResults(run).map((result) => result.opponent));
  const opponent = groupFixtures(run.team).find((team) => !played.has(team));
  if (opponent) {
    return {
      type: 'game',
      stage: `Group ${groupOf(run.team)}`,
      match: null,
      opponent,
      strength: strengthOf(opponent),
    };
  }

  const place = placement(run);
  if (!place.qualified) return { type: 'finished', outcome: 'groups', place };

  const games = resolveBracket(run);
  for (const game of games.values()) {
    const playerIsIn = game.team1 === run.team || game.team2 === run.team;
    if (playerIsIn && !game.played) {
      const rival = game.team1 === run.team ? game.team2 : game.team1;
      return {
        type: 'game',
        stage: ROUND_NAMES[game.round],
        round: game.round,
        match: game.num,
        opponent: rival,
        strength: strengthOf(rival),
      };
    }
  }

  const last = run.results[run.results.length - 1];
  const lastGame = games.get(last.match);
  return {
    type: 'finished',
    outcome: lastGame.winner === run.team && lastGame.round === 'F' ? 'champion' : 'knockout',
    round: lastGame.round,
    won: lastGame.winner === run.team,
    lastOpponent: last.opponent,
    place,
    champion: games.get(104).winner,
  };
}

export function recordResult(run, step, goalsFor, goalsAgainst) {
  run.results.push({ match: step.match, opponent: step.opponent, goalsFor, goalsAgainst });
}

/** Which rounds of the bracket to show results for, so later rounds aren't given away. */
export function revealedRounds(run, step) {
  if (step.type === 'finished') return ROUND_ORDER;
  if (!step.round) return [];
  const upTo = ROUND_ORDER.indexOf(step.round);
  return ROUND_ORDER.slice(0, upTo);
}
