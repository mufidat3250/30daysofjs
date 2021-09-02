
//decrearation function
function square() {
    let num = 2
    let sq = num*num
    console.log(sq)
    return sq
} 
square()

function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne+numTwo
  
    console.log(sum)
  }

 addTwoNumbers() 

 function printFullName(){
     let firstname =' mufidat'
     let lastname =' wahab'
     let space = ' ' 
     let fullname = firstname + space + lastname
     return fullname
 }
 console.log(printFullName())

 // calling a function with parameter
function areaOfCircle(r){
    let area = Math.PI*r*r
    return area
}
console.log(areaOfCircle(20))
function sumTwoNumbers(numOne, numTwo){
    let sum=numOne + numTwo
    return sum
}
console.log(sumTwoNumbers(20,21))


//declearing a function with multiple parameters

function sumAll(){
    let sum =0;
    for(let i=0; i<arguments.length; i++){
        sum +=arguments[i]
    }
    return sum
}
console.log(sumAll(1,2,3,4))
console.log(sumAll(10,20,30,40))


function muba(number){
    console.log(number)
    // return username
  }
// const username = prompt("YOUR NAME")
  
// const value = muba(username)
// console.log(value)

// // declaration function
//  function getName(){
//    // code
//  }
//  getName()
// //expression fuction
//  const getme = function(){
     
//  }
//  getme()

 //anonymous function

//  (function (){

//  })()

 //arrow function implies expresion function and anonymous function
 const dat =()=>{

 }
 dat()
 function gettme (a, b){
    //  let a = "mufidat"
    //  let b = "wahab"
     let c = a +" " + b
     return c
 }
console.log(gettme("mufidat" , "wahab"))
function getshe (a,b,e,d){
    let c = a*b-e+d
    return c
}
console.log(getshe(10, 20, 3, 5))

