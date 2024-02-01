function flatten(elements){
    if(!Array.isArray(elements)){
        console.log(undefined);
    }
    for(let index = 0; index < elements.length; index++){
        let element = elements[index];
        if(Array.isArray(element)){
            flatten(element);

        }
        else{
            console.log(element);
        }
    }
}
module.exports = flatten;