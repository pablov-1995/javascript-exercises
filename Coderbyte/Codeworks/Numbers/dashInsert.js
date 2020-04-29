function DashInsert(str) {
  const isOdd = elem => elem % 2 != 0 && elem != 0;
  const numArray = [...str].map(Number);
  let movesRight = 0;
  
  for (let i = 1; i < str.length; i++) {
    if ([str[i - 1], str[i]].every(isOdd)){
      numArray.splice(i + movesRight, 0, '-');
      movesRight++;
    } 
  }
  return numArray.join('');
} 
     
console.log(DashInsert(56730));
console.log(DashInsert(99946));