// Exercise 1
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}


function reliableMultiply(a, b) {
    while(true){
        try{
            return primitiveMultiply(a,b)
        }
        catch(err)
        {
            if(!(err instanceof MultiplicatorUnitFailure))
            {
                throw err
            }
        }
    }
}
// Execution
console.log(reliableMultiply(8, 8));

// Exercise 2

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
function withBoxUnlocked(body) {
   box.unlock()
   try{
       return body()
   }
   catch(err) {
          throw err
   }
   finally{
      box.lock()
   }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
// Execution
console.log(box.locked);
// → true



