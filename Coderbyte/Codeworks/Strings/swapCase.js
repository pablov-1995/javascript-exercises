function SwapCase(str) { 
  let capLetters = /[A-Z]/g;
  let lowcasLetters = /[a-z]/g;
  
  let retStr = '';

  for (char of str.split('')) {
    if (char.match(capLetters)) {
      retStr += char.toLowerCase();
    } 
    else if (char.match(lowcasLetters)) {
      retStr += char.toUpperCase();
    }
    else {
      retStr += char;
    }
  }
  return retStr;
}

console.log(SwapCase("Hello-LOL"));
console.log(SwapCase("Sup DUDE!!?"));