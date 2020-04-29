function RunLength(str) { 
  const uniqueChars = [...str].filter((item, pos) => [...str].indexOf(item) == pos);
  
  function strConstructor(charArr, acc=null) {
    if (!charArr.length) return acc.join('')
    else if (!acc) return strConstructor(charArr.slice(1), [1, charArr[0]])
    else if (charArr[0] == acc[1]) return strConstructor(charArr.slice(1), [acc[0] + 1, acc[1]])
    else return acc.join('') + strConstructor(charArr.slice(1), [1, charArr[0]])
  }
  return strConstructor([...str])

}
console.log(RunLength("aabbcde")); //2a2b1c1d1e
console.log(RunLength("wwwbbbw")); //3w3b3w