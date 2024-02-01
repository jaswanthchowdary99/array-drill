function reduce(elements, cb,startvalue){
    if(!startvalue){
       startvalue = 0;
    }
    let sum =0;
    for(let index = 0; index < elements.length; index++){
        let element = elements[index];
         sum = cb(element,sum);
           
    }
    return sum;
}
function cb(element,sum){
    
    let newelement = element + sum;
    return  newelement;
}

module.exports = {reduce,cb};
