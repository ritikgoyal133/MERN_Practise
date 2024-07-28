//fn is imported using file path
const greet = require('./greet');

greet('Rahul');
greet('Mohan');


const singleExport = require('./singleExport');
singleExport();

const multipleExports = require('./multipleExports');
multipleExports.addTwoNumber(5,3);
multipleExports.multply(5,3);