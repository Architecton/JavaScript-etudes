// Define sample dataset containing information
// about each element in an inventory of a store.
const store = {
	sunglasses: {
		inventory: 817, 
		cost: 9.99
	},
	pants: {
		inventory: 236, 
		cost: 7.99
	},
	bags: {
		inventory: 17, 
		cost: 12.99
	}
};

// checkInventory: check if all items in order are in stock and compute total cost.
const checkInventory = (order) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			// Get items in order.
			const itemsArr = order.items;  
			// Check if all items in stock.
			let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
			// If items every item in stock...
			if (inStock) {
				let total = 0;   
				itemsArr.forEach(item => {  // Compute total cost.
					total += item[1] * store[item[0]].cost
				});
				console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
				resolve([order, total]);  // Resolve with array containing order and the total cost.
			} else {
				reject(`The order could not be completed because some items are sold out.`);
			}     
		}, generateRandomDelay());
	});
};

// processPayment: check gift card balance and place order.
const processPayment = (responseArray) => {
	const order = responseArray[0];  // Get order from response.
	const total = responseArray[1];  // Get total cost from response.
	return new Promise((resolve, reject) => {
		setTimeout(()=> {  
			let hasEnoughMoney = order.giftcardBalance >= total;  // Check money on gift card.
			if (hasEnoughMoney) {
				console.log(`Payment processed with giftcard. Generating shipping label.`);
				let trackingNum = generateTrackingNumber();
				resolve([order, trackingNum]);  // Resolve with order and tracking number.
			} else {
				reject(`Cannot process order: giftcard balance was insufficient.`);
			}
		}, generateRandomDelay());
	});
};

// shipOrder: notify that order has been succesfully processed.
const shipOrder = (responseArray) => {
	const order = responseArray[0];  // Get order and tracking number from response.
	const trackingNum = responseArray[1];
	return new Promise((resolve, reject) => {
		setTimeout(()=> {  
			resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
		}, generateRandomDelay());
	});
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

const order = {
	items: [['sunglasses', 1], ['bags', 2]],
	giftcardBalance: 79.82
};


// Promise chain
checkInventory(order)
	.then((resolvedValueArray) => {
		return processPayment(resolvedValueArray);
	})
	.then((resolvedValueArray) => {
		return shipOrder(resolvedValueArray);
	})
	.then((successMessage) => {
		console.log(successMessage);
	})
	.catch((errorMessage) => {
		console.log(errorMessage);
	});

/*
 *	When you return something from a then() callback, it's a bit magic. 
 *	If you return a value, the next then() is called with that value. However, 
 *	if you return something promise-like, the next then() waits on it, 
 *	and is only called when that promise settles (succeeds/fails).
 */