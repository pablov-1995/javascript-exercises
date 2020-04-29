function LRUCache(strArr, acc=[]) { 
  const isArrEmpty = !strArr.length;
  const isCharInAcc = !acc.includes(strArr[0]);
  
  if (isArrEmpty) return acc.join('-');
  if (isCharInAcc) {
    if (acc.length < 5) return LRUCache(strArr.slice(1), [...acc, ...[strArr[0]]])
    else return LRUCache(strArr.slice(1), [...acc, ...[strArr[0]]].slice(1))
  }
  else return LRUCache(strArr.slice(1), acc.filter(item => item != strArr[0]).concat([strArr[0]]));
}

console.log(LRUCache('["A", "B", "C", "D", "A", "E", "D", "Z"]'));