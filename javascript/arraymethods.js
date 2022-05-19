function arraymethod1(){
    let array1=["M","I"];
    let array2=["C","H"];
    let array3=array1.concat(array2);
    document.getElementById("show").innerHTML=array3;
}

function arrayfilter(){
    let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    let result = words.filter(word => word.length > 6);
    document.getElementById("show").innerHTML=result;
}

function arrayfind(){
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.find(element => element > 10);
    document.getElementById("show").innerHTML=found;
}
function arrayfind_index(){
    

    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = array1.findIndex(element => element > 13);
    document.getElementById("show").innerHTML=isLargeNumber;
   
}
