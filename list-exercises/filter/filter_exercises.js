var testList = [1, 2, 3, 4, 5, 6, 7, 8];

function greaterThan(k) {
	return l => l.filter(el => el > k);
}

console.log((greaterThan(4))(testList));