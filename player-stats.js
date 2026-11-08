// Stat cards: each player's real numbers from the 2026 World Cup, keyed by
// "team|shirt number".
// Takers: [goals, assists, shots, defensive stops]. Goals, assists and shots are
//   FIFA's official tournament stats, cross-checked against ESPN box scores;
//   defensive stops are FIFA's "forced turnovers" (tackles and interceptions
//   that win the ball back).
// Keepers: [saves, shots on target faced, goals against, clean sheets], totalled
//   from ESPN's box scores of all 104 games. Shots faced = saves + goals against,
//   not counting own goals. Shootout kicks are not included.
// Photos: free-licence pictures from Wikimedia Commons (see players/CREDITS.md),
// plus 13 the project owner added by hand for players Commons had none for.
export const PLAYER_STATS = {
 "Czech Republic|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   7
  ],
  "pos": "FW",
  "photo": "czech-republic-patrik-schick.jpg",
  "credit": "Steffen Prößdorf · CC BY-SA 4.0"
 },
 "Czech Republic|22": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   4
  ],
  "pos": "MF",
  "photo": "czech-republic-tomas-soucek.jpg",
  "credit": "Egghead06 · CC BY-SA 4.0"
 },
 "Czech Republic|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   6
  ],
  "pos": "FW",
  "photo": "czech-republic-adam-hlozek.jpg",
  "credit": "Pyaet · CC BY-SA 4.0"
 },
 "Czech Republic|8": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   10
  ],
  "pos": "MF",
  "photo": "czech-republic-vladimir-darida.jpg",
  "credit": "Ailura · CC BY-SA 3.0 at"
 },
 "Czech Republic|17": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   9
  ],
  "pos": "MF",
  "photo": "czech-republic-lukas-provod.jpg"
 },
 "Mexico|9": {
  "kind": "taker",
  "stats": [
   3,
   0,
   18,
   27
  ],
  "pos": "FW",
  "photo": "mexico-raul-jimenez.jpg",
  "credit": "Timmy96 · CC0"
 },
 "Mexico|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   3
  ],
  "pos": "FW",
  "photo": "mexico-santiago-gimenez.jpg",
  "credit": "Selección Nacional de México · CC BY 3.0"
 },
 "Mexico|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   1
  ],
  "pos": "FW",
  "photo": "mexico-alexis-vega.jpg",
  "credit": "Selección Nacional de México · CC BY 3.0"
 },
 "Mexico|4": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   3
  ],
  "pos": "DF",
  "photo": "mexico-edson-alvarez.jpg",
  "credit": "Selección Nacional de México · CC BY 3.0"
 },
 "Mexico|17": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   3
  ],
  "pos": "MF",
  "photo": "mexico-orbelin-pineda.jpg",
  "credit": "Selección Nacional de México · CC BY 3.0"
 },
 "South Africa|4": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   13
  ],
  "pos": "MF",
  "photo": "south-africa-teboho-mokoena.jpg"
 },
 "South Africa|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   1
  ],
  "pos": "FW",
  "photo": "south-africa-lyle-foster.jpg",
  "credit": "Joe Peacock · CC BY-SA 4.0"
 },
 "South Africa|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   12
  ],
  "pos": "FW",
  "photo": "south-africa-oswin-appollis.jpg"
 },
 "South Africa|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   18
  ],
  "pos": "FW",
  "photo": "south-africa-relebohile-mofokeng.jpg"
 },
 "South Africa|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   2
  ],
  "pos": "MF",
  "photo": "south-africa-themba-zwane.jpg",
  "credit": "Omar David Sandoval Sida · CC BY 4.0"
 },
 "South Korea|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   7,
   9
  ],
  "pos": "FW",
  "photo": "south-korea-son-heung-min.jpg",
  "credit": "Ujishadow · CC BY-SA 4.0"
 },
 "South Korea|19": {
  "kind": "taker",
  "stats": [
   0,
   1,
   4,
   11
  ],
  "pos": "MF",
  "photo": "south-korea-lee-kang-in.jpg",
  "credit": "Republic of  Korea from Seoul, Republic of Korea · CC BY-SA 2.0"
 },
 "South Korea|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   3
  ],
  "pos": "MF",
  "photo": "south-korea-hwang-hee-chan.jpg",
  "credit": "Explicit · CC BY-SA 4.0"
 },
 "South Korea|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   4
  ],
  "pos": "FW",
  "photo": "south-korea-cho-gue-sung.jpg",
  "credit": "Nori Picture · CC BY 4.0"
 },
 "South Korea|6": {
  "kind": "taker",
  "stats": [
   1,
   1,
   4,
   20
  ],
  "pos": "MF",
  "photo": "south-korea-hwang-in-beom.jpg",
  "credit": "Explicit · CC BY-SA 4.0"
 },
 "Bosnia & Herzegovina|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   4
  ],
  "pos": "FW",
  "photo": "bosnia-herzegovina-edin-dzeko.jpg",
  "credit": "Ailura · CC BY-SA 3.0 at"
 },
 "Bosnia & Herzegovina|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   19
  ],
  "pos": "FW",
  "photo": "bosnia-herzegovina-ermedin-demirovic.jpg"
 },
 "Bosnia & Herzegovina|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   14
  ],
  "pos": "DF",
  "photo": "bosnia-herzegovina-amar-dedic.jpg",
  "credit": "Werner100359 · CC BY-SA 4.0"
 },
 "Bosnia & Herzegovina|5": {
  "kind": "taker",
  "stats": [
   0,
   1,
   0,
   10
  ],
  "pos": "DF",
  "photo": "bosnia-herzegovina-sead-kolasinac.jpg",
  "credit": "Chensiyuan · CC BY-SA 4.0"
 },
 "Bosnia & Herzegovina|6": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   11
  ],
  "pos": "MF",
  "photo": "bosnia-herzegovina-benjamin-tahirovic.jpg",
  "credit": "https://vilfortpark.dk · CC BY-SA 4.0"
 },
 "Canada|10": {
  "kind": "taker",
  "stats": [
   3,
   0,
   18,
   45
  ],
  "pos": "FW",
  "photo": "canada-jonathan-david.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Canada|9": {
  "kind": "taker",
  "stats": [
   2,
   0,
   9,
   8
  ],
  "pos": "FW",
  "photo": "canada-cyle-larin.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Canada|7": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   16
  ],
  "pos": "MF",
  "photo": "canada-stephen-eustaquio.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Canada|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   1
  ],
  "pos": "DF",
  "photo": "canada-alphonso-davies.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Canada|8": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   8
  ],
  "pos": "MF",
  "photo": "canada-ismael-kone.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Qatar|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   16
  ],
  "pos": "FW",
  "photo": "qatar-akram-afif.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Qatar|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   1
  ],
  "pos": "FW",
  "photo": "qatar-almoez-ali.jpg",
  "credit": "Ali Mohammed Mahdi · CC BY-SA 4.0"
 },
 "Qatar|10": {
  "kind": "taker",
  "stats": [
   1,
   0,
   1,
   8
  ],
  "pos": "FW",
  "photo": "qatar-hassan-al-haydos.jpg",
  "credit": "Mehdi Bolourian · CC BY 4.0"
 },
 "Qatar|2": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   6
  ],
  "pos": "DF",
  "photo": "qatar-pedro-miguel.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Qatar|16": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   5
  ],
  "pos": "DF",
  "photo": "qatar-boualem-khoukhi.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Switzerland|10": {
  "kind": "taker",
  "stats": [
   1,
   0,
   9,
   28
  ],
  "pos": "MF",
  "photo": "switzerland-granit-xhaka.jpg",
  "credit": "@cfcunofficial (Chelsea Debs) London from London, UK · CC BY-SA 2.0"
 },
 "Switzerland|23": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   3
  ],
  "pos": "FW",
  "photo": "switzerland-zeki-amdouni.jpg"
 },
 "Switzerland|5": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   15
  ],
  "pos": "DF",
  "photo": "switzerland-manuel-akanji.jpg",
  "credit": "Steffen Prößdorf · CC BY-SA 4.0"
 },
 "Switzerland|26": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   4
  ],
  "pos": "FW",
  "photo": "switzerland-cedric-itten.jpg",
  "credit": "Pierre.berendes · CC BY-SA 4.0"
 },
 "Switzerland|17": {
  "kind": "taker",
  "stats": [
   2,
   1,
   6,
   14
  ],
  "pos": "FW",
  "photo": "switzerland-ruben-vargas.jpg",
  "credit": "Schweizerischer Fussballverband (SFV / ASF) · CC BY 3.0"
 },
 "Brazil|10": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   0
  ],
  "pos": "FW",
  "photo": "brazil-neymar.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Brazil|7": {
  "kind": "taker",
  "stats": [
   4,
   1,
   17,
   24
  ],
  "pos": "FW",
  "photo": "brazil-vinicius-junior.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Brazil|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   10
  ],
  "pos": "FW",
  "photo": "brazil-raphinha.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Brazil|9": {
  "kind": "taker",
  "stats": [
   3,
   0,
   10,
   9
  ],
  "pos": "FW",
  "photo": "brazil-matheus-cunha.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Brazil|5": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   20
  ],
  "pos": "MF",
  "photo": "brazil-casemiro.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Haiti|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   1
  ],
  "pos": "FW",
  "photo": "haiti-duckens-nazon.jpg",
  "credit": "Fouad Ashtari · CC BY 4.0"
 },
 "Haiti|20": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   3
  ],
  "pos": "FW",
  "photo": "haiti-frantzdy-pierrot.jpg"
 },
 "Haiti|18": {
  "kind": "taker",
  "stats": [
   1,
   0,
   5,
   7
  ],
  "pos": "FW",
  "photo": "haiti-wilson-isidor.jpg",
  "credit": "Антон Зайцев · CC BY-SA 3.0"
 },
 "Haiti|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   13
  ],
  "pos": "MF",
  "photo": "haiti-jean-ricner-bellegarde.jpg",
  "credit": "Supporterhéninois · CC0"
 },
 "Haiti|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   0
  ],
  "pos": "FW",
  "photo": "haiti-derrick-etienne-jr.jpg",
  "credit": "Hayden Schiff from Cincinnati, USA · CC BY 2.0"
 },
 "Morocco|24": {
  "kind": "taker",
  "stats": [
   0,
   0,
   7,
   51
  ],
  "pos": "MF",
  "photo": "morocco-neil-el-aynaoui.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Morocco|9": {
  "kind": "taker",
  "stats": [
   2,
   1,
   6,
   5
  ],
  "pos": "FW",
  "photo": "morocco-soufiane-rahimi.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Morocco|7": {
  "kind": "taker",
  "stats": [
   0,
   1,
   2,
   6
  ],
  "pos": "MF",
  "photo": "morocco-chemsdine-talbi.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Morocco|2": {
  "kind": "taker",
  "stats": [
   1,
   2,
   14,
   19
  ],
  "pos": "DF",
  "photo": "morocco-achraf-hakimi.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Morocco|11": {
  "kind": "taker",
  "stats": [
   3,
   0,
   10,
   32
  ],
  "pos": "MF",
  "photo": "morocco-ismael-saibari.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Scotland|20": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   4
  ],
  "pos": "FW",
  "photo": "scotland-lawrence-shankland.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Scotland|4": {
  "kind": "taker",
  "stats": [
   0,
   0,
   8,
   11
  ],
  "pos": "MF",
  "photo": "scotland-scott-mctominay.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Scotland|7": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   5
  ],
  "pos": "MF",
  "photo": "scotland-john-mcginn.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Scotland|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   6
  ],
  "pos": "FW",
  "photo": "scotland-che-adams.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Scotland|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   3
  ],
  "pos": "MF",
  "photo": "scotland-ryan-christie.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Australia|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   4
  ],
  "pos": "DF",
  "photo": "australia-harry-souttar.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Australia|22": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   7
  ],
  "pos": "MF",
  "photo": "australia-jackson-irvine.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Australia|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   1
  ],
  "pos": "FW",
  "photo": "australia-awer-mabil.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Australia|25": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   4
  ],
  "pos": "DF",
  "photo": "australia-lucas-herrington.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Australia|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   5
  ],
  "pos": "FW",
  "photo": "australia-ajdin-hrustic.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|11": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   10
  ],
  "pos": "MF",
  "photo": "paraguay-mauricio.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|15": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   9
  ],
  "pos": "DF",
  "photo": "paraguay-gustavo-gomez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|23": {
  "kind": "taker",
  "stats": [
   1,
   1,
   2,
   42
  ],
  "pos": "MF",
  "photo": "paraguay-matias-galarza.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   4
  ],
  "pos": "FW",
  "photo": "paraguay-antonio-sanabria.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|5": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   0
  ],
  "pos": "DF",
  "photo": "paraguay-fabian-balbuena.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|13": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   2
  ],
  "pos": "DF",
  "photo": "paraguay-jose-canale.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Turkey|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   11,
   11
  ],
  "pos": "MF",
  "photo": "turkey-hakan-calhanoglu.jpg",
  "credit": "Steindy (talk) 10:15, 11 April 2016 (UTC) · CC BY-SA 3.0"
 },
 "Turkey|8": {
  "kind": "taker",
  "stats": [
   1,
   0,
   12,
   12
  ],
  "pos": "FW",
  "photo": "turkey-arda-guler.jpg",
  "credit": "LawEnthusiast · CC BY-SA 4.0"
 },
 "Turkey|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   14,
   7
  ],
  "pos": "FW",
  "photo": "turkey-kenan-yldz.jpg",
  "credit": "Original:  mlsz.hu – the official website of the Hungarian Football Federation / Derivative work:  Danyele · Attribution"
 },
 "Turkey|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   10
  ],
  "pos": "FW",
  "photo": "turkey-kerem-akturkoglu.jpg",
  "credit": "User:Zafer · CC BY-SA 4.0"
 },
 "Turkey|6": {
  "kind": "taker",
  "stats": [
   0,
   1,
   3,
   7
  ],
  "pos": "MF",
  "photo": "turkey-orkun-kokcu.jpg",
  "credit": "Original:  Zafer\nDerivative work:  FootyBystander · CC BY 4.0"
 },
 "USA|10": {
  "kind": "taker",
  "stats": [
   0,
   1,
   4,
   8
  ],
  "pos": "FW",
  "photo": "usa-christian-pulisic.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "USA|20": {
  "kind": "taker",
  "stats": [
   3,
   0,
   14,
   29
  ],
  "pos": "FW",
  "photo": "usa-folarin-balogun.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "USA|8": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   22
  ],
  "pos": "MF",
  "photo": "usa-weston-mckennie.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "USA|7": {
  "kind": "taker",
  "stats": [
   1,
   0,
   2,
   8
  ],
  "pos": "MF",
  "photo": "usa-giovanni-reyna.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "USA|4": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   30
  ],
  "pos": "MF",
  "photo": "usa-tyler-adams.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Curaçao|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   18
  ],
  "pos": "MF",
  "photo": "curacao-leandro-bacuna.jpg",
  "credit": "Ben Sutherland · CC BY 2.0"
 },
 "Curaçao|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   16
  ],
  "pos": "MF",
  "photo": "curacao-juninho-bacuna.jpg",
  "credit": "FC Groningen Insider · CC BY-SA 4.0"
 },
 "Curaçao|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   7
  ],
  "pos": "FW",
  "photo": "curacao-jurgen-locadia.jpg",
  "credit": "Mehr News Agency · CC BY 4.0"
 },
 "Curaçao|21": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   5
  ],
  "pos": "MF",
  "photo": "curacao-tahith-chong.jpg",
  "credit": "Kane Brooker · CC BY 2.0"
 },
 "Curaçao|14": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   0
  ],
  "pos": "FW",
  "photo": "curacao-kenji-gorre.jpg",
  "credit": "Richard Mulder · CC BY-SA 3.0"
 },
 "Ecuador|13": {
  "kind": "taker",
  "stats": [
   0,
   0,
   10,
   8
  ],
  "pos": "FW",
  "photo": "ecuador-enner-valencia.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ecuador|11": {
  "kind": "taker",
  "stats": [
   0,
   1,
   6,
   2
  ],
  "pos": "FW",
  "photo": "ecuador-kevin-rodriguez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ecuador|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   2
  ],
  "pos": "MF",
  "photo": "ecuador-kendry-paez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ecuador|23": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   16
  ],
  "pos": "MF",
  "photo": "ecuador-moises-caicedo.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ecuador|3": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   11
  ],
  "pos": "DF",
  "photo": "ecuador-piero-hincapie.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Germany|7": {
  "kind": "taker",
  "stats": [
   3,
   0,
   12,
   19
  ],
  "pos": "FW",
  "photo": "germany-kai-havertz.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Germany|6": {
  "kind": "taker",
  "stats": [
   0,
   2,
   5,
   26
  ],
  "pos": "DF",
  "photo": "germany-joshua-kimmich.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Germany|10": {
  "kind": "taker",
  "stats": [
   1,
   0,
   6,
   13
  ],
  "pos": "MF",
  "photo": "germany-jamal-musiala.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Germany|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   0
  ],
  "pos": "FW",
  "photo": "germany-nick-woltemade.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Germany|20": {
  "kind": "taker",
  "stats": [
   0,
   1,
   2,
   1
  ],
  "pos": "MF",
  "photo": "germany-nadiem-amiri.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Germany|4": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   5
  ],
  "pos": "DF",
  "photo": "germany-jonathan-tah.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ivory Coast|8": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   13
  ],
  "pos": "MF",
  "photo": "ivory-coast-franck-kessie.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ivory Coast|19": {
  "kind": "taker",
  "stats": [
   2,
   1,
   6,
   19
  ],
  "pos": "FW",
  "photo": "ivory-coast-nicolas-pepe.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ivory Coast|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   0
  ],
  "pos": "FW",
  "photo": "ivory-coast-simon-adingra.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ivory Coast|15": {
  "kind": "taker",
  "stats": [
   2,
   0,
   8,
   8
  ],
  "pos": "FW",
  "photo": "ivory-coast-amad-diallo.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ivory Coast|6": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   3
  ],
  "pos": "MF",
  "photo": "ivory-coast-seko-fofana.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Japan|8": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   0
  ],
  "pos": "MF",
  "photo": "japan-takefusa-kubo.jpg",
  "credit": "Ali Mohammed Mahdi · CC BY-SA 4.0"
 },
 "Japan|10": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   9
  ],
  "pos": "MF",
  "photo": "japan-ritsu-doan.jpg",
  "credit": "Amir Ostovari · CC BY 4.0"
 },
 "Japan|15": {
  "kind": "taker",
  "stats": [
   2,
   0,
   1,
   13
  ],
  "pos": "MF",
  "photo": "japan-daichi-kamada.jpg",
  "credit": "Sven Mandel · CC BY-SA 4.0"
 },
 "Japan|18": {
  "kind": "taker",
  "stats": [
   2,
   1,
   9,
   11
  ],
  "pos": "FW",
  "photo": "japan-ayase-ueda.jpg",
  "credit": "Carlo Bruil Fotografie · CC BY 2.0"
 },
 "Japan|14": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   6
  ],
  "pos": "MF",
  "photo": "japan-junya-ito.jpg",
  "credit": "Paté kroute · CC0"
 },
 "Netherlands|20": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   8
  ],
  "pos": "MF",
  "photo": "netherlands-teun-koopmeiners.jpg",
  "credit": "Ardfern · CC BY-SA 4.0"
 },
 "Netherlands|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   2
  ],
  "pos": "MF",
  "photo": "netherlands-justin-kluivert.jpg",
  "credit": "Timmy96 · CC0"
 },
 "Netherlands|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   2
  ],
  "pos": "FW",
  "photo": "netherlands-wout-weghorst.jpg",
  "credit": "BasFCT · CC0"
 },
 "Netherlands|26": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   5
  ],
  "pos": "MF",
  "photo": "netherlands-quinten-timber.jpg",
  "credit": "Carlo Bruil Fotografie · CC BY 2.0"
 },
 "Netherlands|24": {
  "kind": "taker",
  "stats": [
   2,
   2,
   2,
   17
  ],
  "pos": "FW",
  "photo": "netherlands-crysencio-summerville.jpg",
  "credit": "Egghead06 · CC BY-SA 4.0"
 },
 "Sweden|17": {
  "kind": "taker",
  "stats": [
   1,
   2,
   12,
   14
  ],
  "pos": "FW",
  "photo": "sweden-viktor-gyokeres.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Sweden|9": {
  "kind": "taker",
  "stats": [
   1,
   3,
   8,
   5
  ],
  "pos": "FW",
  "photo": "sweden-alexander-isak.jpg",
  "credit": "Mikael Hervestad · CC BY-SA 4.0"
 },
 "Sweden|11": {
  "kind": "taker",
  "stats": [
   2,
   0,
   3,
   10
  ],
  "pos": "FW",
  "photo": "sweden-anthony-elanga.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Sweden|7": {
  "kind": "taker",
  "stats": [
   0,
   1,
   2,
   10
  ],
  "pos": "MF",
  "photo": "sweden-lucas-bergvall.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Sweden|3": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   5
  ],
  "pos": "DF",
  "photo": "sweden-victor-lindelof.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Tunisia|17": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   10
  ],
  "pos": "MF",
  "photo": "tunisia-ellyes-skhiri.jpg",
  "credit": "Sandro Halank, Wikimedia Commons · CC BY-SA 4.0"
 },
 "Tunisia|10": {
  "kind": "taker",
  "stats": [
   0,
   2,
   3,
   19
  ],
  "pos": "MF",
  "photo": "tunisia-hannibal-mejbri.jpg",
  "credit": "Timmy96 · CC0"
 },
 "Tunisia|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   1
  ],
  "pos": "FW",
  "photo": "tunisia-elias-achouri.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Tunisia|2": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   22
  ],
  "pos": "DF",
  "photo": "tunisia-ali-abdi.jpg",
  "credit": "Paté kroute · CC0"
 },
 "Tunisia|13": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   6
  ],
  "pos": "MF",
  "photo": "tunisia-rani-khedira.jpg",
  "credit": "Nonametells · CC BY-SA 4.0"
 },
 "Belgium|8": {
  "kind": "taker",
  "stats": [
   2,
   0,
   11,
   19
  ],
  "pos": "MF",
  "photo": "belgium-youri-tielemans.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Belgium|9": {
  "kind": "taker",
  "stats": [
   3,
   1,
   6,
   5
  ],
  "pos": "FW",
  "photo": "belgium-romelu-lukaku.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Belgium|7": {
  "kind": "taker",
  "stats": [
   1,
   0,
   20,
   14
  ],
  "pos": "MF",
  "photo": "belgium-kevin-de-bruyne.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Belgium|10": {
  "kind": "taker",
  "stats": [
   2,
   2,
   17,
   26
  ],
  "pos": "FW",
  "photo": "belgium-leandro-trossard.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Belgium|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   15
  ],
  "pos": "FW",
  "photo": "belgium-jeremy-doku.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Egypt|21": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   3
  ],
  "pos": "MF",
  "photo": "egypt-mahmoud-saber.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Egypt|5": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   12
  ],
  "pos": "DF",
  "photo": "egypt-ramy-rabia.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Egypt|10": {
  "kind": "taker",
  "stats": [
   1,
   2,
   9,
   18
  ],
  "pos": "FW",
  "photo": "egypt-mohamed-salah.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Egypt|4": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   4
  ],
  "pos": "DF",
  "photo": "egypt-hossam-abdelmaguid.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Egypt|22": {
  "kind": "taker",
  "stats": [
   0,
   0,
   11,
   27
  ],
  "pos": "FW",
  "photo": "egypt-omar-marmoush.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Iran|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   17
  ],
  "pos": "FW",
  "photo": "iran-mehdi-taremi.jpg",
  "credit": "Parto Joghataee · CC BY 4.0"
 },
 "Iran|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   2
  ],
  "pos": "MF",
  "photo": "iran-alireza-jahanbakhsh.jpg",
  "credit": "مهدی مریزاد · CC BY 4.0"
 },
 "Iran|14": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   9
  ],
  "pos": "MF",
  "photo": "iran-saman-ghoddos.jpg",
  "credit": "Meghdad Madadi · CC BY 4.0"
 },
 "Iran|8": {
  "kind": "taker",
  "stats": [
   1,
   0,
   2,
   8
  ],
  "pos": "MF",
  "photo": "iran-mohammad-mohebi.jpg",
  "credit": "موج · CC BY 4.0"
 },
 "Iran|6": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   22
  ],
  "pos": "MF",
  "photo": "iran-saeid-ezatolahi.jpg",
  "credit": "Shahabodin Vajedi · CC BY 4.0"
 },
 "New Zealand|9": {
  "kind": "taker",
  "stats": [
   0,
   2,
   5,
   8
  ],
  "pos": "FW",
  "photo": "new-zealand-chris-wood.jpg",
  "credit": "Sebalston · CC BY-SA 4.0"
 },
 "New Zealand|8": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   10
  ],
  "pos": "MF",
  "photo": "new-zealand-marko-stamenic.jpg",
  "credit": "Вячеслав Евдокимов · CC BY-SA 3.0"
 },
 "New Zealand|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   10
  ],
  "pos": "MF",
  "photo": "new-zealand-sarpreet-singh.jpg",
  "credit": "Mrsmiis · CC BY-SA 4.0"
 },
 "New Zealand|13": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   9
  ],
  "pos": "DF",
  "photo": "new-zealand-liberato-cacace.jpg",
  "credit": "Timmy96 · CC0"
 },
 "New Zealand|6": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   27
  ],
  "pos": "MF",
  "photo": "new-zealand-joe-bell.jpg",
  "credit": "3point.dk · CC BY 3.0"
 },
 "Cape Verde|20": {
  "kind": "taker",
  "stats": [
   0,
   1,
   6,
   24
  ],
  "pos": "FW",
  "photo": "cape-verde-ryan-mendes.jpg",
  "credit": "Petsbikes · CC BY 4.0"
 },
 "Cape Verde|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   14
  ],
  "pos": "MF",
  "photo": "cape-verde-jovane-cabral.jpg",
  "credit": "Sporting Clube de Portugal · CC BY 3.0"
 },
 "Cape Verde|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   3
  ],
  "pos": "MF",
  "photo": "cape-verde-garry-rodrigues.jpg",
  "credit": "Effathéophile105 · CC BY-SA 4.0"
 },
 "Cape Verde|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   12
  ],
  "pos": "MF",
  "photo": "cape-verde-jamiro-monteiro.jpg",
  "credit": "Morgan Tencza · CC BY-SA 4.0"
 },
 "Cape Verde|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   8
  ],
  "pos": "FW",
  "photo": "cape-verde-dailon-livramento.jpg",
  "credit": "Petsbikes · CC BY 4.0"
 },
 "Saudi Arabia|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   15
  ],
  "pos": "FW",
  "photo": "saudi-arabia-salem-al-dawsari.jpg",
  "credit": "Unknown authorUnknown author · CC BY-SA 4.0"
 },
 "Saudi Arabia|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   11
  ],
  "pos": "FW",
  "photo": "saudi-arabia-firas-al-buraikan.jpg",
  "credit": "OmarZi64 · CC BY 4.0"
 },
 "Saudi Arabia|4": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   7
  ],
  "pos": "DF",
  "photo": "saudi-arabia-abdulelah-alamri.jpg",
  "credit": "Unknown authorUnknown author · CC BY-SA 4.0"
 },
 "Saudi Arabia|23": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   10
  ],
  "pos": "MF",
  "photo": "saudi-arabia-mohamed-kanno.jpg",
  "credit": "Petsbikes · CC BY 4.0"
 },
 "Saudi Arabia|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   5
  ],
  "pos": "MF",
  "photo": "saudi-arabia-musab-al-juwayr.jpg"
 },
 "Spain|21": {
  "kind": "taker",
  "stats": [
   5,
   1,
   23,
   58
  ],
  "pos": "FW",
  "photo": "spain-mikel-oyarzabal.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Spain|10": {
  "kind": "taker",
  "stats": [
   0,
   2,
   13,
   37
  ],
  "pos": "FW",
  "photo": "spain-dani-olmo.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Spain|19": {
  "kind": "taker",
  "stats": [
   1,
   0,
   27,
   22
  ],
  "pos": "FW",
  "photo": "spain-lamine-yamal.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Spain|16": {
  "kind": "taker",
  "stats": [
   0,
   0,
   7,
   43
  ],
  "pos": "MF",
  "photo": "spain-rodri.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Spain|7": {
  "kind": "taker",
  "stats": [
   1,
   1,
   14,
   8
  ],
  "pos": "FW",
  "photo": "spain-ferran-torres.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Uruguay|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   6
  ],
  "pos": "FW",
  "photo": "uruguay-darwin-nunez.jpg",
  "credit": "Steffen Prößdorf · CC BY-SA 4.0"
 },
 "Uruguay|8": {
  "kind": "taker",
  "stats": [
   0,
   0,
   10,
   19
  ],
  "pos": "MF",
  "photo": "uruguay-federico-valverde.jpg",
  "credit": "Real Madrid · CC BY 3.0"
 },
 "Uruguay|21": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   12
  ],
  "pos": "FW",
  "photo": "uruguay-federico-vinas.jpg",
  "credit": "Unknown authorUnknown author · CC BY-SA 4.0"
 },
 "Uruguay|6": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   9
  ],
  "pos": "MF",
  "photo": "uruguay-rodrigo-bentancur.jpg",
  "credit": "Original:  Ailura\nDerivative work:  Danyele · CC BY-SA 3.0 at"
 },
 "Uruguay|20": {
  "kind": "taker",
  "stats": [
   2,
   1,
   4,
   10
  ],
  "pos": "MF",
  "photo": "uruguay-maximiliano-araujo.jpg"
 },
 "France|10": {
  "kind": "taker",
  "stats": [
   10,
   4,
   41,
   18
  ],
  "pos": "FW",
  "photo": "france-kylian-mbappe.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "France|7": {
  "kind": "taker",
  "stats": [
   6,
   2,
   20,
   28
  ],
  "pos": "FW",
  "photo": "france-ousmane-dembele.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "France|11": {
  "kind": "taker",
  "stats": [
   0,
   7,
   20,
   50
  ],
  "pos": "FW",
  "photo": "france-michael-olise.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "France|8": {
  "kind": "taker",
  "stats": [
   0,
   1,
   3,
   23
  ],
  "pos": "MF",
  "photo": "france-aurelien-tchouameni.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "France|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   0
  ],
  "pos": "FW",
  "photo": "france-marcus-thuram.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Iraq|18": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   5
  ],
  "pos": "FW",
  "photo": "iraq-aymen-hussein.jpg",
  "credit": "Ali Mohammed Mahdi · CC BY-SA 4.0"
 },
 "Iraq|17": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   27
  ],
  "pos": "FW",
  "photo": "iraq-ali-jasim.jpg",
  "credit": "Ali Mohammed Mahdi · CC BY-SA 4.0"
 },
 "Iraq|8": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   14
  ],
  "pos": "MF",
  "photo": "iraq-ibrahim-bayesh.jpg",
  "credit": "Ali Mohammed Mahdi · CC BY-SA 4.0"
 },
 "Iraq|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   1
  ],
  "pos": "FW",
  "photo": "iraq-mohanad-ali.jpg",
  "credit": "Amir Ostovari · CC BY 4.0"
 },
 "Iraq|14": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   6
  ],
  "pos": "MF",
  "photo": "iraq-zidane-iqbal.jpg",
  "credit": "Ali Mohammed Mahdi · CC BY-SA 4.0"
 },
 "Norway|9": {
  "kind": "taker",
  "stats": [
   7,
   0,
   19,
   11
  ],
  "pos": "FW",
  "photo": "norway-erling-haaland.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Norway|10": {
  "kind": "taker",
  "stats": [
   0,
   4,
   9,
   18
  ],
  "pos": "MF",
  "photo": "norway-martin-degaard.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Norway|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   9
  ],
  "pos": "FW",
  "photo": "norway-alexander-srloth.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Norway|20": {
  "kind": "taker",
  "stats": [
   1,
   0,
   6,
   7
  ],
  "pos": "MF",
  "photo": "norway-antonio-nusa.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Norway|22": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   12
  ],
  "pos": "MF",
  "photo": "norway-oscar-bobb.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Senegal|10": {
  "kind": "taker",
  "stats": [
   0,
   1,
   6,
   14
  ],
  "pos": "FW",
  "photo": "senegal-sadio-mane.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Senegal|11": {
  "kind": "taker",
  "stats": [
   0,
   1,
   7,
   10
  ],
  "pos": "FW",
  "photo": "senegal-nicolas-jackson.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Senegal|18": {
  "kind": "taker",
  "stats": [
   4,
   1,
   17,
   18
  ],
  "pos": "FW",
  "photo": "senegal-ismaila-sarr.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Senegal|5": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   24
  ],
  "pos": "MF",
  "photo": "senegal-idrissa-gueye.jpg",
  "credit": "Екатерина Лаут · CC BY-SA 3.0"
 },
 "Senegal|3": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   3
  ],
  "pos": "DF",
  "photo": "senegal-kalidou-koulibaly.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Algeria|7": {
  "kind": "taker",
  "stats": [
   2,
   1,
   6,
   22
  ],
  "pos": "FW",
  "photo": "algeria-riyad-mahrez.jpg",
  "credit": "Jeanpierrekepseu · CC BY-SA 4.0"
 },
 "Algeria|9": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   7
  ],
  "pos": "FW",
  "photo": "algeria-amine-gouiri.jpg",
  "credit": "Supporterhéninois · CC0"
 },
 "Algeria|18": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   2
  ],
  "pos": "FW",
  "photo": "algeria-mohamed-amoura.jpg",
  "credit": "Algeria Press Service · CC BY 3.0"
 },
 "Algeria|8": {
  "kind": "taker",
  "stats": [
   0,
   2,
   3,
   8
  ],
  "pos": "MF",
  "photo": "algeria-houssem-aouar.jpg",
  "credit": "Algérie Presse Service · CC BY 3.0"
 },
 "Algeria|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   16
  ],
  "pos": "MF",
  "photo": "algeria-nabil-bentaleb.jpg",
  "credit": "Supporterhéninois · CC0"
 },
 "Argentina|22": {
  "kind": "taker",
  "stats": [
   3,
   1,
   10,
   26
  ],
  "pos": "FW",
  "photo": "argentina-lautaro-martinez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Argentina|10": {
  "kind": "taker",
  "stats": [
   8,
   4,
   35,
   26
  ],
  "pos": "FW",
  "photo": "argentina-lionel-messi.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Argentina|9": {
  "kind": "taker",
  "stats": [
   1,
   0,
   11,
   38
  ],
  "pos": "FW",
  "photo": "argentina-julian-alvarez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Argentina|24": {
  "kind": "taker",
  "stats": [
   2,
   0,
   12,
   46
  ],
  "pos": "MF",
  "photo": "argentina-enzo-fernandez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Argentina|20": {
  "kind": "taker",
  "stats": [
   1,
   1,
   13,
   36
  ],
  "pos": "MF",
  "photo": "argentina-alexis-mac-allister.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Austria|7": {
  "kind": "taker",
  "stats": [
   2,
   0,
   3,
   5
  ],
  "pos": "FW",
  "photo": "austria-marko-arnautovic.jpg",
  "credit": "Granada · CC BY-SA 4.0"
 },
 "Austria|9": {
  "kind": "taker",
  "stats": [
   1,
   0,
   5,
   26
  ],
  "pos": "MF",
  "photo": "austria-marcel-sabitzer.jpg",
  "credit": "Steffen Prößdorf · CC BY-SA 4.0"
 },
 "Austria|11": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   9
  ],
  "pos": "FW",
  "photo": "austria-michael-gregoritsch.jpg",
  "credit": "Please report references to kulacgmx.at. · CC BY-SA 3.0"
 },
 "Austria|8": {
  "kind": "taker",
  "stats": [
   0,
   1,
   2,
   5
  ],
  "pos": "DF",
  "photo": "austria-david-alaba.jpg",
  "credit": "Granada · CC BY-SA 4.0"
 },
 "Austria|20": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   19
  ],
  "pos": "MF",
  "photo": "austria-konrad-laimer.jpg",
  "credit": "Steffen Prößdorf · CC BY-SA 4.0"
 },
 "Jordan|10": {
  "kind": "taker",
  "stats": [
   1,
   1,
   8,
   10
  ],
  "pos": "FW",
  "photo": "jordan-musa-al-taamari.jpg",
  "credit": "Paté kroute · CC0"
 },
 "Jordan|9": {
  "kind": "taker",
  "stats": [
   1,
   0,
   6,
   11
  ],
  "pos": "FW",
  "photo": "jordan-ali-olwan.jpg",
  "credit": "M.Sadegh Nikgostar · CC BY 4.0"
 },
 "Jordan|21": {
  "kind": "taker",
  "stats": [
   1,
   0,
   2,
   15
  ],
  "pos": "MF",
  "photo": "jordan-nizar-al-rashdan.jpg",
  "credit": "M.Sadegh Nikgostar · CC BY 4.0"
 },
 "Jordan|13": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   6
  ],
  "pos": "FW",
  "photo": "jordan-mahmoud-al-mardi.jpg",
  "credit": "M.Sadegh Nikgostar · CC BY 4.0"
 },
 "Jordan|8": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   20
  ],
  "pos": "MF",
  "photo": "jordan-noor-al-rawabdeh.jpg",
  "credit": "M.Sadegh Nikgostar · CC BY 4.0"
 },
 "Colombia|20": {
  "kind": "taker",
  "stats": [
   0,
   1,
   4,
   3
  ],
  "pos": "MF",
  "photo": "colombia-juan-fernando-quintero.jpg",
  "credit": "RamosFils2Chèvre · CC BY-SA 4.0"
 },
 "Colombia|23": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   20
  ],
  "pos": "DF",
  "photo": "colombia-davinson-sanchez.jpg",
  "credit": "Fotografía oficial de la Presidencia de Colombia · Public domain"
 },
 "Colombia|21": {
  "kind": "taker",
  "stats": [
   1,
   0,
   6,
   5
  ],
  "pos": "FW",
  "photo": "colombia-jaminton-campaz.jpg"
 },
 "Colombia|19": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   0
  ],
  "pos": "FW",
  "photo": "colombia-cucho-hernandez.jpg",
  "credit": "Fotografía oficial de la Presidencia de Colombia · Public domain"
 },
 "Colombia|7": {
  "kind": "taker",
  "stats": [
   1,
   1,
   19,
   29
  ],
  "pos": "FW",
  "photo": "colombia-luis-diaz.jpg",
  "credit": "Werner100359 · CC BY-SA 4.0"
 },
 "DR Congo|20": {
  "kind": "taker",
  "stats": [
   3,
   0,
   11,
   11
  ],
  "pos": "FW",
  "photo": "dr-congo-yoane-wissa.jpg",
  "credit": "feguifoot · CC0"
 },
 "DR Congo|17": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   7
  ],
  "pos": "FW",
  "photo": "dr-congo-cedric-bakambu.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "DR Congo|22": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   9
  ],
  "pos": "DF",
  "photo": "dr-congo-chancel-mbemba.jpg",
  "credit": "feguifoot · Public domain"
 },
 "DR Congo|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   1
  ],
  "pos": "MF",
  "photo": "dr-congo-theo-bongonda.jpg",
  "credit": "feguifoot · Public domain"
 },
 "DR Congo|9": {
  "kind": "taker",
  "stats": [
   1,
   0,
   6,
   10
  ],
  "pos": "FW",
  "photo": "dr-congo-brian-cipenga.jpg"
 },
 "Portugal|7": {
  "kind": "taker",
  "stats": [
   3,
   0,
   18,
   7
  ],
  "pos": "FW",
  "photo": "portugal-cristiano-ronaldo.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Portugal|8": {
  "kind": "taker",
  "stats": [
   0,
   1,
   9,
   27
  ],
  "pos": "MF",
  "photo": "portugal-bruno-fernandes.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Portugal|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   5
  ],
  "pos": "MF",
  "photo": "portugal-bernardo-silva.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Portugal|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   23
  ],
  "pos": "FW",
  "photo": "portugal-joao-felix.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Portugal|23": {
  "kind": "taker",
  "stats": [
   0,
   0,
   4,
   19
  ],
  "pos": "MF",
  "photo": "portugal-vitinha.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Uzbekistan|14": {
  "kind": "taker",
  "stats": [
   1,
   0,
   4,
   28
  ],
  "pos": "FW",
  "photo": "uzbekistan-eldor-shomurodov.jpg",
  "credit": "Zafer · CC BY 4.0"
 },
 "Uzbekistan|22": {
  "kind": "taker",
  "stats": [
   1,
   0,
   3,
   17
  ],
  "pos": "MF",
  "photo": "uzbekistan-abbosbek-fayzullaev.jpg",
  "credit": "Zafer · CC BY 4.0"
 },
 "Uzbekistan|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   4
  ],
  "pos": "MF",
  "photo": "uzbekistan-oston-urunov.jpg",
  "credit": "Ali Haddadi Asl - MehrNews · CC BY 4.0"
 },
 "Uzbekistan|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   5
  ],
  "pos": "MF",
  "photo": "uzbekistan-otabek-shukurov.jpg",
  "credit": "NOC of Uzbekistan · CC BY 4.0"
 },
 "Uzbekistan|2": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   11
  ],
  "pos": "DF",
  "photo": "uzbekistan-abdukodir-khusanov.jpg",
  "credit": "olympic.uz · CC BY-SA 4.0"
 },
 "Croatia|10": {
  "kind": "taker",
  "stats": [
   0,
   1,
   1,
   16
  ],
  "pos": "MF",
  "photo": "croatia-luka-modric.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Croatia|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   0
  ],
  "pos": "FW",
  "photo": "croatia-andrej-kramaric.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Croatia|8": {
  "kind": "taker",
  "stats": [
   0,
   1,
   5,
   7
  ],
  "pos": "MF",
  "photo": "croatia-mateo-kovacic.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Croatia|14": {
  "kind": "taker",
  "stats": [
   1,
   1,
   2,
   12
  ],
  "pos": "FW",
  "photo": "croatia-ivan-perisic.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Croatia|4": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   2
  ],
  "pos": "DF",
  "photo": "croatia-josko-gvardiol.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "England|9": {
  "kind": "taker",
  "stats": [
   6,
   1,
   23,
   25
  ],
  "pos": "FW",
  "photo": "england-harry-kane.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "England|7": {
  "kind": "taker",
  "stats": [
   3,
   3,
   13,
   7
  ],
  "pos": "FW",
  "photo": "england-bukayo-saka.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "England|10": {
  "kind": "taker",
  "stats": [
   7,
   1,
   19,
   22
  ],
  "pos": "MF",
  "photo": "england-jude-bellingham.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "England|4": {
  "kind": "taker",
  "stats": [
   1,
   2,
   6,
   11
  ],
  "pos": "MF",
  "photo": "england-declan-rice.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "England|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   1
  ],
  "pos": "FW",
  "photo": "england-ollie-watkins.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ghana|9": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   23
  ],
  "pos": "FW",
  "photo": "ghana-jordan-ayew.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ghana|11": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   26
  ],
  "pos": "MF",
  "photo": "ghana-antoine-semenyo.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ghana|19": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   3
  ],
  "pos": "FW",
  "photo": "ghana-inaki-williams.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ghana|5": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   5
  ],
  "pos": "MF",
  "photo": "ghana-thomas-partey.jpg",
  "credit": "YantsImages · CC BY-SA 4.0"
 },
 "Ghana|7": {
  "kind": "taker",
  "stats": [
   0,
   0,
   3,
   11
  ],
  "pos": "FW",
  "photo": "ghana-abdul-fatawu.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Panama|20": {
  "kind": "taker",
  "stats": [
   0,
   0,
   0,
   0
  ],
  "pos": "MF",
  "photo": "panama-anibal-godoy.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Panama|17": {
  "kind": "taker",
  "stats": [
   0,
   0,
   1,
   18
  ],
  "pos": "FW",
  "photo": "panama-jose-fajardo.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Panama|10": {
  "kind": "taker",
  "stats": [
   0,
   0,
   6,
   3
  ],
  "pos": "MF",
  "photo": "panama-ismael-diaz.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Panama|14": {
  "kind": "taker",
  "stats": [
   0,
   0,
   5,
   28
  ],
  "pos": "DF",
  "photo": "panama-carlos-harvey.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Panama|18": {
  "kind": "taker",
  "stats": [
   0,
   0,
   2,
   7
  ],
  "pos": "FW",
  "photo": "panama-cecilio-waterman.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Mexico|1": {
  "kind": "keeper",
  "stats": [
   8,
   11,
   3,
   4
  ],
  "pos": "GK",
  "photo": "mexico-raul-rangel.jpg",
  "credit": "Selección Nacional de México · CC BY 3.0"
 },
 "South Africa|1": {
  "kind": "keeper",
  "stats": [
   11,
   15,
   4,
   1
  ],
  "pos": "GK",
  "photo": "south-africa-ronwen-williams.jpg",
  "credit": "Gadlee · CC BY-SA 4.0"
 },
 "South Korea|1": {
  "kind": "keeper",
  "stats": [
   9,
   12,
   3,
   0
  ],
  "pos": "GK",
  "photo": "south-korea-kim-seung-gyu.jpg",
  "credit": "Дмитрий Голубович · CC BY-SA 3.0"
 },
 "Czech Republic|1": {
  "kind": "keeper",
  "stats": [
   9,
   15,
   6,
   0
  ],
  "pos": "GK",
  "photo": "czech-republic-matej-kovar.jpg",
  "credit": "Hans Reefman · CC BY-SA 4.0"
 },
 "Switzerland|1": {
  "kind": "keeper",
  "stats": [
   20,
   25,
   6,
   2
  ],
  "pos": "GK",
  "photo": "switzerland-gregor-kobel.jpg",
  "credit": "Sandro Halank, Wikimedia Commons · CC BY-SA 4.0"
 },
 "Canada|16": {
  "kind": "keeper",
  "stats": [
   6,
   12,
   6,
   2
  ],
  "pos": "GK",
  "photo": "canada-maxime-crepeau.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Bosnia & Herzegovina|1": {
  "kind": "keeper",
  "stats": [
   6,
   14,
   8,
   0
  ],
  "pos": "GK",
  "photo": "bosnia-herzegovina-nikola-vasilj.jpg",
  "credit": "Lanthan2003 · CC BY-SA 4.0"
 },
 "Qatar|1": {
  "kind": "keeper",
  "stats": [
   12,
   20,
   10,
   0
  ],
  "pos": "GK",
  "photo": "qatar-mahmoud-abunada.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Brazil|1": {
  "kind": "keeper",
  "stats": [
   14,
   18,
   4,
   2
  ],
  "pos": "GK",
  "photo": "brazil-alisson-becker.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Morocco|1": {
  "kind": "keeper",
  "stats": [
   15,
   20,
   6,
   2
  ],
  "pos": "GK",
  "photo": "morocco-yassine-bounou.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Scotland|1": {
  "kind": "keeper",
  "stats": [
   8,
   12,
   4,
   1
  ],
  "pos": "GK",
  "photo": "scotland-angus-gunn.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Haiti|1": {
  "kind": "keeper",
  "stats": [
   11,
   19,
   8,
   0
  ],
  "pos": "GK",
  "photo": "haiti-johny-placide.jpg",
  "credit": "Biser Todorov · CC BY-SA 4.0"
 },
 "USA|24": {
  "kind": "keeper",
  "stats": [
   8,
   13,
   5,
   2
  ],
  "pos": "GK",
  "photo": "usa-matt-freese.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Australia|18": {
  "kind": "keeper",
  "stats": [
   14,
   16,
   3,
   2
  ],
  "pos": "GK",
  "photo": "australia-patrick-beach.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Paraguay|12": {
  "kind": "keeper",
  "stats": [
   23,
   28,
   6,
   2
  ],
  "pos": "GK",
  "photo": "paraguay-orlando-gill.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Turkey|23": {
  "kind": "keeper",
  "stats": [
   8,
   13,
   5,
   0
  ],
  "pos": "GK",
  "photo": "turkey-ugurcan-cakir.jpg",
  "credit": "beIN SPORTS Türkiye · CC BY 3.0"
 },
 "Germany|1": {
  "kind": "keeper",
  "stats": [
   5,
   10,
   5,
   0
  ],
  "pos": "GK",
  "photo": "germany-manuel-neuer.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Curaçao|1": {
  "kind": "keeper",
  "stats": [
   20,
   29,
   9,
   1
  ],
  "pos": "GK",
  "photo": "curacao-eloy-room.jpg",
  "credit": "Jay eyem · CC BY-SA 4.0"
 },
 "Ivory Coast|1": {
  "kind": "keeper",
  "stats": [
   9,
   13,
   4,
   2
  ],
  "pos": "GK",
  "photo": "ivory-coast-yahia-fofana.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ecuador|1": {
  "kind": "keeper",
  "stats": [
   9,
   13,
   4,
   1
  ],
  "pos": "GK",
  "photo": "ecuador-hernan-galindez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Netherlands|1": {
  "kind": "keeper",
  "stats": [
   16,
   21,
   5,
   0
  ],
  "pos": "GK",
  "photo": "netherlands-bart-verbruggen.jpg",
  "credit": "AFC Bournemouth · CC BY 4.0"
 },
 "Japan|1": {
  "kind": "keeper",
  "stats": [
   12,
   17,
   5,
   1
  ],
  "pos": "GK",
  "photo": "japan-zion-suzuki.jpg",
  "credit": "RuinDig/Yuki Uchida · CC BY 4.0"
 },
 "Sweden|1": {
  "kind": "keeper",
  "stats": [
   11,
   15,
   4,
   0
  ],
  "pos": "GK",
  "photo": "sweden-jacob-widell-zetterstrom.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Tunisia|16": {
  "kind": "keeper",
  "stats": [
   5,
   11,
   7,
   0
  ],
  "pos": "GK",
  "photo": "tunisia-aymen-dahmen.jpg"
 },
 "Belgium|1": {
  "kind": "keeper",
  "stats": [
   14,
   20,
   6,
   1
  ],
  "pos": "GK",
  "photo": "belgium-thibaut-courtois.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Egypt|23": {
  "kind": "keeper",
  "stats": [
   14,
   19,
   7,
   0
  ],
  "pos": "GK",
  "photo": "egypt-mostafa-shoubir.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Iran|1": {
  "kind": "keeper",
  "stats": [
   15,
   18,
   3,
   1
  ],
  "pos": "GK",
  "photo": "iran-alireza-beiranvand.jpg",
  "credit": "M. Sadegh Nikgostar · CC BY 4.0"
 },
 "New Zealand|1": {
  "kind": "keeper",
  "stats": [
   11,
   21,
   10,
   0
  ],
  "pos": "GK",
  "photo": "new-zealand-max-crocombe.jpg",
  "credit": "Carltondoc · CC0"
 },
 "Spain|23": {
  "kind": "keeper",
  "stats": [
   10,
   11,
   1,
   7
  ],
  "pos": "GK",
  "photo": "spain-unai-simon.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Cape Verde|1": {
  "kind": "keeper",
  "stats": [
   18,
   22,
   5,
   2
  ],
  "pos": "GK",
  "photo": "cape-verde-vozinha.jpg",
  "credit": "Petsbikes · CC BY 4.0"
 },
 "Saudi Arabia|21": {
  "kind": "keeper",
  "stats": [
   16,
   20,
   5,
   1
  ],
  "pos": "GK",
  "photo": "saudi-arabia-mohammed-al-owais.jpg",
  "credit": "Кирилл Венедиктов · CC BY-SA 3.0"
 },
 "Uruguay|23": {
  "kind": "keeper",
  "stats": [
   4,
   8,
   4,
   0
  ],
  "pos": "GK",
  "photo": "uruguay-fernando-muslera.jpg",
  "credit": "Анна Нэсси · CC BY-SA 3.0"
 },
 "France|16": {
  "kind": "keeper",
  "stats": [
   13,
   23,
   10,
   4
  ],
  "pos": "GK",
  "photo": "france-mike-maignan.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Senegal|23": {
  "kind": "keeper",
  "stats": [
   4,
   7,
   3,
   1
  ],
  "pos": "GK",
  "photo": "senegal-mory-diaw.jpg",
  "credit": "Liondartois · CC BY-SA 4.0"
 },
 "Iraq|22": {
  "kind": "keeper",
  "stats": [
   3,
   7,
   4,
   0
  ],
  "pos": "GK",
  "photo": "iraq-ahmed-basil.jpg"
 },
 "Norway|1": {
  "kind": "keeper",
  "stats": [
   16,
   23,
   7,
   0
  ],
  "pos": "GK",
  "photo": "norway-rjan-nyland.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Argentina|23": {
  "kind": "keeper",
  "stats": [
   20,
   28,
   8,
   2
  ],
  "pos": "GK",
  "photo": "argentina-emiliano-martinez.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Algeria|23": {
  "kind": "keeper",
  "stats": [
   8,
   14,
   6,
   0
  ],
  "pos": "GK",
  "photo": "algeria-luca-zidane.jpg",
  "credit": "Антон Зайцев · CC BY-SA 3.0"
 },
 "Austria|1": {
  "kind": "keeper",
  "stats": [
   13,
   22,
   9,
   0
  ],
  "pos": "GK",
  "photo": "austria-alexander-schlager.jpg",
  "credit": "Werner100359 · CC BY-SA 4.0"
 },
 "Jordan|1": {
  "kind": "keeper",
  "stats": [
   8,
   15,
   8,
   0
  ],
  "pos": "GK",
  "photo": "jordan-yazeed-abulaila.jpg",
  "credit": "M.Sadegh Nikgostar · CC BY 4.0"
 },
 "Portugal|1": {
  "kind": "keeper",
  "stats": [
   19,
   22,
   3,
   2
  ],
  "pos": "GK",
  "photo": "portugal-diogo-costa.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "DR Congo|1": {
  "kind": "keeper",
  "stats": [
   14,
   19,
   5,
   0
  ],
  "pos": "GK",
  "photo": "dr-congo-lionel-mpasi.jpg",
  "credit": "feguifoot · Public domain"
 },
 "Uzbekistan|12": {
  "kind": "keeper",
  "stats": [
   5,
   12,
   8,
   0
  ],
  "pos": "GK",
  "photo": "uzbekistan-abduvohid-nematov.jpg",
  "credit": "NOC of Uzbekistan · CC BY 4.0"
 },
 "Colombia|12": {
  "kind": "keeper",
  "stats": [
   6,
   7,
   1,
   4
  ],
  "pos": "GK",
  "photo": "colombia-camilo-vargas.jpg",
  "credit": "CarrenioD · CC BY-SA 3.0"
 },
 "England|1": {
  "kind": "keeper",
  "stats": [
   15,
   23,
   8,
   2
  ],
  "pos": "GK",
  "photo": "england-jordan-pickford.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Croatia|1": {
  "kind": "keeper",
  "stats": [
   10,
   17,
   7,
   1
  ],
  "pos": "GK",
  "photo": "croatia-dominik-livakovic.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Ghana|1": {
  "kind": "keeper",
  "stats": [
   8,
   9,
   1,
   1
  ],
  "pos": "GK",
  "photo": "ghana-lawrence-ati-zigi.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 },
 "Panama|22": {
  "kind": "keeper",
  "stats": [
   7,
   11,
   4,
   0
  ],
  "pos": "GK",
  "photo": "panama-orlando-mosquera.jpg",
  "credit": "Bryan Berlin · CC BY-SA 4.0"
 }
};
