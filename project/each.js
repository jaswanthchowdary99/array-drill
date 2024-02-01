function each(elements,cb){
    for(let i = 0; i < elements.length; i++){
        let element = elements[i];
        let index = i;
        cb(element,index);
    }
}
function cb(element,index){
    console.log(`${element} ${index}`);
}
module.exports = {each,cb};