// * Задача 1.
//  *
//  * Напишите функцию upperCaseFirst(string).
//  * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
//  *
//  * Условия:
//  * - Функция принимает один параметр;
//  * - Функция содержит валидацию входного параметра на тип string.
//  */

// // Решение
function upperCaseFirst(string){
    if(typeof string !== 'string'){
        return console.log('enter only a string');
    }
    console.log(string.slice(0,1).toUpperCase() + string.slice(1));
}
upperCaseFirst('pitter')
upperCaseFirst('')
// upperCaseFirst('pitter'); // Pitter
// upperCaseFirst(''); // ''

// exports.upperCaseFirst = upperCaseFirst;
