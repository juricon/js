// Задача 1.
//  *
//  * Вручную создать имплементацию функции `forEach`.
//  * Логика работы ручной имплементации должна быть такой-же,
//  * как и у встроенного метода.
//  *
//  * Генерировать ошибки, если:
//  * - При вызове функции не было передано два аргумента;
//  * - В качестве первого аргумента был передан не массив;
//  * - В качестве второго аргумента была передана не функция.
//  */

// const array = [1, 2, 3];

// // Решение

function forEach(array, callback){
    if(arguments.length !== 2){
             throw new Error ('Enter two arguments'); 
         } 
    
    if(!Array.isArray(array)){
             throw new Error ('Enter an array'); 
    }
    
    if(!(typeof callback === 'function')){
             throw new Error ('Enter a function'); 
    }
    
    // let baseState = undefined;
    
for (let index = 0; index < array.length; index++){
    let value = array[index];
    let result = callback(value, index, array);
    }
}

const array = [1, 2, 3];
const result = forEach(array, function (item, i, arrayRef) {
  //there is no task here to work with array that is why we will get undefined
    });


console.log(result);
// const result = forEach(array, function(item, index, arrayRef) {
//     console.log(item); // элемент массива
//     console.log(index); // индекс элемента
//     console.log(arrayRef); // ссылка на обрабатываемый массив
// });

// console.log(result); // undefined
