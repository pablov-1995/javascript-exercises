function GroupTotals(strArr) { 
  const matches = strArr.map(pair => pair.match(/(\w):(-?\d)/));
  var matchesObj={};
  for (match of matches) {
      if (matchesObj.hasOwnProperty(match[1])) matchesObj[match[1]] += parseInt(match[2])
      else matchesObj[match[1]] = parseInt(match[2])
  }
  const matchesList = Object.keys(matchesObj).reduce(function(lst, prop) {
    if (matchesObj[prop]) lst.push(`${prop}:${matchesObj[prop]}`);
    return lst;
  }, []);
  return matchesList.sort().join(',');
}

console.log(GroupTotals(["Z:0", "A:-1"])); // "A:-1"
console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"])); // "B:3,Y:1"