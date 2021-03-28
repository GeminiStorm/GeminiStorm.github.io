"use strict";
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const players = [...game.players];
// const [players1, players2] = [...[players[0]], ...[players[1]]];
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, fieldPlayers1, gk2, fieldPlayers2);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const player1Final = [...players1, "Coutinho", "Thiago", "Perisic"];
// const { team1, x: draw, team2 } = game.odds;
// console.log(game.odds);
// console.log(team1, draw, team2);
// const printGoals = function (...player) {
//   console.log(player);
// };
// printGoals(game.scored);

// for (const scorer of Object.entries(game.scored)) {
//   console.log(scorer);
// }
// const oddStats = Object.values(game.odds);
// let total = 0;
// for (i = 0; i < oddStats.length; i++) {
//   total = total + oddStats[i];
// }
// const averageOdds = total / oddStats.length;
// console.log(averageOdds);
// console.log(Object.entries(game.odds));
// for (const [playerTeam, odd] of Object.entries(game.odds)) {
//   const teamStr = playerTeam === "x" ? "draw" : `victory ${game[playerTeam]}`;
//   console.log(`Odds of ${teamStr}:${odd}`);
// }
// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   console.log(player);
//   scorers[player]
//     ? (scorers[player] = scorers[player] + 1)
//     : (scorers[player] = 1);
// }

// console.log(scorers);
//********Airplane Buy and Sell********* */
// const airLineSouth = {
//   name: "Tan Son Nhat",
//   code: "TSN",
//   booking: [],
//   book(passengerName, flightNumber) {
//     this.booking.push(
//       `Hành Khách ${passengerName} book chuyến bay ${this.code}${flightNumber}`
//     );
//   },
// };
// const bookingList = airLineSouth.book;
// const airLineNorth = {
//   name: "Noi Bai",
//   code: "NB",
//   bookingNum: 124,
//   booking: [],
// };
// airLineSouth.planes = 10;
// airLineSouth.budget = 1000;
// airLineSouth.buyPlane = function () {
//   if (this.budget >= 100) {
//     this.budget = this.budget - 100;
//     this.planes++;
//   } else {
//     console.log("No Money No Plane");
//   }
//   console.log(this.planes, this.budget);
// };
// airLineSouth.sellPlane = function () {
//   if (this.planes > 0) {
//     this.planes--;
//     this.budget = this.budget + 50;
//   } else {
//     console.log("No Plane No Sold");
//   }
//   console.log(this.planes, this.budget);
// };
// const buyGetClass = document.querySelector(".buy");
// const sellGetClass = document.querySelector(".sell");
// buyGetClass.addEventListener("click", airLineSouth.buyPlane.bind(airLineSouth));
// sellGetClass.addEventListener(
//   "click",
//   airLineSouth.sellPlane.bind(airLineSouth)
// );
const addTax = function (rate) {
  return function (value) {
    const afterTax = value + rate * value;
    console.log(afterTax);
    return afterTax;
  };
};
const taxInVN = addTax(0.1);
const taxInUSA = addTax(0.3);
taxInVN(200);
taxInUSA(200);
