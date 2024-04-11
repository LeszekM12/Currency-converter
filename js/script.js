{
  const convertResult = (amount, currency) => {
    const EURO = 4.34;
    const USD = 4;
    const GBP = 5;
    switch (currency) {
      case "EURO":
        return amount * EURO;

      case "USD":
        return amount * USD;

      case "GBP":
        return amount * GBP;
    }
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const amountElement = document.querySelector(".js-amount");
      const currencyElement = document.querySelector(".js-currency");
      const resultElement = document.querySelector(".js-result");

      const amount = amountElement.value;
      const currency = currencyElement.value;

      const result = convertResult(amount, currency);

      resultElement.innerText = result.toFixed(2);
    });
  };

  init();
}
