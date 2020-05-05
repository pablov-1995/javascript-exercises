function NonrepeatingCharacter(str) { 
  const duplicateChecker = (char, index) => str.indexOf(char) != index;
  const duplicateChars = [...str].filter(duplicateChecker);    
  return [...str].find(char => !duplicateChars.includes(char));
}
   
// keep this function call here 
console.log(NonrepeatingCharacter("abcdef"));
console.log(NonrepeatingCharacter("hello world hi hey"));