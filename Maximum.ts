function Maximum(num1: number, num2: number, num3: number): number 
{
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}
const num1 = 23;
const num2 = 89;
const num3 = 6;
const maxNum = Maximum(num1, num2, num3);
console.log(`Maximum number is ${maxNum}`);
