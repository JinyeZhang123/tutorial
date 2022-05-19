//function saysomething(){
//    document.getElementById("something").innerHTML="what?";
//}

//let saysomething = function(){
//    document.getElementById("something").innerHTML="what?";
//} 

//let saysomething = (word)=>document.getElementById("something").innerHTML=word;
//arrow function

function myDisplayer(some) {
    document.getElementById("something").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


  let a=myCalculator(5,5);
  myDisplayer(a);