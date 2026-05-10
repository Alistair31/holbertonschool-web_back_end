export default function divideFunction(numerator, denominator) {
	if (denominator === 0) {
		return Promise.reject(new Error('Cannot divide by zero'));
	}
	return Promise.resolve(numerator / denominator);
}