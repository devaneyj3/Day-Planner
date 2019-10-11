//jshint esversion: 6

let nodeList = document.querySelectorAll('li');
console.log(nodeList);


for (var dateEl of nodeList) {
    console.log(dateEl);
    //dateEl.style.fontWeight = "900";
}

let date = new Date();
console.log(date.toDateString());