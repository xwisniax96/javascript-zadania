//1

const person = 
  {
    name:"Przemek",
    surname:"P",
    age:24,
    country:"Polska",
    city:"Krakow",
    showText() 
    {
        return this.name+ " " +this.surname+" "+ this.age+" "+this.country+" "+this.city;
    },
  addAge()
  {
    this.age++;
  }
}
const person2 = 
  {
    name:"Adam",
    surname:"A",
    age:20,
    country:"Polska",
    city:"Torun",
    showText() 
    {
        return this.name+ " " +this.surname+" "+ this.age+" "+this.country+" "+this.city;
    },
  addAge(){
    this.age++;
  }
}
console.log(person.showText());
person.addAge();
person.addAge();
console.log(person.showText());


//2
person.food = new Array();
  person.showFood = function() {
    console.log(this.food);
  }
  person.addFood = function(foodName) {
    this.food.push(foodName);
  }
  
  person.addFood("Carbonara");
  person.addFood("Bolognese");

 person.showFood();

 //3
 function Calculator(number1, number2) 
  {
  this.number1=number1;
 this.number2=number2;

  this.add = function() 
  {
    var result = number1 + number2;
    return console.log(result);
  }
  this.subtraction = function() 
  {
    var result = number1 - number2;
    return console.log(result);
  }
  this.multiplication = function() 
  {
    var result = number1 * number2;
    return console.log(result);
  }
  this.divide = function() 
  {
    if(number2 == 0) 
    {
      return console.log('Nie dzieli sie przez 0');
    }
    var result = number1 / number2;
    return console.log(result);
  }
}
var x= new Calculator(2,3);
x.add();
x.divide();

//4
let stairs = 
  {
  yourStair: 0,
  goUp: function() 
  {
      this.yourStair++;
  },
  
  goDown: function() 
  {
      if (this.yourStair <= 0) 
  {
          this.yourStair = 0;
          console.log("You reached the lowest stair!");
          
          return;
  }
      this.yourStair--;
  },

  tellMeMyStair: function() 
  {
      return `Your Stair: ${this.yourStair}`;
  }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();
