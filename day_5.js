const arr =[] 

const num_ber =[0, 1, 2.5, 3.5, 99, 100]
console.log("Number:", num_ber)
console.log("Number:", num_ber.length-1)
const fruits =[ "tomatoes", "potato", "cabbage", "onion"]
fruits[0]
console.log(fruits)
let js = "Javascript"
let Javascript= js.split("")
console.log(Javascript)

let txt = 'i love teaching and empowering people. i teach HTML, CSS, REACT.'
let txxt = txt.split(' ')
console.log(txxt)
//accessing aray items using index

const _fruit = ['mango' ,'potato' , "banana", "orange"]
let f_ruit = _fruit[3]
_fruit[3]='avocado'
console.log(_fruit)
//having multiple variable inside an array
let dif = ["book", "food", 30 , {country: "finland", city: "osogbo"} , [30, 40] ,["money", "coin"]]
console.log(dif)
//accessing an array using there index 
let ac= ["love", "food", "drink" , "water"]
//let acc=ac[3]
console.log(ac[3])
console.log(ac.length-1)
console.log(ac.length)
let last_index= ac.length-1
console.log(ac[last_index])
// fill
// const _arr = Array(8)
// console.log(_arr)
// const _arr = Array(8).fill("U")
// console.log(_arr)
//concat
 const firstList = ["Mufidat ", "Wahab", "Azeez", "Abiola"]
 const secList= ["Aisha", "sulaiman", "Tope"]
 console.log (firstList.concat(secList))
const _numm = [1, 2, 3, 4, 5, 3, 4, 1]
console.log(_numm[2])
console.log(_numm[6])
console.log(_numm[4])
console.log(_numm.indexOf(6))
console.log(_numm.indexOf(4))
let _index = _numm.indexOf(3)
if (_index!=-1){
    console.log("the fruit exist")
}else {
    console.log("the number does not exist")
}
console.log(_numm.lastIndexOf(3))

//using includes
console.log (_numm.includes(a))
console.log (_numm.includes(2))
// checking if a data type is an array

console.log(Array.isArray(_numm))
console.log(Array.isArray(_index))

const frui_ts =[ "tomatoes", "potato", "cabbage", "onion"]
//joining Array Element
const names = ['Asabena', 'mathies', 'Elias', 'brook']
console.log(names.join())
console.log(names.join(''))

const number_s = [1,2,3,4,5]
console.log(number_s.slice())
console.log(number_s.slice(0,4))
console.log(number_s.slice(1,4))
console.log(number_s.slice(3,7))

let frontend = ['js', 'react', 'anguler']
let backend= ['node', 'native' ,'cheat']
let fullstack = ['frontend', 'backend']
alert(fullstack)

//Excercise 5 

let ar_r = []

let a_rr = ['food', 'drink', 'water', 'spoon', 'money']
alert(a_rr.length)
console.log(a_rr[0])
console.log(a_rr[2])
console.log(a_rr[4])
let mixedDataType = [ 2, 4, 'MongoDb' ,' React' [5, 7, 8, 9] , "Microsoft"  ]

console.log(mixedDataType)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[0])
console.log(itCompanies[6])

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let itCompanie = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
itCompanie.shift()    //remove element at the begining of array
console.log(itCompanie)
itCompanie.push(0) // add element to the end of an array
console.log(itCompanie)
console.log(itCompanie.splice(3, 1)) // remove the middle element 
console.log(itCompanie)
console.log(itCompanie.splice()) //remove all element in an aray
itCompanie.pop(0)
console.log(itCompanie) // remove last element from Array


// First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.replaceAll(".", "").replaceAll("," , ""))
console.log(text.split(" "))
console.log(text.split(" ").length)

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
add= shoppingCart.unshift('meat')
console.log(shoppingCart)
let addd= shoppingCart.push('suger')
console.log(shoppingCart)
console.log(shoppingCart.splice(4 , 1))
console.log(shoppingCart)
shoppingCart[3] = 'Green Tea' //modifying an array
console.log(shoppingCart)

// add Sugar at the end of you shopping cart if it has not been already added
let count_ary = ['France', 'Itly', 'Nigeria', 'Gana']
let available = count_ary.includes("Ethiopia")
console.log(available)
let ava= count_ary.unshift('Ethiopia')
console.log(count_ary )

// Concatenate the following two variables and store it in a fullStack variable.

const front_End = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const back_End = ['Node','Express', 'MongoDB']

let full_stack = front_End.concat(back_End)
console.log(full_stack )


// The following is an array of 10 students ages:

const age_s = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(age_s.sort())
console.log(Math.min(...age_s))
console.log(Math.max(...age_s))
console.log(Math.min(4,10,2))
// Find the median age(one middle item or two middle items divided by two)
//add up

