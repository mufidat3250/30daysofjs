// // for (i=0; i>1; i++){

// // }
// // for(let r = 0; r<=5; r++){
// //     console.log (`${r}*${r}= ${r*r}`)
// // }
// // const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// // const co_n = []
// // for (s = 0 ; s<countries.length; s++){
// //     co_n.push(countries[s].toUpperCase())
// // }
// // console.log(co_n)

// // let sum_= 0
// // const num_s = [1,2,3,4,5,6]
// // for (e= 0; e<num_s.length; e++){

// //     sum_ += num_s[e]

// // }console.log(sum_)
// // //creating a new array based on the excisting array
// // const number_ = [1,2,3,4,5,6]
// // const newArr = []
// // for (f =1; f<=number_.length; f ++){
// //     newArr.push(f +f)
// // }console.log(newArr)

// // const coun_tries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// // let tries =[]
// // for (j=0; j<coun_tries.length; j++){
// //     tries.push(coun_tries[j].toUpperCase())
// // }console.log(tries)

// // let strr=''
// // for (let i=0; i<=9; i++){
// //     strr=strr+i
// // }console.log(strr)

// // for (let i=0; i<9; i++){
// //     console.log(i)
// // }

// //  i=0;
// // for(; i<9; i++){
// //     console.log(i)
// // }

// // for(let i=0; ; i++){
// //     console.log(i);
// //     if(i>=3) break;
// //  }
// // var d =0
// // for(;;){
// //     if(d<5)
// //     d--
// // }

// // let v =0
// // let w=0
// // while(v<3){
// //     v++
// //     w+=v
// // }console.log(w)

// // let j = 1
// // let i=1
// // while (i<7){
// //        j*=i
// //        i++
// // }console.log(j)

// // let text =''
// // let w=0
// // do{
// //     text+= "\n the number is :" +w
// //     w++
// // }while(w<6){
// //     console.log(text)
// // }
// // const cars= ["BMW", "volvo", "Saa", "Ford"]
// // let t =""
// // for (i=0; cars[i]; i++){
// // t +=" "+cars[i]
// // }console.log(t)
// // //for in
// // const value = [45,5,6,4,23,6,7]
// // let x_x =""
// // for(let i in value){
// //     x_x +="\n" + value[i]
// // }console.log(x_x)
// // const person = { fname:'john', lname:"doe", age:25}
// // let per = ""
// // for (let x in person){   //iterate through object
// //     per +=" "+person[x]  // iteration returning key x
// // }console.log(per)

// // //for of loop helps to loop through the value of an iterable object

// // const iterable = [10, 20, 30]
// // for (let p of iterable){
// //     p +=1
// //     console.log (p)
// // }
// // for(let i = 5; i > 0; i--){
// //     console.log(i)
// //   }
// //   let is =5
// //   while(i<=5){
// //       is--
// //       console.log(is)
// //   }
// //   let r = 0
// //   do{
// //     console.log(r)
// //         r++
// //   }while (r>=5)

// const countr_ies = [
//     'Albania','Bolivia', 'Canada', 'Denmark',    'Ethiopia', 'Finland',
//     'Germany', 'Hungary',  'Ireland', 'Japan','Kenya']
//     let j = ""

//     for (let i=0; i<=countr_ies.length; i++){
//             j+="\n"+ countr_ies[i]
//     }console.log(j)
// let i =0
// let q=""
//     while(i<=countr_ies.length){
//         q+="\n"+ countr_ies[i]
//         i++
//     }console.log(q)
//     let J=0
//     for(let i=0; i<=10; i++){
//         console.log(i)
//     }
//     let t=0
//   while(t<=10){
//     console.log(t)
//       t++
//   }
//   let g=0
//   do{
//         console.log(g)
//         g++
//   }while(g<=10)

// for(c=10; c>=0; c--){
//     console.log(c)
// }
// let s=10
// while(s>=0){
//     console.log(s)
//     s--
// }
// let tt=10
// do{
//     console.log(tt)
//     tt--
// }while(tt>=0)
// let n=0
// for (i=0; i<=n; i++){
//     console.log(i)
// }

// for (i=0; i<=7; i++){
//     console.log("#".repeat(i))
// }
// let r=0
// for (i=0; i<=10; i++){
//     console.log(`${i}*${i} = ${i*i}`)

// }

// for (i=0; i<=10; i++){

//     console.log(`${i} ${i**2} ${i**3}`)
// }

