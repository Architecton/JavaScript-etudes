console.log("first line...");


// define function that prints something to the console.
function delayed() {
  console.log("inside delayed...");
}

// Call function delayed with a delay of 3000 milliseconds.
setTimeout(delayed, 3000);

// Call an anonymous function with a delay of 1000 milliseconds.
setTimeout(function() {
	console.log("inside anonymous function...")
}, 1000);


console.log("last line...");