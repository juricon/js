/Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.
//
//Использовать встроенные методы массивов — нельзя.
//
//```js
//const array = [1, 2, 3, 4, 5, 6];

const array = [1, 2, 3, 4, 5, 6];
let	sum = 0;
	for (let i = 2; i < array.length; i++){
		
		if ( i % 2 == 0) continue;
		sum += array[i];
	}
			console.log(sum);
	
