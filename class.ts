class PointEx {
    constructor(private x?: number, private y?: number)
    {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: PointEx)
    {
        //...
    }

    getX()
    {
        return this.x;
    }

    get X()
    {
        return this.x;
    }

    setX(value){
        if(value < 0)
            throw new Error('Value cannot be less than 0.');

        this.x = value;
    }

    set X(value){
        this.x = value;
    }
}

let point = new PointEx(1,2);
let x = point.getX();
point.setX(10);
point.X = 20;
point.draw();
