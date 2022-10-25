class CurrencyUI {
    constructor(){
        this.currency = document.getElementById('currency');
        this.dictionary = {
            USD: '$',
            EUR: '€',
        };
    }

    get currencyValue() {
        return this.currency.value;
    }

    getCurrencySymbol() {
        return this.dictionary[this.currencyValue];
    }

    getSymbolByCurrency(currencySymbol) {
        return this.dictionary[currencySymbol];
    }
}

const currencyUI = new CurrencyUI();

export default currencyUI;