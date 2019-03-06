// Blocking function call example
console.log("Start 1");

(() => {
	for (var i = 0; i < 1000000000; i++) {}
	console.log("Finished looping 1...");
})();

console.log("End 1");
console.log();





// Non-blocking function call example
console.log("Start 1");

setTimeout(() => {
	for (var i = 0; i < 1000000000; i++) {}
	console.log("Finished looping 2...");
}, 0);

console.log("End 1");


// Roughly speaking, setTimeout and using IO in body makes function calls non-blocking.