// // let rr=0
// // while(r<=100){
// //     console.log(rr)
// //     rr++
// //     if (rr%3 !==0)
// //     continue
// // }

// // for (let i=0; i<=100; i++){
// //     if(i%2 !==0)
// //     continue
// //     console.log(i)
// // }
// // for (let i=0; i<=100; i++){
// //     if(i%3 !==0)
// //     continue
// //     console.log(i)
// // }
// // let ar=0
// // for (let i=0; i<=100; i++){
// //     ar+=i
// //     console.log(ar)
// // }
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// //let sumof_even=0
// let even_even =0
// for (let i=0; i<=100; i++){
//     if (i%2 !==0){
//         continue
//     }
//     even_even += i
//     console.log(i)

// }
// let sum_of_odd=0
// for (let i=0; i<=100; i++){
//     if (i%2 ==0){
//         continue
//     }
//     sum_of_odd +=i
//     console.log(i)
// }

// const toArray = Array(even_even, sum_of_odd);
// console.log(toArray)
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let even_odd =[]

// let sum_of_even=0
// let sum_of_odd=0
// for(i=0; i<=100; i++){
//     if ( i%2!==0){
//         continue
//     }
//     sum_of_even +=i
// for(j=0; j<=100; j++){
//     if(j%2==0){
//         continue
//     }
//     sum_of_odd +=j
// }
// }console.log(even_odd)

// Develop a small script which generate array of 5 random numbers
//declare an array to take the random number
// check if it will be within the length range
//generate a random number
//check if the random number is included
//if included puch

// let array_of_num = []
// for(let i =0; array_of_num.length<5; i++ )
// {
//     n =Math.floor(Math.random()*10)
//     if (!array_of_num.includes(n)){
//         array_of_num.push(n)
//     }
// }console.log(array_of_num)

// let array_ofnum=[]
// for(i=0; array_ofnum.length<5; i++){
//     n= Math.floor(Math.random()*10)
//     array_ofnum.push(n)
// }console.log(array_ofnum)

// Develop a small script which generate a six characters random id:
let rand = Math.random().toString(36);
console.log(rand);

let randomId = Math.random().toString(36).substring(2, 20);
console.log(randomId);

let randomId_ = Math.random() * (0x10000).toString(36).substring(2, 20);
console.log(randomId_);

// Write a script which generates a random hexadecimal number.
let rean_ = (Math.random() * 0x32ff23 * 1000000).toString(16).substring(2, 8);
console.log("#" + rean_);

// var xc = Math.floor(Math.random() * 256);
// var yc = Math.floor(Math.random() * 256);
// var zc = Math.floor(Math.random() * 256);

// let rgb= "rgb("+xc +","+ yc+ "," + zc + ")"
// console.log(rgb)

// // Using the above countries array, create the following new array.
// let cou_t=
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let _con = []
//     for(let i=0; i<=cou_t.length; i++)
//     {
//         _con.push(cou_t[i])
//     }console.log(_con)

// // Using the above countries array, create an array for countries length'.
// const to_arr =Array(_con)
// console.log(to_arr)

// let contry= ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// const countryLengths = []
// for (let i = 0; i < contry.length; i++) {
//     countryLengths.push(contry[i].length)
// }
// console.log(countryLengths)

// // Use the countries array to create the following array of arrays:

// const FullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// for(let i = 0; i<FullStack.length; i++){
//     for(let j = 0; j < FullStack[i].length; j++){
//         console.log(FullStack[i][j])
//     }
// }

// const lands = [];

// for (let i = 0; i <= contry.length - 1; i++) {
//     if (contry[i].includes('LAND') === true){
//         lands.push(contry[i])
//     }
// }
// console.log(lands)

// // Use the countries array to create the following array of arrays:

// //   [
// //   ['Albania', 'ALB', 7],
// //   ['Bolivia', 'BOL', 7],
// //   ['Canada', 'CAN', 6],
// //   ['Denmark', 'DEN', 7],
// //   ['Ethiopia', 'ETH', 8],
// //   ['Finland', 'FIN', 7],
// //   ['Germany', 'GER', 7],
// //   ['Hungary', 'HUN', 7],
// //   ['Ireland', 'IRE', 7],
// //   ['Japan', 'JAP', 5],
// //   ['Kenya', 'KEN', 5]
// // ]

