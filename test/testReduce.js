const items = require("../iteminfo");
const {reduce,cb} = require("../project/reduce");

const startvalue = items[0];
const resultReduce = reduce(items,cb,startvalue);
console.log(resultReduce);