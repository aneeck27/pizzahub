let scrollcon = document.querySelector(".combo-row");
let preview = document.getElementById("preview");
let next = document.getElementById("next");

preview.addEventListener("click", () =>{
    scrollcon.style.scrollBehavior ="smooth";
    scrollcon.scrollLeft -=300;

})
next.addEventListener("click", () =>{
    scrollcon.style.scrollBehavior ="smooth";
    scrollcon.scrollLeft +=300;

})