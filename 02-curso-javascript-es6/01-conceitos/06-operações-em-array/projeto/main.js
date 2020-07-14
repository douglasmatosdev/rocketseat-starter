const arr = [1, 3, 4, 5, 8, 9];
const arrString = ["Ruby", "Javascript", "PHP", "Java", "ReactJS"];


// map
const newArr = arr.map(function(item, index) {
  // return item * 2;
  return item + index;
});

console.log(newArr);

// reduce
const sum =  arr.reduce(function(total, next) {
  // console.log('total: '+total);
  // console.log('next: '+next);
  
  return total + next
})

console.log(sum);

// filter
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);


// find
const find = arr.find(function(item) {
  return item === 4;
})
console.log(find);

const findString = arrString.find(function(item) {
  return item === "Javascript";
})
console.log(findString)


