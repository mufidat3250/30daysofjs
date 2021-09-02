const users_info = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
// const school ={
// table: 10,
// student:100,
// teachers:['Mr ojo', 'Mr Samuel', 'Miss Mufidat'] ,
// subjects: ['Math', 'English', "physics"],
// skills:["HTML", 'CSS','JS','MONGODB','PYTHON'],
// getSchoolDetails(){
//     return `${this.table},${this.student}, ${school.teachers}`
// }

// }
// console.log(school.teachers.length)
// const person={
//     fristName:'mufidat',
//     lastName:'Abiola'
// }

// console.log(school.getSchoolDetails())

// school.table=100
// console.log(school)
// // const school2= school
// //object method
// const school2= Object.assign({},school)
// school2.food='yam'
// console.log(school2)
// console.log(Object.keys(school2))
// const value = Object.values(school2)
// console.log(value)
// const entries = Object.entries(school2)
// console.log(entries)
// console.log(school2.hasOwnProperty('food'))

// ////////////////
// const subjects= ['Math', 'English', "physics"]

// const changeToUppercase =()=>{

//     let newarray=[]
// for (const element of subjects){

//     newarray.push(element.toUpperCase())
// }return newarray.splice(2)

// }
// console.log(changeToUppercase()
// )

// // arr.map((items)=>{

// // })

// const ag_e = [2,5,6,7,8,9,12,32]

// const changedName= subjects.map((items,index)=>{

//     return items.toUpperCase()
// })
// console.log(changedName)

// const newage= []
// const square = ag_e.map((items)=> {
//     return `${items},${items**2}`
// })
// console.log(square)

// const reduce = ag_e.reduce((acc,current)=> acc*current,inita  )
///execise level 1
const dog = {
  name: "Romio",
  legs: 4,
  color: "black",
  age: 20,
  backProperties: function () {
    return `woof woof`;
  },
};
console.log(dog);
console.log(dog.name);
console.log(dog.leg);
console.log(dog.color);
console.log(dog.age);
console.log(dog.backProperties());

// Set new properties the dog object: breed, getDogInfo

//level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.

console.log(
  (manySkill = Object.entries(users).sort(
    (a, b) => b[1].skills.length - a[1].skills.length
  )[0])
);
// Count logged in usermms,
console.log(Object.entries(users).filter((user) => user[1].isLoggedIn));
// count users having greater than equal to 50 points from the following object.
console.log(Object.entries(users).filter((user) => user[1].points < 50));

//3 Find people who are MERN stack developer from the users object

console.log(
  Object.values(users).filter(
    (user) =>
      user.skills.includes("MongoDB") &&
      user.skills.includes("Express") &&
      user.skills.includes("React") &&
      user.skills.includes("Node")
  )
);
// //4 Set your name in the users object without modifying the original users object

const objectUpdate = {
  ...users,
  mufidat: {
    fullName: "Wahab Mufidat",
  },
};
console.log(objectUpdate);

// 5 Get all keys or properties of users object
console.log(Object.keys(users));

//6 Get all the values of users object
console.log(Object.values(users));
// 7Use the countries object to print a country name, capital, populations and languages.

//exercise level 3

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Mufidat",
  lastName: "Wahab",
  incomes: [10_000, 800_000, 1_000_000],
  expenses: [50_000, 60_000, 30_000],

  totalIncome() {
    return this.incomes.reduce((acc, cur) => acc + cur, 0);
  },
  totalExpense: function () {
    return personAccount.expenses.reduce((acc, cur) => acc + cur, 0);
  },
  addIncome(_amount) {
    return this.incomes.push(_amount);
  },
  accountInfo() {
    return `Name: ${this.firstName} ${
      this.lastName
    } \n Total Income: ${this.totalIncome()} Total Expenses: ${this.totalExpense()}`;
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome(70_0000);
console.log(personAccount.incomes);
console.log(personAccount.accountBalance());

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const signUp = (username, email, password) => {
  if (
    users_info.find(
      (user) => user.username === username || user.email === email
    )
  ) {
    alert(`user already exist`);
    return;
  }
  console.log({ users_info });
  users_info.push({
    username,
    email,
    password,
    isLoggedIn: false,
    createdAt: new Date(),
    _id: Math.random().toString(36).slice(2, 9),
  });
};

signUp("Mufidat", "mufidat@gmail.com", "1233578");
console.log(users_info);
//  b. Create a function called signIn which allows user to sign in to the application

// const signIn = (username, email, password) => {};

const signin = (login, password) => {
  if (!login) return alert("username or email (login) is required!");
  if (!password) return alert("password is required!");
  const userIndex = users_info.findIndex(
    (u) => u.username.toLowerCase() === login.toLowerCase() || u.email === login
  );
  if (userIndex === -1) return alert("User does not exist!");

  const user = users_info[userIndex];
  if (user.password !== password) return alert("wrong password provided");
  users_info[userIndex].isLoggedIn = true;
  return;
};
const sign_In = signin("mufidat", "1233578");
console.log(sign_In);
const lastUser = users[users.length - 1];
console.log(lastUser);

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

//  a. Create a function called rateProduct which rates the product

const rateProduct = (product_id, user_id, rate) => {
  const productIndex = products.findIndex(
    (product) => product._id === product_id
  );
  const user = products.find((userr) => products.userId === user_id);
  if ((productIndex = -1)) return alert("product_id is required");
  if (!user) return alert("user not found");
  if (typeof rate !== "number") return alert("rating nust be number");
  if (rate < 1 || rate > 5) return alert("rating must be between 1 and 5");
};
