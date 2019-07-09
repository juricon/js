// * Задача 3.
//  *
//  * Создайте функцию truncate(string, maxLength).
//  * Функция проверяет длину строки string.
//  * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
//  * Результатом функции должна быть (при необходимости) усечённая строка.
//  *
//  * Условия:
//  * - Функция принимает два параметра;
//  * - Функция содержит валидацию входных параметров;???? 080719 уточни что это... чтобы не было лишних символов
//  * - Первый параметр должен обладать типом string;
//  * - Второй параметр должен обладать типом number.
//  */

// Решение

// truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

function  truncate(stringA, maxLengthB){
    
   if (typeof stringA !== 'string'){
       console.log('Argument A is not a text. Try once again'); 
       return; 
   } 

   if (typeof maxLengthB !== 'number'){
    console.log( 'Argument B is not a number. Try once again')
    return; 
    } 
   
    if (stringA.length > maxLengthB) {
     let  threeDots = stringA.slice(maxLengthB);
     console.log(stringA.replace(threeDots, '...'));
    }
}

truncate ('Вот, что мне хотелось бы сказать на эту тему:', 21)

