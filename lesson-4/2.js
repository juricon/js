// * Задача 2.
//  *
//  * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
//  * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
//  * Свойство `salary` можно читать, но нельзя менять.
//  * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
//  * Если rate не установлен — возвращаем число 0.
//  */

// const person = {};

// Решение

const person = {};
Object.defineProperties(person, {
    rate:{
        writable: true,   
        enumerable: true  
    },
    salary:{
        configurable: true, // there is no suck line in teacher's solution
        get(){
            date = new Date();
            todayDate = date.getDate();
            if (this.rate !== undefined){
                return this.rate * todayDate;
            } else {
                return 0;
            }
        },
    },
});
    person.rate = 10;
    console.log(person.salary);

// person.rate = 30;

// // Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
// person.salary;

// exports.person = person;

//teacher solution

// Власник
// Dima Vakatsiienko
// Змінено
// 26 черв. 2019 р. (Dima Vakatsiienko)
// Відкрито
// 14:47 (мною)
// Створено
// 26 черв. 2019 р.
// Без опису
// Користувачі з правами перегляду можуть завантажувати файл
'use strict';

const person = {};

Object.defineProperties(person, {
    rate: {
        value: 0,
        writable: true,
    },
    salary: {
        get() {
            const currentDay = new Date().getDate();

            return this.rate * currentDay;
        },
    },
});

person.rate = 10;

console.log(person.salary);
