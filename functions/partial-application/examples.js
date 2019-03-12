function multiply(a, b, c) {
	return a*b*c;
}

// Apply first parameter.
multiply = multiply.bind(null, 5);
console.log(multiply(2, 3));

// Apply second parameter.
multiply = multiply.bind(null, 2);
console.log(multiply(3));

// Apply third parameter.
multiply = multiply.bind(null, 3);
console.log(multiply());