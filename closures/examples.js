/* Wikipedia: In programming languages, a closure, also lexical closure or function closure, 
is a technique for implementing lexically scoped name binding in a language with 
first-class functions. Operationally, a closure is a record storing a function
together with an environment. The environment is a mapping associating each 
free variable of the function (variables that are used locally, 
but defined in an enclosing scope) with the value or reference to which 
the name was bound when the closure was created.[b] Unlike a plain function, 
a closure allows the function to access those captured variables through the 
closure's copies of their values or references, even when the function is invoked 
outside their scope. */

/* The ability to treat functions as values, combined with the fact that local
bindings are re-created every time a function is called, brings up an interesting
question. What happens to local bindings when the function call that created
them is no longer active?
The following code shows an example of this. It defines a function, wrapValue ,
that creates a local binding. It then returns a function that accesses and returns
this local binding. */

function wrapValue(n) {
	let local = n;  // Define a variable local to a function.
	return () => local;  // Return a function that returns the defined local variable.
}

console.log(wrapValue(1)());
console.log(wrapValue(2)());

/* This is allowed and works as you’d hope—both instances of the binding can
still be accessed. This situation is a good demonstration of the fact that 
LOCAL BINDINGS ARE CREATED ANEW for every call, and different calls can’t trample on
one another’s local bindings. */

/* This feature—being able to reference a specific instance of a local binding in
an enclosing scope is called closure. A function that references bindings from
local scopes around it is called a closure. This behavior not only frees you from
having to worry about lifetimes of bindings but also makes it possible to use
function values in some creative ways. */

function multiplier(factor) {
	return number => number * factor;
}

console.log(multiplier(2)(5));

/* A good mental model is to think of function values as containing 
both the code in their body and the environment in which they are created. 
When called, the function body sees the environment in which it was created, 
not the environment in which it is called. */

/* In the example, multiplier is called and creates an environment in which its
factor parameter is bound to 2. The function value it returns, which is stored
in twice, remembers this environment. So when that is called, it multiplies its
argument by 2. */