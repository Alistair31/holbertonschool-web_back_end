export default function hasValuesFromArray(set, array) {
	if (array === undefined || set === undefined) {
		return false;
	}
	return array.every((value) => set.has(value));
}
