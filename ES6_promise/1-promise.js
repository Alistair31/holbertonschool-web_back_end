export default function getResponseFromAPI(boolean) {
	return new Promise((resolve, reject) => {
		if (boolean === true) {
			resolve({ status: 200, body: "Success" });
		} else {
			reject(new Error("The fake API is not working currently"));
		}
	});
}
