function Area(radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    return radius * radius * PI;
}
var CircleArea;
CircleArea = Area(5);
console.log("Area of circle is " + CircleArea);