// Find the average age(all items divided by number of items)
const callback = (accumulator , currentValue) => accumulator+currentValue
const sum = age_s.reduce(callback)
console.log(sum) //sum the values of the aray/ 
arr_length = age_s.length //get the length of the array
console.log(arr_length)
const average = sum/arr_length // devide to get the average
console.log(average)



  const x = (y, z)=> y+z
  const su_m = age_s.reduce(x)
  const le_nt = age_s.length
  const ave_ = su_m/le_nt
  console.log (ave_)

  const str ="31 22 456 1 34 8574 4 14"
  const sp_lit =str.split(" ")
console.log( sp_lit)
const _sort =  sp_lit.sort()
console.log(_sort)
const _int = parseInt(_sort)
console.log(_int)

for(let i = 5; i >= 0; i--){
    console.log(i)
  }

  // adding up an element in an array

  let numbers  = [1, 2, 3, 4, 5]
  let sume = 0
  for (let i = 0; i < numbers.length; i++ ){
    sume = sume + numbers[i]
    //sume +=numbers[i] 
  }
  console.log(sume)
  
  // const numb_ers = [1, 2, 3, 4, 5]
  // let _sum = 0
  // for(let i = 0; i < numb_ers.length; i++){
  //   _sum  = _sum + numb_ers[i]  // can be shorten, sum += numbers[i]
  
  // }
  
  // console.log(_sum)  // 15
  let  n = "mufidat"
  console.log(typeof(n))
  
  let ten = "10"
  console.log(typeof(ten))
  console.log(+ten)
  let nine = parseFloat("9.8")
  console.log(nine)
  console.log(Math.ceil(nine))

  console.log ("python".length != "jargon".length)

  let _today = new Date()
  console.log(_today.getHours())
  console.log(_today.getFullYear())
  let r = prompt("Side A")
  let s = prompt("Side B")
  let t = prompt("Side C")
  console.log(Number(r)+Number(s)+Number(t))

  

  const _ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
  const sorted_ =_ages.sort()
  console.log(sorted_)
  console.log(sorted_[(sorted_.length - 1) / 2])

  let rang = (Math.max(..._ages) - Math.min(..._ages))
  console.log(rang)

  // Declare an empty array;
  let arr = []
  // Declare an array with more than 5 number of elements
  let arra = [2,3,5,6,7,]
  // Find the length of your array
  console.log(arra.length)
  // Get the first item,
  console.log(arra[0])
  //  the middle item and the 
console.log(arra[(arra.length -1)/ 2])
  // last item of the array
console.log (arra.length - 1)
  // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

  let mixeddata = [ 2, 3, "food", "cloth", 1, [3,4]]
  console.log(mixeddata.length-1)
  // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  let itComapnies=["Facebook" , "Google", "Microsoft"," Apple", "IBM", "Oracle" , "Amazon"]
 
  // Print the array using console.log()
  console.log (itCompanies)
  // Print the number of companies in the array
  console.log (itCompanies.length)
  // Print the first company, 
  console.log (itCompanies[0])
  // middle and last company
  console.log (itCompanies[(itCompanies.length-1)/2])
  console.log (itCompanies[itCompanies.length-1])
  // Print out each compan

  // Change each company name to uppercase one by one and print them out
  // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  console.log(`${itCompanies.join(",")} are big it comapanies`)
  // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  let check_comp = prompt('enter the name of company')
  if (itCompanies.includes(check_comp)){
    console.log(check_comp)
  }else{
    console.log("The company does not exist")
  
  Filter out companies which have more than one 'o' without the filter method
  // Sort the array using sort() method
  console.log(itCompanies.sort())
  // Reverse the array using reverse() method
  console.log(itCompanies.reverse())
  // Slice out the first 3 companies from the array
  console.log(itCompanies.slice(0,3))
  // Slice out the last 3 companies from the array
  console.log(itCompanies.slice(4))
  // Slice out the middle IT company or companies from the array
  console.log(itCompanies[(itCompanies.length-1)/2])
  // Remove the first IT company from the array
  console.log(itCompanies.pop())
  // Remove the middle IT company or companies from the array
  console.log(itCompanies.splice([(itCompanies.length-1)/2 , 1]))
  // Remove the last IT company from the array
  console.log(itCompanies.shift())
  // Remove all IT companies
  console.log(itCompanies.splice())

  let con= "ETHIOPIA"

  if (itCompanies.includes("ETHIOPIA")){
    console.log("ETHIOPIA")
  }else{
    itCompanies.push("ETHIOPIA")
  }
  console.log(itCompanies)
  
  if (mixeddata.includes("Sass")){
    console.log("Sass")
  }else {
    mixeddata.push("Sass")
  }console.log(mixeddata)

const fruits = 'Mango, Pawpaw, Pineapple, Cashew, Orange'.split(', ')
console.log(fruits[0])
console.log(fruits[(fruits.length  - 1) / 2])
console.log(fruits[fruits.length - 1])

console.log(fruits.length % 2
    ? fruits[(fruits.length - 1)/2]
    : fruits.slice(fruits.length/2 - 1, fruits.length/2 +1)
    )

