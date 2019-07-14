// Задача 3.
//  *
//  * Вручную создать имплементацию функции `every`.
//  * Логика работы ручной имплементации должна быть такой-же,
//  * как и у встроенного метода.
//  *
//  * Генерировать ошибки, если:
//  * - При вызове функции не было передано два аргумента;
//  * - В качестве первого аргумента был передан не массив;
//  * - В качестве второго аргумента была передана не функция.
//  */

// const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(array, callback){
if(arguments.length !== 2){
         throw new Error ('Enter two arguments'); 
     } 

if(!Array.isArray(array)){
         throw new Error ('Enter an array'); 
}

if(!(typeof callback === 'function')){
         throw new Error ('Enter a function'); 
}

let result = false;

for (let index = 0; index < array.length; index++){
    let value = array[index];
    result = callback(value, index, array);

        if (result){        
            continue;        
        } else  {
            return false;
        }
    }
    return result;
}

const array = [1, 2, 3, 4, 5, 6];
const result = every(array, function (item, i, arrayRef) {
    // console.log(item);
     return typeof item === 'number';
    });
console.log(result);


// const result = every(array, function(item, i, arrayRef) {
//     console.log(item); // элемент массива
//     console.log(i); // индекс элемента
//     console.log(arrayRef); // ссылка на обрабатываемый массив

//     return typeof item === 'number';
// });

// console.log(result); // true
