const CheckNums = (num1, num2) => num1 === num2 ? -1 : num2 > num1;

console.log(CheckNums(8, 8));
console.log(CheckNums(8, 7));
console.log(CheckNums(8, 9));