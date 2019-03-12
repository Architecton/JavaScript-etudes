// checkAvailability: check if item available at specified distributor.
const checkAvailability = (itemName, distributorName) => {
	console.log(`Checking availability of ${itemName} at ${distributorName}...`);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (restockSuccess()) {  // If items in stock...
				console.log(`${itemName} are in stock at ${distributorName}`)
				resolve(itemName);  // Resolve with name of item.
			} else {
				reject(`${itemName} is unavailable from ${distributorName} at this time.`);
			}
		}, 1000);
	});
};

// Simulate items being in stock 80% of the time.
function restockSuccess() {
	return (Math.random() > 0.2);
}

/*
	The Promise.all() method returns a single Promise that resolves when all 
	of the promises passed as an iterable have resolved or when the iterable 
	contains no promises. It rejects with the reason of the first promise that rejects.

	The Promise is called with an array of results of promises in the iterable.
*/

// Try to resolve all promises in array.
Promise.all([
		checkAvailability('sunglasses', 'Favorite Supply Co.'),
		checkAvailability('pants', 'Favorite Supply Co.'),
		checkAvailability('bags', 'Favorite Supply Co.')
	])
	.then((result) => {  // If all promises in array successfuly resolved
		console.log(`Items checked: ${result.join(', ')}`);
		console.log(`Every item was available from the distributor. Placing order now.`);
	})
	.catch((result) => {  // If any of the promises rejected
		console.log(result);
	});