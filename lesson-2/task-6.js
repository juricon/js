//Написать код который посчитает сумму всех элементов в массиве.
//
//Использовать встроенные методы массивов — нельзя.
//
//```js
//const array = [1, 2, 3, 4];
//```
//	
	const arrayTask = [1, 2, 3, 4];
	let sum = 0;
	for (let i = 0; i < arrayTask.length; i++){
		sum += arrayTask[i];
	}
			console.log(sum);
