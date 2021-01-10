/// Exercise 1 

/// array [ [ 1, 2, 3], [ 4 , 5 ] , [ 6] ] 
// solution [ 1 , 2, 3 , 4 , 5 ,6]
// take as 1 the groups


let arrays = [[1, 2, 3], [4, 5], [6]];
function flattening(array) {
    return arrays.reduce( (array,currentArray ) => array.concat(currentArray)  ,[])
}

console.log(arrays)
console.log(flattening(arrays))

/// Exercises 2 

function ownLoop( value, testFunction, updateFunction, bodyfunction ){
    while(true){
        if ( !testFunction(value) ) break
        bodyfunction(value)
        value = updateFunction(value)
    }

}

 ownLoop( 5 , n=>n>0 , n=>n-1, console.log)
