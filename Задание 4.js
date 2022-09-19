// Задание 4

let min = 0;
let max = 100;
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log (getRandomIntInclusive (min, max));
