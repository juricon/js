// // // * Задача 5.
// // //  *..2:27 на видео про  reduce 
// // //  * Вручную создать имплементацию функции `reduce`.
// // //  * Логика работы ручной имплементации должна быть такой-же,
// // //  * как и у встроенного метода.
// // //  *
// // //  * Генерировать ошибки, если:
// // //  * - При вызове функции не было передано три аргумента;
// // //  * - В качестве первого аргумента был передан не массив;
// // //  * - В качестве второго аргумента была передана не функция;
// // //  * - В качестве третьего аргумента было передан не число.
// // //  */

// // const array = [1, 2, 3, 4, 5];
// // const INITIAL_ACCUMULATOR = 6;

// // // Решение
//by teacher  Dima Vakatsiienko

function reduce(array, callback, acc) {
    if (arguments.length !== 3) {
        throw new Error('function be called with two arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    if (!(typeof acc === 'number' || typeof acc === 'string')) {
        throw new Error('third parameter type should be a Number or a String');
    }

    let accumulator = acc;

    for (let counter = 0; counter < array.length; counter++) {
        accumulator = callback(accumulator, array[counter], counter, array);
    }

    return accumulator;
}

const array = [1, 2, 3, 4, 5];

const sum = reduce(
    array,
    function(acc, item, i) {
        console.log(acc + ' + ' + item );
        // console.log(item);?
        return acc + item;
        
    },
    6,
);

console.log(sum); // 21

// by me. I tried  to understand how it works.

var total = [1, 2, 3, 4, 5].reduce(function sum (a, b) {
    // console.log(a + ' + ' + b);how it is work?
    return a + b;
    
  }, 6);
console.log(total); //21


// // const result = reduce(
// //     array,
// //     function(accumulator, item, i, arrayRef) {
// //         console.log(accumulator); // значение-аккумулятор
// //         console.log(item); // элемент массива
// //         console.log(i); // индекс элемента
// //         console.log(arrayRef); // ссылка на обрабатываемый массив

// //         return accumulator + item;
// //     },
// //     INITIAL_ACCUMULATOR,
// // );

// // console.log(result); // 21
