// (1) What’s the result of executing this code and why?
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();



// Answer: undefined, 2
// a is not yet defined on line 3.
// foo is defined in the same namespace on line 7.


// (2) What is the result of the following code?
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

console.log(firstResult);
console.log(result);

// Answer: function, 5
// The parameter number does not appear in the body of the function.
// otherFunction has the variable a set to 5 in the environment it is defined.


// (3) What is the result of the following code? Explain your answer.
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());  // Aurelio De Rosa

var test = obj.prop.getFullname;  

console.log(test());


// Answer:
// Aurelio De Rosa, undefined


// (4) What will you see in the console for the following example?

var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);

// 1

/*
SAME AS:

a is now a local variable in the function's scope.

function b() {
    var a = function() {}
    a = 10;
    return;
}


*/