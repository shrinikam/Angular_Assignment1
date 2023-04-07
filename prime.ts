function PRIME(num1:number):void
{
    for(var i=2;i<num1;i++)
    {
        if(num1 % i == 0)
        {
           console.log(" It is not prime number");
           return;
        }
    }

    console.log(" It is prime number");
}

PRIME(11);
