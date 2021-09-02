console.log(/\d+/.test("abcde"));
console.log(/\d+/.test("12345re"));
console.log(/\bbridge\b/.test("abridge"));
console.log(/\d+$/.test("1derf4S "));

let phone = /^(\+1 )?\(?\d{3}(-|\) )?\d{3}-?\d{4}$/;

let tests = [
  "3435675678",
  "234567865",
  "23456546789",
  "234-705-6707",
  "(432) 432-4322",
  "+1 435-432-3234",
  "3243-234-567 ",
];
let output = tests.map((text) => phone.test(text));
console.log(output);

let body = "fdjfqtqptqef j http://example.com";
link = /https?:|www|javascript:/;
console.log(link.test(body));

console.log(/\d+/.exec("ID:43243"));

let string = "ID: 234543 , GENDER:Male , AGE: 21";
let number = /\d+/g;

let labelNum = /(\w+): (\d+)/;
console.log(number.exec(string));
console.log(number.exec(string));
console.log(number.exec(string));
console.log(labelNum.exec(string));

console.log(string.match(number));

//replace
console.log(string.replace(/(\d)\d+/g, "$1"));
console.log(string.replace(/(\w+): ([a-z0-9A-Z]+)/g, "$2:$1"));
console.log(string.replace(/(\b\w+:)/g, (x) => x.toUpperCase()));

//want to increment the value of age

console.log(string.replace(/AGE:\d+/, (match, num) => "AGE: " + (+num + 1)));

///////////////////////////////////////Exercises on regex///////////////////////

// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let totalAnualINcome =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

let amount = /(\d+)/g;
let incomes = totalAnualINcome
  .match(amount)
  .reduce((acc, cur) => acc + Number(cur), 0);

console.log(incomes);

const horizontalAxix =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";

const regHorizontal = /-\d|\d+/g;
const horizontal = horizontalAxix
  .match(regHorizontal)
  .sort((a, b) => a - b)
  .slice(6, 9)
  .reduce((acc, cur) => acc + Number(cur), 0);

console.log(horizontal);
// const stringg = "_firstn_ame";
const is_valid_variable = (stringg) => {
  let regDeclearation = /^[A-Za-z _]*$/g;
  let variable = regDeclearation.test(stringg);
  return variable;
};
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));

let paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love";

//solution with reduce

// const mostFrequent = () => {
//   let counter = {};
//   let regFrequent = /\w+/g;
//   const MostFrequent = paragraph.match(regFrequent).reduce((acc, cur) => {
//     if (acc[cur]) acc[cur] += 1;
//     else acc[cur] = 1;
//     return acc;
//   }, {});
//   return Object.entries(MostFrequent)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 10);
// };
// console.log(mostFrequent());
let counter = {};
const mostFrequent = (p, count) => {
  //note that foreach does not ave a return statement you will only chain it straight up

  let regFrequent = /\w+/g;
  p.match(regFrequent).forEach((word) => {
    if (counter[word]) counter[word] += 1;
    else counter[word] = 1;
    // word;
  });
  let tenFrequrnt = Object.entries(counter)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
  return tenFrequrnt;
};
console.log(mostFrequent(paragraph, 10));

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanSentence = () => {
  return sentence.replace(/[^\w ]/g, "");
};

console.log(mostFrequent(cleanSentence(), 3));
