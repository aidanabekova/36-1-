// switch..case

var days = 2
switch(days){
    case 1:
        console.log('Понедельник')
        break
    case 2:
        console.log('Вторник')
        break
    case 3:
        console.log('Среда')
        break
    case 4:
        console.log('Четверг')
        break
    case 5:
        console.log('Пятница')
        break
    default:
        console.log('error')
}

var color = 'green'
switch(color){
    case 'red':
        console.log('stop')
        break
    case 'yellow':
        console.log('wait')
        break
    case 'green':
        console.log('go')
        break
    default:
        console.log('unknow color')
}

//4) undefined
let text;
console.log(typeof text)
//5) null
let text2 = null
console.log(typeof text2)

//NaN - not a number, infinity
var example = 'f' / 2
console.log(typeof example)
console.log(234 / 0)

//6)object
var user = {
    name: 'Alex',
    surname: 'Kim',
    age: 26,
    address: {
        street: 'Ibraimova 103',
        building: 'Victory',
        floor: 2,
        number: null
    },
    family: true,
    else: undefined
}
console.log(user)

//методы
console.log(user.name)
console.log(user.address.floor)
user.work = 'Google'
delete user.else
user['age'] = 27
console.log(user)
//
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('family'))

//array - массив
var numbers = [2,3,4,5,6, 'qwertyu', null];
console.log(numbers[3])
console.log(numbers.length - 1)
console.log(numbers[5][2])
numbers[8] = 9
console.log(numbers[8])

//цикл
//for
for(var i = 0; i <= 10; i++){
    console.log(i)
}




// i++
// i = i + 1
// i+=1










