/// Exercise 1 

/// array [ [ 1, 2, 3], [ 4 , 5 ] , [ 6] ] 

// solution [ 1 , 2, 3 , 4 , 5 ,6]

// take as 1 the groups


let arrays = [[1, 2, 3], [4, 5], [6]];
function flattening(array) {
    return arrays.reduce( (array,currentarray ) => array.concat(currentarray)  ,[])
}

console.log(arrays)
console.log(flattening(arrays))
