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
         return 'good salary';
      } else if((d.getDate() < 20)){
         return 'bad salary';
      }
   }
});   
 console.log(person.salary);
 // Решение

// person.salary; // good salary

// exports.person = person;
