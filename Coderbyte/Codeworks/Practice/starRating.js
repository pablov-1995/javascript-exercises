function StarRating(str) { 

  function ratingGenerator(num) {
    if (num > 1) return ['full'].concat(ratingGenerator(num - 1))
    else if (num > 0.25) return ['half']
    else return []
  }

  let starLst = ratingGenerator(parseFloat(str))
  return starLst.concat(Array(5 - starLst.length).fill('empty')).join(' ');
}

console.log(StarRating(0.38));
console.log(StarRating(4.5));