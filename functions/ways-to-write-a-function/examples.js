// ########### (1) function declaration ###########
function isEven(num) {  
	return num % 2 === 0;
}

console.log(isEven(24));
console.log(isEven(11));






// ########### (2) function expression ###########

var count = function(array) {
	return array.length;
}

var methods = {  
	numbers: [1, 5, 8],
	sum: function() {  // function expression
		return this.numbers.reduce(function(acc, num) {
			return acc + num;
		});
	}
}

console.log(count([5, 7, 8]));
console.log(methods.sum());




// ########### (3) shorthand method definition ###########

var collection = {  
	items: [],
	add(...items) {  // ...items refers to an unspecified number of arguments that will be passed as an array with name items.
		this.items.push(...items);  // The spread operator is used to expand elements of an iterable (like an array) into places where multiple elements can fit
	},                              // here - array to function arguments.
	get(index) {
		return this.items[index];
	}
};
collection.add('C', 'Java', 'Python');  
console.log(collection.get(1));


// compute methods and properties

var addMethod = 'add', getMethod = 'get';
var collection = {  
	items: [],
	[addMethod](...items) {  // [addMethod] names a method using value of variable in brackets.
		this.items.push(...items);
	},
	[getMethod](index) {
		return this.items[index];
	}
};
collection[addMethod]('C', 'Java', 'Python');  
console.log(collection[getMethod](2))





// ########### (4) arrow function ###########

var absValue = (number) => {
	if (number < 0) {
		return -number;
	} else {
		return number;
	}
}

console.log(absValue(-10));
console.log(absValue(5));





// ########### (5) generator functions ###########

function* indexGenerator() {  
	var index = 0;
	while(true) {
		yield index++;
	}
}

var g = indexGenerator();
console.log("Generating 10 values:");
for (var i = 0; i < 10; i++) {
	console.log(g.next().value);
}




// ########### (6) new Function ###########

var numberA = 'numberA', numberB = 'numberB';  
var sumFunction = new Function(numberA, numberB,  
	'return numberA + numberB'
);
console.log(sumFunction(10, 15));