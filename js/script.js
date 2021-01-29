const msgDiscount = document.querySelector('.card__time-discount');
const btnToggle = document.getElementById('btntoggle');
const screen = window.matchMedia("(max-width: 900px)");
const views = document.getElementById('views');

screen.addListener( () => {
    if (screen.matches) { // If media query matches
        msgDiscount.textContent = "-25%";
    } else {
        msgDiscount.textContent = "25% discount";
    }
})

// document.addEventListener('DOMContentLoaded', ()=> {
//     if (document.body.clientWidth >= 960) {
//         msgDiscount.textContent = "25% discount";
//     } else {
//         msgDiscount.textContent = "-25%";
//     }
// })

btnToggle.addEventListener('click', ()=> {
    if (btnToggle.checked) {
        console.log('mensual');
    }
})