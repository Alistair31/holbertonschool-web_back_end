export default class HolbertonClass {
	constructor(size, location) {
		this.size = size;
		this.location = location;

	}

	get size() {
		return this._size;
	}
	get location() {
		return this._location;
	}

	set size(value) {
		if (typeof(value) !== 'number') {
			throw new TypeError('Size must be a Number');
		}
		this._size = value;
	}
	set location(value) {
		if (typeof(value) !== 'string') {
			throw new TypeError('Location must be a String');
		}
		this._location = value;
	}
	
	[Symbol.toPrimitive](hint) {
		if (hint === 'number') return this._size;
		if (hint === 'string') return this._location;
	}

}