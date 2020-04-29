function OneDecremented(str) { 
  const numArray = [...str].map(Number);

  function checkArray(numbers) {
    if (numbers.length > 1) {
      if (numbers[0] - numbers[1] === 1) {
        return 1 + checkArray(numbers.slice(1));
      } else {
        return checkArray(numbers.slice(1));
      }
    }
    return 0;
  }

  return checkArray(numArray); 
}

console.log(OneDecremented('9876541110'));
console.log(OneDecremented('56'));