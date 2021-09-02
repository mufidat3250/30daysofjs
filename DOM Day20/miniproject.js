const colorroot = {
  tomatoRed: "#eb695b",
  nigeriaGreen: "#5bbc7a",
  goldenYellow: "#f7dc5c",
  fadeBlack: "#202020",
};

// creating  the date function
const timeFunction = () => {
  let now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();
  const hours = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  return `September${day}, ${year} ${hours}:${minute}:${seconds}`;
};
timeFunction();

//randomly generating an hexadecimal color
const hexaColorGen = () => {
  const hexaDec = "0123456789abcdef";
  let hexa = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexaDec.length);
    hexa += hexaDec[index];
    console.log(hexa);
  }
  return "#" + hexa;
};

// styling the general container
const wrapper = document.querySelector(".wrapper");
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";
wrapper.style.fontFamily = "Sans Serif , Roboto";
wrapper.style.cursor = "pointer";
console.log(wrapper);

//getting header with random color
const header = document.querySelector("h1");
header.style.fontSize = "5px";
header.style.fontWeight = "700";
header.style.color = colorroot.fadeBlack;
const secondHeader = document.querySelector("h2");
secondHeader.style.fontSize = "12px";
secondHeader.style.fontWeight = "100";
secondHeader.style.borderBottom = "1px solid #000000";

const Year = document.querySelector(".year");
Year.style.fontSize = "4rem";
Year.style.color = hexaColorGen();
setInterval(() => {
  Year.style.color = hexaColorGen();
}, 1000);

// generating full date with random background

const Time = document.querySelector(".time");
Time.style.backgroundColor = hexaColorGen();
Time.style.padding = "7px";
Time.style.fontSize = "5px";
Time.style.marginTop = "10px";
setInterval(() => {
  Time.style.backgroundColor = hexaColorGen();
  Time.textContent = timeFunction();
}, 1000);

console.log(colorroot);
const itemList = document.querySelector("ul");
console.log(itemList);

//removing the style from a list
itemList.style.listStyle = "none";
const list = document.querySelectorAll("li");

// looping through the list to access the list element
// list.forEach((element, i) => {
//   if (i == 0) {
//     (element.style.backgroundColor = colorroot.nigeriaGreen),
//       (element.style.fontSize = "10px"),
//       (element.style.width = "80vh"),
//       (element.style.padding = "0.7rem"),
//       (element.style.marginBottom = "3px");
//   } else if (i == 1) {
//     (element.style.backgroundColor = colorroot.goldenYellow),
//       (element.style.fontSize = "10px"),
//       (element.style.fontWeight = "1px"),
//       (element.style.padding = "0.7rem"),
//       (element.style.marginBottom = "3px");
//   } else {
//     (element.style.backgroundColor = colorroot.tomatoRed),
//       (element.style.fontSize = "5px"),
//       (element.style.padding = "0.7rem"),
//       (element.style.marginBottom = "3px");
//   }
// });

//alternative method
list.forEach((element, i) => {
  element.style.fontSize = "10px";
  element.style.padding = "0.7rem";
  element.style.marginBottom = "3px";
  element.style.fontWeight = "100";
  element.style.width = "80vh";

  i == 0
    ? (element.style.backgroundColor = colorroot.goldenYellow)
    : i == 1
    ? (element.style.backgroundColor = colorroot.goldenYellow)
    : (element.style.backgroundColor = colorroot.tomatoRed);
});