function printFullName(firstName , lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Mufidat','Abiola'))

//taking array as parameters
function divide_values(arr){
    let div = 1
    for(let i = 1; i<arr.length; i++){
       
         div = div / arr[i];
    }
    return div
}
const a = [2,5,7,8,35,6]
console.log(divide_values(a))

const rad =()=>{
    let radius = 3
    let area = Math.PI * radius*radius
    return area
}
console.log(rad(4))

function sumAllnum (){
    let sum = 0
    for (let i=0; i<arguments.length; i++){
        sum =sum + arguments[i]
    }
    return sum
}
console.log(sumAllnum(7,8,7,8,9))
console.log(sumAllnum(7,85,7,18,94))
console.log(sumAllnum(7,8,7,75,91,2))

const unlimited = (...mufi)=>{
    // let sum =0
    // for (let i=0; i<argument.length; i++){
    //     sum =sum + argument[i]
    //     return sum
}

console.log(sumAllnum(3,6,0,89))

const multipleArg = (...mufidaH) => {
    console.log(mufidaH)
    // let i=0
    // let j=1
    // let f =j+i
    // return f
  }
  
//   multipleArg('fola','tope','mubashir')

// function multy (){
//     console.log(arguments)
// }
// multy(16,17,7,9,67)

// function multipleArg2(){
//     console.log(arguments)
//     let i=0
//     let j=2
//     let f =j+i
//     return f
//   }
//   function multipleArg2(){
//     console.log(Array.from(arguments))
//     let i=0
//     let j=2
//     let f =j+i
//     return f
//   }
  
//   multipleArg2(3,67,778,"sdsd")
//   const sumAllNuma= (...args)=>{
//       let sum =0
//       for (const element of args){
//           sum = sum+ args
//       }
//       return sum
//   }
//   console.log(sumAllNuma(4,6,7,8))


//  const sumAllnums= function (){
//       let sum =0
//       for (let i=0; i<arguments.length; i++){
//           sum =sum + arguments[i]
//       }
//       return sum
//   }
//   console.log(sumAllnums(1,3,5,6,8,12))

// //   note for function with many parameters , we can pass an array for declaration function, use arguments key word for expresion which is also an anonymos function. and also use spread fro an arrow functions.

// let squaredNum = (function (n){
//    return n*n
// })(2)
// console.log(squaredNum)

// let squareNum = (function(n){
//     return n*n
// })(10)
// console.log(squareNum)

// const defa = (name = 'malik', school='mikab')=>{
//     let message = `${name} ${school} welcome to the gurus club`
//     return message
// }
// console.log(defa())
// console.log('mufidat', 'fola')


// //exercise

// //(1) Declare a function fullName and it print out your full name.
// function fullName (){
//     console.log("Wahab Mufidat Abiola")
// }
// fullName()

// // (2)Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName,lastName){
//     let full = firstName+" "+ lastName
//     return full
// }
// console.log(fullName('mufidat', 'tope'))

// // // (3)Declare a function addNumbers and it takes two two parameters and it returns sum.
// function addNumbers(num1,num2){
//     let sum =0 
//     sum = num1 +num2
//     return sum
// }
// console.log(addNumbers(10,20))

// // (4)An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// let length = prompt('input area of rectangle')
// let width = prompt (' input width of rectangle')
// function areaOfRectangle (){
//     let area = length*width
//     return area
// }
// console.log(areaOfRectangle())

// // (5)A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.let

// let lengtth= Number(prompt('input the length'))
// let widtth = Number(prompt ('input width'))
// function perimeterOfRectangle(){
//     let perimeter= 2*(lengtth+widtth)
//     return perimeter
// }
// console.log(perimeterOfRectangle())

// // //(6) A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// function volumeOfRectPrism( length, width, height){
//     let volume = length * width*height
//     return volume
// }
// console.log(volumeOfRectPrism(2,2,2))

// (7)Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// function areaOfCircle(r){
//     let area = Math.PI*r*r
//     return area
// }
// console.log(areaOfCircle(3))

// // // (8)Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// const circumference =r=>{
//     let circum= 2*Math.PI*r
//     return circum
// }
// console.log(circumference(2))

// // (9)Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// const density_ = (m, d)=>{
//     let density = m/d
//     return density
// }
// console.log(density_(4,2))

// // (10)Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// const speed = (d, t)=>{
//     let s = d/t
//     return s

// }
// console.log(speed(8,4))

// // (11)Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// const weight = (m)=>{
//     let w=0
//      w =m *9.8
//     return w

// }
// console.log(speed())

// //check for math function for gravity
// // (12)Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

// const celcius = (temp)=>{
//     let c = Math.floor((temp-32)*(5/9))
//     return c
// }
// console.log(celcius(90))

// //(13) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// // The same groups apply to both men and women.
// // Underweight: BMI is less than 18.5
// // Normal weight: BMI is 18.5 to 24.9
// // Overweight: BMI is 25 to 29.9
// // Obese: BMI is 30 or more
// // ......

// let w = Number(prompt('Enter your weight'))
// let h = Number(prompt('Enter your height'))

// const BMI = () =>{
//     console.log({w,h})
//     let totalweight=0
//      totalweight = w/h*h
//     if (totalweight<18.5){
//         return `Underweight:BMI is less than 18.5`
//     }else if (totalweight>=18.5 && totalweight<=24.9){
//         return `nurmal weight MI is in range`
//     }else if (totalweight>=24.9 && totalweight<=29.9){
//         return `Overweight  BMI is 25 to 29.9`
//     }else if (totalweight>=30){
//         return `Obese is 30 or more`
//     }
// }
// console.log(BMI())



// // (14)Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason (month){
    // let season = month
    // let month = prompt('enter month')
    if ("November October September".includes(month)){
        return 'Autumn'
    }else if ('December January Febuary'.includes(month)){
        return ' winter'
    }else if ('March April May'.includes(month)){
        return 'Spring'
    }else if ('June JUly August'.includes(month)){
        return 'Summer'
    }

}
console.log(checkSeason('August'))



// //(15) Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

const maxMin =( ...max)=>{
    let maximum= max[0]
    for(let i=0; i<max.length; i++)
    if (max[i]>maximum){
        maximum=max[i]
    }
    return maximum
}
console.log(maxMin(0,10,5))
console.log(maxMin(0,-10,-2))

// // exercise2
// //(1) Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(){
    
}

// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

let quadra = (a,b,c)=>{
    let x =0
    x =(((-1*b+(((b**2))-(4*a*c)))**0.5)/2*a)
    return x
}
console.log(quadra(5,6,7))


let quad = (a,b,c)=>{
    let val1= (-1*b+ Math.sqrt(Math.pow(b,2)-(4*a*c)))/2*a
    let val2 = (-1*b- Math.sqrt(Math.pow(b,2)-(4*a*c)))/2*a
    let space = ", "
    return val1 + space + val2
}
console.log(quad())
console.log(quad( 1,4,4))
console.log(quad( 1,-1,-2))
console.log(quad( 1,7,12))
console.log(quad( 1,0,-4))
console.log(quad( 1,-1,0))

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
 const printArray=(...arr)=>{
    const result= []
    for (const item of arr){
        let d = item.toUpperCase()
        // item.toUpperCase()
        result.push(d)
    }
    return result
    
}
console.log(printArray('fola','mufidat','menu'))


