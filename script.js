// test
/*

многострочный комментарий
Number - числа
String - строка
Boolean - true/false
Object - объект
Null -
Undefined -

 */

var number = 42
var string = 'message'
var isTrue = true // false
var obj = {a:1}
var isNull = null
var undef = undefined

console.log(typeof undef)

let num1 = 12
var num2 = 8
console.log(num1 - num2)

let str1 = 'hello'
let str2 = 'hhh'
console.log('+:', str1+' '+str2)
console.log('1+2', 1 + '2')
console.log('boolean + string', true + str2)

console.log('true + 1', true + 1)
console.log('false + 1', false + 1)

var isGreater = 20 - 6 * 3 >= 4
//            3    13  14  11      приоритеты знаков
console.log('20 - 6 * 3 >= 4', isGreater)

var result = 12 - 6 / 3
console.log('12 - 6 / 3', result)
var result2 = 3 + 4 * 3
console.log('3 + 4 * 3', result2)

console.log('5 %2', 5 %2)

let i = 1
//i = i + 1
//i++
//console.log('i', i)
//i = i + 3
i += 3
console.log('i', i)
console.log('i', i++)

console.log('5 > 3', 5 > 3)
console.log('5 < 3', 5 < 3)
console.log('8 <= 7', 8 <= 7)
console.log('8 >= 7', 8 >= 7)
console.log('4 == 4', 4 == 4)
console.log('4 == 5', 4 == 5)
console.log('4 != 5', 4 != 5)

console.log('4 === 4', 4 === 4)
console.log('4 === 5', 4 === 5)
console.log('4 === 4', 4 === '4')
console.log('4 === 4', 4 == '4')

/*
    &&  | true  | false
  true  | true  | false
  false | false | false

    ||  | true  | false
  true  | true  | true
  false | true  | false

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  ! (нет) - инвертирует true или false
*/

console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!false)
console.log(!!!true) // !!!true => !!false => !true => false

console.log((false && true) || (true || false) || !true)
// false || true || false => true

var currentYear = 2018
var carName = 'Ford'
var carYear = 2015
var carAge = currentYear - carYear
// если возраст машины меньше 5 лет, то
// если возраст машины больше или равно 5 лет и меньше или равно 10 лет, то
// иначе
if (carAge < 5) {
    console.log(carName + ' ' + 'младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' ' + 'больше или равен 5 годам или меньше или равен 10 годам')
} else {
    console.log('Возраст ' + carName + ' ' + 'равняется ' + carAge + ' годам')
}

// 0 null undefined
var empty = ''

let str = 'hello'
if (NaN) {
 console.log('Значение true')
} else {
    console.log('Значение false')
}

str ? console.log('значение true') : console.log('значение false')

var personAge = 14
var message = personAge < 18 ? 'не совершеннолетний' : 'совершеннолетний'

console.log(message)

var carColor = 'yello'

// if(carColor === 'green'){
//     console.log('цвет машины зеленый')
// } else if (carColor === 'yellow') {
//     console.log('цвет машины - желтый')
// } else if (carColor === 'red') {
//     console.log('цвет машины красный')
// } else {
//     console.log('цвет машины не определен')
// }

switch (carColor) {
    case 'green':
        console.log('цвет зеленый')
        break
    case 'yellow':
        console.log('цвет желтый')
        break
    case 'red':
        console.log('красный')
        break
    default:
        console.log('цвет не определен')
}


var carName = 'Ford'
var carYear = 2015
var personYear = 1990

function calculateAge(year) {
    var currentYear = 2020
    var result = currentYear - year
    return result
}

function checkAndLogAge(year, name, compareTo) {
    if (calculateAge(year) < compareTo) {
        console.log('Возраст ' + name + ' меньше '+ compareTo +' лет')
    } else {
        console.log('Возраст ' + name + ' меньше '+ compareTo +' лет')
    }
}
checkAndLogAge(carYear, 'машины', 10)
checkAndLogAge(personYear, 'человека', 30)

function sayHelloTo(name){
    console.log('Привет ' + name)
}
sayHelloTo('Елена')

// let str1 = 'hello'
// let str2 = "hello2"
// console.log(str1)

let word1 = 'hElLo'
console.log(word1.length)
console.log(word1.toUpperCase())
console.log(word1.toLowerCase())
console.log(word1.charAt(2))
console.log(word1.indexOf('el'))
console.log(word1.substr(1, 2))

console.log((42).toString())
console.log((8/3).toFixed(2))

var cars = [
    'Ford', 'Mazda', 'Porsche', 'Kia', 'BMW'
]
console.log(cars)
console.log(cars[1])
console.log(cars.length)
//добавление элемента в конец массива
cars.push('Audi')
console.log(cars)
//удаление элемента из массива
cars.pop()
console.log(cars)

//удаление и возвращение первого элемента
let ford = cars.shift()
console.log(cars)

// Объекты

let person = {
    name: 'Василий',
    year: 1990,
    family: ['Елена', 'Игорь'],
    car: {
        year: 2010,
        model: 'Mazda',
        color: 'red'
    },
    calculateAge2: function(year2){
         this.age = 2020 - this.year

    }
}
console.log(person)
console.log(person.name)
console.log(person.year)
console.log(person.car.year)

person.calculateAge2()

let numbers = [1, 2, 3, 4, 5]
numbers.push('Not a number')
numbers.push('ололло')
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}