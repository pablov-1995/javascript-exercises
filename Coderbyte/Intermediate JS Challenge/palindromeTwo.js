function PalindromeTwo(str) { 
  const cleanCharsLst = [...str.toLowerCase().replace(/\W/g, '')];
  let retStr = '';
  for (let i = cleanCharsLst.length - 1; i >= 0; i--) {
    retStr += cleanCharsLst[i];
  }
  return retStr === cleanCharsLst.join('');
}

console.log(PalindromeTwo('Noel - sees Leon'));
console.log(PalindromeTwo('A war at Tarawa!'));