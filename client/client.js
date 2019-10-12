//jshint esversion: 6

// LOOP OVER NODELIST AND APPLY BOLD TO TODAY'S DATE

let nodeList = document.querySelectorAll('li');

/*
* Have following code in css folder
*/
let a = document.querySelectorAll('a');

for( let el of a ) {
    el.style.color = 'black';
    el.style.textDecoration = 'none';
}

//get the current date
let date = new Date();
let today = date.toLocaleDateString();

for (var dateEl of nodeList) {
    if(dateEl.textContent == today) {
        dateEl.style.fontWeight = "900";
        dateEl.textContent = 'Today';
    }
}
