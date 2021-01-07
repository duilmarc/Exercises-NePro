function loopinATriangle( numberOfTimes = 7 )
{
    console.groupCollapsed('Loopin in A Triange');
    let triangle = '#';
    for( i = 0 ; i < numberOfTimes ; ++i)
    {       
        console.log(triangle);
        triangle+= '#';
    }
    console.groupEnd();
}

//Metod 1 
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
function chessBoard(){
    console.groupCollapsed('ChessBoard Method');
    const size = 8;
    let grid = '';
    for( i = 0 ; i < size ; ++i)
    {
      for( j = 0 ; j < size ; ++j)
       {
          ( (i + j) % 2 === 0 ) ? grid+= ' ' : grid+='#'
      }
      grid += '\n';
    }
    console.log(grid);
    console.groupEnd('ChessBoard Method');
  }


loopinATriangle();
fizzBuz();
fizzBuz2();
chessBoard()
