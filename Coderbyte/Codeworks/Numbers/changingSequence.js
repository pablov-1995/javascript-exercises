function ChangingSequence(arr) { 
  function getDiffs(numbers) {
    if (numbers.length > 1) {
        let diff = numbers[1] - numbers[0];
        return [diff].concat(getDiffs(numbers.slice(1))); 
    }
    return [];
  }
  
  let diffs = getDiffs(arr);
  const changeSign = diffs[0] > 0 ? x => x < 0 : x => x > 0;
  return diffs.find(changeSign) ? diffs.indexOf(diffs.find(changeSign)) : -1;
}

console.log(ChangingSequence([-4, -2, 9, 10]));
console.log(ChangingSequence([5, 4, 3, 2, 10, 11]));