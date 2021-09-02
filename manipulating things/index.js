const para = document.querySelector("p");
console.log(para);

const firstParagraph = document.querySelector("#paragraph-1");
console.log(firstParagraph);
const secondParagraph = document.querySelector("#paragraph-2");
console.log(secondParagraph);
const thirdParagraph = document.querySelector("#paragraph-3");
console.log(thirdParagraph);

const allPtag = document.querySelectorAll("p");

console.log(allPtag.length);
for (let i = 0; i < allPtag.length; i++) {
  console.log(allPtag[i].innerHTML);
}

//adding attribute to the html element

allPtag[3].id = "Paragraph-4";
allPtag[3].className = "first";
//accessing the inner html content
allPtag[3].innerText = "the forth paragraph";
console.log(allPtag);

allPtag[3].setAttribute("id", "paragraph-4");

//adding and removing classes
allPtag[3].classList.add("first", "second", "third");
allPtag[3].classList.remove("first", "second");
console.log(allPtag);

//exercise level2

allPtag[0].style.fontSize = "30px";
allPtag[0].style.color = "yellow";
allPtag[0].style.backgroundColor = "green";
allPtag[0].style.height = "100%";
allPtag[0].style.width = "22%";
allPtag[0].style.fontFamily = "san-serif";

allPtag[1].style.fontSize = "40px";
allPtag[1].style.color = "pink";
allPtag[1].style.backgroundColor = "black";
allPtag[1].style.height = "100%";
allPtag[1].style.width = "22%";
allPtag[1].style.fontFamily = "san-serif";

allPtag[2].style.fontSize = "50px";
allPtag[2].style.color = "pink";
allPtag[2].style.backgroundColor = "red";
allPtag[2].style.height = "100%";
allPtag[2].style.width = "30%";
allPtag[2].style.fontFamily = "san-serif";

allPtag[3].style.fontSize = "50px";
allPtag[3].style.color = "pink";
allPtag[3].style.backgroundColor = "aliceblue";
allPtag[3].style.height = "100%";
allPtag[3].style.width = "30%";
allPtag[3].style.fontFamily = "san-serif";

const paragraph = document.querySelectorAll("p");

paragraph.forEach((content, i) => {
  if (i % 2 == 0) {
    console.log((content.style.color = "blue"));
  } else {
    console.log((content.style.color = "red"));
  }
});

paragraph[0].setAttribute("class", "resetParagraph");
paragraph[0].setAttribute("id", "idpararaph");
paragraph[0].textContent = "i love my life";
paragraph[1].textContent = "i will like to know you better";
paragraph[1].setAttribute("class", "resetParagraph");
paragraph[1].setAttribute("id", "idpararaph2");
console.log(paragraph);
