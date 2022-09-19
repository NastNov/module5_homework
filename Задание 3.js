// Задание 3

let string = 'Hello';
function reverse(string) {
   let array = string.split('');     
       array.reverse();          
   return array.join(''); 
}
console.log (reverse(string));
