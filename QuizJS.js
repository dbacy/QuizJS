function calculateYearEndTotal (year) {
    return 7650 == year
}
const year1 = calculateYearEndTotal(1994)


const calculateYearEndTotal2 = function (year) {
    return 8674 == year
}
const year2 = calculateYearEndTotal2(1995)


const calculateYearEndTotal3 = year => 9744 == year
const year3 = calculateYearEndTotal3(1996)


function quartersAvgThruYear (quartersAvg) {
    return quartersAvg * 4
}

function calculateYearEndTotal4  (firstYear , secondYear) {
    const quartersAvgFirst = quartersAvgThruYear(firstYear)
    const quartersAvgSecond = quartersAvgThruYear(secondYear)
}

const scores = [8,9,12,4,3,5]
scores.push(15)
scores.push(11)
scores.push(6)
scores.push(10)
scores.push(2)
scores.unshift(1)
scores.unshift(7)
scores.unshift(16)
scores.unshift(13)
scores.unshift(11)
const shifted = scores.pop();
console.log(shifted);
const shifted2 = scores.pop();
console.log(shifted2);
scores.push(shifted)
scores.push(shifted2)
console.log(scores)


const ages = [21,32,45,26,75,12,90,83,28,10]
const animals = ['cat','lion','giraffe','zebra','mouse','monkey','dog','bird']

const random = []
random.unshift('java')
random.push('C#')
random.push('Node.js')
random.push('HTML')
random.unshift('CSS3')
const move = random.shift()
random.push(move)


const arr1 = [11,12]
const arr2 = [13,14]
const arr3 = arr1.concat(arr2)  // add the two arrays together

const numArr1 = [12,75,90,26]
const numArr2 = [74,99,10,16]

let ans = numArr1.every(number => number <50)  // is every number less than 50 (boolean)
console.log(ans)
let ans2 = numArr2.every(number => number >0)  //  is every number grater than zero (boolean)
console.log(ans2)
let ans3 = numArr1.find(number => number >10)  // find first bigger than 10 (number)
console.log(ans3)
let ans4 = numArr1.findIndex(number => number >10)    // first number bigger than 10 (position)
console.log(ans4)


console.log(numArr1.includes(64))  // boolean
console.log(numArr1.includes(65))  // boolean

console.log(numArr1.indexOf(65)) // does it contain 65
console.log(numArr1.slice(0,3))  // gives me the first three in an array
console.log(numArr1.slice((numArr1.length - 3),numArr1.length))  // gives me the last three in a array

console.log(numArr1.join('-'))


numArr1.unshift(-1)
numArr1.push(-1)

numArr1.sort()

numArr1.reverse()

let mm = numArr1.some(number => number >66)
console.log(mm)
numArr1.some(number => number >64)

const even = (element) => element % 2 ===0      // gives me the even numbers

arr3.filter(even)
console.log(arr3)



let declaration = "We hold these truths to be self-evident, that all men are created equal, " +
    "that they are endowed by their Creator with certain unalienable Rights, that among these are Life, " +
    "Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, " +
    "deriving their just powers from the consent of the governed.";

let length = declaration.split(' ')
console.log(length.length)
// for (let w = 0; w < words.length; w++) {
//     console.log(words[w]);
//
// }
// for (let word of declaration.split(" ")) {
//     console.log(word);
// }