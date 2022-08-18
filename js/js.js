const people = [
  {
    name: "Albin Norbäck",
    imgsrc: "/img/Albin.jpeg",
  },
  {
    name: "Amir Ismail",
    imgsrc: "/img/Amir.jpeg",
  },
  {
    name: "Charlie Nylund",
    imgsrc: "/img/Charlie.jpeg",
  },
  {
    name: "Hugo Lindfors",
    imgsrc: "/img/Hugo.jpeg",
  },
  {
    name: "Markus Piotrowski",
    imgsrc: "/img/Markus.jpeg",
  },
  {
    name: "Mathias Åhlander",
    imgsrc: "/img/Mathias.jpeg",
  },
  {
    name: "Robin Barwari",
    imgsrc: "/img/Robin.jpeg",
  },
  {
    name: "Samuel Broman",
    imgsrc: "/img/Samuel.jpeg",
  },
];
setTimeout(insertPeople, 1);

const button1 = document.querySelector(".b1");
const button2 = document.querySelector(".b2");
const button3 = document.querySelector(".b3");
const button4 = document.querySelector(".b4");
const imageOfPersonsFace = document.querySelector("#image-of-persons-face");
const displayAnswerText = document.querySelector(".display-answer-text");
const answerStreakLabel = document.querySelector("#answer-streak");
const answerStreakBestLabel = document.querySelector("#answer-streak-best");

const buttonText = [
  document.querySelector("#name-1"),
  document.querySelector("#name-2"),
  document.querySelector("#name-3"),
  document.querySelector("#name-4"),
];

let correctAnswer = "";
let answerStreak = 0;
let bestAnswerStreak = 0;

button1.addEventListener("click", function button1Pressed() {
  buttonPressed(buttonText[0].innerHTML);
});
button2.addEventListener("click", function button2Pressed() {
  buttonPressed(buttonText[1].innerHTML);
});
button3.addEventListener("click", function button3Pressed() {
  buttonPressed(buttonText[2].innerHTML);
});
button4.addEventListener("click", function button4Pressed() {
  buttonPressed(buttonText[3].innerHTML);
});

function buttonPressed(input) {
  if (input === correctAnswer) {
    displayAnswerText.innerHTML = "RÄTT!";
    displayAnswerText.style.color = "green";
    answerStreak++;
  } else {
    displayAnswerText.innerHTML = "FEL!";
    displayAnswerText.style.color = "red";
    if (answerStreak > bestAnswerStreak) {
      bestAnswerStreak = answerStreak;
    }
    answerStreak = 0;
    answerStreakBestLabel.innerHTML = bestAnswerStreak;
  }
  answerStreakLabel.innerHTML = answerStreak;
  insertPeople();
}

function insertPeople() {
  let peopleCopy = [...people];
  let randomPeopleArray = [];

  for (let index = 0; index < peopleCopy.length; index++) {
    let random = Math.floor(Math.random() * peopleCopy.length);
    randomPeopleArray.push(peopleCopy[random]);
    peopleCopy.splice(random, 1);
  }
  let peoplePopedArray = [];
  console.log(randomPeopleArray);
  buttonText.forEach((element) => {
    let personPoped = randomPeopleArray.pop();
    console.log(personPoped);
    element.innerHTML = personPoped.name;
    peoplePopedArray.push(personPoped);
  });
  let randomPerson =
    peoplePopedArray[Math.floor(Math.random() * peoplePopedArray.length)];

  imageOfPersonsFace.src = randomPerson.imgsrc;
  correctAnswer = randomPerson.name;
}