//     let arraY = ['mufidat', 'fola', 'tope']
 
//     for(const items of arraY){
//         console.log(items.toUpperCase())
//     }


//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

let now = new Date()
const showDateTime = ()=>{
let date = now.getDate()
date = date<10? '0' + date:date
let month = now.getMonth() +1
month = month<10? '0' + month:month
let year = now.getFullYear()
let hour = now.getHours()
hour = hour%12==0? 12: hour
let minutes = now.getMinutes()
let seconds = now.getSeconds()
     return `${date}/ ${month}/${year} ${hour}:${seconds}`
}
console.log(showDateTime())

// 5 Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// how do i use sort when i want to pass an argument
const swapValues =(a,b)=> `${b}, ${a}`

console.log(swapValues(3,4))

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// ['C', 'B', 'A']

const reverseArray =(...arr)=>{
    let newar= []
    for(let i=arr.length-1; i>=0; i--){
        newar.push(arr[i])
    }
    return newar
}
console.log(reverseArray(4,6,7,8,10))
console.log(reverseArray('A','B','C','D',10))

// const reversal = (...arr)=>{
//     console.log (sort(arr => a-b))
//     return arr
// }
// reversal([2,4,6,7,8,4])

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// const capitalizedArray =(...arr)=>{
//     let capital =[]
//     for (let i = 0; i < arr.length; i++){
//        capital.push(arr[i].toUppercase()
//        )
//     } return capital
   
// } 
// console.log(capitalizedArray(['man', 'woman', 'goat', 'dog']))

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item)=>{
    let items = [4,5,7,9,1]
    // items.push(2)
    // return items
    if (items.includes(item)===false){
        items.push(item)
    }
    return items
}
console.log(addItem(2))
//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeitems = [4,5,7,9,1]
const removeItem = ()=>{
    removeitems.pop(2)
    return removeitems
}
console.log( removeItem())

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumers=(a)=>{
    let ssum=0
    for (let i =0; i<=10; i++){
        ssum+=i
    } 
    return ssum
}
console.log(sumOfNumers(10))

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfodd = (a)=>{
    let odd = 0
    for (let i = 1; i <= a; i+=2){
            odd =odd + i 
    }         
    return (odd)
}
console.log(sumOfodd(10))
// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = (a)=>{
    let ofeven = 0
    for (let i = 0; i <= a; i+=2){
            ofeven +=i
    }return ofeven
}
console.log(sumOfEven(8))
// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
const oddonly = (a)=>{
    let odd = []
    for (let i = 1; i <= a; i+=2){
         odd.push(i)
    }         
    return odd

}
console.log(oddonly(10))

const evenonly = (a)=>{
    let ofeven = []
    for (let i = 0; i <= a; i+=2){
            ofeven.push(i)
    }return ofeven
}
console.log(evenonly(10))

const evensAndOdds=(num)=>{
   let odds = oddonly(num)
   let evens = evenonly(num)
    return `the num of even ${odds.length}\n the num of even ${evens.length}`
   }
   console.log(evensAndOdds(10))
// 14 Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

const multipleNum = (...anyNum)=> {
    let sumNum = 0
    for(let i =0; i<anyNum.length; i++)
    sumNum +=anyNum[i]
    return sumNum
}
console.log(multipleNum(1,2,3))
console.log(multipleNum(1,2,3,4))

function multiple(){
    let sum = 0
    for(let i =0; i<arguments.length; i++)
    sum+=arguments[i]
    return sum
}
console.log(multiple(1,1,1,1,1))

//15 Writ a function which generates a randomUserIp.

const randomUserIp=()=>{
    let ipGen = Math.floor((Math.random()*255)+1)
    let ipGen1 = Math.floor((Math.random()*255))
    let ipGen2 = Math.floor((Math.random()*255)+1)
    let ipGen3 = Math.floor((Math.random()*255)+1)
    let space = '.'
    return `${ipGen}.${ipGen1}.${ipGen2}.${ipGen3}`
}
console.log(randomUserIp())

//16 Write a function which generates a randomMacAddress

//17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
const randomHexNUmber=()=>{
    let hexgen = Math.floor(Math.random()*1000000*0Xffffff).toString(16).substring(0,6)
    return `#${hexgen}`.toUpperCase()
}
console.log(randomHexNUmber())

//18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator=()=>{
    let generator =Math.random().toString(36).substring(2,8).toUpperCase()
    console.log(generator)
}
userIdGenerator()

