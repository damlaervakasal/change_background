let button = document.querySelector("#button")


// function notClick(){
//     this.style.backgroundColor = rgb(38, 74, 105);
// }

// notClick();


function domClick(){

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

button.addEventListener("click",domClick);
domClick();