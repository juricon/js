///Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.
//
//```js
//for (var i = 0; i < 3; i++) {
//    console.log('номер ' + i + '!');
//}

// the result must be 0, 1, 2
var i = 0;
while (i < 3){
	console.log('номер ' + i + '!'); // Output: correct 0, 1, 2
	i++; 
}	
//i++ and the console.log  Output: 1, 2, 3
