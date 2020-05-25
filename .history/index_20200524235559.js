// Your code here
class Polygon{
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (var int of this.sides) {
      sum += int
    }
    return sum
    }
}

class Triangle extends Polygon{

    get isValid(){
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let side1 = this.side[0]
        let side2 = this.side[1]
        let side3 = this.side[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }



    
}