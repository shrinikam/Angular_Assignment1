function Maximum(num1, num2, num3) {
    var max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
var num1 = 23;
var num2 = 89;
var num3 = 6;
var maxNum = Maximum(num1, num2, num3);
console.log("Maximum number is ".concat(maxNum));
