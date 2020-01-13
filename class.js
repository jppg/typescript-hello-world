var PointEx = /** @class */ (function () {
    function PointEx(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    PointEx.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    PointEx.prototype.getDistance = function (another) {
        //...
    };
    PointEx.prototype.getX = function () {
        return this.x;
    };
    Object.defineProperty(PointEx.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    PointEx.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this.x = value;
    };
    return PointEx;
}());
var point = new PointEx(1, 2);
var x = point.getX();
point.setX(10);
point.X = 20;
point.draw();
