// // array
// let userOne={
//     name:"mufidat", role: "teacher", country : "nigeria"
// }
// let userTwo= {
//     name:"mufidat", role:"teacher", country: "nigeria"
// }
// console.log(userOne == userTwo)

// let a =[1,2,3]
// a[0]= 12
// let b = [1,2,3]
// console.log(a===b)
// console.log(a)
// //math values
// const PI =3.142
// console.log(Math.PI)
// console.log(Math.round(PI))//approximate
// console.log(Math.floor(PI)) //round bellow
// console.log(Math.ceil(PI)) // round Above
// let randomNum= Math.random()
// let numbtnzeroand10 = randomNum * 11
// console.log(numbtnzeroand10)
// console.log( "i want to be able to tell every body \\what is bothering me and free \"my self\" from emotional stress")
// //literal string
// let aa = 2
// let bb = 3
// console.log(`the sum of ${aa} and ${bb} is ${a+b}`)
// // accesing deffrent character in string 
// let script = "javascript"
// let firstletter = script[0]
// console.log(firstletter)
// let secLetter = script[1]
// console.log(secLetter)
// let lastindex = script.lenght-1
// console.log(lastindex)

// // assignmemt
// //level1
// //1
// let challenge= "30 Days Of JavaScript"
// let face= "Facebook Google Microsoft Apple IBM Oracle Amazon."
// console.log(challenge)
// console.log(challenge.split(''))
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(3,4))
// console.log(challenge.substring(3,7))
// console.log(challenge.substring(0,2))
// console.log(challenge.includes("Script"))
// console.log("string".split(''))
// console.log(challenge.split(","))
// console.log(face.split(" "))
// console.log(challenge.replace("JavaScript", "Python"))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt(4))
// console.log(challenge.indexOf("a"))
// console.log("you cannot end a sentence with because because because is a conjunction".lastIndexOf("because"))
// console.log("you cannot end a sentence with because because because is a conjunction".search("because"))
// console.log(challenge.trim(""))
// let java = "30 Days of JavaScript"
// console.log(java.startsWith("30 Days of JavaScript"))
// console.log(java.endsWith("30 Days of JavaScript"))
// console.log(java.match("a"))
// console.log( "as a jv programmer you need to study ".concat(java))
// console.log(java.repeat("10"))

// // exercise2
// console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// let stringg = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(stringg.match('love'))


// let num = "10"
// console.log(typeof(num))
// let num1 = parseInt(num)
// console.log(num1)
// let num2 = Number(num)
// console.log(num2)
// let num3  = +num
// console.log(num3)
// let num4= "9.8"
// // console.log(num5)
// let num6= "9.8"
// let num7 = parseFloat(num6)
// console.log(num7)
// console.log(num7.toFixed())
// let on ="python"
// let on1 = "jargon"
// console.log(on.includes("on"))
// console.log(on1.includes("on"))
// let jargon = "i hope this cause is not full of jargon"
// console.log(jargon.includes("jargon"))
// console.log("jabaScript".indexOf("a"))
// let numm = Math.random()
// console.log(numm)
// let numm1 = Math.random()*(100-0)+0
// console.log(numm1)
// let ran = Math.random()*(100-50)+50
// console.log(ran)
// let numm2 = Math.random()*(255-0)+0
// console.log(numm2)
// console.log ("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")
// let subb= "You cannot end a sentence with because because because is a conjunction"
// console.log(subb.substr(31,50))
// let love= "Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence."
// console.log(love.lastIndexOf("love"))
// let bec = "You cannot end a sentence with because because because is a conjunction"
// console.log(bec.match("because"))
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love'))

// let  msalary=5000*12
// let annualbonus = 10000
// let onlineC = 15000*12
// console.log(msalary+annualbonus
// +onlineC)

// // Calculate the total annual income of the person by extracting the numbers from the following text. 
// let incomeStatement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// // console.log(incomeStatement.match(/\d+/g))
// let incomeExtract = incomeStatement.match(/[0-9]+/g)
// let totalIncome = 0
// for(let i=0; i<incomeExtract.length; i++){
//     // totalIncome = totalIncome + incomeExtract[i]
//     totalIncome+= (i===0 || i===(incomeExtract.length-1))? parseInt(incomeExtract[i],10) * 12 : parseInt(incomeExtract[i],10) 
// }

// console.log(totalIncome);


// corrections
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

// let g = prompt('enter your year of birth')
// let h = new Date()-g
// if(g<18){
//     console.log(h)
// }

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// agess= ages.sort()
// console.log(agess)

// console.log([(agess.length-1)/2])
// let gess = (Math.max(...agess)-Math.min(...agess))
// console.log(gess)