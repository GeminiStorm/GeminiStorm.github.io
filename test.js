const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const players = [...game.players];
const [players1, players2] = [...[players[0]], ...[players[1]]];
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1, gk2, fieldPlayers2);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const player1Final = [...players1, "Coutinho", "Thiago", "Perisic"];
const { team1, x: draw, team2 } = game.odds;
console.log(game.odds);
console.log(team1, draw, team2);
const printGoals = function (...player) {
  console.log(player);
};
printGoals(game.scored);

for (const scorer of Object.entries(game.scored)) {
  console.log(scorer);
}
const oddStats = Object.values(game.odds);
let total = 0;
for (i = 0; i < oddStats.length; i++) {
  total = total + oddStats[i];
}
const averageOdds = total / oddStats.length;
console.log(averageOdds);
console.log(Object.entries(game.odds));
for (const [playerTeam, odd] of Object.entries(game.odds)) {
  const teamStr = playerTeam === "x" ? "draw" : `victory ${game[playerTeam]}`;
  console.log(`Odds of ${teamStr}:${odd}`);
}
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player]
    ? (scorers[player] = scorers[player] + 1)
    : (scorers[player] = 1);
}

console.log(scorers);
