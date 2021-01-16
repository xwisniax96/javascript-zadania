//1

function Person(name, surname,age, country, city)
  {
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.country=country;
    this.city=city;
    
    this.show= function()
    {
      console.log(name+" "+surname+" "+age+" "+country+" "+city);
      
    };
    this.changeAge=function()
    {
      age+=10;
    }
    this.changeCity=function()
    {
      city="Warszawa";
    }
    
    
  }

  const person1 = new Person("Przemek", "P", 20,"Polska","Kraków");
  const person2 = new Person("Adam", "A", 21,"Polska","Warszawa");
  const person3 = new Person("Ada", "A", 22,"Polska","Poznań");
  const person4 = new Person("Kamila", "K", 23,"Polska","Opole");
  const person5 = new Person("Oliwia", "O", 24,"Polska","Gdynia");
  const person6 = new Person("Sebastian", "S", 25,"Polska","Gdańsk");
  
  person2.changeCity();
  person3.changeAge();
  
  person1.show();
  person2.show();
  person3.show();

  //2

  function Calculator(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    var result = 0;
    var memory=[];
    this.add = function () {
      result = number1 + number2;
      memory+=" dodawanie";
      console.log(result);
    };
    this.subtraction = function () {
      result = number1 - number2;
      memory+=" odejmowanie";
      console.log(result);
    };
    this.multiplication = function () {
      result = number1 * number2;
      memory+="mnozenie";
      console.log(result);
    };
    this.divide = function () {
      if (number2 == 0) {
        console.log("Nie dzieli sie przez 0");
      } else {
        result = number1 / number2;
        memory+=" dzielenie";
        console.log(result);
      }
    };
    
    this.show = function (){
      console.log(memory);
    }
    
  }
  const calc1 = new Calculator(4, 5);
  const calc2 = new Calculator(6, 8);
  
  calc2.add();
  calc1.multiplication();
  calc2.add();
  calc1.add();
  calc1.show();

//W konsoli wpisujemy dowolne działania
//Dodawanie 2+2
//Odejmowanie 2-2
//Mnożenie 2*2
//Dzielenie 2/2
  
//3

  function Calculator()
{
 
    var number=0;;
    
  
    this.show= function()
    {
     var randomNumber=Math.floor(Math.random()*10)+1;
      console.log(randomNumber);
      this.check(randomNumber);
    };
    this.check= function(number)
    {
      if(number>5)
      {
        clearInterval(time);
        console.log("Program sie zakończył");
      }
    }
    
}
  const number1=new Calculator();
  var time= setInterval(()=>number1.show(),1000);
  number1.show();
  
