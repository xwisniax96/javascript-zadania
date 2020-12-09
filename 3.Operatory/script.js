//1

let a = true;
let b = false;
console.log(a==b);

//2

let x = 5;
let y = 10;

let moduloResult = 0;
moduloResult = x%y;
console.log(moduloResult);

//3
let string1 = "Lorem";
let string2 = "ipsum";

let stringResult = string1 + " " + string2;
console.log(stringResult);

//4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true (Zwraca true jeżeli operandy są równe. Jeżeli operandy nie są tego samego typu, JavaScript próbuje przekształcić operandy na odpowiedni dla porównania typ.)
console.log(someNumber === someString); // false (True, jeżeli Zwraca true jeżeli operandy są równe i tego samego typu.)

//5

let counter = 30;
console.log(++counter);
console.log(--counter);

//6
let num1 = 10;
let num2 = 12;
let result = null;
result = num1>num2;
console.log(result);
