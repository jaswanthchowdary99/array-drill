const items = require("../iteminfo");
const {map,cb} = require("../project/map");

const resultFilter = map(items,cb);
console.log(resultFilter);
