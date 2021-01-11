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

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
