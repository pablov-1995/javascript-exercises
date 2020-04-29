function NonrepeatingCharacter(str) { 
  const duplicateChecker = (char, index) => str.indexOf(char) != index;
  const deduplicateFilter = (item, pos) => duplicateChars.indexOf(item) === pos;

  const duplicateChars = [...str].filter(duplicateChecker);
  const uniqueDuplicateChars = duplicateChars.filter(deduplicateFilter).join('');
    
  return [...str].find(char => !uniqueDuplicateChars.includes(char));
}
   
// keep this function call here 
console.log(NonrepeatingCharacter("abcdef"));
console.log(NonrepeatingCharacter("hello world hi hey"));