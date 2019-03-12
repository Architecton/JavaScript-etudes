const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};


// 1. example //
function myExecutor(resolve, reject) {       // Take resolve and reject functions as parameters
  if (inventory.sunglasses > 0) {
	resolve('Sunglasses order processed.');  // If sucess, call resolve.
  } else {
	reject('That item is sold out.');        // Else, call reject.
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);  // Create a new promise that takes a function
}                                  // that takes the resolve and reject functions (see above).

var orderPromise = orderSunglasses();  // Call function that 
console.log(orderPromise);  // Print promise object

////////////////


// 2. example //
function orderPants(inventory) {
	// Return new Promise instance with passed anonymous function that takes
	// the resolve and reject parameters and calls them appropriately.
	return new Promise(function(resolve, reject) {
		if (inventory.pants > 0) {
			resolve('Pants order processed.');
		} else {
			reject('That item is sold out.');
		}
	})
}

// Print promise object
console.log(orderPants(inventory));
////////////////

// Pass resolve and reject functions to promise for it to call.
orderPants(inventory)
	.then((result) => {
		console.log(result);
	})
	.catch((result) => {
		console.log(result);
	});
