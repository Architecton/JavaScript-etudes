function makeRangeIterator(start = 0, end = Infinity, step = 1) {
	let nextIndex = start;
	let iterationCount = 0;

	const rangeIterator = {

		// the next function that returns the next state.
		next: function() {
			let result;
			if (nextIndex <= end) {  // If not finished...
				result = { value: nextIndex, done: false }  // Return value and status.
				nextIndex += step;  // Increment state index.
				iterationCount++;   // Increment iteration counter.
				return result;  	// Return result.
			}
			// If done, return iteration counter value and status.
			return { value: iterationCount, done: true }
		}
	};
	return rangeIterator;
}



iterator = makeRangeIterator(0, 10, 1);
for (var i = 0; i < 10; i++) {
	console.log(iterator.next().value);
}