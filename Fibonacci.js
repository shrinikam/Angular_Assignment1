function Fibonacci(num1) {
    var Fab = [];
    var Fabstr = "";
    var count = 1;
    for (var i = 0; count < num1; i++) {
        if (i == 0 || i == 1) {
            Fab[i] = 1;
        }
        else {
            Fab[i] = Fab[i - 1] + Fab[i - 2];
            count = Fab[i];
        }
    }
    for (var j = 0; j < Fab.length; j++) {
        Fabstr = Fabstr + " " + Fab[j];
    }
    console.log(Fabstr);
}
Fibonacci(21);
