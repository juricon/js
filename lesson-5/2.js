// * Задача 2.
//  *
//  * Напишите функцию checkSpam(source, example)
//  * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
//  *
//  * Условия:
//  * - Функция принимает два параметра;
//  * - Функция содержит валидацию входных параметров на тип string.
//  * - Функция должна быть нечувствительна к регистру:
//  */

// Решение

// checkSpam('pitterXXX@gmail.com', 'xxx'); // true
// chcekSpam('pitterxxx@gmail.com', 'XXX'); // true

// let source;
// let example; 

function checkSpam(source, example){
    if (typeof(source) !== 'string' ){
        return console.log ('source is not a string');
    }
    if (typeof(example) !== 'string') {
        return console.log ('example is not a string');
    }

    example = example.toLowerCase(); 
    source = source.toLowerCase();

    if (source.search(example) >= 0){
        console.log(true);
    } else {
        console.log(false);
    }
        
};
checkSpam('pitterXXX@gmail.com', 'xxx') // true
checkSpam('pitterxxx@gmail.com', 'XXX') // true
