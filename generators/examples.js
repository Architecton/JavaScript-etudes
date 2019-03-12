// (1) Write a generator that yield prime numbers

// primesGenerator: create a generator that yield prime numbers.
var primesGenerator = function*() {
	// isPrime: check if number is prime
	var isPrime = function(num) {
		for (var i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}

	// Start with first prime number.
	var start = 3;
	for (var i = start;;i++) {  // Go over natural numbers and yield primes.
		if (isPrime(i)) {
			yield i;
		}
	}
}

console.log("Exercise 1");

// Create instance of generator.
var g1 = primesGenerator();

// Generate first 100 prime numbers.
for (var i = 0; i < 100; i++) {
	console.log(g1.next().value);
}


// (2) Write a generator that yields integers on an interval with a specified step.
var intGenerator = function*(start, end, step) {
	var i = start;
	while(i < end) {
		yield i;
		i += step;
	}
}

console.log("Exercise 2");

for (let el of intGenerator(1, 50, 3)) {
	console.log(el);
}

// also
// console.log([...g2]);