function PrimeMover(num) { 
  function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    let sq = Math.sqrt(n);
    for (let i = 2; i <= sq; i++) if (n % i == 0) return false;
    return true;
  }

  function *genPrime() {
    let count = 0;
    while(1) {
      if (isPrime(count)) yield count;
      count++;  
    }
  }

  numGen = genPrime();
  let retVal;
  for (let i = 0; i < num; i++) {
    retVal = numGen.next().value;
  }

  return retVal;
}

console.log(PrimeMover(16));
console.log(PrimeMover(71));