export default function handleResponseFromAPI(promise) {
	return promise.then((response) => {
		console.log("Got response from the API");
		return { "status": 200, body: "Success" };
	}).catch((error) => {
		return new Error({});
	});
}
