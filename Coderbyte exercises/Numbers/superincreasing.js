function Superincreasing(arr) { 
  
  function getDiffs(numbers) {
    if (numbers.length > 1) {
      let diff = numbers[1] - numbers[0];
        return [diff].concat(getDiffs(numbers.slice(1))); 
      }
    return [];
  }
      
  let diffs = getDiffs(arr);
  
  for (let i = 1; i < diffs.length; i++) {
    if (diffs[i] <= diffs[i-1]) {
      return false;
    }
  }
  
  return true;
}

console.log(Superincreasing([1,2,5,10]));
console.log(Superincreasing([1,2,3,4]));