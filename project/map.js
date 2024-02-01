function map(elements, cb) {
    let squareelements =[];
    for(let index = 0; index < elements.length; index++){
       let element = elements[index];
       var squareelement = cb(element);
       squareelements.push(squareelement);
    }
    return squareelements;
}

function cb(element){
  let newelement = element*element;
  return newelement;
}
module.exports = {map,cb};