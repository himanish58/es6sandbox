'use strict';

// Use of 'let' & 'const'

let x = 'Outside the function';
function test1() {
  console.log(x);
}

test1();

function test2() {
  let x = 'Inside the function';
  console.log(x);
}

test2();
console.log(x);

function circleArea(r) {
  const pi = 3.14;
  let area = pi * r * r;
  return area;
}

console.log(circlearea(7));


// Arrow Function

let area1 = (r) => {
  const pi = 3.14;
  return pi * r * r;
}

let area2 = r => 3.14 * r * r;

console.log(area1(7));
console.log(area2(7));


// Template Literals

let name = 'Himanish';
let a = 4;
let b = 7;

console.log(`My name is ${name}, and I'm a self taught programmer.`);
console.log(`My name is ${name},
and I'm a self taught programmer.`);
console.log(`${a} + ${b} = ${a + b}`);


//Spread Operators

let add = (a, b, c) => {
  console.log(a + b + c);
}

let num = [4, 5, 7];
add(...num);

let meats = ['chicken', 'pork', 'beef', 'ham', 'bacon'];
let fruits = ['apple', 'orange', ...meats, 'mango'];
console.log(fruits);


// Classes

class Person{
  constructor(name, weight, age) {
    this.name = name;
    this.weight = weight;
    this.age = age;
  }

  showAge() {
    console.log(this.age);
  }

  showName() {
    console.log(this.name);
  }

  showWeight() {
    console.log(this.weight);
  }
}

let himanish = new Person('Himanish', 100, 25);
let kabiraj = new Person('Kabiraj', 354, 24);

himanish.showWeight();
kabiraj.showAge();


// Inheritence

class Programmer extends Person{
  constructor(name, weight, age, language){
    super(name, weight, age);
    this.language = language;
  }

  showLanguage() {
    console.log(this.language);
  }
}

let bucky = new Programmer('Bucky Roberts', 547, 26, 'Python');
bucky.showLanguage();
console.log(bucky);


// Generators

function* testGenerator() {
  yield 'Hello';
  yield 'One';
  yield 'Two';
  yield 'Three';
}

let test = testGenerator();
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());

function* getId() {
  let id = 0;
  while (id < 3) {
    yield id++;
  }
}

let emp = getId();
console.log(emp.next().value);
console.log(emp.next().value);
console.log(emp.next().value);
console.log(emp.next().value);
