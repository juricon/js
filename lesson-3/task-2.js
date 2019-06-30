
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
        if (isNaN (s) ){
            return 'Error:all parameters should be a Number type';
           } 
    }
    return s;
   
}
console.log(f(1, 2, 3)); 
console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); 
console.log(f(1, 2, 's', 4)); 

/* не удалять */
// f(1, 2, 3); // 6
// f(1, 1, 1, 1, 1, 1, 1, 1); // 8
// f(1, 2, 's', 4); // Error: all parameters should be a Number type

// export { f };
/* не удалять */
