{
  const convertResult = (amount, currency) => {
    const EURO = 4.34;
    const USD = 4;
    const GBP = 5;
    switch (currency) {
      case "EURO":
        return amount / EURO;

      case "USD":
        return amount / USD;

      case "GBP":
        return amount / GBP;
    }
  };

  const modifyResultText = (result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = result.toFixed(2);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = amountElement.value;
    const currency = currencyElement.value;

    const result = convertResult(amount, currency); 

    modifyResultText(result);

  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
