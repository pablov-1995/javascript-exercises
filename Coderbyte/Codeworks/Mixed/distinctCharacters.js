const DistinctCharacters = str => new Set([...str]).size >= 10;

console.log(DistinctCharacters("12334bbmma:=6"));
console.log(DistinctCharacters("eeeemmmmmmmmm1000"));