import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedAmountFromEuro: null,
      intoCurrencyFromEuro: "",
      resultFromEuro: null,
      selectedAmountToEuro: null,
      intoCurrencyToEuro: "",
      resultToEuro: null,
      fromCurrencySE: "",
      selectedAmountSE: null,
      intoCurrencySE: "",
      resultSE: null,
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data)
      },
      changeCurrencyFromEuro: function() {
        let number1 = this.selectedAmountFromEuro * this.intoCurrencyFromEuro;
        this.resultFromEuro = number1.toFixed(2);
        return this.resultFromEuro;
      },
      changeCurrencyToEuro: function() {
        let number2 = this.selectedAmountToEuro / this.intoCurrencyToEuro;
        this.resultToEuro = number2.toFixed(2);
        return this.resultToEuro;
      },
      changeCurrencySE: function() {
        let number3 = this.selectedAmountSE / this.fromCurrencySE;
        let number4 = number3 * this.intoCurrencySE;
        this.resultSE = number4.toFixed(2);
        return this.resultSE;
      }
    }
  })
})
