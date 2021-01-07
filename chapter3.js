function minimun(number1,number2){
    (number1-number2>0) ? console.log(`minimun: ${number2}`) : console.log(`minimun: ${number1}`) 
}

function isEven(number){
    function recursive(number){
        if(number < 0 ){
            return null
        }
        else{
            if(number===1){
               return false
            }
            else
            if(number === 0)
                return true;
            else{
                return find(number-2)
            }
        }
    }
    return recursive(number);
}
