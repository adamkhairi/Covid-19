// Active navbar
// var navMenu = document.querySelector('#menu').children;
// var links = document.getElementsByClassName('.menu__links');
// for (let i = 0; i < document.querySelectorAll('.menu__links').length; i++) {
//
//     document.querySelectorAll('.menu__links')[i].addEventListener("click", function () {
//
//         document.querySelector('.active')[0].className = document.querySelector('.active')[0].className.replace(" active", "");
//         this.className += " active";
//
//     })
// }


// Quiz Scripts
function current(activeC) {
    activeC.className.add(".active")
}


function next() {

    document.querySelector("#formQts").style.display = "none";
    document.querySelector("#formAns").style.display = "none";
}

function back() {
    document.querySelector("#formQts").style.display = "block";
    document.querySelector("#formAns").style.display = "block";
}