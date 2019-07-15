// * Задача 2.
//  *
//  * Вручную создать имплементацию функции `filter`.
//  * Логика работы ручной имплементации должна быть такой-же,
//  * как и у встроенного метода.
//  *
//  * Генерировать ошибки, если:
//  * - При вызове функции не было передано два аргумента;
//  * - В качестве первого аргумента был передан не массив;
//  * - В качестве второго аргумента была передана не функция.
//  */


// Решение
function filter(array, callback){
    if(arguments.length !== 2){
             throw new Error ('Enter two arguments'); 
         } 
    
    if(!Array.isArray(array)){
             throw new Error ('Enter an array'); 
    }
    
    if(!(typeof callback === 'function')){
             throw new Error ('Enter a function'); 
    }
    
    let baseState = [];
    
for (let index = 0; index < array.length; index++){
    let value = array[index];
    let result = callback(value, index, array);
        
    if (result){        
        baseState.push(value);    
        } 
    }
    return baseState;
}

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];
const filteredArray = filter(array, function (item, i, arrayRef) {
    return item === 'Добрый вечер!';
    });

console.log(filteredArray);
// const filteredArray = filter(array, function(item, i, arrayRef) {
//     console.log(item); // элемент массива
//     console.log(i); // индекс элемента
//     console.log(arrayRef); // ссылка на обрабатываемый массив

//     return item === 'Добрый вечер!';
// });

// console.log(filteredArray); // ['Добрый вечер!']
