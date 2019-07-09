
// * Задача 4.
// *
// * Дана стоимость в виде строки: `"$120"`.
// * Первый символ — валюта, затем – число.
// * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
// * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
// *
// * Условия:
// * - Функция принимает один параметр;
// * - Функция содержит валидацию входного параметра на тип string.
// */

// const PRICE = '$120';

// Решение

//   extractCurrencyValue('120') 
// //   console.log();
// extractCurrencyValue(PRICE); // 120

const PRICE = '$120';
function extractCurrencyValue(PRICE){
 
  if (typeof PRICE !== 'string') { 
    console.log ('this is not a string! Try once again');
    return;
  } 
let sepString = PRICE.slice(1);
console.log(Number(sepString));
}

extractCurrencyValue(PRICE);
