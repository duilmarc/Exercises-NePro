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

/// Exercises 3 

function every( array , test ) {
    iterator = 0
    while( iterator < array.length ){
        if( !test(array[iterator])) return false
        iterator++
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


// Exercises 4
// Need a array of Scripts like this 
// script =  {
//   name: "Coptic",
//   ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//   direction: "ltr",
//   year: -200,
//   living: false,
//   link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
// }

// We need a function to find a value of character in ranges get the characterScript
// This functions was obtain of Eloquent Javascript
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
// 
// the next functions take a group of array, use a function as argument to
// get a list of items that accept the function callled groupName 
// and return how many items match in the groupName function 
// See Eloquend JavaScript Chapter 5
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function dominantDirection(text) {
    // get the scripts that text match
    let scripts = countBy(text, char => {
      // get the script that char of text match
      let script = characterScript(char.codePointAt(0))
      // set the script with none if it haven't a direction
      return script ? script.direction : "none"
       // filter just script that has direction
    }).filter((script) => script.name != "none") // this case name == direction 
    // if no found any script match
    if ( scripts.length === 0) return 'ldr'
    // find the major count of matchs with reduce
    let majorCountScript = scripts.reduce(( scriptPrev,scriptNex ) => scriptPrev.name > scriptNex.name ? scriptPrev : scriptNex)
    return majorCountScript.name
  }

    console.log(dominantDirection("Hello!"));
    // → ltr
    console.log(dominantDirection("Hey, مساء الخير"));
    // → rtl
