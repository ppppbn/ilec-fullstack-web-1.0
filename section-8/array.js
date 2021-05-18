let array = [1, 10, 100, 1000, 10000, 100000];

// forEach
array.forEach(function(value, index) {
  console.log(`${index} ${value}`);
});

// find
const result = array.find(function(value) {
  return value < 0;
});

console.log(result);

// map
const result = array.map(function(value) {
  return value * 2;
});

console.log(result);
console.log(array);

// filter
const result = array.filter(function(value) {
  return value % 10 === 0;
});

console.log(result);

// reduce
let result = array.reduce(function(previousValue = 111, value = 1000) {
  return previousValue + value;
}, 0);

console.log(result);