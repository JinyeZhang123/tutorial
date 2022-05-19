
function clicked(){
    let word="HELLO";
    document.getElementById("show").innerHTML=word.length;
}
//word.length

function fncslice(){
    let name1="Michael, Dean, Roger";
    //document.getElementById("show").innerHTML=name1.slice(-22,-4);
    //document.getElementById("show").innerHTML=name1.substring(9,13);
    document.getElementById("show").innerHTML=name1.substr(0,10);

}
//name.slcie first index is start position, second index is the end position. Allow positive
//and negative value.

//name.substring Same as slice but not allow negative value.

//name.str first index is start position, second index is the length.

function fncreplace(){
    let name1="Michael, Dean, Roger";
    document.getElementById("show").innerHTML=name1.replace("Michael","William");
}


function fncuppercase(){
    let name1="Michael, Dean, Roger";
    document.getElementById("show").innerHTML=name1.toUpperCase();
}

function fnclowercase(){
    let name1="Michael, Dean, Roger";
    document.getElementById("show").innerHTML=name1.toLowerCase();
}

function fncfullname(){
    let Firstname="Michael";
    let Lastname="Zhang"
    document.getElementById("show").innerHTML=Firstname.concat(" ","middlename"," ",Lastname);
}

function fnctrim(){
    let Firstname="Hello World";
   
    document.getElementById("show").innerHTML=Firstname.trim();
}

function fncindexOf(){
    let Firstname= "Please locate where 'locate' occurs!";

   
    document.getElementById("show").innerHTML=Firstname.lastIndexOf("Michael");
}

function fncinclude(){
    let Firstname= "Please locate where 'locate' occurs!";

   
    document.getElementById("show").innerHTML=Firstname.includes("locate");
}

function fncinterpatition(){
    let firstName = "manoj";
    let lastName = "sawant";

let text = `Welcome ${firstName}, ${lastName}!`; 
document.getElementById("show").innerHTML=text;
}

function fnctostring(){
    let number1=parseInt("2")+3;
    document.getElementById("show").innerHTML=number1;
}