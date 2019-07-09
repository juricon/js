
/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
let a = 0;
function f(a){
if (typeof a !== 'number'){
  alert('a - должно быть числом');
} 
    
    const pow = a * a * a;
    console.log(pow);   
  }
  f(2)


/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */
