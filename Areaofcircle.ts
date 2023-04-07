function Area(radius:number,PI:number=3.14):number
{
    return radius*radius*PI;
}

var CircleArea:number;

CircleArea=Area(5);

console.log("Area of circle is "+CircleArea);

