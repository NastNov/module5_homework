// Задание 1

let num = +prompt("Введите число");
if (isNaN(num)) {
    console.log ("Упс, кажется, вы ошиблись");
} else {
    if (num % 2 == 0) {
        console.log ("Вы ввели чётное число");
    } else {
        console.log ("Вы ввели нечётное число");
    }
}
