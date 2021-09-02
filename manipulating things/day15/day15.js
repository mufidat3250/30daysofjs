class Person {
  constructor(firstname, lastName = "muideen", age, country, state, hubbies) {
    this.first = firstname;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.score = 0;
    this.skill = [];
    this.hubbies = [];
  }
  getFullDetail() {
    return this.first + " " + this.lastName;
  }
  get getname() {
    return this.first;
  }
  get getscore() {
    return this.score;
  }
  set setscore(score) {
    return (this.score += score);
  }
  set setskill(skill) {
    return this.skill.push(skill);
  }
  set sethubbies(hubby) {
    return this.hubbies.push(hubby);
  }
}

const person = new Person("Wahab", "Mufidat");
const person2 = new Person();
const person1 = new Person("akeem", "sumonu");
console.log(person2);
console.log(person.getFullDetail());
console.log(person1.getFullDetail());
console.log(person.first);
console.log(person1.score);
console.log(person1.skill);
console.log(person1.getname);
person1.sethubbies = "playing";
person1.sethubbies = "singing";
person1.setskill = "html";
person1.setskill = "css";
person1.setskill = "mango";
person1.setscore = 1;
person1.setscore = 5;
console.log(person1.score);
console.log(person1.skill);
console.log(person1.hubbies);

class student extends Person {
  get gethubbies() {
    return "i love playing reading singing";
  }
  set setskill(skill) {
    this.skill.push(skill);
  }
}
// student2.setskill = "html";
const student2 = new student("asab", "yetaye", 30, "nigeria");
console.log(student2.skill);
student2.setskill = "css";
console.log(student2.skill);

//exercises

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getSpeed() {
    return `${this.name} has ${this.age} years old  and has ${this.legs} legs  with ${this.brown} color`;
  }

  mypet() {
    return this.name;
  }
}
class Dog extends Animal {
  get getbreed() {
    return "my dog bread is pugabull";
  }
}
const dog = new Dog("bingo", 20, "green", 4);
console.log(dog.getbreed);
console.log(dog.getSpeed());
console.log(dog.mypet());
class Cat extends Animal {}
const cat = new Cat("sisi", 20, "green", 4);
console.log(cat.getSpeed());
console.log(cat.mypet());

class mammals extends Animal {
  constructor(name, age, legs, color, gender, hybreed) {
    super(name, age, legs, color);
    this.gender = gender;
    this.hybreed = hybreed;
  }
  mypet() {
    return "this.name";
  }
  getSpeed() {
    return `${this.name} has ${this.age} years old  and has ${this.legs} legs  with ${this.brown} color and it is a ${this.gender}`;
  }
}
const mama = new mammals("sisi", 20, "green", 4, "male");
console.log(mama.mypet());
console.log(mama.getSpeed());

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
class Statistics {
  constructor(age) {
    this.data = age;
    this.sorted = this.data.sort((a, b) => a - b);
  }
  Data() {
    return this.data;
  }
  count() {
    return this.data.length;
  }
  sum() {
    return this.data.reduce((acc, cur) => acc + cur, 0);
  }
  min() {
    return this.sorted[0];
  }
  max() {
    return this.sorted[this.sorted.length - 1];
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  range() {
    return this.max() - this.min();
  }
  median() {
    if (this.count() % 2) {
      return this.sorted[(this.count() - 1) / 2];
    } else
      return (
        (this.sorted[this.count() - 1 / 2] + this.sorted()[this.count() / 2]) /
        2
      );

    //     return this.count() % 2
    //       ? this.sorted[(this.count() - 1) / 2]
    //       : (this.sorted[this.count() - 1 / 2] + this.sorted([this.count() / 2])) /
    //           2;
  }
  mode() {
    let data = this.data.reduce((acc, cur) => {
      if (acc[cur]) acc[cur] += 1;
      else acc[cur] = 1;
      return acc;
    }, {});
    return (data = Object.entries(data).sort((a, b) => b[1] - a[1])[0]);
  }
  variance() {
    return (
      this.sorted
        .map((items) => (items - this.mean()) ** 2)
        .reduce((acc, cur) => acc + cur, 0) / this.count()
    );
  }
  standereddeviation() {
    return (this.variance() ** 0.5).toFixed(2);
  }
  frequency() {
    let data = this.data.reduce((acc, cur) => {
      if (acc[cur]) acc[cur] += 1;
      else acc[cur] = 1;
      return acc;
    }, {});
    return (data = Object.entries(data)).map((item) => [
      (item[1] / this.count()) * 100,
      item[0],
    ]);
  }
}

const statistics = new Statistics(ages);
console.log(statistics.Data());
console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.mean());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.median());
console.log(statistics.mode());
console.log(statistics.variance());
console.log(statistics.standereddeviation());
console.log(statistics.frequency());

