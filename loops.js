//for statement
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
 
