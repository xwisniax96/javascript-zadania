//1

const list = document.querySelectorAll(".list");
console.log(list);

//2

function find(x)
   {
    var result = document.querySelectorAll(`${x}`);
      return console.log(result);
   }
find('li');

//3

var element = document.getElementById("list");
console.log(element);

//4

var lis = document.querySelectorAll('li');
var uls = document.querySelectorAll('ul');
var spans = document.querySelectorAll('span');
var divListSpans = document.querySelectorAll('div.list span');
var divIdSpans = document.querySelectorAll('#spans span');

function display (...args)
{
  args.forEach((element) =>
  { 
    console.log(element);
  })
}

display(lis,uls,spans, divListSpans, divIdSpans);
