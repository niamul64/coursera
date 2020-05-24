// yaakovGreeter.sayHello();
// johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
// (function (name) {
//   console.log("Hello " + name);
// })("Coursera!");





   (function(window) {
   
     var obj = {};
  
   obj.dreamOn = function () {
     console.log("I want to see the global scope! Let me out!");
    };
  
    window.doer = obj;
     })(window);
  
    doer.dreamOn();



    
  //  (function(window) {
   
  //   var obj = {};
 
  // obj.dreamOn = function () {
  //   console.log("I want to see the global scope! Let me out!");
  //  };
 
  //  window.obj = obj;
  //   })(window);
 
  //   obj.dreamOn();