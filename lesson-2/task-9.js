//Отсортируйте массив по убыванию.
//
//Использовать встроенные методы массивов — нельзя.
//
//```javascript
//const arr = [1, 2, 3, 4, 5, 6];
//// [6,5,4,3,2,1]

const arr = [1, 2, 3, 4, 5, 6];
arr.sort((a, b) => b - a);
console.log(arr);
