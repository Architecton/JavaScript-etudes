const inventory = {
	sunglasses: 1900,
	pants: 1088,
	bags: 1344
};

// checkInventory: take order and check if all items are in stock
const checkInventory = (order) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Check if function evaluates to true for each element in order array. 
			let inStock = order.every(item => inventory[item[0]] >= item[1]);
			if (inStock) {
				resolve(`Thank you. Your order was successful.`);
			} else {
				reject(`We're sorry. Your order could not be completed because some items are sold out.`);
			}
		}, 1000);  // Call anonymous function with a 1000 ms delay.
	})
};

const order = [['sunglasses', 1], ['bags', 2]];

// Resolution handler.
function handleSuccess(result) {
  console.log(result);
}

// Rejection handler.
function handleFailure(result) {
  console.log(result);
}

// call function that returns a Promise instance and then invoke the .then() method
// of the Promise instance and pass it the result handlers that are called in the
// function passed to the Promise class constructor.
checkInventory(order).then(handleSuccess, handleFailure);