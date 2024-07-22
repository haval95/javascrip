'use strict';
// const birthday = 1995;
// function calcAge(birthday) {
//   const age = 2037 - birthday;

//   function PrintAge() {
//     console.log(age);
//   }
//   PrintAge();
// }

// calcAge(1995);

// const birthday1 = 1995;
// const calcAge1 = {
//   birthday1: 1995,

//   PrintAge: function () {
//     const birthday1 = 2000;
//     console.log(this.birthday1);
//   },
// };

// calcAge1.PrintAge();
//------------------

// function abc() {
//   const z = 10;
//   console.log(this);
// }

// abc();

// const obj = {
//   y: 10,
//   method: function () {
//     const z = 10;
//     console.log(this);
//   },
// };
// obj.method(); // this logs obj

// const obj1 = {
//   a: 10,
// };

// function foo() {
//   const a = 11;
//   console.log(this.a);
// }

// foo.call(obj1);

// const Person = function (name) {
//   this.name = name;
//   this.sayHello = function () {
//     setTimeout(function () {
//       console.log(` ${this.name}`);
//     }, 0);
//   };
// };

// const haval = new Person('haval');
// haval.sayHello();

// const Person1 = function (name) {
//   this.name = name;
//   this.sayHello = function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   };
// };

// const haval1 = new Person1('haval');
// haval1.sayHello();

// const obj1 = {
//   a: 222,
// };

// function normalFunc() {
//   const a = 10;

//   function innerFunc() {
//     const a = 11;
//     console.log(this.a);
//   }
//   innerFunc.bind(this)();
// }

// normalFunc.call(obj1);

console.log(this); // window obj

function regularFunction() {
  console.log(this);
}
regularFunction(); //undefined in strict, window obj in none-strict

const arrowFunction = () => {
  console.log(this);
};
arrowFunction(); //lexical this, becomes the closest this, which is the gloabl window.

const anonymousFunction = function () {
  console.log(this);
};

anonymousFunction(); // undefined

const obj = {
  year: 1992,
  getYear: function () {
    console.log(this.year);
  },
};

obj.getYear();

const person11 = {
  fname: 'haval',
  age: 29,
};

let copy = person11;
copy.fname = 'ahmad';
console.log(person11, copy);

copy = { fname: 'abc' };

console.log(person11, copy);

const realCopy = Object.assign({}, person11);
realCopy.fname = 'realCopy';
console.log(realCopy, person11);
