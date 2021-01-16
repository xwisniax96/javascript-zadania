//1

var array=[2,2,3,4,5,1];

for(var i=0;i<array.length;i++)
{
  console.log(array[i]);
}

//2
var array=[1,2,"Przemek",3,4,"JavaScript",5];
//2.1
console.log(array[0]);
console.log(array[1]);
//2.2
console.log(array[array.length-1]);
//2.3
for(var i=0;i<array.length;i++){
  console.log(array[i]);
}
//2.4
for(var i=0;i<array.length;i+=2){
  console.log(array[i]);
}
//2.5
for(var i=0; i<tarrayable.length; i++){
  if(isNaN(array[i])){
    console.log(array[i]);
  }
}
//2.6
for(var i=0; i<array.length; i++){
  if(!isNaN(array[i])){
    console.log(array[i]);
  }
}

//3
var array=[1,2,3,4,5];

var number=0;
var difference=0;
for(var i=0;i<array.length;i++)
{
  number+=array[i];
  difference-=array[i];
}
//3.1
console.log(number);
//3.2
console.log(difference);
//3.3
console.log(number/array.length);
//3.4
for(var i=0;i<array.length;i++)

{
  if(array[i]%2==0)
  {
    console.log(array[i]);
  }
}
//3.5
for(var i=0;i<array.length;i++)
{
    if(array[i]%2!=0)
    {
      console.log(array[i]);
    }
}

//3.6
var max=0;
for(var i=0;i<array.length;i++)
{
  if(max<array[i])
  {
     max=array[i];
  }
}
console.log(max);

//3.7
var min=array[0];
for(var i=0;i<array.length;i++)
{
  if(min>array[i])
  {
     min=array[i];
  }
}
console.log(min);

//3.8

for(var i=array.length-1;i>=0;i--){
    console.log(array[i]);
   }

//4
var array=[2,2,3,4,5,1];
var number=0;
function show(array){
  for(var i=0;i<array.length;i++){
    number+=array[i];
  }
  console.log(number);
}
show(array);

//5
var array=[1,2,3,4,5];
var number=0;
function show(array)
{
  for(var i=0;i<array.length;i++)
  {
    number+=array[i];
  }
  for(var i=0;i<array.length;i++)
  {
    console.log(array[i]*(number/array.length));
  }
}
show(array);

//6

var array=[1,2,3,4,5];
var number=0;
var difference=0;
function show(array)
{
  var number=0;
  var difference=0;
    for(var i=0;i<array.length;i++)
    {
    if(array[i]%2==0)
    {
     difference+=array[i];
      number++;
    }
  }
  console.log(difference/number);
}
show(array);

//7
var array=[1,2,2,3,4,5];
function sortArray(array)
{
  array.sort();
  for(var i=0;i<array.length;i++)
  {
    console.log(array[i]);
  }
}
sortArray(array);

//8

var array1=[1,2,3,4,5];
var array2=[6,7,8,9];
var array3=[];
var number=0;
function show(array1,array2)
{
  
  for(var i=0;i<array1.length;i++)
  {
    number+=i;
  }

  for(var i=0;i<array2.length;i++)
  {
    number+=i;
  }
  array3[0]=number;
  console.log(array3[0]);
}

show(array1,array2);

//9

var array1=[1,2,3,4];
var array2=[];

function show(array1, temp)
{
  for(var i=0;i<array1.length;i++)
  {
    if(array1[i]!=temp)
    {
      array2+=array1[i];
    }
}
  
  for(var j=0;j<array2.length;j++)
  {
    console.log(array2[j]);
  }
}

show(array1, array1[1]);

//10

var array1=[1,2,3,4,5,6,-7];
var array2=[];

function show(array1)
{
  for(var i=0;i<array1.length;i++)
  {
    array2[i]=((-1)*array1[i]);
  }
  for(var i=0;i<array2.length;i++)
  {
    console.log(array2[i]);
  }
}
show(array1)
