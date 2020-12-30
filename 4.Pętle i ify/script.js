//1

let number1 = 1;
let number2 = 2;

if(number1>number2)
{
  console.log('Liczba 1 jest wieksza');
}
else
{
  console.log('Liczba 2 jest mniejsza');
}

//2

let q = 6;
let w = 8;
let e = 10;

if ((q > w) && (q > e))
 {
    console.log("Liczba q jest największa");
 }
else if ((w > q) && (w > e))
{
    console.log("Liczba w jest największa");
} 
else 
{
    console.log("Liczba e jest największa");
}

//3

for (let i = 0; i < 10; i++) 
{
    console.log("Lubię JavaScript");
}
    
//4

let number1 = 0

for (let i = 0; i <= 10; i++)
{
   number1 += i;
}
console.log(number1);

//5

var n = 5;

for ( let i = 0; i <= n; i++) 
{
   if(i % 2 == 0)
  {
       console.log(i+" - parzysta");
  } 
else 
  {       
       console.log(i+" - nieparzysta");
  }
}

//6

for (let i = 1; i <= 10; i++) 
{
    for (let j = 1; j <= 10; j++) 
    {
        console.log("i= " + i + ", j= " + j);
    }
}

//7

console.log(0);
for(i = 1; i < 100; i++) 
{
if(i%15==0)
    console.log("FizzBuzz");
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

//8

//a
for (let i = 1; i <= 5; i++) 
{
    let row = "";
    for (let j = 1; j <= i; j++) 
      {
        row += "*";
      }
    console.log(row);
}

//b
var counter = 4;
for (var i = 0; i < 5; i++)
  {
    var row =''
    for (var j=0; j < counter; j++ )
      {
        row += ' '
      }
  for (var b = 0; b < i+1; b++)
  {
    row += '* '
  }
  console.log(row)
    counter--
  }

//c
var counter = 4;
for (var i = 0; i < 5; i++)
  {
    var row =''
    for (var j=0; j < counter; j++ )
      {
        row += ' '
      }
  for (var b = 0; b < (i*2)+1; b++)
  {
    row += '*'
  }
  console.log(row)
    counter--
  }
//d
/*1234
for(let x = 0; x < 5; x++) 
{
    var result = '';
    for(y = 0; y < x+1; y++) 
      {
        result += '*';
      }
    for(z = 0; z <  5; z++)
    {
        if(x < z) {
          result += z
        }
    }
    console.log(result);

}
*/
/* ****
for(let x = 0; x < 5; x++) 
{
    var result = '';
   
    for(z = 0; z <  5; z++)
    {
        if(x <= z) {
          result += '*'
        } 
    }
  const resultLength = result.length 
  
  for(var b = 0; b< x; b++) {
    result += resultLength + b
  } 
    console.log(result);

}
*/

//e
