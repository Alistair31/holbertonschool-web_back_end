export default class Car {
	constructor(brand, motor, color) {
		this.brand = brand;
		this.motor = motor;
		this.color = color;
	}

	get brand() {
		return this._brand;
	}
	get motor() {
		return this._motor;
	}
	get color() {
		return this._color;
	}

	set brand(value) {
		if (typeof(value) !== 'string') {
			throw new TypeError('Brand must be a String');
		}
		this._brand = value;
	}
	set motor(value) {
		if (typeof(value) !== 'string') {
			throw new TypeError('Motor must be a String');
		}
		this._motor = value;
	}set color(value) {
		if (typeof(value) !== 'string') {
			throw new TypeError('Color must be a String');
		}
		this._color = value;
	}

	static get [Symbol.species]() {
		return this;
	}

	cloneCar() {
		const Species = this.constructor[Symbol.species];
		return new Species(this._brand, this._motor, this._color);
	}

}