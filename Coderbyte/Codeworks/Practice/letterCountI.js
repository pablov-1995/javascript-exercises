function LetterCountI(str) { 

  function maxTimesCharIsRepeated(word) {
    const countChar = char => [...word].filter(item => item === char).length;
    const maxTimes = Math.max(...[...word].map(countChar));
    return maxTimes;
  }

  const words = str.split(/[ ,]+/);
  let retVal = ['', 1];
  for (word of words) {
    wordMaxRepetition = maxTimesCharIsRepeated(word);
    if (wordMaxRepetition > retVal[1]) retVal = [word, wordMaxRepetition];
  }
  return retVal[0] ? retVal[0] : -1;
}

console.log(LetterCountI("Hello apple pie"));
console.log(LetterCountI("No words"));