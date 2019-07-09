
// Перепишите код, заменив оператор `switch` на оператор `if..else`:

// ```js
// const value = 'c';

// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }
// `
let value = 'c';
if (value = 'a'){
		console.log('others');
	} else if (value = 'b', 'c','d','e'){
		console.log('others');
	} else {
		console.log('unknown');
	}
