function SimpleEvens(num) {
  const isEven = elem => elem % 2 == 0;
  const numArray = [...num.toString()].map(Number);
  return numArray.every(isEven);
}

console.log(SimpleEvens(2222220222));
console.log(SimpleEvens(20864646452));