var dict = {};  // Create a new Object instance to serve as dictionary.
// var dict = new Object();

dict['one'] = 1;  // Add values to dictionary.
dict.two = 2;

console.log(dict.one);  // Accessing values in the dictionary.
console.log(dict.two);

for (var key in dict) {  // Iterate over keys in dictionary.
	console.log(dict[key]);
}

// Storing a function in a dictionary
dict.someFunc = (a) => console.log("Parameter: " + a);

dict.someFunc('Tralala');