// // for
var array = [2,3,4,5]
for(var i = 0; i < array.length; i++){
    array[i] *= 2
    // array[i] = array[i] * 2
}
console.log(array)
printDelimiter()

for(var i = 5; i >= 1; i--){
    console.log(i)
}
printDelimiter()

var arr = [123,234,345,321,45,43,56,57,67,78]
for(var i = 0; i < arr.length; i++){
    var number = String(arr[i])[0]
    if(number === '3' || number === '5'){
        console.log(arr[i])
    }
}
printDelimiter()

var children = [2024, 2012, 2005, 2022, 2020, 2000, 1994, 1999, 2019, 2018, 2023, 2021, 2013, 2017, 2003, 2001]
var gifts = 0
var currentYear = 2024

//for..of - array
for(var child of children){
    var childAge = currentYear - child
    if(childAge >= 5 && childAge <= 12){
        gifts++
    }
}
console.log(`Gift total: ${gifts} of ${children.length}`)
printDelimiter()

//for..in - object
var users = {
    user1: 'user1',
    user2: 'user2',
    user3: 'user33'
}

for(var key in users){
    console.log(key)
}
printDelimiter()

for(var user of Object.values(users)){
    console.log(user)
}


//function - declaration
function printDelimiter(){
    console.log('-'.repeat(70))
}
printDelimiter()

//function - expression
var sayHello = function(){
    console.log('hi')
}
sayHello()

//калькулятор
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    if(b !== 0){
        return a / b
    }else{
        return "error"
    }
}

console.log(`Сумма: ${add(10, 5)}`)
console.log(`Разность: ${subtract(20, 13)}`)
console.log(`Произведение: ${multiply(2, 13)}`)
console.log(`Частное: ${divide(126, 3)}`)




