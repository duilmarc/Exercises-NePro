function LoopinATriangle( numberOfTimes )
{
    let triangle = '#';
    for( i = 0 ; i < numberOfTimes ; ++i)
    {       
        console.log(triangle);
        triangle+= '#';
    }
}


function fizzBuz(){
    console.groupCollapsed('FizzBuzz First Method');
    for( i = 1 ; i <= 100 ; ++i){
        if( i % 3 !== 0 && i % 5 !== 0)
            console.log(i);
        else{
            i % 3 ? console.log('Buzz') : console.log('fuzzy');
        }   
    }
    console.groupEnd();
}
//Metod 2 
function fizzBuz2(){
    console.groupCollapsed('FizzBuzz Second Method');
    let flag = true;
    for( i = 1 ; i <= 100 ; ++i){
        if( i % 3 === 0){
            (i % 5 === 0) ? console.log(i,'fuzzyBuzz') : console.log(i,'fuzzy');
        } 
        else 
            (i % 5 === 0) ? console.log(i,'Buzz') : console.log(i);
    }
    console.groupEnd();
}
