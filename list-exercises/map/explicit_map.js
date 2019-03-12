// Recursive implementation
function map(f, l) {
	if (l.length == 0) {
		return [];
	} else {
		return [f(l[0])].concat(map(f, l.slice(1)));
	}
}

console.log(map(el => el*2, [1, 2, 3, 4, 5]));

// Iterative implementation
function map2(f, l) {
	var r = l.slice()
	for (var i = 0; i < r.length; i++) {
		r[i] = f(r[i]);
	}
	return res;
}

console.log(map2(el => el*2, [1, 2, 3, 4, 5]));