import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	get amount() {
		return this._amount;
	}
	get currency() {
		return this._currency;
	}

	set amount(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Amount must be a Number');
		}
		this._amount = value;
	}
	set currency(value) {
		if (!(value instanceof Currency)) {
			throw new TypeError('Currency must be an object of the Currency class');
		}
		this._currency = value;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency.name} (${this.currency.code})`;
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}