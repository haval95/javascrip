'use strict';

// const calcPrice = (numberOfPassangers = 1, price = 10) => {
//   console.log(numberOfPassangers * price);
// };

// calcPrice(10);

// const buyBtn = document.querySelector('.buy');

// buyBtn.addEventListener('click', sayHi);

// function sayHi() {
//   alert('hi');
// }

// function firstWordUpper(word) {
//   const [first, ...others] = word.split(' ');

//   return [first.toUpperCase(), ...others].join(' ');
// }

// function transform(word, fn) {
//   const NewSenternce = fn(word);
//   return NewSenternce;
// }

// console.log(transform('haval is going to suli', firstWordUpper));

// function greet1(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greetHey1 = greet1('Hey');
// greetHey1('haval');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greetHey = greet('Hey');

// greetHey('haval');

// greet('hey')('azhy');

// const flyErbil = {
//   airline: 'Fly Erbil',
//   bookings: [],
//   book(name, seatNumber) {
//     return this.bookings.push({ name, seatNumber });
//   },
// };

// flyErbil.book('haval', 222);

// // console.log(flyErbil);

// const flySuli = {
//   arline: 'Fly suli',
//   bookings: [],
// };

// const book = flyErbil.book;

// book.call(flySuli, 'abc', 123);

// book.apply(flySuli, ['cde', 456]);
// // console.log(flySuli);

// const bookErbil = book.bind(flyErbil);

// bookErbil('haval222', 22333);

// const bookErbil23 = book.bind(flyErbil, 'haval');

// bookErbil23(1110);

// const bookWithNameOnly = number => name => bookErbil(name, number);

// const bookErbil233 = bookWithNameOnly(123456789);

// bookErbil233('asos');
// // console.log(flyErbil);

// flyErbil.planes = 300;
// flyErbil.buy = function () {
//   this.planes++;
//   console.log(this);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', flyErbil.buy.bind(flyErbil));

// console.log(flyErbil);

// const addTax = (rate, value) => value + value * rate;

// const addTax = rate => value => value + value * rate;

// const addVat = addTax(0.23);
// console.log(addVat(100));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  displayAnswers(type = 'string') {
    type === 'string'
      ? console.log(...this.answers.join(', '))
      : console.log(this.answers);
  },

  registerNewAnswer() {
    const index = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    typeof index === 'number' &&
      index < this.answers.length &&
      index > -1 &&
      this.answers[index]++;
    this.displayAnswers('array');
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// [1, 5, 3, 9, 6, 1]

const obj = {
  answers: [5, 2, 3],
};

poll.displayAnswers.call({ answers: [5, 2, 3] }, 'array');
