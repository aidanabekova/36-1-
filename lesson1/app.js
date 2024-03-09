// // ES5
// console.log('Hello world');
//
// //переменные var
// var name1 = 'Aidana';
// var name2 = 'Aliya'
// console.log(name1)
// //camelcase
// var javaScriptAndFrontend = ''
//
// //типы данных
// //1) string
// var group = '36-1 Frontend'
// console.log(typeof group)
// console.log(group.toUpperCase())
// console.log(group.toLowerCase())
// console.log(group.length)
// console.log(group.repeat(34))
//
// var name = 'Aidana'
// var surname = 'Bekova'
// console.log(name + ' ' + surname) //конкатенация

//2) number
var number1 = 34
console.log(typeof number1)
var number2 = 45
console.log(number1 * number2)

//**, %
console.log(2 ** 2)
console.log(2345678 % 7)

console.log('Средний возраст группы 36-1 =', (16 + 17 + 18 + 16 + 17 + 18 + 28 + 19 + 18 + 16) / 10)

//3) boolean - true , false
console.log(34 > 23)
console.log(45 == '45') //нестрогое
console.log(45 === '45') //строгое
console.log(45 !== '45') //строгое неравенство

//логические операторы &&, ||
//условные конструкции if, else..if, else

var login = 'geeks@gmail.com'
var password = 'geeks3601'

// var userLogin = prompt('Введите ваш логин: ') //geeks@gmail.com
// var userPassword = prompt('Введите ваш пароль: ') //geeks3601
//
// if (userLogin === login && userPassword === password) {
//     alert('Успех! Авторизация прошла!')
// } else {
//     alert('Ошибка! Проверьте свои данные!')
// }

// var num1 = Number(prompt('num1'))
// var num2 = Number(prompt('num2'))
// console.log(num1 + num2)

var experience = Number(prompt('Введите свой опыт работы в годах: '))
var developerLevel;

if(experience > 0 && experience < 1){
    developerLevel = 'junior'
}else if(experience >= 1 && experience < 7){
    developerLevel = 'middle'
}else if(experience >= 7 && experience <= 60){
    developerLevel = 'senior'
}else{
    developerLevel = 'error'
}
console.log("Ваш уровень - " + developerLevel)














