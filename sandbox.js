/* strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result1 = fullName.toLowerCase();
console.log(result1, fullName);

let index = email.indexOf('@');
console.log(index);

// common string methods
let result2 = email.lastIndexOf('n');

let result3 = email.slice(2,5);

let result4 = email.substr(4,10);

let result5 = email.replace('n', 'w');

console.log(result2);

console.log(result3);

console.log(result4);

console.log(result5);

// numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators + = plus, - = minus, * = multiply, / = division, ** = power of, % = percent
// order of operation - B I D M A S
// Brackets, indicies, division, multiplication, addition, subtraction

console.log(10/2);
let result6 = radius % 3;
let result7 = pi * radius**2;
let result8 = 5 * (10-3)**2;

console.log(result6);
console.log(result7);
console.log(result8);

let likes = 10;

likes++;

console.log(likes);

likes--;

console.log(likes);

likes += 10;

console.log(likes);

likes -= 5;

console.log(likes);

// NaN - not a number

console.log(5 / 'hello');
console.log(5 * 'hello');

let result9 = 'the blog has ' + likes + ' likes';

console.log(result9);
*/
// template strings
/* const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;
*/

// concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);

/* template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);
*/

// arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

//array methods

// let result = ninjas.join(', ');
// let result= ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
/* let result = ninjas.push('ken');
result = ninjas.pop();

console.log(result);
*/

// null
let age = null;

console.log(age, age + 3, `the age is ${age}`);

// booleans & comparisons
console.log(true, false);

// methods can return booleans


// comparison operators
