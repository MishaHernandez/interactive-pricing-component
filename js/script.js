const btnToggle = document.getElementById('btntoggle');
const msgDiscount = document.querySelector('.card__time-discount');
const screen = window.matchMedia("(max-width: 900px)");
const inputRange = document.getElementById('input-range');
const views = document.getElementById('pageviews');
const monthlyPrice = document.getElementById('price')

screen.addListener( () => {
    if (screen.matches) { // If media query matches
        msgDiscount.textContent = "-25%";
    } else {
        msgDiscount.textContent = "25% discount";
    }
})

// test
btnToggle.addEventListener('click', ()=> {
    if (btnToggle.checked) {
        console.log('mensual');
    }
})

inputRange.addEventListener('input', ()=> {
    let valueInputRange = parseInt(inputRange.value);
    console.log('working');

    switch (valueInputRange) {
        case 1:
            console.log('working');
            views.textContent = "10K";
            monthlyPrice.textContent = "$8.00";
            break;

        case 2:
            views.textContent = "50K";
            monthlyPrice.textContent = "$12.00";
            break;

        case 3:
            views.textContent = "100K";
            monthlyPrice.textContent = "$16.00";
            break;

        case 4:
            views.textContent = "500K";
            monthlyPrice.textContent = "$24.00";
            break;

        case 5:
            views.textContent = "1M";
            monthlyPrice.textContent = "$36.00";
            break;
    
        default:
            break;
    }
})