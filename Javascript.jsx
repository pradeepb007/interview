Deep Copy vs. Shallow Copy
1.	Shallow Copy:
o	Copies only the first-level properties of an object.
o	Nested objects are not copied; references to the same memory location are maintained.
o	Example methods: Object.assign(), Spread operator { ...obj }.
2.	Deep Copy:
o	Copies all levels of the object, creating entirely new memory locations for nested objects.
o	Avoids reference sharing.
o	Example methods: JSON.parse(JSON.stringify(obj)), custom recursive function, or libraries like Lodash.

// Example object with nested structure
const original = {
  name: "Alice",
  details: {
    age: 25,
    city: "Wonderland",
  },
};

// Shallow Copy
const shallowCopy = { ...original };
shallowCopy.details.age = 30;

console.log(original.details.age); // Output: 30 (reference shared)

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.age = 35;

console.log(original.details.age); // Output: 30 (no reference sharing)


const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
shallowCopy.b.c = 3;

console.log(original.b.c);
// b) 3

const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 5;

console.log(original.b.c);
b) 2


What will be the output of the following code?
var a = 10;
function testScope() {
  console.log(a);
  var a = 20;
}
testScope();
A) undefined

let x = 5;
if (true) {
  let x = 10;
  console.log(x);
}
console.log(x);
B) 10 and 5

const a = 1;
function testConst() {
  a = 2;
}
testConst();
C) TypeError

function test() {
  console.log(a);
  let a = 5;
}
test();
C) ReferenceError


