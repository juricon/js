//Отсортируйте массив по возрастанию.
//
//Использовать встроенные методы массивов — нельзя.
//
//```javascript
//const arr = [6, 5, 4, 3, 2, 1];
//// [1,2,3,4,5,6]
//```

const arr = [6, 5, 4, 3, 2, 1];
arr.sort((a, b) => a - b);
console.log(arr);
	
// by teacher
	
//  const array = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5];

// for (let i = 0; i < 9; i++) {
//    let min = array[i];

//     for (let j = i + 1; j < 10; j++) {
//         if (array[j] < min) {
//             const temp = array[i];
//             min = array[j];
//             array[i] = min;
//             array[j] = temp;
//         }
//     }
// }
// console.log(array);
