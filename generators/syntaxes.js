// 1 //////////////////////////////////

for (let val of ['a', 'b', 'c']) {
	console.log(val);
}




// 2 //////////////////////////////////

console.log([...'abc']);




// 3 //////////////////////////////////

function *gen() {
	yield* ['a', 'b', 'c'];
}

for (let val of gen()) {
	console.log(val);
}