
//С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.
//
//Использовать встроенные методы массивов — нельзя.
//
//```javascript
//const array = [2, 5, 9, 15, 0, 4];
	
	const array = [2, 5, 9, 15, 0, 4];
	for (let i = 0; i < array.length; i++){
	 let count = array[i];
		if(count > 3 && count < 10){
			console.log(count)
		   
		   }
	}
