function RemoveBrackets(str) { 
  const openBrackets = str.match(/\(/g).length; 
  const closedBrackets = str.match(/\)/g).length;
  
  return Math.abs(openBrackets - closedBrackets); 
}

console.log(RemoveBrackets("(()("));
console.log(RemoveBrackets("(())()((("));