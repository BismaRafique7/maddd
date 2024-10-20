//arrow
const multiply = (a, b) => {a * b;}


console.log(multiply(4, 5));
//anonymous function.
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
  };
  
  
  console.log(sayGoodbye("Bisma")); 
//function
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  
  console.log(greet("bisma")); 
  //settimeout
  function function1() {
    console.log("i love pakistan.");
  }
  
 
  setTimeout(function1, 2000);
  function function2() {
    console.log("i love Islam.");
  }
  
  function2();
  //promises
  let myPromise = new Promise((resolve, reject) => {
    let isSuccessful = true;  
    
    if (isSuccessful) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  });
  
 
  myPromise
    .then((message) => {
      console.log(message);  
    })
    .catch((error) => {
      console.error(error); 
    });
  
  