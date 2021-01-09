function range(start,end){
    let init = start > end ? end : start;
    const values = Array.from({length: Math.abs(end-start)+1} ,
    function (item , index){
        return index + init;
    });
    return values;
}

function range(start,end, step){
    console.log((Math.abs(end-start)+1)/Math.abs(step))
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
