const VowelCount = str => str.match(/[aeiou]/g).length;

console.log(VowelCount("hello"));
console.log(VowelCount("coderbyte"));