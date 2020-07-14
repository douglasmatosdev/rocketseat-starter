"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var arrString = ["Ruby", "Javascript", "PHP", "Java", "ReactJS"]; // map

var newArr = arr.map(function (item, index) {
  // return item * 2;
  return item + index;
});
console.log(newArr); // reduce

var sum = arr.reduce(function (total, next) {
  // console.log('total: '+total);
  // console.log('next: '+next);
  return total + next;
});
console.log(sum); // filter

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // find

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
var findString = arrString.find(function (item) {
  return item === "Javascript";
});
console.log(findString);
