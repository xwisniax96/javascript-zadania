//1

let x= document.createElement('div');
x.innerHTML="To jest nowy element";
root.appendChild(x);

//2

const favFruits = ['Jabłko', 'Ananas', 'Banan', 'Liczi', 'Mandarynka', 'Nektarynka', 'Malina'];
const ul = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
  });
document.body.appendChild(ul);

//3

document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});

//4

var root=document.querySelector('#root');
var button=document.createElement("button");
button.innerHTML="delete";
root.appendChild(button);
button.addEventListener('click', function(){
  button.remove();
});

//5

const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) 
    {
      const randDiv = document.createElement('div');
      randDiv.innerText = `to jest div numer ${i}`;
      document.body.appendChild(randDiv);
    }

//6

var root=document.querySelector('#root');

var div1=document.createElement('div');
div1.innerHTML="to jest div";

var div2=document.createElement('div');
div2.innerHTML="to jest div";

var div3=document.createElement('div');
div3.innerHTML="to jest div";

var span1=document.createElement('span');
span1.innerHTML="to jest span";

var span2=document.createElement('span');
span2.innerHTML="to jest span";

root.appendChild(div1);
root.appendChild(span1);
root.appendChild(div2);
div2.appendChild(div3);
root.appendChild(span2);

//7

var myOLlist = document.createElement('ol');
  myOLlist.id = "firstList";
  var myFirstButton = document.createElement('button');
  myFirstButton.id = "firstButton";
  myFirstButton.innerText = 'Button 1';

  var tygrys = document.createElement('li');
  tygrys.innerText = "Tygrys";
  var lampart = document.createElement('li');
  lampart.innerText = "Lampart";
  var lew = document.createElement('li');
  lew.innerText = "Lew";
  var puma = document.createElement('li');
  puma.innerText = "Puma";
  var jaguar = document.createElement('li');
  jaguar.innerText = "Jaguar";
  var rys = document.createElement('li');
  rys.innerText = "Ryś";

  myOLlist.appendChild(tygrys);
  myOLlist.appendChild(lampart);
  myOLlist.appendChild(lew);
  myOLlist.appendChild(puma);
  myOLlist.appendChild(jaguar);
  myOLlist.appendChild(rys);

  
  var myNextOLlist = document.createElement('ol');
  myNextOLlist.id = "secondList";

  var mySecondButton = document.createElement('button');
  mySecondButton.id = "secondButton";
  mySecondButton.innerText = "Button 2";

  root.appendChild(myOLlist);
  root.appendChild(myFirstButton);
  root.appendChild(myNextOLlist);
  root.appendChild(mySecondButton);

  function toTWO(){
    var listOne =document.querySelector("#firstList");
    var listTwo =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if( listOfElements1.length < 1){
      document.querySelector("#firstButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#secondButton").disabled = false;
    }
  }
  document.querySelector('#firstButton').addEventListener('click', toTWO);

  function toOne(){
    var listTwo =document.querySelector("#firstList");
    var listOne =document.querySelector("#secondList");
    var listOfElements1 = listOne.getElementsByTagName("li");
    var listOfElements2 = listTwo.getElementsByTagName("li");
    var theEnd = listOfElements1[listOfElements1.length-1];
    var theLastOfUs = theEnd.innerText;
    var qwerty = document.createElement('li'); 
    qwerty.innerText = theLastOfUs;
    listTwo.appendChild(qwerty);
    listOne.removeChild(theEnd);

    if(listOfElements1.length < 1){
      document.querySelector("#secondButton").disabled = true;
    }
    if(listOfElements2.length >= 1){
      document.querySelector("#firstButton").disabled = false;
    }

  }
  document.querySelector('#secondButton').addEventListener('click', toOne);


//8

const fieldset = document.createElement('fieldset');
const inputs = [{
    label: 'Element',
    id: 'el',
    type: 'text'
}, {
    label: 'Tekst',
    id: 'text',
    type: 'text'
}, {
    label: 'Kolor',
    id: 'color',
    type: 'color'
}, {
    label: 'Ile razy',
    id: 'count',
    type: 'number'
}, {
    label: 'Utwórz',
    type: 'submit'
}];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            createElement(e);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function createElement(e) {
    e.preventDefault();
    let el = null;

    inputs.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': el = document.createElement(value); break;
            case 'text': el.innerText = value; break;
            case 'color': el.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(el.cloneNode(true));
            } break;
        }
    });
}

document.body.appendChild(fieldset);

//9

var root = document.querySelector('#root');
var result = document.createElement('div');
root.appendChild(result);

var firstname = field('div', 'Imię');
var firstnameInput = input(firstname);
var surname = field('div', 'Nazwisko');
var surnameInput = input(surname);
var age = field('div', 'Wiek');
var ageInput = input(age);
var children = field('div', 'Ilość dzieci');
var childrenInput = input(children);
var more = field('button', 'Więcej');
var tButton = field('button', 'Utwórz');

