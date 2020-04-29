function ArithGeoII(arr) { 
  const divsByPrevElem = [];
  const subsWithPrevElem = [];
  for (let i = arr.length - 1; i > 0; i--) {
    divsByPrevElem.push(arr[i]/arr[i - 1]);
    subsWithPrevElem.push(arr[i] - arr[i-1]);  
  }
  if (divsByPrevElem.filter((item, pos) => divsByPrevElem.indexOf(item) === pos).length < 2) return 'Geometric';
  if (subsWithPrevElem.filter((item, pos) => subsWithPrevElem.indexOf(item) === pos).length < 2) return 'Arithmetic';
  return -1; 
}

console.log(ArithGeoII([5, 10, 15]));
console.log(ArithGeoII([5, 25, 125]));
console.log(ArithGeoII([5, 25, 126]));