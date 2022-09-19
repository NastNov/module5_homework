// Задание 6

let arr = [ 1, 2, 3, 4, 2 ];
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
} 
if (hasDuplicates(arr)) {
    console.log("True");
}
else {
    console.log("False");
}
