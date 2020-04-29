function NumberAddition(str) { 
  const numbers = str.match(/\d+/g).map(Number);  
  return numbers.reduce((number, acc) => number + acc, 0);
}

console.log(NumberAddition("75Number9"));
console.log(NumberAddition("10 2One Number*1*"));