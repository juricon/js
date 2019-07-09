// * Задача 4.
//  *
//  * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
//  * а затем возвращает день недели на русском языке.
//  *
//  * Условия:
//  * - Функция принимает один параметр;
//  * - Функция содержит проверку входного параметра на тип number.
//  * - Входной параметр должен быть числом от 1 до 7.
//  */

// Решение


function f(a){
    const daysList = ['Нулевой индекс','Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ];
//(1*) код будет работать если даже и не использовать array 
	if(typeof a !== 'number'){
        console.log('Error: parameter type is not a Number'); 
    } else if(a < 1 || 7 < a){
        console.log( 'Error: parameter should be in the range of 1 to 7'); 
    } 

    switch (a){
        case 1: console.log(daysList [1]); // (2*) можно поставить сразу значения  console.log('Воскресенье') и результат будет тот же
            break;
        case 2: console.log(daysList [2]);
            break;
        case 3: console.log(daysList [3]);
            break;
        case 4: console.log(daysList [4]);
            break;   
        case 5: console.log(daysList [5]);
            break;
        case 6: console.log(daysList [6]);
            break;
        case 7: console.log(daysList [7]);
            break;
   }
}
f(1); // Воскресенье
f(2); // Понедельник


// не удалять
// f(1); // Воскресенье
// f(2); // Понедельник
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number

// export { f };
// /* не удалять */
