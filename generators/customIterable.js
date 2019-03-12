// myIterable: go o
var myIterable = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	}
}

// Iterating over a custom iterable.
for (let value of myIterable) {
	console.log(value);
}

// Also
console.log([...myIterable]);

/*
In order to be iterable, an object must implement the @@iterator method, meaning that the
object (or one of the objects up its prototype chain) must have a property with a
Symbol.iterator key.
*/