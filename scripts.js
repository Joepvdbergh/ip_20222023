// var tree = document.querySelector(".tree-button");
// var houseImage = document.querySelector(".house-image");
// var treeImage = document.querySelector(".tree-image");
// var zippoAudio = new Audio("images/zippo-strike-1.mp3");
// var flameAudio = new Audio("fire-sound-efftect-21991.mp3");

// tree.addEventListener("click", function () {
//   console.log("Kill sqrill");
// });

// var berry = document.querySelector(".berry-button");

// berry.addEventListener("click", function () {
//   console.log("Eat berry");
// });

// var nuke = document.querySelector(".nuke-button");

// nuke.addEventListener("click", function () {
//   console.log("Nuke everything");
// });

// var house = document.querySelector(".house-button");

// house.addEventListener("click", function () {
//   console.log("Burn house");
//   burnHouse();
// });

// function burnHouse() {
//   console.log("hallo");
//   zippoAudio.play();
//   if ((zippoAudio.played = true)) {
//     flameAudio.play();
//   }
//   houseImage. = scr="images/Huis_vlammen.png";
// }



// ****variabele****

var houseImage = document.querySelector('.house-image');
var houseButton = document.querySelector('.house-button');
var flameAudio = new Audio("fire-sound-efftect-21991.mp3");
flameAudio.volume = (.3);
flameAudio.duration = (.0001);

var treeImage = document.querySelector('.tree-image');
var treeButton = document.querySelector('.tree-button');

var berryImage = document.querySelector('.struik-image');
var berryButton = document.querySelector('.berry-button');
var homerImage = document.querySelector('.homer-image');
var eatingAudio = new Audio("eatingsfxwav-14588.mp3");
var screamAudio = new Audio("male-scream-123080.mp3");



var nukeButton = document.querySelector('.nuke-button');


var index = 0;
var alertIndex = 4;
var eindTekst = document.querySelector('.eind-tekst')

var proccesIndex = 0;
var nukeProcces = document.querySelector('.proccesbar')

var birdAudio = new Audio("birds.mp3");
var simpsonsAudio = new Audio('simpsons-sax-11798.mp3')
simpsonsAudio.volume = ('.2')




// ****functies voor de proccesbar****

function idioot() {

    index++;

    if (index == alertIndex) {
        console.log("Geweldig je bent een idioot");
        alert("Geweldig! Je bent een ware idioot");
        eindTekst.replaceWith("geweldig je bent een ware idioot");


    } else {
        console.log("werkt niet");
    }
}


function nuke() {

    proccesIndex++;

    if (proccesIndex == 1) {
        nukeProcces.src = './images/' + 'nukebar-1.png';
    }

    if (proccesIndex == 2) {
        nukeProcces.src = './images/' + 'nukebar-2.png';
    }

    if (proccesIndex == 3) {
        nukeProcces.src = './images/' + 'nukebar-3.png';
    }

    if (proccesIndex == 4) {
        nukeProcces.src = './images/' + 'nukebar-4.png';
    }


}

// ****voor de buttons****

houseButton.addEventListener('click', function onclick() {
    houseImage.src = './images/' + 'Huis_vlammen.png';
    flameAudio.play();

    idioot();
    nuke();
})


treeButton.addEventListener('click', function onclick() {
    treeImage.src = './images/' + 'Boom_dood.png';

    idioot();
    nuke();
})


berryButton.addEventListener('click', function () {
    berryImage.src = './images/' + 'struik.png';
    homerImage.src = './images/' + 'Homer-ziek.png';
    eatingAudio.play();
    screamAudio.play();

    idioot();
    nuke();

})


nukeButton.addEventListener('click', function () {
    nuke();
    idioot();
    document.body.style.backgroundImage = 'url("background-grass2.jpeg")';
    document.body.style.backgroundColor = ('red');
    nukeProcces.src = './images/' + 'nukebar-4.png';

})

simpsonsAudio.play();
birdAudio.play();