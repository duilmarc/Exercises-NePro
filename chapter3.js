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

function countBs(word){
    let counterHits = 0;
    for( let i = 0 ; i < word.length ; i++){
        if( word[i] == 'B') 
          counterHits++;
    }
  	return counterHits++;
}

function countChar(word,characterSearch){
    let counterHits = 0;
    for( let i = 0 ; i < word.length ; i++){
        if( word[i] == characterSearch) 
          counterHits++;
    }
  	return counterHits;
}
