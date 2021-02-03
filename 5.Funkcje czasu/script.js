//1
var number=1;
var time=setInterval('hi()',1000);
function hi()
{
  console.log("Cześć po raz "+number);
  number++;
  if(number>15)
  {
    clearInterval(time);
  }
  time;
  
}

//2
var table=[1,2,3,4,5,6];
function show(){
  for(var i=0; i<table.length; i++){
    console.log(table[i]);
    
  }
  setTimeout('show2()',2000);
}

var j=0;
function show2(){
    if(j<table.length){
        console.log(table[j++]);
    }
    setInterval('show2()',3000);
  }
setTimeout('show()',2000);
