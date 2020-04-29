function PrimeTime(num) { 
  const isPrime = (num, acc) => (num - acc) > 2 ? ((num % (num - acc)) ? isPrime(num, acc+1) : false) : true;
  return isPrime(num, 1);
}

console.log(PrimeTime(73)); // true
console.log(PrimeTime(63)); // false