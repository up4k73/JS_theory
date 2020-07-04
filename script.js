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









