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


 function changeCounterColor(){
     if ( countEl.textContent > 0){
        countEl.style.color = "green";
     }
     if ( countEl.textContent < 0){
        countEl.style.color = "red";
     }
 }