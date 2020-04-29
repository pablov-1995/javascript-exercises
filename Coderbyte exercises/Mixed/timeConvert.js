const TimeConvert = num => `${Math.floor(num / 60)}:${num % 60}`

console.log(TimeConvert(126));
console.log(TimeConvert(45));