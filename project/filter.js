function filter(elements, cb){

    const filteredelements = [];
    for(let index = 0; index < elements.length; index++){
        let element = elements[index];
        let filterelement = cb(element);

        if(filterelement !== undefined ){
            filteredelements.push(filterelement);
        }
    }
    return filteredelements;
}
 function cb(element){
    if(element % 2 == 0){
        return element;
    }
 }

 module.exports = {filter,cb};