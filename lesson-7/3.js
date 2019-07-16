// * Задача 3.
// *
// * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
// * Первым параметром функция принимает значение, которым заполнять массив.
// * А вторым — количество элементов, которое должно быть в массиве.
// *
// * Генерировать ошибки, если:
// * - При вызове функции не было передано два аргумента;
// * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
// * - В качестве второго аргумента был передан не число.
// */

// Решение
const result = createArray('x', 5 );
function createArray(value, length){
    if(arguments.length !== 2){
        throw new Error ('Enter two arguments'); 
    } 

    if(typeof value !== 'number' && 
     typeof value !== 'string'   && 
     typeof value !== 'object'   &&
       typeof value !== 'array'){
        throw new Error ('Enter a text/string');
    }
    
    if(typeof length !== 'number'){
        throw new Error ('Enter a number');
    }
    


    // let clearString = value.substr(1).slice(0, -1); // doesn't work. it  anyway shows   'x' in array
   //the same for String.fromCharCode(0x0078) // x without ''.

   let arr1 = Array.from(value);
   for(let index = 1; index < length; index++){
       arr1.push(value);
   }
   return arr1;
   
}
console.log(result); // [ x, x, x, x, x ]
// createArray('v', 2);
// in any case it shows result [ 'x', 'x', 'x', 'x', 'x' ]

// Решение

// const result = createArray('x', 5);

// console.log(result); // [ x, x, x, x, x ] // Я так и не смог вывести значения в  архиве без ' ',
//получилось вот так  [ 'x', 'x', 'x', 'x', 'x' ] есть ли выход?
