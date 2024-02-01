const items = require("../iteminfo");
const {find,cb} = require("../project/find");

const findElement = 4;
const resultFindingElement = find(items,cb,findElement);
console.log(resultFindingElement);

