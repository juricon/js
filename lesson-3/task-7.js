// * Задача 7.
//  *
//  * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
// (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
//  * Если чётное — функция возвращает `true`, если нечётное — `false`.
//  *
//  * Условия:
//  * - Входной параметр должен обладать типом number;
//  * - Входной параметр должен быть больше 0.
//  */

// Решение


function getDivisors(a){
   
    if(typeof a !== 'number'){
        console.log('Error: parameter type is not a Number'); 
        return;
    } else if (a === 0){
        console.log('Error: parameter can\'t be a 0');
        return;
    }  
    let ArrDevisors = [];
     for(let b = 1; b <= a; b++ ){
      
        let result = a / b; 
        if(!(result % 1 === 0)){
            continue;
        }
        ArrDevisors.push(result);
     }
     ArrDevisors.reverse();
     console.log(ArrDevisors);
}
getDivisors(12)

/* не удалять */
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors('Content'); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0

// exports.getDivisors = getDivisors;
// /* не удалять */
