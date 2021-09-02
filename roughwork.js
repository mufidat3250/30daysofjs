// var numbers = [8, [1, 2, 3], 10, 12];
// var [a1, [d, e, f], ...rest] = numbers;

// console.log(a1); // Output: 8
// console.log(d); // Output: 1
// console.log(e); // Output: 2
// console.log(...rest);

// var places = ["first", "second", "third", "fourth"];
// var [a2, b1, , d] = ([f, ...rest] = places);

// console.log(a2); //Output: first
// console.log(d); //Output: fourth
// console.log(f); //Output: first
// console.log(rest); //Output: ["second", "third", "fourth"]
// console.log(b1);

// var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

// var [first, second, third, ...rest] = [
//   "Mercury",
//   "Earth",
//   ...planets,
//   "Saturn",
// ];

// console.log(first); //Output: Mercury
// console.log(second); //Output: Earth
// console.log(third);
// console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]

// const a = [1, 2, 3, 4, 5, 6, 7];
// for (let n of a) {
//   console.log(n * n);
// }
// const squareNum = a.map((b) => b * b);
// console.log(squareNum);

// const AllEven = a.filter((b) => b % 2 == 0);
// console.log(AllEven);

// const AllOdd = a.filter((b) => b % 2 != 0);
// console.log(AllOdd);

// const addUp = a.reduce((acc, cur) => {
//   return acc + cur;
// });
// console.log(addUp);
let now = new Date();
console.log(now);
const body = document.body;
const coloreWrapper = document.createElement("div");
body.appendChild(coloreWrapper);
coloreWrapper.style.display = "flex";
coloreWrapper.style.flexWrap = "wrap";
coloreWrapper.style.margin = "auto";
coloreWrapper.style.width = "60%";

const hexaColorGen = () => {
  const hexaDec = "0123456789abcdef";
  let hexa = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexaDec.length);
    hexa += hexaDec[index];
  }
  return "#" + hexa;
}; 
console.log(hexaColorGen());

for (let i = 0; i < 200; i++) {
  let div = document.createElement("div");
  let backgroundColor = hexaColorGen();
  div.textContent = hexaColorGen();
  body.appendChild(div);
  div.style.height = "6rem";
  div.style.width = "6rem";
  div.style.backgroundColor = backgroundColor;
  div.style.textAlign = "center";
  div.style.lineHeight = "6rem";
  div.style.borderRadius = "0.5rem";
  div.style.margin = "10px";
  coloreWrapper.appendChild(div);
}

const countryWrapper = document.createElement("div");
console.log(countries);
body.appendChild(countryWrapper);
countryWrapper.style.display = "flex";
countryWrapper.style.flexWrap = "wrap";
countryWrapper.style.margin = "auto";
countryWrapper.style.width = "75%";
for (let country of countries) {
  let countrieDiv = document.createElement("div");
  countrieDiv.textContent = country;
  countrieDiv.style.height = "100px";
  countrieDiv.style.width = "100px";
  countrieDiv.style.borderRadius = "5px";
  countrieDiv.style.margin = "10px";
  countrieDiv.style.lineHeight = "100px";
  countrieDiv.style.textAlign = "center";
  countrieDiv.style.color = "white";
  if (country.toLowerCase().includes("land")) {
    countrieDiv.style.backgroundColor = "brown";
  } else {
    countrieDiv.style.backgroundColor = hexaColorGen();
  }
  countryWrapper.appendChild(countrieDiv);
}

//.......................clases...................

class person {}
const myPerson = new person();
console.log(myPerson);

class thisPeople {
  constructor(para1, para2) {
    console.log(this);
    this.para1 = para1;
    this.para2 = para2;
  }
}
const ourPeople = new thisPeople("mufidat", "sofia");
const person1 = new thisPeople("lawal", "jamal");
console.log(ourPeople);

class multyParameter {
  constructor(firstName, lastName, age, city, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set SetScore(score) {
    this.score += score;
  }
  set setSkills(skill) {
    this.skills.push(skill);
  }

  getInformation() {
    let fullName = this.getFullName();
    let s_kills =
      this.skills > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ");
    `and ${this.skills[this.skills.length - 1]}`;
    console.log(s_kills);
    let formartedSkills = s_kills ? `he knows ${s_kills}` : "";
    console.log(formartedSkills);
    let information = `${fullName} is ${this.age}. He lives in  ${this.city} , ${this.country}. ${formartedSkills}`;

    return information;
  }
  static myfavoriteSkill() {
    const skills = ["PHP", "JAVASCRIPT", "NODE.js", "ReactNative", "c-sharp"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }

  static printDate(now = new Date()) {
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let days = now.getDay();
    let hours = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    // days < 10 ? "0" + days : days;
    // if (days < 10) "0" + days;
    // month < 10 ? "0" + month : month;
    let Date = `${days}.${month}.${year}`;
    let time = `${hours}:${minute}`;
    let fullTime = `${Date} ${time}`;
    return fullTime;
  }
}
const pelsen = new multyParameter("asab", "fulani", 50, "Osogbo", "nigeria");
const pelsen1 = new multyParameter("fola", "yinka", 30, "helsinki", "finland");

const persons = new multyParameter("a", "s", "d", "f", "j", "t");
pelsen.SetScore = 4;
pelsen.SetScore = 1;
pelsen.setSkills = "HTML";
pelsen.setSkills = "CSS";
pelsen.setSkills = "PHP";
pelsen1.setSkills = "english";
pelsen1.setSkills = "Pysics";

pelsen1.setSkills = "HTML";
pelsen1.setSkills = "CSS";
pelsen1.setSkills = "PHP";
pelsen1.setSkills = "english";
pelsen1.setSkills = "Pysics";
console.log(pelsen);
console.log(pelsen.getFullName());
console.log(pelsen.skills);
console.log(pelsen.getScore);
console.log(pelsen.getSkills);
console.log(pelsen.score);
console.log(persons.skills);
console.log(pelsen.information);
console.log(pelsen.getInformation());
console.log(pelsen1.getInformation());

console.log(multyParameter.myfavoriteSkill());
console.log(multyParameter.printDate());

//class method
//get mathod

//...........inheritance.........

class student extends multyParameter {
  saySomething() {}
}
const stud = new student("mufidat", "yatayeh", "250", "finland", "helsinki");
console.log(stud);
console.log(stud.getInformation());
console.log(stud.getFullName());

class radent extends multyParameter {
  constructor(irstName, lastName, age, city, country, gender, genotype) {
    super(irstName, lastName, age, city, country);
  }
  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills = this.getInformation();
    //   this.skills.length > 0 &&
    //   this.skills.slice(0, this.skills.length - 1).join(", ") +
    //     ` and ${this.skills[this.skills.length - 1]}`;

    // let formattedSkills = skills ? `He knows ${skills}` : "";
    // let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${this.skills}`;
    return info;
  }
}
const over = new radent(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki",
  "Male"
);

////excercises level 1

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get Cantalk() {
    return true;
  }
  set noOfDogs(num) {
    num += num;
  }
}
const animal = new Animal("Bingo", "30", "black", 8);
animal.noOfDogs = 2;
animal.noOfDogs = 6;

