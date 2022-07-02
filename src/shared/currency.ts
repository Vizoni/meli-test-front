// var currencyFormatter = require('currency-formatter');
import currencyFormatter from 'currency-formatter';

export const formatCurrency = (amount: number, decimal: number) => {
    if (!decimal) {
        decimal = 0;
    }
    const fullValue = Number(`${amount}.${decimal}`)
    return currencyFormatter.format(fullValue, {
        symbol: '$',
        decimal: ',',
        thousand: '.',
        precision: 2,
        format: '%s %v' // %s is the symbol and %v is the value
    })
}

export const formatCurrencyWithoutDecimal = (amount: number) => {
    return currencyFormatter.format(amount, {
        symbol: '$',
        decimal: ',',
        thousand: '.',
        precision: 0,
        format: '%s %v' // %s is the symbol and %v is the value
    })
}

export default formatCurrency;