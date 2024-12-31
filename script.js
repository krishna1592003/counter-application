
let counterval = document.getElementById("counterValue");
function onDecrement(){
    let PrevValue = counterval.textContent;

    let updatedValue = parseInt(PrevValue) - 1;
    if(updatedValue < 0 ){
        counterval.style.color="red";

    }
    else if(updatedValue > 0 ){
        counterval.style.color="green";

    }
    else{
        counterval.style.color="black";

    }
    counterval.textContent = updatedValue;

}

function onReset(){
    let updatedValue  = 0 ;
    counterval.textContent = updatedValue;

    counterval.style.color="black";
}


function onIncrement(){
    let PrevValue = counterval.textContent;

    let updatedValue = parseInt(PrevValue) + 1;
    if(updatedValue < 0 ){
        counterval.style.color="red";

    }
    else if(updatedValue > 0 ){
        counterval.style.color="green";

    }
    else{
        counterval.style.color="black";

    }   
    counterval.textContent = updatedValue;

}