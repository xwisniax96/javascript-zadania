//1.1
document.querySelector('#test-event').addEventListener('click', function(x){
    console.log(x);
  })
  //1.2
  window.addEventListener('mousemove', function(x){
    console.log(x);
  })
  //1.3
  document.querySelector('#test-event').addEventListener('mouseover', function(x){
    console.log(x);
  })
  //1.4
  window.addEventListener('keydown', function(x){
    console.log(x);
  })
  //1.5
  window.addEventListener('scroll', function(x){
    console.log(x);
  })
  //1.6
  document.querySelector('#input-test').addEventListener('change', function(x) {
    console.log(x);
})


  //2
  var x=document.querySelector("#span-ex2");
function click(){
   x.textContent = this.dataset.text;
}
document.querySelector('#ex2').addEventListener('click', click);

//3
document.querySelector("#ex3").addEventListener('mousemove',function(){
    this.style.backgroundColor = 'blue';
  });
  document.querySelector("#ex3").addEventListener('mouseleave',function(){
    this.style.backgroundColor = 'red';
  });
  //4
  var temp= document.querySelector("#ex3-err");

 document.querySelector("#input-test").addEventListener('keydown',function(z){
   
    if(z.keyCode > 47 && z.keyCode < 58) {
        temp.textContent = "You cannot enter numbers";
    }
  });
//5
var temp= document.querySelector("#ex5-span");
var con=0;
function x(){
  if(con<10){
    con++;
    temp.textContent =con;
  }
 
  if(con==10){
     temp.removeEventListener('click', x);
  }
}
document.querySelector('#ex5-button').addEventListener('click',x);

//6
document.addEventListener('scroll',function(){
  
  if(window.scrollY<200){
    document.body.style.backgroundColor="red";
  }
  else{
    document.body.style.backgroundColor="white";
  }
  
  
})
//7
let calculatorInput = document.querySelector('#calculator > input');
let nextClickIsEval = false;
let nextClickIsClear = false;
var array=['/', '*', '+', '-'];

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (nextClickIsClear == true) {
                calculatorInput.value = "";
                nextClickIsClear = false;
            }

            calculatorInput.value = calculatorInput.value + event.target.innerText;

            if (nextClickIsEval == true) {
                calculatorInput.value = eval(calculatorInput.value);
                nextClickIsEval = false;
                nextClickIsClear = true;
            }

            if (array.includes(event.target.innerText)) {
                nextClickIsEval = true;
            }
        });
    });
