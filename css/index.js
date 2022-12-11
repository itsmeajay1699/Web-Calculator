

let outputScreen = document.getElementById("outputScreen");
function display(num){
    outputScreen.value+=num;
}
function calculator(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function clear(){
    outputScreen.value='';
}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}