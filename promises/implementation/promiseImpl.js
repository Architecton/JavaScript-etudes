function Promise2(fn) {
	var callbacks = [], result;
	// call (resolve, reject) => {... with specified resolve and reject implementations.
	fn(function fulfill() {  // the resolve() function
		if (result) { return };
		result = arguments;
		for (var c; c=callbacks.shift();) {
			c.apply(null, arguments);
		}
	}, function reject() {  // the reject() function
		if (result) { return };
		result = arguments;
		for (var c; c=callbacks.shift();) {
			c.apply(null, arguments);
		}
	});
	// addCallback:
	addCallback = function(c) {
		if (result)
			c.apply(null, result)
		else
			callbacks.push(c);
	}
	// then:
	this.then = function(fn) {
		// Return new promise initialized with function that takes a callback.
		return new Promise2(function(c) {
			// Add callback - a function applies fn with passed arguments.
			this.addCallback(function() {
				var result = fn.apply(null, arguments);
				if (result instanceof Promise2) { // If result is a promise, add to callbacks array.
					result.addCallback(c);
				} else {
					c(result);
				}
			});
		});
	};
}




function test(person) {
	return new Promise2((resolve, reject) => {
		if (person.age >= 18 && person.sex === 'M') {
			resolve(person);
		} else {
			reject(person);
		}
	});
}

p1 = {
	age : 17,
	sex : 'M'
}

test(p1)
	.then((result) => {
		console.log(result);
	})