//exercise level 3
//1 Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// let input1=prompt(`Enter the numer of character`)
// let input2= prompt(`Enter Numbers of ID to be generated`)
// const userIdGeneratedByUser=()=>{
//     let idgenerator = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     let result = ''
// }
// 2 Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

const rgbColorGen = ()=>{
    let rgb1 = Math.floor((Math.random()*255)+1)
    let rgb2 = Math.floor((Math.random()*255)+1)
    let rgb3 = Math.floor((Math.random()*255)+1)
    return `rgb(${rgb1},${rgb2},${rgb3})`
    
}
console.log(rgbColorGen())


const revArray =(arr)=>{
    let newArray=[]
    for(let i = arr.length-1; i>=0; i--){
        let value = arr[i]
        newArray.push(value)
        // newArray.push(arr[i])
    }
    return newArray

}
console.log(revArray(removeitems))

//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.


const arrayOfHexaColors=()=>{
    let firstLetter = "#"
    let hexaColor =[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'].join("")
    let color=""
    for (let i=0; i<= hexaColor.length - 1; i++){

        color += hexaColor.charAt(Math.floor(Math.random() * hexaColor.length))
    }return (firstLetter + color.substring(0, 6)).split(',')
}
console.log(arrayOfHexaColors())

// const arrayOfHexaColors=()=>{
//     let firstLetter = "#"
//     let hexaColor =[1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
//     let color=[]
//     for (let i=0; i<= hexaColor.length - 1; i++){

//         color += hexaColor.push(Math.floor(Math.random() * hexaColor.length))
//     }return (firstLetter + color.slice(0, 6)).split(',')
// }
// console.log(arrayOfHexaColors())


//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgb=()=>{
    let color = Math.floor(Math.random()*255)
    let array=[]
    for(let i=0; i<3; i++){
         array.push(color)
    }return array
}
console.log(arrayOfRgb())

const colors = (r,g,b)=>{
    let c = `rgb(${r}, ${g}, ${b})`
    return c
}
console.log(colors(...arrayOfRgb()))

//6 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
 
const HexaColor=()=>`${ Math.random().toString(36).substring(2,8)}`

const convertHexaToRgb =(r,g,b)=>{
    //regex is majorly  used to solve it i dont know regex
}
 
// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa=(c)=>{
    let hexValue = c.toString(16).toUpperCase()
    return hexValue.length==1 ? '0'+hexValue:hexValue
}
const rgbValue = (r,g,b)=>{
    return `#${convertRgbToHexa(r)}${convertRgbToHexa(g)}${convertRgbToHexa(b)}`
}
console.log(rgbValue(200,30,250))
//other method
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
  
  console.log(rgbToHex(0, 51, 255));


//   Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
//   https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

const shuffleArray=(array)=>{
    let shuffled = []
    let len = array.length
    for (let i = 0; i < len; i++ ){
        const index = Math.floor(Math.random()*len)
        const remove = array.splice(index,1)
        shuffled=shuffled.concat(remove)
    }return shuffled
}
console.log(shuffleArray([1,2,3,4,5,6,7]))

// Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColor =()=>{

}
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial =(a)=>{
    let result =1
    if (a==0||a==1){
        return 1
    }else {
        for(let i = a; i>=a; i--){
            result=result*1
        }
    }
    return result
}
console.log(factorial(5))

// let num = parseInt(prompt ('enter a positive number'))
// const factorial1=()=>{

//     if (num <1){
//         return -1
//     }else if (num==0){
//         return 1
//     }
//     else{
//         let fact = 1
//         for (let i = num; i>=1; i--){
//             fact *=i

//         }return fact
//     }
// }
// console.log(factorial1())

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.


function sum(){
    let sum1 =0
    for (let i=0; i<arguments.length; i++){
        sum1 += arguments[i]
    
    }return sum1
    
}
console.log(sum(2,4,5,6,7,8,9))

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems =(...arrayItems)=>{
    let sum =0
       
    // for (let i=0; i<arrayItems.length; i++){
    //     sum +=arrayItems[i]
    // }return sum
    for (const sum_array of arrayItems){
        if (typeof(sumArray)!=='number')
        sum = sum+sum_array
    }return sum
    
    
}
console.log(sumOfArrayItems(3,5,7))

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
//  cons  t findAverage = []
const average=(...averRage)=>{

    let sum =0
    for(const age of averRage){
        if(typeof(age) !== 'number'){
            return `Not a number`
        }
        sum =(sum+age)
    }
 return sum/averRage.length
}
console.log(average(2,5,6,8 ,'f'))
console.log(average(2,5,6,8))

const modifyArray =(...array)=>{
    let newArray = []
    for (const element of array){
        element.splice(5,1,)
    }
}

