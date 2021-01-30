const btnToggle = document.getElementById('btntoggle');
const msgDiscount = document.querySelector('.card__time-discount');
const screen = window.matchMedia("(max-width: 649px)");
const inputRange = document.getElementById('input-range');
const pageviews = document.getElementById('pageviews');
const monthlyPrice = document.getElementById('price')
const discount = 0.25;
const package = [{views: "10K", price: 8}, {views: "50K", price: 12}, {views: "100K", price: 16}, {views: "500K", price: 24}, {views: "1M", price: 36}];

function monthlyBilling(price) {
    let newPrice = price - (price * discount);
    monthlyPrice.textContent = `${newPrice}`;
}

function setPrice(package) {
    if (btnToggle.checked) {
        monthlyBilling(package.price);
    } else {
        pageviews.textContent = package.views;
        monthlyPrice.textContent = package.price;
    };
    
}

screen.addListener( () => {
    if (screen.matches) { // If media query matches
        msgDiscount.textContent = `-${discount*100}%`;
    } else {
        msgDiscount.textContent = `${discount*100}% discount`;
    }
})

inputRange.addEventListener('input', ()=> {
    let valueInputRange = parseInt(inputRange.value);

    switch (valueInputRange) {
        case 1:
            setPrice(package[0]);
            break;

        case 2:
            setPrice(package[1]);
            break;

        case 3:
            setPrice(package[2]);
            break;

        case 4:
            setPrice(package[3]);
            break;

        case 5:
            setPrice(package[4]);
            break;
    }
})

btnToggle.addEventListener('click', () => {
    let currentPrice = monthlyPrice.textContent;

    if (btnToggle.checked) {
        monthlyPrice.textContent = `${currentPrice - (currentPrice * discount)}`;
    } else {
        monthlyPrice.textContent = (Math.pow(discount, -1) * currentPrice) / 3;
    }
})