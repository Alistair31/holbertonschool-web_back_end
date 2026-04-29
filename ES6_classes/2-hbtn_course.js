export default class HolbertonCourse {
	constructor(name, lenght, students) {
		this.name = name;
		this.lenght = lenght;
		this.students = students;
	}

	get name() {
		return this._name
	}
	get lenght() {
		return this._lenght
	}
	get students() {
		return this._students
	}

	set name(value) {
		if (typeof value !== 'string') {
			throw new TypeError('Name must be a String');
		}
		this._name = value;
	}
	set lenght(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Lenght must be a Number');
		}
		this._lenght = value;
	}
	set students(value) {
		if (!Array.isArray(value)) {
			throw new TypeError('Students must be an Array');
		}
		this._students = value;
	}

}