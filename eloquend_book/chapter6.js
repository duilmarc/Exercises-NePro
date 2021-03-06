// Exercise 1 
class Vec{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    get length(){
        return Math.sqrt((this.x-0)**2 + (this.y -0)**2)
    }
    plus( anotherVector){
        let sumX = this.x + anotherVector.x
        let sumY = this.y + anotherVector.y
        return new Vec(sumX,sumY)
    }

    minus( anotherVector ){
        let sumX = this.x - anotherVector.x
        let sumY = this.y - anotherVector.y
        return new Vec(sumX,sumY)
    }
}
// Ejecution
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Exercise 2

class Group {
    constructor( ){
        this.elements = []
    }

    exists( value ){
        return this.elements.indexOf(value)
    }

    has( value ){
        if( this.exists(value) >= 0 )
            return true
        return false
    }
    add(value){
        !this.has(value) ? this.elements.push(value) : null
    }
    delete(value){
        let indexValue = this.exists(value) 
        if( this.exists(value) >= 0 )
            this.values =  this.elements.splice(indexValue, 1)
        return false
    }

    static from(array) {
        let group = new Group;
        for (let value of array) {
          group.add(value)
        }
        return group
    }

    [Symbol.iterator] = () => {
        return new GroupIterator(this)
      };
  }
  

  class GroupIterator {
    constructor(group) {
      this.elements = group.elements
      this.size = group.elements.length
      this.iterator = 0
    }
    next() {
      if (this.iterator === this.size) 
        return {done: true}
      else{
         let out = { value : this.elements[this.iterator], done: false }
         this.iterator++
         return out
      }
    }
  }

  let group =  Group.from(["a", "b", "c"]);
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
// Exercise 4 
// Accesing to prototype functions 
let map = {one: true, two: true, hasOwnProperty: true}
console.log(Object.prototype.hasOwnProperty.call(map,"one"))
