const hasMeeting = true;
//promise declearation
const Meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      Name: "Onboarding",
      location: "google Meet",
      time: "7 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error(" Meeting already scheduled"));
  }
});

const addTOcalender = (meetingDetails) => {
  const calenda = `${meetingDetails.Name}, ${meetingDetails.location}${meetingDetails.time}`;
  return Promise.resolve(calenda);
};
// how to use promise using .then and .chatch
Meeting.then(addTOcalender)
  .then((res) => {
    console.log("Meeting Scheduled");
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

async function myMeeting() {
  try {
    const meetingDetails = await Meeting;
    const message = await addTOcalender(meetingDetails);
    //   console.log(meetingDetails);
    console.log(message);
  } catch {
    console.log("error occured");
  }
}
myMeeting();

///running multiple promise at thesame time

const promise1 = Promise.resolve("promise 1 complete");
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise 2 completed");
  }, 2000);
});
promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));
Promise.all([promise1, promise2]).then((res) => console.log(res));

//call back

const callback = (err, result) => {
  if (!err) {
    return console.log(err);
  } else return console.log(result);
};

const setTime = (callback) => {
  setTimeout(() => {
    const skill = ["html", "css", "mongoDB"];
    callback("something went wrong", skill);
  }, 2000);
};
setTime(callback);

const dopromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skill = ["HTML", "CSS", "MONGO", "SASS"];
    if (!skill) {
      return resolve(skill);
    } else return resolve("pls check some other time");
  }, 2000);
});
dopromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//fetch API
const url = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

async function fetchData() {
  try {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response;
    console.log(users);
  } catch (err) {
    console.log("dfdfjdf");
  }
}
fetchData();

////exersise

const countriesAPI = "https://restcountries.eu/rest/v2/all";
// const url = "https://api.thecatapi.com/v1/breeds";

// fetch(countriesAPI)
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

async function fetchDat() {
  try {
    const countriesAPI = (
      await fetch("https://restcountries.eu/rest/v2/all")
    ).json();
    const country = await countriesAPI;
    console.log(country);

    const getConDeta = country.map((item) => [
      item.name,
      item.capital,
      item.languages,
      item.population,
      item.area,
    ]);
    console.log(getConDeta);

    const largestCOntry = country
      .map((item) => item.area)
      .sort((a, b) => b - a)
      .slice(0, 10);
    console.log(largestCOntry);

    const officialLang = country.map((item) => item.languages);
    console.log(officialLang);
  } catch (err) {
    console.log(err);
  }
}
fetchDat();

// const fetchCatData = async () => {
//   try {
//     const catsAPI = (await fetch("https://api.thecatapi.com/v1/breeds")).json();
//     const cats = await catsAPI;

//     const catNames = cats.map((item) => item.name);
//     console.log(catNames);

//     const catWeights = cats.map((cat) => {
//       let [low, high] = cat.weight.metric.replaceAll(" ", "").split("-");
//       low = Number(low);
//       high = Number(high);
//       return (low + high) / 2;
//     });
//   } catch (err) {
//     console.log("something came up");
//     console.log(err);
//   }
// };
// console.log(fetchCatData());

const fetchCatData = async () => {
  try {
    const catAPI = await fetch("https://api.thecatapi.com/v1/breeds");
    //all cat data from the server
    const catData = await catAPI.json();
    console.log(catData);
    //printing cat name from the provided data
    const catNames = catData.map((cat) => cat.name);
    console.log(catNames);
  } catch (err) {
    console.log(err);
  }
};
fetchCatData();

const catAverageWeight = async () => {
  try {
    const catAPI = await fetch("https://api.thecatapi.com/v1/breeds");
    //all cat data from the server
    const catData = await catAPI.json();

    //printing cat weight from the provided data
    const catNames =
      catData
        .map((cat) => {
          const weightRange = cat.weight.metric;
          const [low, high] = weightRange.replaceAll(" ", "").split("-");
          return (+low + +high) / 2;
        })
        .reduce((total, average) => total + average, 0) / catData.length;
    console.log(catNames);
  } catch (err) {
    console.log(err);
  }
};

console.log(catAverageWeight());
