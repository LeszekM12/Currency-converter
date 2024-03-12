let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;
    let EURO = 4.34;
    let USD = 4;
    let GBP = 5;
    
    switch (currency) {
        case "EURO":
            result = (amount * EURO)
            break;
        case "USD":
            result = (amount * USD)
            break;
        case "GBP":
            result = (amount * GBP)
            break;
    };
    resultElement.innerText = result.toFixed(2);
});
