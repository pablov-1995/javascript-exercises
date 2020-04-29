function Division(num1,num2) { 

  const intersection = (arr1, arr2) => arr1.filter(number => arr2.includes(number));
  
  function getFactors(num) {
    const factors = [1, num];  
    const sq = Math.sqrt(num);
    for (let i = Math.floor(sq); i > 1; i--) {
      if (num % i == 0) [i, num/i].forEach(item => factors.push(item)); 
    }
    return factors;
  }
  factors1 = getFactors(num1);
  factors2 = getFactors(num2);
  return Math.max(...intersection(factors1, factors2));
}

console.log(Division(7, 3));