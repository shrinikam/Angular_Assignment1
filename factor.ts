function Factor(num1:number):string
{
    var fact:string="";

    for(var i=1;i<num1;i++)
    {
        if(num1 % i == 0)
        {
            fact=fact+" "+i;
        }
    }

    return fact;
}

var fact:string;

fact=Factor(20);

console.log(fact);




