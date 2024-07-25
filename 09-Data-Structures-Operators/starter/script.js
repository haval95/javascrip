'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
};

// const arr = [1, 2, 3];

// const [x, y, z] = arr;

// console.log(x, y, z);

// const [second, , first] = restaurant.categories;
// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const arr1 = [1, 2, [3, 4, 5]];

// const [aa, , [, cc, bb]] = arr1;

// console.log(aa, cc, bb);

// const [p, q, r = 10] = [2, 3];

// console.log(p, q, r);

// // obj desturctioring

// const { categories: restCat, name, openingHours } = restaurant;

// console.log(restCat);

// let a = 10;
// let b = 11;
// const c = 11;
// const obj = { a: 1, b: 2, c: 3 };

// ({ a, b } = obj);

// console.log(a, b, c);

// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open);

// const arr = [1, 2, 3, 4, 85];
// // const newArray = [...arr];
// // console.log(newArray);

// const [a, b, ...others] = arr;

// console.log(a, b, others);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// console.log(undefined && null);

// const x = 0;
// console.log(x ?? 10);

// const rest1 = {
//   name: 'capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'pizza',
//   owner: 'giovanni',
// };

// //OR ASSIGNMENT OPERATOR
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;

// rest2.owner &&= 'unknown';
// console.log(rest2, rest1);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored


*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1
// const [player1, player2] = game.players;
// // console.log(player1, player2);
// // //2
// // const [gk, ...fieldPlayers] = player1;
// // console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// // 4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6

// function printGoals(...playerNames) {
//   console.log(playerNames);
// }

// printGoals('haval', 'azhy');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log(team2);
// team1 > team2 && console.log(team1);

// for (const player of allPlayers) console.log(player);

// for (const player of allPlayers.entries()) console.log(player);
// for (const [index, value] of allPlayers.entries()) console.log(index, value);

// const courses = ['english', 'math'];

// const obj = {
//   fname: 'havla',
//   age: 29,
//   courses,
//   getCourses() {
//     return this.courses;
//   },

//   ['propertyname' + 2]: 'i can name it anything',
//   [allPlayers[0]]: 'name of the player will be the prop name',
// };

// // console.log(obj);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(
//     'restaurant opens at: ',
//     restaurant.openingHours[day]?.open ?? 'closed'
//   );
// }

// console.log(restaurant.ordersthn?.(1, 2) ?? 'method doesnt exist');

// const users = [{ name: 'haval', age: 29 }];

// console.log(users[2]?.name ?? 'value doesnt exist');

// Coding Challenge #2
//-------------------------------------------------
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1
for (const [goalNumber, playerName] of game.scored.entries()) {
  console.log(`Goal:  ${goalNumber + 1}: `, 'by: ', playerName);
}

let total = 0;
let odds = Object.values(game.odds);
for (const data of odds) {
  total += data;
}
console.log(total / odds.length);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[team] ?? 'draw'} is:  `, odd);
}

let obj = {};
for (const scorer of game.scored) {
  console.log(scorer);
  obj[scorer] = (obj[scorer] ?? 0) + 1;
}

console.log(obj);
