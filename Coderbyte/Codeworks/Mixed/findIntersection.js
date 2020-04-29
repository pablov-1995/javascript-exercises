const FindIntersection = strArr => strArr[0].split(', ').filter(
    number => strArr[1].split(', ').includes(number)
    ).join(',');

console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));