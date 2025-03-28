let countEl = document.getElementById("count")

let count = 0

function dec() {

    count = count - 1;

    countEl.textContent = count;

    changeCounterColor()
    
}

function inc() {

    count = count + 1;

    countEl.textContent = count;

    changeCounterColor()
 }


 function changeCounterColor (){

    let counterValue = parseInt(countEl.textContent);

    if (counterValue > 0){

        countEl.style.color = "green";
    }
    else if (counterValue < 0){

        countEl.style.color = "red";
    }
    else{

        countEl.style.color = "black";
    }
   
}