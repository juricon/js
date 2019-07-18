* Задача 2.
//  *
//  * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
//  * и возвращать число.
//  * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
//  * Число, которое возвращает функция должно быть суммой всех элементов
//  * на всех уровнях всех вложенных массивов.
//  *
//  * Если при проходе всех уровней не было найдено ни одного числа,
//  * то функция должна возвращать число 0.
//  *
//  * Условия:
//  * - Обязательно использовать встроенный метод массива reduce.
//  * 
//  * Генерировать ошибки, если:
//  * - При вызове функции не был передан один аргумент;
//  * - В качестве первого аргумента был передан не массив;
//  * - Если на каком-то уровне было найдено не число и не массив.
//  */

// // Решение by teacher!!!
function flatten(array) {
    const result = [];

    const flattenDeep = (array, result) => {
        for (let count = 0; count < array.length; count++) {
            const current = array[count];
            console.log(current);

            if (!(typeof current === 'number' || Array.isArray(current))) {
                throw new Error('Some item type is not a Number');
            }

            if (Array.isArray(current)) {
                flattenDeep(current, result);
            } else {
                result.push(current);
            }
        }

        return result;
    };

    return flattenDeep(array, result);
}

function collect(sourceArray) {
    if (!Array.isArray(sourceArray)) {
        throw new Error(
            'collect function first argument should be an array type.',
        );
    }
    const flattened = flatten(sourceArray);

    return flattened.reduce((prev, current) => {
        return prev + current;
    }, 0);
}
const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12


// const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// console.log(collect(array1)); // 12

// const array2 = [[[[[1, 2]]]]];
// console.log(collect(array2)); // 3

// const array3 = [[[[[1, 2]]], 2], 1];
// console.log(collect(array3)); // 6

// const array4 = [[[[[]]]]];
// console.log(collect(array4)); // 0

// const array5 = [[[[[], 3]]]];
// console.log(collect(array5)); // 3
