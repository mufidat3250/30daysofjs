var a = "i love js";
console.log(a);
localStorage.setItem("name", "mufidat");
console.log(localStorage.getItem("name"));
// console.log(localStorage.removeItem("name"));
const skills = ["HTML", "CSS", "JS", "REACT", "NODE", "PYTHON"];
const jasonSkill = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", jasonSkill);
console.log(localStorage.key("name"));
sessionStorage.setItem("foodType", "beans");
document.cookie = "name=fola; expires= " + new Date(2021, 0, 1).toUTCString();
console.log(localStorage);

/////Exercises

let firstName = localStorage.setItem("FirstName", "makinde");
let lastName = localStorage.setItem("lastName", "asabena");
let age = localStorage.setItem("age", 30);
let country = localStorage.setItem("country", "japan");
let city = localStorage.setItem("city", "abuja");

console.log(firstName, lastName, age, country, city);

let a = localStorage.getItem("firstName");
let b = localStorage.getItem("lastName");
let c = localStorage.getItem("age");
let d = localstorage.getItem("country");
let e = localStorage.getItem();
