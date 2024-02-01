const items = require("../iteminfo");
const {filter,cb} = require("../project/filter");

const resultFilter = filter(items,cb);
console.log(resultFilter);
