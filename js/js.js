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
const button1 = document.querySelector(".b1");
const button2 = document.querySelector(".b2");
const button3 = document.querySelector(".b3");
const button4 = document.querySelector(".b4");
const imageOfPersonsFace = document.querySelector("#image-of-persons-face");

const buttonText = [
  document.querySelector("#name-1"),
  document.querySelector("#name-2"),
  document.querySelector("#name-3"),
  document.querySelector("#name-4"),
];

let correctAnswer = "1";

button1.addEventListener("click", insertPeople);

function buttonPressed(input) {
  if (input === correctAnswer) {
    alert("Du väl rätt");
  } else {
    alert("Du hade fel!");
  }
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
}

/*
function nextPerson() {
    let corretPersonNr = Math.floor(Math.random() * people.length);
    let fillPersonNr1 = Math.floor(Math.random() * people.length);
    let fillPersonNr2 = Math.floor(Math.random() * people.length);
    let fillPersonNr3 = Math.floor(Math.random() * people.length);
    while (fillPersonNr1 === corretPersonNr || fillPersonNr2 === corretPersonNr|| fillPersonNr3===corretPersonNr) {
        fillPersonNr1 = Math.floor(Math.random() * people.length);
        fillPersonNr2 = Math.floor(Math.random() * people.length);
        fillPersonNr3 = Math.floor(Math.random() * people.length);
    }

    let fillPeople= [corretPersonNr]
    let isTaken=[false, false, false, false]

   buttonText.forEach(element => {
    let random = Math.floor(Math.random() * 4)
    while (!isTaken[random]) {
    random = Math.floor(Math.random() * 4)
    }
    isTaken[random]=true;
    
   });
};
*/
