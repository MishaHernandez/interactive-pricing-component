const btnToggle = document.getElementById('btntoggle');
const msgDiscount = document.querySelector('.card__time-discount');
const screen = window.matchMedia("(max-width: 900px)");
const inputRange = document.getElementById('input-range');
const pageviews = document.getElementById('pageviews');
const monthlyPrice = document.getElementById('price')

screen.addListener( () => {
    if (screen.matches) { // If media query matches
        msgDiscount.textContent = "-25%";
    } else {
        msgDiscount.textContent = "25% discount";
    }
})

function monthlyBilling(price) {
    let newPrice = price - (price * 0.25);
    monthlyPrice.textContent = `${newPrice}`;
}

inputRange.addEventListener('input', ()=> {
    let valueInputRange = parseInt(inputRange.value);

    switch (valueInputRange) {
        case 1:
            if (btnToggle.checked) { monthlyBilling(8); break };
            pageviews.textContent = "10K";
            monthlyPrice.textContent = "8";
            break;

        case 2:
            if (btnToggle.checked) { monthlyBilling(12); break};
            pageviews.textContent = "50K";
            monthlyPrice.textContent = "12";
            break;

        case 3:
            if (btnToggle.checked) { monthlyBilling(16); break};
            pageviews.textContent = "100K";
            monthlyPrice.textContent = "16";
            break;

        case 4:
            if (btnToggle.checked) { monthlyBilling(24); break};
            pageviews.textContent = "500K";
            monthlyPrice.textContent = "24";
            break;

        case 5:
            if (btnToggle.checked) { monthlyBilling(36); break};
            pageviews.textContent = "1M";
            monthlyPrice.textContent = "36";
            break;
    
        default:
            break;
    }
})

btnToggle.addEventListener('click', () => {
    let currentPrice = monthlyPrice.textContent;

    if (btnToggle.checked) {
        monthlyPrice.textContent = `${currentPrice - (currentPrice * 0.25)}`;
    } else {
        monthlyPrice.textContent = (4 * currentPrice) / 3;
    }
})