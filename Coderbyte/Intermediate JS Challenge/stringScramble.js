function StringScramble(str1,str2) {
  for (char of str2) {
    let charMatch = RegExp(String.raw`${char}`, 'g');
    if (!str1.includes(char)) return false
    if (str1.match(charMatch).length < str2.match(charMatch).length) return false
  }
  return true;
}
console.log(StringScramble('coder', 'cdoer'));
console.log(StringScramble('coodrebtqqkye', 'coderbyte'));