// * Задача 1.
//  *
//  * Создайте объект `person` у которого будет одно свойство `salary`.
//  * При чтении этого свойства должна возвращаться строка с текстом.
//  * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
//  */
const person = {};
Object.defineProperty(person, 'salary', {
get(){
       var d = new Date();
      if((d.getDate() > 20)){
         return 'bad salary';
      } else if((d.getDate() < 20)){
         return 'good salary';
   }
});   
 console.log(person.salary); //it'sa  bad solution because  not in every month the same amount of days.
       
 // Решение

// person.salary; // good salary

// exports.person = person;

// teacher solution:
// Dima Vakatsiienko
// Змінено
// 26 черв. 2019 р. (Dima Vakatsiienko)
// Створено
// 26 черв. 2019 р.
// Без опису
// Користувачі з правами перегляду можуть завантажувати файл
const person = {
    get salary() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        const daysInCurrentMonth = new Date(
            currentYear,
            currentMonth,
            0,
        ).getDate();

        return daysInCurrentMonth - currentDay > 20
            ? 'good salary'
            : 'bad salary';
    },
};

console.log(person.salary);
