function Factor(num1) {
    var fact = "";
    for (var i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            fact = fact + " " + i;
        }
    }
    return fact;
}
var fact;
fact = Factor(20);
console.log(fact);
