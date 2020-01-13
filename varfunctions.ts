let log = function(message)
{
    console.log(message);
}

let doLog = (message) => console.log(message);

log('teste');

interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    console.log(point);
}

drawPoint({
    x: 14, 
    y: 8
});

let getDistance = (pointA: Point, pointB: Point) => {

}