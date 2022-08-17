const people = [
    {
        name: "Albin Norbäck",
        imgsrc: "/img/Albin.jpeg"
    },
    {
        name: "Amir Ismail",
        imgsrc: "/img/Amir.jpeg"
    },
    {
        name: "Charlie Nylund",
        imgsrc: "/img/Charlie.jpeg"
    },
    {
        name: "Hugo Lindfors",
        imgsrc: "/img/Hugo.jpeg"
    },
    {
        name: "Markus Piotrowski",
        imgsrc: "/img/Markus.jpeg"
    },
    {
        name: "Mathias Åhlander",
        imgsrc: "/img/Mathias.jpeg"
    },
    {
        name: "Robin Barwari",
        imgsrc: "/img/Robin.jpeg"
    },
    samuel = {
        name: "Samuel Broman",
        imgsrc: "/img/Samuel.jpeg"
    }
]
const button1 = document.querySelector(".b1");
const button2 = document.querySelector(".b2");
const button3 = document.querySelector(".b3");
const button4 = document.querySelector(".b4");
const imageOfPersonsFace = document.querySelector("#image-of-persons-face");

const buttonText = [document.querySelector("#name-1"), document.querySelector("#name-2"),document.querySelector("#name-3"),document.querySelector("#name-4")]

let correctAnswer = "1";

button1.addEventListener('click', insertPeople);

function buttonPressed(input) {
    if (input === correctAnswer) {

        alert("Du väl rätt");
    } else {
        alert("Du hade fel!");
    }
};

function insertPeople() {
    console.log("Test");
    let numbersArray=[];
    buttonText.forEach(element => {
        let tempRandom= Math.floor(Math.random() * people.length);
        numbersArray.push(tempRandom)
        element.innerHTML=people[tempRandom].name;
    }
    );
    let randomNr = numbersArray[Math.floor(Math.random() * numbersArray.length)];

    imageOfPersonsFace.src = people[randomNr].imgsrc;
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