
// روش محاسباتی نوع دوم


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


function pak2(){
  var result = document.getElementById("result");
  result.innerHTML= 0;

}

function delchar(){
  var result =document.getElementById("result").innerHTML;

 var r = result.substring(0,result.length-1);
 document.getElementById("result").innerHTML=r;

}




 // ==================================================================
  

// روش محاسباتی نوع اول

function click1(x) {

  var display1 =document.getElementById("display1");
  var result2 = document.getElementById("result2");
  var display2 = document.getElementById("display2");
  display1.innerHTML = result2.innerHTML;
  result2.innerHTML= 0;
  display2.innerHTML = x; 

}
  
  function click2(x){
  var a =parseInt(document.getElementById('result2').innerHTML);
  var c = a*10+x
  document.getElementById('result2').innerHTML = c;
  }
  
  
  function solve(){
  
  var display1 = parseInt(document.getElementById("display1").innerHTML);
  var result2 = parseInt(document.getElementById("result2").innerHTML);
  var display2 = document.getElementById("display2").innerHTML;
  var c = 0 ;


  switch (display2) {
    case '+':
      c= display1+result2
      break;
      case '-':
        c= display1-result2
        break;
        case '*':
        c= display1*result2
        break;
        case '/':
        c= display1/result2
        break;
    default:
     c = "مقدار وارد شود"
      break;
  }
  
  document.getElementById("result2").innerHTML=c

  }
  
  function pak(){

    var display1 =document.getElementById("display1");
    var result2 = document.getElementById("result2");
    var display2 = document.getElementById("display2");

    display1.innerHTML=0;
    display2.innerHTML='';
    result2.innerHTML=0;

  }

