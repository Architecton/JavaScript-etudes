// Recursive implementation
var filter = function(pred, l) {
	if (l.length == 0 ) {
		return [];
	}
	if (pred(l[0])) {
		return [l[0]].concat(filter(pred, l.slice(1)));
	} else {
		return filter(pred, l.slice(1));
	}
}

console.log(filter(x => x >= 0, [1, 2, -1, -2, 3, 2, -5, 7]));


// Iterative implementation
var filter2 = function(pred, l) {
	res = [];
	for (var i = 0; i < l.length; i++) {
		if (pred(l[i])) {
			res.push(l[i]);
		}
	}
	return res;
}

console.log(filter2(x => x >= 0, [1, 2, -1, -2, 3, 2, -5, 7]));