
function click1(x) {

  var display1 =document.getElementById("display1");
  var result = document.getElementById("result");
  var display2 = document.getElementById("display2");
  display1.innerHTML = result.innerHTML;
  display2.innerHTML = x; 

  result.innerHTML = result.innerHTML;
  result.innerHTML = x;

  }
  
  function click2(x){
  
   var selectresult = document.getElementById('result');   
   selectresult.innerHTML=selectresult.innerHTML+x;

  var a =parseInt(document.getElementById('result').innerHTML);
  var c = a*10+x
  document.getElementById('result').innerHTML = c;


   var selectresult = document.getElementById('result');   
   selectresult.innerHTML=selectresult.innerHTML-x;
  
   var calculate =+x
  
   document.getElementById('result').innerHTML=calculate;
  }
  
  
  function solve(x){
  
  var display1 = parseInt(document.getElementById("display1").innerHTML);
  var result = parseInt(document.getElementById("result").innerHTML);
  var display2 = document.getElementById("display2").innerHTML;
  var c =0


  switch (result) {
    case '+':
      c= result+result
      break;
      case '-':
        c= result-result
        break;
        case '*':
        c= result*result
        break;
        case '/':
        c= result/result
        break;
    default:
     c = "مقدار وارد شود"
      break;
  }
  
  document.getElementById("result").innerHTML=c

  }
  
  function pak(x){

    var display1 =document.getElementById("display1");
    var result = document.getElementById("result");
    var display2 = document.getElementById("display2");

display1.innerHTML=0;
display2.innerHTML='';
result.innerHTML= 0;
  }
  
  function click3(x) {
    var display1=document.getElementById("result").innerHTML;
    if (display1 == "0") { display1=''}
    display1=display1+x;
    document.getElementById("result").innerHTML=display1;

  }
  function newsolve(){
    var result =document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML=eval(result);
  }


  function delchar(){
    var result =document.getElementById("result").innerHTML;

   var r = result.substring(0,result.length-1);
   document.getElementById("result").innerHTML=r;

  }