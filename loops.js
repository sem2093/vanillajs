//for statements and loops
let str = '';
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);

//do...while

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
 
//for...of
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
array1 = ouput
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// for...in 
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
