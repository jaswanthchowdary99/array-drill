function find(elements,cb,findElement){
    let findingElement = undefined;
    for(let index = 0; index < elements.length; index++){
        let element = elements[index];
        if(cb(element,findElement)){
            return element;
            break;
        }
    }
}
function cb(element,findElement){
    if(element === findElement){
        return true;
    }
    else{
        return false;
    }
}
module.exports = {find,cb};