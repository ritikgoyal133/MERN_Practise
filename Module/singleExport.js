module.exports = () => console.log("This is a single export.");

//IIFE
(function sayHelloWorld() {
    console.log("Hello, World!");
})();

function addSum(a,b) {
    return a + b;
}

addSum(2,3);