function BitwiseOne(strArr) { 
  let decRes = parseInt(strArr[0], 2) | parseInt(strArr[1], 2);
  const desiredLength = strArr[0].length;
  return decRes.toString(2).padStart(desiredLength, '0');
}

console.log(BitwiseOne(["100", "000"]));
console.log(BitwiseOne(["00011", "01010"]));