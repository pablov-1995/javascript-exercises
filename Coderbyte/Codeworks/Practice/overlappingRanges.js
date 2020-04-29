function OverlappingRanges(arr) { 
  const range = (start, stop) => [...Array(stop + 1).keys()].slice(start);
  const intersect = range(Math.max(arr[0], arr[2]), Math.min(arr[1], arr[3]));
  return intersect.length >= arr[arr.length - 1];
}

console.log(OverlappingRanges([5,11,1,5,1]));
console.log(OverlappingRanges([1,8,2,4,4]));