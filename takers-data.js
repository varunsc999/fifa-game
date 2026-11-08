// Penalty takers for every team, in kick order: [name, shirt number, skill, look].
//
// Names and shirt numbers come from the official 2026 World Cup squads (Wikipedia,
// "2026 FIFA World Cup squads"); every number was matched to the squad list by script.
// - source 'shootout': the real kick order from that team's 2026 shootout
//   (Wikipedia, "2026 FIFA World Cup knockout stage"). Australia and Egypt only
//   needed 4 kicks, so their 5th is a likely taker.
// - source 'likely': no shootout, so this is a best guess. Anyone who scored a
//   penalty at the tournament goes first, then the likeliest takers in the squad.
//
// Takers who never got on the pitch at the tournament were swapped for the
// teammate with the most shots (FIFA's official stats).
//
// Skill is 1 to 5: the team's strength from its FIFA ranking, plus 1 for players
// known as strong penalty takers.
// Look is "skin, hair style, hair colour, foot" (see kicker.js). Empty means a
// default look, for players whose appearance wasn't set by hand.
export const TAKERS = {
  "Czech Republic": {
    source: 'likely',
    takers: [
      ["Patrik Schick", 10, 3, "1sbL"],
      ["Tomáš Souček", 22, 2, "1sbR"],
      ["Adam Hložek", 9, 2, ""],
      ["Vladimír Darida", 8, 2, ""],
      ["Lukáš Provod", 17, 2, ""],
    ],
  },
  "Mexico": {
    source: 'likely',
    takers: [
      ["Raúl Jiménez", 9, 5, "2skR"],
      ["Santiago Giménez", 11, 4, "2skR"],
      ["Alexis Vega", 10, 4, "2skR"],
      ["Edson Álvarez", 4, 4, "3skR"],
      ["Orbelín Pineda", 17, 4, "2skR"],
    ],
  },
  "South Africa": {
    source: 'likely',
    takers: [
      ["Teboho Mokoena", 4, 2, "5skR"],
      ["Lyle Foster", 9, 2, ""],
      ["Oswin Appollis", 7, 2, ""],
      ["Relebohile Mofokeng", 10, 2, ""],
      ["Themba Zwane", 11, 2, ""],
    ],
  },
  "South Korea": {
    source: 'likely',
    takers: [
      ["Son Heung-min", 7, 4, "2skR"],
      ["Lee Kang-in", 19, 3, "2skL"],
      ["Hwang Hee-chan", 11, 3, "2skR"],
      ["Cho Gue-sung", 9, 3, "2skR"],
      ["Hwang In-beom", 6, 3, "2skR"],
    ],
  },
  "Bosnia & Herzegovina": {
    source: 'likely',
    takers: [
      ["Edin Džeko", 11, 2, "1sdR"],
      ["Ermedin Demirović", 10, 1, ""],
      ["Amar Dedić", 7, 1, ""],
      ["Sead Kolašinac", 5, 1, ""],
      ["Benjamin Tahirović", 6, 1, ""],
    ],
  },
  "Canada": {
    source: 'likely',
    takers: [
      ["Jonathan David", 10, 4, "4skR"],
      ["Cyle Larin", 9, 3, "4skR"],
      ["Stephen Eustáquio", 7, 3, "2skR"],
      ["Alphonso Davies", 19, 3, "5skL"],
      ["Ismaël Koné", 8, 3, "4skR"],
    ],
  },
  "Qatar": {
    source: 'likely',
    takers: [
      ["Akram Afif", 11, 3, "3skR"],
      ["Almoez Ali", 19, 2, "3skR"],
      ["Hassan Al-Haydos", 10, 2, ""],
      ["Pedro Miguel", 2, 2, ""],
      ["Boualem Khoukhi", 16, 2, ""],
    ],
  },
  "Switzerland": {
    source: 'shootout',
    takers: [
      ["Granit Xhaka", 10, 5, "1skL"],
      ["Zeki Amdouni", 23, 4, "3skR"],
      ["Manuel Akanji", 5, 4, "3zkR"],
      ["Cedric Itten", 26, 4, "1sbR"],
      ["Rubén Vargas", 17, 4, "1sbR"],
    ],
  },
  "Brazil": {
    source: 'likely',
    takers: [
      ["Neymar", 10, 5, "2slR"],
      ["Vinícius Júnior", 7, 5, "4skR"],
      ["Raphinha", 11, 5, "2sdL"],
      ["Matheus Cunha", 9, 5, "2skR"],
      ["Casemiro", 5, 5, "3xkR"],
    ],
  },
  "Haiti": {
    source: 'likely',
    takers: [
      ["Duckens Nazon", 9, 1, ""],
      ["Frantzdy Pierrot", 20, 1, ""],
      ["Wilson Isidor", 18, 1, ""],
      ["Jean-Ricner Bellegarde", 10, 1, ""],
      ["Derrick Etienne Jr.", 7, 1, ""],
    ],
  },
  "Morocco": {
    source: 'shootout',
    takers: [
      ["Neil El Aynaoui", 24, 5, "2skR"],
      ["Soufiane Rahimi", 9, 5, "3skR"],
      ["Chemsdine Talbi", 7, 5, "2skR"],
      ["Achraf Hakimi", 2, 5, "3skR"],
      ["Ismael Saibari", 11, 5, "3skR"],
    ],
  },
  "Scotland": {
    source: 'likely',
    takers: [
      ["Lawrence Shankland", 20, 2, "1sbR"],
      ["Scott McTominay", 4, 2, "1sbR"],
      ["John McGinn", 7, 2, "1sbL"],
      ["Ché Adams", 10, 2, "4zkR"],
      ["Ryan Christie", 11, 2, "1sbR"],
    ],
  },
  "Australia": {
    source: 'shootout',
    takers: [
      ["Harry Souttar", 19, 3, "1sbR"],
      ["Jackson Irvine", 22, 3, "1llR"],
      ["Awer Mabil", 11, 3, "5skR"],
      ["Lucas Herrington", 25, 3, "1sbR"],
      ["Ajdin Hrustic", 10, 3, "1sdL"],
    ],
  },
  "Paraguay": {
    source: 'shootout',
    takers: [
      ["Maurício", 11, 2, "3skR"],
      ["Gustavo Gómez", 15, 2, "2skR"],
      ["Matías Galarza", 23, 2, "2skR"],
      ["Antonio Sanabria", 9, 2, "2skR"],
      ["Fabián Balbuena", 5, 2, "2skR"],
      ["José Canale", 13, 2, "2skR"],
    ],
  },
  "Turkey": {
    source: 'likely',
    takers: [
      ["Hakan Çalhanoğlu", 10, 4, "1skR"],
      ["Arda Güler", 8, 3, "1skL"],
      ["Kenan Yıldız", 11, 3, "2skR"],
      ["Kerem Aktürkoğlu", 7, 3, "2skR"],
      ["Orkun Kökçü", 6, 3, "1skR"],
    ],
  },
  "USA": {
    source: 'likely',
    takers: [
      ["Christian Pulisic", 10, 5, "1sbR"],
      ["Folarin Balogun", 20, 4, "4skR"],
      ["Weston McKennie", 8, 4, "4zkR"],
      ["Giovanni Reyna", 7, 4, "1sbR"],
      ["Tyler Adams", 4, 4, "4skR"],
    ],
  },
  "Curaçao": {
    source: 'likely',
    takers: [
      ["Leandro Bacuna", 10, 1, ""],
      ["Juninho Bacuna", 7, 1, ""],
      ["Jürgen Locadia", 9, 1, ""],
      ["Tahith Chong", 21, 1, ""],
      ["Kenji Gorré", 14, 1, ""],
    ],
  },
  "Ecuador": {
    source: 'likely',
    takers: [
      ["Enner Valencia", 13, 3, ""],
      ["Kevin Rodríguez", 11, 3, ""],
      ["Kendry Páez", 10, 3, ""],
      ["Moisés Caicedo", 23, 3, ""],
      ["Piero Hincapié", 3, 3, ""],
    ],
  },
  "Germany": {
    source: 'shootout',
    takers: [
      ["Kai Havertz", 7, 5, "1sbL"],
      ["Joshua Kimmich", 6, 5, "1sbR"],
      ["Jamal Musiala", 10, 5, "3skR"],
      ["Nick Woltemade", 11, 5, "1sbR"],
      ["Nadiem Amiri", 20, 5, "2skR"],
      ["Jonathan Tah", 4, 5, "4zkR"],
    ],
  },
  "Ivory Coast": {
    source: 'likely',
    takers: [
      ["Franck Kessié", 8, 3, "5zkR"],
      ["Nicolas Pépé", 19, 3, "4skL"],
      ["Simon Adingra", 10, 3, "5skR"],
      ["Amad Diallo", 15, 3, "4skL"],
      ["Seko Fofana", 6, 3, "5skR"],
    ],
  },
  "Japan": {
    source: 'likely',
    takers: [
      ["Takefusa Kubo", 8, 4, "2skL"],
      ["Ritsu Dōan", 10, 4, "2skL"],
      ["Daichi Kamada", 15, 4, "2skR"],
      ["Ayase Ueda", 18, 4, "2skR"],
      ["Junya Itō", 14, 4, "2skR"],
    ],
  },
  "Netherlands": {
    source: 'shootout',
    takers: [
      ["Teun Koopmeiners", 20, 5, "1sbL"],
      ["Justin Kluivert", 7, 5, "4skR"],
      ["Wout Weghorst", 9, 5, "1slR"],
      ["Quinten Timber", 26, 5, "4skR"],
      ["Crysencio Summerville", 24, 5, "4skL"],
    ],
  },
  "Sweden": {
    source: 'likely',
    takers: [
      ["Viktor Gyökeres", 17, 3, "1sbR"],
      ["Alexander Isak", 9, 3, "4skR"],
      ["Anthony Elanga", 11, 2, "4skR"],
      ["Lucas Bergvall", 7, 2, "1sbR"],
      ["Victor Lindelöf", 3, 2, "1sbR"],
    ],
  },
  "Tunisia": {
    source: 'likely',
    takers: [
      ["Ellyes Skhiri", 17, 2, ""],
      ["Hannibal Mejbri", 10, 2, ""],
      ["Elias Achouri", 7, 2, ""],
      ["Ali Abdi", 2, 2, ""],
      ["Rani Khedira", 13, 2, ""],
    ],
  },
  "Belgium": {
    source: 'likely',
    takers: [
      ["Youri Tielemans", 8, 5, "1sbR"],
      ["Romelu Lukaku", 9, 5, "5zkL"],
      ["Kevin De Bruyne", 7, 5, "1slR"],
      ["Leandro Trossard", 10, 5, "1sbR"],
      ["Jérémy Doku", 11, 5, "4skR"],
    ],
  },
  "Egypt": {
    source: 'shootout',
    takers: [
      ["Mahmoud Saber", 21, 3, "3skR"],
      ["Ramy Rabia", 5, 3, "3skR"],
      ["Mohamed Salah", 10, 4, "3lkL"],
      ["Hossam Abdelmaguid", 4, 3, "3skR"],
      ["Omar Marmoush", 22, 3, "3skR"],
    ],
  },
  "Iran": {
    source: 'likely',
    takers: [
      ["Mehdi Taremi", 9, 5, "2skR"],
      ["Alireza Jahanbakhsh", 7, 4, "2skR"],
      ["Saman Ghoddos", 14, 4, "2skR"],
      ["Mohammad Mohebi", 8, 4, ""],
      ["Saeid Ezatolahi", 6, 4, ""],
    ],
  },
  "New Zealand": {
    source: 'likely',
    takers: [
      ["Chris Wood", 9, 1, "1sbR"],
      ["Marko Stamenić", 8, 1, ""],
      ["Sarpreet Singh", 10, 1, ""],
      ["Liberato Cacace", 13, 1, ""],
      ["Joe Bell", 6, 1, ""],
    ],
  },
  "Cape Verde": {
    source: 'likely',
    takers: [
      ["Ryan Mendes", 20, 1, ""],
      ["Jovane Cabral", 7, 1, ""],
      ["Garry Rodrigues", 11, 1, ""],
      ["Jamiro Monteiro", 10, 1, ""],
      ["Dailon Livramento", 19, 1, ""],
    ],
  },
  "Saudi Arabia": {
    source: 'likely',
    takers: [
      ["Salem Al-Dawsari", 10, 2, "3skR"],
      ["Firas Al-Buraikan", 9, 1, ""],
      ["Abdulelah Al-Amri", 4, 1, ""],
      ["Mohamed Kanno", 23, 1, ""],
      ["Musab Al-Juwayr", 7, 1, ""],
    ],
  },
  "Spain": {
    source: 'likely',
    takers: [
      ["Mikel Oyarzabal", 21, 5, "1sdL"],
      ["Dani Olmo", 10, 5, "1sdR"],
      ["Lamine Yamal", 19, 5, "3skL"],
      ["Rodri", 16, 5, "1sdR"],
      ["Ferran Torres", 7, 5, "1sdR"],
    ],
  },
  "Uruguay": {
    source: 'likely',
    takers: [
      ["Darwin Núñez", 9, 4, "2skR"],
      ["Federico Valverde", 8, 5, "1sdR"],
      ["Federico Viñas", 21, 4, ""],
      ["Rodrigo Bentancur", 6, 4, "2skR"],
      ["Maximiliano Araújo", 20, 4, ""],
    ],
  },
  "France": {
    source: 'likely',
    takers: [
      ["Kylian Mbappé", 10, 5, "4zkR"],
      ["Ousmane Dembélé", 7, 5, "4skR"],
      ["Michael Olise", 11, 5, "4skL"],
      ["Aurélien Tchouaméni", 8, 5, "4zkR"],
      ["Marcus Thuram", 9, 5, "4zkR"],
    ],
  },
  "Iraq": {
    source: 'likely',
    takers: [
      ["Aymen Hussein", 18, 2, ""],
      ["Ali Jasim", 17, 2, ""],
      ["Ibrahim Bayesh", 8, 2, ""],
      ["Mohanad Ali", 10, 2, ""],
      ["Zidane Iqbal", 14, 2, ""],
    ],
  },
  "Norway": {
    source: 'likely',
    takers: [
      ["Erling Haaland", 9, 4, "1llL"],
      ["Martin Ødegaard", 10, 3, "1sbL"],
      ["Alexander Sørloth", 7, 3, "1sbR"],
      ["Antonio Nusa", 20, 3, "4skR"],
      ["Oscar Bobb", 22, 3, "4skL"],
    ],
  },
  "Senegal": {
    source: 'likely',
    takers: [
      ["Sadio Mané", 10, 4, "5zkR"],
      ["Nicolas Jackson", 11, 4, "5skR"],
      ["Ismaïla Sarr", 18, 4, "5skR"],
      ["Idrissa Gueye", 5, 4, "5zkR"],
      ["Kalidou Koulibaly", 3, 4, "5xkR"],
    ],
  },
  "Algeria": {
    source: 'likely',
    takers: [
      ["Riyad Mahrez", 7, 4, "3skL"],
      ["Amine Gouiri", 9, 3, "3skR"],
      ["Mohamed Amoura", 18, 3, "3skR"],
      ["Houssem Aouar", 8, 3, ""],
      ["Nabil Bentaleb", 19, 3, ""],
    ],
  },
  "Argentina": {
    source: 'likely',
    takers: [
      ["Lautaro Martínez", 22, 5, "3skR"],
      ["Lionel Messi", 10, 5, "2sdL"],
      ["Julián Alvarez", 9, 5, "2sdR"],
      ["Enzo Fernández", 24, 5, "2sdR"],
      ["Alexis Mac Allister", 20, 5, "1lbR"],
    ],
  },
  "Austria": {
    source: 'likely',
    takers: [
      ["Marko Arnautović", 7, 4, "1skR"],
      ["Marcel Sabitzer", 9, 3, "1sbR"],
      ["Michael Gregoritsch", 11, 3, ""],
      ["David Alaba", 8, 3, "4zkL"],
      ["Konrad Laimer", 20, 3, ""],
    ],
  },
  "Jordan": {
    source: 'likely',
    takers: [
      ["Musa Al-Taamari", 10, 1, ""],
      ["Ali Olwan", 9, 1, ""],
      ["Nizar Al-Rashdan", 21, 1, ""],
      ["Mahmoud Al-Mardi", 13, 1, ""],
      ["Noor Al-Rawabdeh", 8, 1, ""],
    ],
  },
  "Colombia": {
    source: 'shootout',
    takers: [
      ["Juan Fernando Quintero", 20, 4, "3skL"],
      ["Davinson Sánchez", 23, 4, "4zkR"],
      ["Jaminton Campaz", 21, 4, "4skL"],
      ["Cucho Hernández", 19, 4, "3skR"],
      ["Luis Díaz", 7, 4, "3lkR"],
    ],
  },
  "DR Congo": {
    source: 'likely',
    takers: [
      ["Yoane Wissa", 20, 3, "4skR"],
      ["Cédric Bakambu", 17, 2, "4zkR"],
      ["Chancel Mbemba", 22, 2, "4zkR"],
      ["Théo Bongonda", 10, 2, ""],
      ["Brian Cipenga", 9, 2, ""],
    ],
  },
  "Portugal": {
    source: 'likely',
    takers: [
      ["Cristiano Ronaldo", 7, 5, "2skR"],
      ["Bruno Fernandes", 8, 5, "2sdR"],
      ["Bernardo Silva", 10, 5, "2sdL"],
      ["João Félix", 11, 5, "2sdR"],
      ["Vitinha", 23, 5, "2skR"],
    ],
  },
  "Uzbekistan": {
    source: 'likely',
    takers: [
      ["Eldor Shomurodov", 14, 2, ""],
      ["Abbosbek Fayzullaev", 22, 2, ""],
      ["Oston Urunov", 11, 2, ""],
      ["Otabek Shukurov", 7, 2, ""],
      ["Abdukodir Khusanov", 2, 2, ""],
    ],
  },
  "Croatia": {
    source: 'likely',
    takers: [
      ["Luka Modrić", 10, 5, "1lbR"],
      ["Andrej Kramarić", 9, 4, "1sbR"],
      ["Mateo Kovačić", 8, 4, "1sdR"],
      ["Ivan Perišić", 14, 4, "1sdR"],
      ["Joško Gvardiol", 4, 4, "1sbL"],
    ],
  },
  "England": {
    source: 'likely',
    takers: [
      ["Harry Kane", 9, 5, "1sbR"],
      ["Bukayo Saka", 7, 5, "4skL"],
      ["Jude Bellingham", 10, 5, "4zkR"],
      ["Declan Rice", 4, 5, "1sdR"],
      ["Ollie Watkins", 19, 5, "4zkR"],
    ],
  },
  "Ghana": {
    source: 'likely',
    takers: [
      ["Jordan Ayew", 9, 1, "5skR"],
      ["Antoine Semenyo", 11, 1, "5skR"],
      ["Iñaki Williams", 19, 1, "5skR"],
      ["Thomas Partey", 5, 1, "5zkR"],
      ["Abdul Fatawu", 7, 1, ""],
    ],
  },
  "Panama": {
    source: 'likely',
    takers: [
      ["Aníbal Godoy", 20, 3, ""],
      ["José Fajardo", 17, 3, ""],
      ["Ismael Díaz", 10, 3, ""],
      ["Carlos Harvey", 14, 3, ""],
      ["Cecilio Waterman", 18, 3, ""],
    ],
  },
};