function field(e, v) {
  var nameDiv = document.createElement(e);
  nameDiv.textContent = v;
  result.appendChild(nameDiv);
  return nameDiv;
}

function input(e) {
  var input = document.createElement('input');
  input.type = "text";
  e.appendChild(input);
  return input;
}

function clear() {
  firstnameInput.value = '';
  surnameInput.value = '';
  ageInput.value = '';
  childrenInput.value = '';
}

function td(i, tr) {
  var name = document.createElement('td');
  name.textContent = i.value;
  tr.appendChild(name);
  return name;
}

function dButton(tr) {
  var dTd = document.createElement('td');
  var dB = document.createElement('button');
  dB.textContent = 'Usuń';
  dTd.appendChild(dB);
  tr.appendChild(dTd);
  return dB;
}

more.addEventListener('click', function() {
  var table = document.getElementsByTagName('table')[0]; 
  if(table !== undefined) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    td(firstnameInput, tr);
    td(surnameInput, tr);
    td(ageInput, tr);
    td(childrenInput, tr);
    var dB = dButton(tr);
    dB.addEventListener('click', () => { table.removeChild(tr); });
    clear();
  } 
});

function th(div, tr) {
  var name = document.createElement('th');
  name.textContent = div.textContent;
  tr.appendChild(name);
  return name;
}

tButton.addEventListener('click', function() {
  var table = document.createElement('table');
  table.style.border = '1px solid black';
  result.appendChild(table);
  var header = document.createElement('tr');
  table.appendChild(header);
  th(firstname, header);
  th(surname, header);
  th(age, header);
  th(children, header);
  var dTh = document.createElement('th');
  dTh.textContent = 'Usuń';
  header.appendChild(dTh);
  var first = document.createElement('tr');
  table.appendChild(first);
  td(firstnameInput, first);
  td(surnameInput, first);
  td(ageInput, first);
  td(childrenInput, first);
  var dB = dButton(first);
  dB.addEventListener('click', () => { table.removeChild(first); });
   clear();
});

//10

validation(firstnameInput, surnameInput, ageInput, childrenInput);

function validation(f, s, a, c) {
  var validator1 = /[a-zA-Z]+/g;
  var validator2 = /\d{1,3}/g;
  f.addEventListener('change', function() {
    if(validator1.test(f.value)) f.value = f.value.substring(0, 1).toUpperCase() + f.value.substring(1);
    else console.log('Podano błędne dane!');
  });

  s.addEventListener('change', function() {
    if(validator1.test(s.value)) s.value = s.value.substring(0, 1).toUpperCase() + s.value.substring(1);
    else console.log('Podano błędne dane!');
  });

  a.addEventListener('change', function() {
    if(!validator2.test(a.value)) console.log('Podano błędne dane!');
  });

  c.addEventListener('change', function() {
    if(!validator2.test(c.value)) console.log('Podano błędne dane!');
  });
}

//11

function extarctNumbersAndMultiplyToDivs(str) {
    const numbers = str.match(/[0-9]+/g);
    if (numbers.length > 0) {
        console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

        const mmultiplier = numbers.reduce((a, b) => Number(a) * Number(b));

        for (let i = 0; i < mmultiplier; i++) {
            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}

extarctNumbersAndMultiplyToDivs('foo1bar2test10nice2');

//12

function createObj(str) 
  {
    return 
    {
        string: str
    }
  }

const alaStr = createObj('Ala ma kota');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

alaStr.alaToOla();

//13

 function countForMe(stringArr){  
  var howManyLetters = [];
    for(var i = 0; i < stringArr.length; i++){
      howManyLetters[i] = stringArr[i].length;
    }     
     return howManyLetters;
  }

  function showAvg(summ){
    var average = summ / tabWithWords.length;
    return average;
  }

  function sum(howManyLetters){
    var summ = howManyLetters.reduce((prev,curr) => prev += curr);
    return summ;
  }
  

 var tabWithWords = ['random','words','for','this','script'];
  console.log("Letters in each word:");
  console.log(countForMe(tabWithWords));
  console.log("Sum of letters:");
  console.log(sum(countForMe(tabWithWords)));
  console.log("Average:");
  console.log(showAvg(sum(countForMe(tabWithWords))));

//14

let object14 = {name: '', surname: '', age: ''};
var button1;
function set(object){
  object.name="Przemek";
  object.surname="Wiśniewski";
  object.age='24';
  
  object.nameLength=object.name.length;
  object.surnameLength=object.surname.length;
  object.ageLength=object.age.length;
  
  if(object.nameLength>5 || object.surnameLength>5 || object.ageLength){
    button1=document.createElement('button');
    button1.innerHTML="CLEAR";
    root.appendChild(button1);
  }
}
set(object14);
console.log(object14);
  if(document.querySelector('button')){
    button1.addEventListener('click',function(){
      object14 = {name: '', surname: '', age: ''};
      console.log(object14);
  });
}
