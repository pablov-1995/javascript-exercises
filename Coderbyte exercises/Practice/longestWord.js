function LongestWord(sen) { 
  const words = sen.match(/\w+/g);
  let longWord = '';
  words.forEach(word => (word.length > longWord.length) ? longWord = word : null)
  return longWord;
}

console.log(LongestWord("fun&!! time"));
console.log(LongestWord("I love dogs"));