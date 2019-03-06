var testList = [1, 2, 3, 4, 5];

var multiplyBy = function(k) {
	return l => l.map(el => el*k);
}

console.log((multiplyBy(7))(testList))