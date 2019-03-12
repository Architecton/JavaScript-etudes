// What is the output of this code?

console.log("First example");

var foo = 1;

function bar() {
	if (!foo) {
		var foo = 10;
	}
	console.log(foo);
}
bar();

// What is the output of this code?

console.log("Second example");

var a = 1;
function b() {
	a = 10;
	return;
	function a() {}  // a is hoised to the top of the function body.
}
b();
console.log(a);

// The reason scoping can be so confusing in JavaScript is because 
// it looks like a C-family language. Consider the following C program:

/*
#include <stdio.h>
int main() {
	int x = 1;
	printf("%d, ", x); // 1
	if (1) {
		int x = 2;
		printf("%d, ", x); // 2
	}
	printf("%d\n", x); // 1
}
*/

// The output from this program will be 1, 2, 1. 
// This is because C, and the rest of the C family, has block-level scope. 
// When control enters a block, such as the if statement, 
// new variables can be declared within that scope, without affecting the outer scope. 
// This is not the case in JavaScript.

console.log("Third example");

var x = 1;
console.log(x);
if (true) {
	var x = 2;
	console.log(x);
}
console.log(x);

// JavaScript has function-level scope. 
// This is radically different from the C family. 
// Blocks, such as if statements, do not create a new scope. 
// Only functions create a new scope.

// To a lot of programmers who are used to languages like C, C++, C#, or Java, 
// this is unexpected and unwelcome. 
// Luckily, because of the flexibility of JavaScript functions, there is a workaround. 
// If you must create temporary scopes within a function, do the following:

console.log("Fourth example");

(function foo() {
	var x = 1;
	if (x) {
		(function () {
			var x = 2;  // x is 2 in this scope
			console.log(x);
		}());
	}
	console.log(x);  // here, x is still 1.
})();

/*
In JavaScript, a name enters a scope in one of four basic ways:

1. Language-defined: All scopes are, by default, given the names this and arguments .html
2. Formal parameters: Functions can have named formal parameters, which are scoped to the body of that
function.
3. Function declarations: These are of the form function foo() {}
4. Variable declarations: These take the form var foo;
*/

/*

Function declarations and variable declarations are always moved ("hoisted") 
invisibly to the top of their containing scope by the JavaScript interpreter.
Function parameters and language-defined names are, obviously, already there.

This means that code like this:

function foo() {
	bar();
	var x = 1;
}

is actually interpreted like this:

function foo() {
	var x;
	bar();
	x = 1;
}

It turns out that it does not matter whether the line that 
contains the declaration would ever be executed. The following two functions
are equivalent:

function foo() {
	if (false) {
		var x = 1;
	}
	return;
	var y = 1;
}

function foo() {
	var x, y;
	if (false) {
		x = 1;
	}
	return;
	y = 1;
}

Notice that the assignment portion of the declarations were not hoisted. Only the name is hoisted. This is not the case
with function declarations, where the entire function body will be hoisted as well. But remember that there are two
normal ways to declare functions. Consider the following JavaScript:

function test() {
	foo();  // TypeError "foo is not a function"
	bar();  // "this will run!"
	var foo = function () {  // function expression assigned to local variable 'foo'
		alert("this won't run!");
	}
	function bar() {  // function declaration, given the name 'bar'
		alert("this will run!");
	}
}
test();

The most important special case to keep in mind is name resolution order. Remember that there are four ways for
names to enter a given scope. The order I listed them above is the order they are resolved in. In general, if a name has
already been defined, it is never overridden by another property of the same name. This means that a function
declaration takes priority over a variable declaration. This does not mean that an assignment to that name will not
work, just that the declaration portion will be ignored. There are a few exceptions:


- The built-in name arguments behaves oddly. It seems to be declared following the formal parameters, but
before function declarations. This means that a formal parameter with the name arguments will take
precedence over the built-in, even if it is undefined. This is a bad feature. Don’t use the name arguments as a
formal parameter.

- Trying to use the name this as an identifier anywhere will cause a SyntaxError. This is a good feature.

- If multiple formal parameters have the same name, the one occurring latest in the list will take precedence, even
if it is undefined.





 -- Named Function Expressions --

You can give names to functions defined in function expressions, with syntax like a function declaration. This does not
make it a function declaration, and the name is not brought into scope, nor is the body hoisted. Here’s some code to
illustrate what I mean:

foo(); // TypeError "foo is not a function"
bar(); // valid
baz(); // TypeError "baz is not a function"
spam(); // ReferenceError "spam is not defined"

var foo = function () {};  // anonymous function expression ('foo' gets hoisted)
function bar() {};  // function declaration ('bar' and the function body get hoisted)
var baz = function spam() {};  // named function expression (only 'baz' gets hoisted)

foo(); // valid
bar(); // valid
baz(); // valid
spam(); // ReferenceError "spam is not defined"



*/