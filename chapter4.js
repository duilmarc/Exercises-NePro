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
    let middle = Math.floor(arrayValue.length/2);
    let endIndex = arrayValue.length-1;
    let temp;
    for( let startIndex = 0 ; startIndex < middle ; ++startIndex ){
        temp = arrayValue[startIndex];
        arrayValue[startIndex] = arrayValue[endIndex]
        arrayValue[endIndex] = temp
        endIndex--
    }

}
////////////////////////// Execution
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
/////////////////////////////////////////////////////////////////////////////

/////////////////////////// Exercise 3

function arrayToList( array ){
    if (array.length === 0)
        return null
    let list = { value : array.shift()}
    return { ...list , rest: arrayToList(array)}
}

function listToArray(list) {
    let nodeRest = list
    let array = []
    while( nodeRest !== null)
    {
        array.push(nodeRest.value)
        nodeRest = nodeRest.rest
    }
    return array
}

function prepend( _value, _rest ){
    return { value: _value , rest : _rest}
}

function nth( list , index) {
    let node = list
    let count = 0 
    while( count < index)
    {
        node = list.rest
        count++
    }
    return node !== null ? node.value : -1
}
console.log(arrayToList([]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([]), 0));
// → 20
////////////////////////////////////////////////////

/////////////////////////// Exercise 4

function deepEqual( element_a , element_b ){
    if( typeof element_a == "object" && typeof element_b == "object" ) {
        let flag = true;
        for( let key of Object.keys(element_a))
            flag = flag && deepEqual(element_a[key],element_b[key])
        return flag
    }
    if(typeof element_a === typeof element_b){
        if (element_a === element_b)
        return true
    }
    return false
        
}

let obj = {here: {is: "an"}, object: 2};    

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
