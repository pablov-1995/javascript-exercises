const SimpleAdding = num => num ? num + SimpleAdding(num-1) : num;
 
console.log(SimpleAdding(12)); 
console.log(SimpleAdding(140));