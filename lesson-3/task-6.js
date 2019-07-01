// * Задача 6.
//  *
//  * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
//  * Если чётное — функция возвращает `true`, если нечётное — `false`.
//  *
//  * Условия:
//  * - Входной параметр должен обладать типом number.
//  *
//  * Заметки:
//  * - Чётные числа могут делится на 2 без остатка.
//  */

// Решение
function isEven(a){
    if(typeof a !== 'number'){
        console.log('Error: parameter type is not a Number'); 
    } else if(a % 2 === 0){
        console.log(true);
    } else{
        console.log(false);
    }
}
isEven(4)

/* не удалять */
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number

// exports.isEven = isEven;
// /* не удалять */
