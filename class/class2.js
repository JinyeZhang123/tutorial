/*function fun1(value){
    document.getElementById("Screen").innerHTML=value;
}
function fun2(number1,number2,callbackfun){
    result=number1*number2;
    callbackfun(result);
}


function printString(){
    console.log("Tom"); 
    setTimeout(() =>  { console.log("Jacob"); }, 300); 
   console.log("Mark")
 }
 
 printString();


 const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});


myFirstPromise
.then((s) => {
    console.log(s);
})
.then(() => {
    console.log("Hello");
})
.catch((errorMsg) => { 
    console.log(errorMsg);
});


function printnumber(number){
    console.log(number);
}
function printString(word){
    console.log(word);
}

async function printMyAsync(){
    await printString("one")
    await setTimeout(() =>  { console.log("Jacob"); }, 300);
    await printString("two")
    await printString("three")
  }

printMyAsync();

try {
    let message = await myFirstPromise;
    let message  = await helloPromise();
    console.log(message);

  }catch((error) => { 
      console.log("Error:" + error.message);
  })
  */

  function fun1(){
    console.log("This is fun1");
  }

  function fun2(){
    settimeout(console.log("this is fun2"),300);
    fun1();
  }

  fun2();