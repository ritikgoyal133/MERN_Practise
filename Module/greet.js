//Module -> Modules in Node.js are essential for organizing and reusing code. Whether they are built-in, user-defined, or third-party, modules provide a way to structure applications efficiently.

// User-defined Modules
// These are modules created by the developer to encapsulate specific functionality. They can be exported and imported in different parts of the application.

function sayHello(name) {
  console.log(`Hello ${name}`);
}

//function exported using module.exports
module.exports = sayHello;