console.log(animal);
console.log(animal.Cantalk);

class Dog extends Animal {}
const Dogg = new Dog();
console.log(Dogg);

class cat extends Animal {
  catMethod() {
    return "hey i am a cat";
  }
}
const catt = new cat("Bingo", "30", "black", 90);
console.log(catt.catMethod());
console.log(catt);

class dog extends Animal {
  constructor(name, age, color, legs, sex) {
    super(name, age, color, legs);
    this.sex = sex;
  }
}
const dogs = new dog("Dog", "50", "white", 4, "female");
console.log(dogs);

class Cat extends Animal {
  constructor(name, age, color, legs, sex, breeds) {
    super(name, age, color, legs);
    this.breeds = breeds;
    this.sex = sex;
  }
}
const cat_S = new Cat("Dog", "50", "white", 4, "female", "Abyssinian");
console.log(cat_S);

//.................Exercises..Level 3
class Statistices {
  constructor(age) {
    this.age = age = [
      31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38,
      37, 31, 34, 24, 33, 29, 26,
    ];
  }
  mean() {
    return this.age.reduce((a, b) => a + b, 0) / this.age.length;
  }
  median() {
    let asending = this.age.sort((a, b) => a - b);
    const len = asending.length;
    const median =
      len % 2
        ? asending[(len - 1) / 2]
        : (asending[len / 2 - 1] + asending[len / 2]) / 2;
    return median;
  }
  mode() {
    let occurence = [];
    this.age.forEach((value) => {
      if (occurence[value]) occurence[value] += 1;
      else {
        occurence[value] = 1;
      }
      return Object.entries(occurence).sort((a, b) => b[1] - a[1])[0][0];
    });
  }
  range() {
    let asending = this.age.sort((a, b) => a - b);
    return [asending[0], asending[asending.length - 1]];
  }
  variance() {}
  standerdDeviation() {}

  min() {
    // let Minval = this.age.reduce((a, b) => (a < b ? a : b));
    // return Minval;
    let Minval = Math.min(...this.age);
    return Minval;
  }
  max() {
    // let Maxval = this.age.reduce((a, b) => (a > b ? a : b));
    // return Maxval;
    let Maxval = Math.max(...this.age);
    return Maxval;
  }
  count() {
    let count = this.age.length;
    return count;
  }
}

const statistic = new Statistices();
console.log("count", statistic.count());
console.log("Mean", statistic.mean());
console.log("Median", statistic.median());
console.log("Range", statistic.range());
console.log("Mode", statistic.mode());
console.log("Min", statistic.min());
console.log("Max", statistic.max());

class PersonAccount {
  constructor(firstname, lastname, income, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.income = income = [200000, 500000, 600000, 50000, 1000000];
    this.expenses = expenses = [50000, 40000, 20000, 10000];
  }

  totalIncome() {
    return this.income.reduce((a, b) => a + b, 0);
    // income =
    // income.reduce((a, b, c, d) => {
    //   return a + b;
    // }, 0);
  }
  totalExpense() {
    return this.expenses.reduce((a, b) => a + b, 0);
  }
  accounInfo() {
    return `First Name ${this.firstname}\n Last Name ${
      this.lastname
    }\n Account Balance ${this.accountBalance()}`;
  }
  addIncome(amount) {
    this.income.push(amount);
  }
  addExpense(amount) {
    this.expenses.push(amount);
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}
const general = new PersonAccount("Mufidat", "Wahab");
console.log(general.totalIncome());
console.log(general.totalExpense());
console.log(general.accountBalance());
console.log(general.accounInfo());

general.addIncome(50_000);
console.log(general.income);

//////////////////////////////////JSON///////////////

const checkSeason = (month) => {
  if ("Feburary, March, April".includes(month)) return "Autumn";
  if ("June, July, August".includes(month)) return " winter";
  return month;
};
console.log(checkSeason("April"));
console.log(checkSeason("August"));
console.log(checkSeason("July"));

const findMax = (a, b, c) => {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  if (c > a && c > b) return c;
};
console.log(findMax(1, 2, 3));

const findmax = (...arr) => {
  let maxnum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxnum) {
      maxnum = arr[i];
    }
  }
  return maxnum;
};
console.log(findmax(4, 5, 6, 7));

const printArray = (...arr) => {
  for (let i = 0; i < arr.length; i++) {}
};
