/////////////////////////// Exercise 1 
function range1(start,end){
    let init = start > end ? end : start;
    const values = Array.from({length: Math.abs(end-start)+1} ,
    function (item , index){
        return index + init;
    });
    return values;
}

function range(start,end, step=1){
    const values = Array.from({length: Math.ceil((Math.abs(end-start)+1)/Math.abs(step))} ,
    function (item , index){
       return start + step*index;
    });
    return values;
    
}

function sum( numbers ){
    let total = 0 
    for( number of numbers )
        total += number
    return total
}
///////////// Execution
console.log(range1(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
/////////////////////////////////////////////////////////////////////////////

/////////////////////////// Exercise 2
function reverseArray( values ){
    let reverse = []
    while(values.length){
        reverse = [ ...reverse , values.pop()]
    }
    return reverse
}
function reverseArrayInPlace( arrayValue ){
    lastvalue = arrayValue.pop()
    arrayValue.unshift(lastvalue)
}
////////////////////////// Execution
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
/////////////////////////////////////////////////////////////////////////////
