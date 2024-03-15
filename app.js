// var company = {
//     john: 3000,
//     jane: 4000,
//     tim: 4000,
//     alice: 5000
// }
// function calculateTotalSalary(company) {
//     var totalSalary = 0
//     for (var key in company) {
//         totalSalary += company[key]
//     }
//     return totalSalary
// }
//
// console.log(`all sum salary - ${calculateTotalSalary(company)}`)
//

// var course = {
//     JavaScript: ['Ruslan', 'Farida', 'Marlen', 'Timur'],
//     Python: ['Esen', 'Aziz', 'Amir'],
//     java: ['Marlen', 'Timur'],
//     ios: ['Aziz', 'Amir']
// }
// function countStudentsByCourses(courses) {
//     var studentByCourse = {}
//     for(var course in courses) {
//         var studentCount = courses[course].length
//         studentByCourse[course] = studentCount
//     }
//     return studentByCourse;
// }
//
// console.log(`count of students ${countStudentsByCourses(course)}`)

//arrow function
// function add(a, b) {
//     return a + b
// }
// //
// var oddArrow = (a, b) => a + b
// console.log(oddArrow(5,5))
//
// var example = (name, time) => {
//     return`good ${time}, ${name}`
// }
// console.log(example('john', 'evening'))
//
//
// var sumArray = (array) => {
//     var sum = 0
//     for (var i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return console.log(sum)
// }
// sumArray([1,2,3])
//
// // callback
// function sayHello() {
//     console.log('Hello world')
// }
// setTimeout(sayHello, 2000)
// //
// function process(callback) {
//     callback()
// }
// function callbackFunction(){
//     console.log('done')
// }
// process(callbackFunction)
//
//
// // metods of massive
// var array2 = [67, 3242]
// var array = [1,2,3,4,5]
// array.push(23, 67)
// var deleteNum = array.pop()
// console.log(deleteNum)
// var unshiftNumber = array.unshift(56)
// var shiftNumber = array.shift()
// console.log(array.includes(3))
// var spliceNumber = array.splice(2,2, 76,90)
// var concatNumber = array.concat(array2)
// console.log(concatNumber)
// console.log(array)
// // filter()
// var number = [10,20,30,40,50,60,70,80]
// // for (i = 10; i)
// var filterArray = number.filter(function (num){
//     return num > 40
// })
// console.log(filterArray)
// //
// var file = [
//     'document.text', 'image.png', 'screenshot.jpeg',
//     'document2.text', 'textfile.text', 'picture.png'
// ]
// var Files = file.filter(function(file) {
//     return file.endsWith('.text');
// });
// console.log(Files);


// // const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// const nu = [1, 2, 3, 4, 5];
// console.log(nu.includes(3)); // true
// console.log(nu.includes(6)); // false

// Напишите функцию, которая принимает массив из чисел и выводит среднюю
// арифметическую только положительных чисел.
// То есть массив будет примерно таким: [2, -78, 45,4,-7,-6,-10, 26, 30, 8]


//
// Напишите функцию, которая принимает массив из строк (например:
// ['text', 'frontend', 'apple'] и т.д) и выводит только те слова,
// в которых есть буква "t" и "a" (программа должна распознавать  и большие,
// и маленькие буквы). Вывод должен быть в новом массиве.


// Сумма квадратов положительных чисел:
//     Найдите сумму квадратов всех положительных чисел в массиве.
// function sumOfPositiveNumbers (arr) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         if (arr[i] > 0) {
//             const square = array[i]* array[i]
//             sum += square
//         }
//
//     }
//     return sum
// }
// const array = [1, -2, 3, -4, 5, 9, -7];
// const result = sumOfPositiveNumbers(array);
// console.log('all', result)
// var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
// var tagCounts = {}
//
// for (let tag of tags ) {
//     if (tagCounts[tag]) {
//         tagCounts[tag]++
//     } else {
//         tagCounts[tag] = 1
//     }
// }
// console.log(tagCounts)

function averageOfPositiveNumbers (arr) {
    let sum = 0
    let count = 0

    for (let i = 0;i < arr.length; i++) {
        if (arr[i] > 0){
            sum += arr[i]
            count++s
        }
    }
    if (count === 0) {
        return 'no'
    }
    return sum / count
}
var numbers =  [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(averageOfPositiveNumbers(numbers))
