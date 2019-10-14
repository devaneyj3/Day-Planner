//jshint esversion: 6

// LOOP OVER NODELIST AND APPLY BOLD TO TODAY'S DATE
function addStyleToList() {
    let nodeList = document.querySelectorAll('li');
    
    //get the current date
    let date = new Date();
    let today = date.toLocaleDateString();

    for (var dateEl of nodeList) {
        if(dateEl.textContent == today) {
            dateEl.style.fontWeight = "900";
            dateEl.textContent = 'Today';
        }
    }
}

$(document).ready(function (event) {
    addStyleToList();
});
