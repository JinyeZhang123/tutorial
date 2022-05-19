let Shows=[];
let count=0;
let word="";
let start=0;
let end =0;
let result=0;
let partresult=0;
function clean(){
    Shows=[];
    count=0;
    word="";
    document.getElementById("Screen").innerHTML="0";
   
}
function screenshow(toadd){
    if(word[word.length-1]=="+"||word[word.length-1]=="-"||word[word.length-1]=="*"||word[word.length-1]=="/"){
        if(toadd=="+"||toadd=="-"||toadd=="*"||toadd=="/"){

        }
        
        else{
            
            word=word+toadd;
            document.getElementById("Screen").innerHTML=word;
            
        }
    }
    else{
            
        word=word+toadd;
        document.getElementById("Screen").innerHTML=word;
        
    }
}

function equal(){
   for( i=0; i<word.length; i++){
    switch(word.charAt(i)){
        case "*":
            partresult=mult(i).toString;
            cut(word,start,end,partresult);
            break;
        case "/":
            partresult=divid(i).toString;
            cut(word,start,end,partresult);
            break;
    }
   }
   for(i=0; i<word.length; i++){

   }
    
    
    document.getElementById("Screen").innerHTML=result;
    

}

function mult(i){
    let a;
    let b;
    for(j=i; j>0; j--){
        if(word.charAt(j)=="+"||word.charAt(j)=="-"||word.charAt(j)=="*"||word.charAt(j)=="/"){
             a=parseInt(word.slice(j+1,i));
        }
    }

    for(k=i; k<word.length; k++){
        if(word.charAt(k)=="+"||word.charAt(k)=="-"||word.charAt(k)=="*"||word.charAt(k)=="/"){
             b=parseInt(word.slice(i+1,k));
        }
    }
    start=j+1;
    end = k;
    return a*b;
}

function divid(i){
    let a;
    let b;
    for(j=i; j>0; j--){
        if(word.charAt(j)=="+"||word.charAt(j)=="-"||word.charAt(j)=="*"||word.charAt(j)=="/"){
             a=parseInt(word.slice(j+1,i));
        }
    }

    for(k=i; k<word.length; k++){
        if(word.charAt(k)=="+"||word.charAt(k)=="-"||word.charAt(k)=="*"||word.charAt(k)=="/"){
             b=parseInt(word.slice(i+1,k));
        }
    }
    start=j+1;
    end = k;
    return a/b;
}
function cut(str, cutStart, cutEnd,result){
    return str.substr(0,cutStart) + result+ str.substr(cutEnd+1);
  }