// const con=[];
// for(i=0; i<contry.length; i++){
//     con.push([contry[i], contry[i].slice(0,3),contry[i].length])
// }
// console.log(con)

// const ia = []
// for (let i=0; i<contry.length; i++){
//     if(contry[i].endsWith('IA') === true){
//         ia.push(contry[i].toLowerCase())
//     }
// }console.log(ia)

// // Using the above countries array, find the country containing the biggest number of characters.

// let largest_string = contry[0]
// for(i=0; i<contry.length; i++){
//     if(contry[i].length > largest_string.length){
//         largest_string=contry[i]
//     }
// }console.log(largest_string)

// // Using the above countries array, find the country containing only 5 characters.
// // ['Japan', 'Kenya']
// let arreywith5char= []
// for(i=0; i<contry.length;i++){
//     if(contry[i].length=== 5){
//         arreywith5char.push(contry[i])
//     }
// }console.log(arreywith5char)

// // Use the webTechs array to create the following array of arrays:

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
// const web=[]
// for(i=0; i<webTechs.length; i++){
//     web.push(webTechs[i] , webTechs[i].length)
// }
// console.log(web)

// // Find the longest word in the webTechs array

// let longest= webTechs[0]
// for(i=0; i<webTechs.length; i++){
//     if ( webTechs[i].length>longest.length)
//     longest=webTechs[i]
// }
// console.log(longest)

// let items= []
// for (i=0; i<=webTechs.length; i++){
//     items.push(webTechs[i])
// }
// console.log(items)

// // This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// let rev_Fruit =[]
// let fruit = ['banana', 'orange', 'mango', 'lemon']
//  for(i=fruit.length; i>=0; i--){
//     rev_Fruit.push(fruit[i])
//  }console.log(rev_Fruit)

// //  Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// //   An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// let acronym = "mernStack".split('')
// console.log(acronym)

// const Countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
//   ]
//   let cont_length = []
//   console.log(Countries.length)
//   for(i=0; i<Countries.length; i++){
//       cont_length.push(Countries[i])
//   }
//   console.log(cont_length)
// let sortedCountries= Countries.sort()
// console.log(sortedCountries)

// const uppercase = Countries.map(Countries=>Countries.toUpperCase())
// console.log( uppercase)
//  const co_n =[]
// if ( i=Countries.length; i>=0; i--){
// co_n.push(Countries[i])
// }
// console.log(co_n)

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
//   let sortedWeb = webTechs.sort()
//   console.log(sortedWeb)

// //   Extract all the countries contain the word 'land' from the countries array and print it as array

// let extract = []
// for(i=0; i<Countries.length; i++){
//     if(Countries[i].includes('land')){
//         extract.push(Countries[i])
//     }
// }
// console.log(extract)

// Find the country containing the hightest number of characters in the countries array

// let hightest =[0]
// for(i=0; i<Countries.length; i++){
//     if(Countries[i].length>hightest.length){
//         hightest=Countries[i]
//     }
// }
// console.log( hightest)

// Extract all the countries containing only four characters from the countries array and print it as array

// let four =[]
// for (i=0; i<Countries.length; i++){
//     if (Countries[i].length===4){
//         four.push(Countries[i])
//     }}
//     console.log(four)

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// let stack_ =' '
// const stack = "MongoDB, Express, React, Node".split(", ")
// for (let i=0; i<stack.length; i++){
//     stack_+=stack[i][0]
// }
// console.log(stack_)

// Extract all the countries containing two or more words from the countries array and print it as array

// let twoWord = []
// for (let i = 0; i<Countries.length; i++){
//     if (Countries[i].split(' ').length>=2 ){
//         twoWord.push(Countries[i])
//     }
// }
// console.log(twoWord)

// Reverse the countries array and capitalize each country and stored it as an array

// let country_reverse=[]
//     for(i=0; i<Countries.length; i++){
//         country_reverse.push(Countries[i])
//     }
//     let rever_se= country_reverse.sort()
// console.log(rever_se.reverse())

// const result = Countries.sort((a,b)=>{
//     if (a<b) return -1
//     if (a>b) return +1
//     return 0
// })
// console.log(result)

// const fig = [2,5,6,8,4]
// const result = fig.sort((a,b)=> b-a)
// console.log (fig)

// let largest = Countries[0]
// for (let i = 0; i<Countries.length; i++){
//     if ( Countries[i].length >largest.length){
//         largest=Countries[i]
//     }

// }console.log(largest)
