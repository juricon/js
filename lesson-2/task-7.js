const array = [1, 2, 3, 4];
let	sum = 0;
	for (let i = 0; i < array.length; i++){
		
		if ( i % 2 == 0) continue;
		sum += array[i];
	}
			console.log(sum);
