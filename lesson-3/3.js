/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f(a, b, c){
    let calc = (a - b) / c;
    if (isNaN (a, b, c)){
        return 'Error: all parameters type should be a Number';
       } 
    return calc;
    
}
console.log(f(9, 3, 2));
console.log(f('s', 9, 3));

/* не удалять */
// f(9, 3, 2); // 3
// f('s', 9, 3); // Error: all parameters type should be a Number

// export { f };
/* не удалять */
