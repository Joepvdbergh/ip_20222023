// De body  aanroepen en een array voor de outfits //

var bodyTag = document.querySelector('body');
var outfits = ['homer-normaal.png', 'Homer_rood.png', 'Homer_jail.png', 'Homer-magic.png'];

// if else loop om 2 pagina's van elkaar te onderscheiden in javascript door een claasnaam te geven aan de body's //

if (bodyTag.classList.contains('pre')) {

    //variabele voor de outfit pagina //

    var normalButton = document.querySelector('.normal-button');
    var homerImage = document.querySelector('.homer-outfit');
    var redButton = document.querySelector('.red-button');
    var orangeButton = document.querySelector('.orange-button');
    var blackButton = document.querySelector('.black-button');
    var dohAudio = new Audio('sounds/doh.mp3');
    var yeloAudio = new Audio('sounds/yelo.mp3');
    var drugsAudio = new Audio('sounds/drugs.mp3');
    var crimeAudio = new Audio('sounds/crime.mp3');

    var startButton = document.querySelector('.outfit-button')
    var beginAudio = new Audio('sounds/blockbuster-logo-13085.mp3')

    // click functies voor de outfit buttons + opgeslagen in local storage //

    normalButton.addEventListener('click', function () {
        console.log("normal");
        homerImage.src = './images/' + 'homer-normaal.png';
        dohAudio.play();
        localStorage.setItem('activeNumber', 0);
    })

    redButton.addEventListener('click', function () {
        console.log("rood");
        homerImage.src = './images/' + 'Homer_rood.png';
        yeloAudio.play();
        localStorage.setItem('activeNumber', 1);
    })

    orangeButton.addEventListener('click', function () {
        console.log("orange");
        homerImage.src = './images/' + 'Homer_jail.png';
        crimeAudio.play();
        localStorage.setItem('activeNumber', 2);
    })

    blackButton.addEventListener('click', function () {
        console.log("black");
        homerImage.src = './images/' + 'Homer-magic.png';
        drugsAudio.play();
        localStorage.setItem('activeNumber', 3);
    })

    beginAudio.play();

    // De else geeft hier alles wat de game pagina betreft aan. //

} else {

    // variable voor de game pagina //

    var houseImage = document.querySelector('.house-image');
    var houseButton = document.querySelector('.house-button');
    var flameAudio = new Audio("sounds/fire-sound-efftect-21991.mp3");
    flameAudio.volume = (.3);
    flameAudio.duration = (.0001);

    var treeImage = document.querySelector('.tree-image');
    var treeButton = document.querySelector('.tree-button');
    var rockAudio = new Audio("sounds/punch-2-123106.mp3")


    var berryImage = document.querySelector('.struik-image');
    var berryButton = document.querySelector('.berry-button');
    var homerImage = document.querySelector('.homer-image');
    var eatingAudio = new Audio("sounds/eatingsfxwav-14588.mp3");
    var screamAudio = new Audio("sounds/male-scream-123080.mp3");


    var nukeButton = document.querySelector('.nuke-button');
    var nukeAudio = new Audio('sounds/hq-explosion-6288.mp3')


    var index = 0;
    var alertIndex = 4;
    var eindTekst = document.querySelector('.eind-tekst')

    var proccesIndex = 0;
    var nukeProcces = document.querySelector('.proccesbar')

    var birdAudio = new Audio("sounds/birds.mp3");
    var simpsonsAudio = new Audio('sounds/simpsons-sax-11798.mp3')
    simpsonsAudio.volume = ('.2')

    var activeNumber = localStorage.getItem('activeNumber');
    homerImage.src = './images/' + outfits[activeNumber];
    var bodyImage = document.querySelector('.game-body');


    // functies voor de proccesbar//

    function idioot() {

        index++;

        if (index == alertIndex) {
            console.log("Geweldig je bent een idioot");
            eindTekst.replaceWith("geweldig je bent een ware idioot");


        } else {
            console.log("nog niet");
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
            berryImage.src = './images/' + 'explosie.png';
            treeImage.src = './images/' + 'explosie.png';
            homerImage.src = './images/' + 'explosie.png';
            houseImage.src = './images/' + 'explosie.png';
            nukeAudio.play();
            bodyImage.style.backgroundImage = "url('./images/volcano_background.png')";
        }

    }

    // voor de buttons//

    houseButton.addEventListener('click', function onclick() {
        houseImage.src = './images/' + 'Huis_vlammen.png';
        flameAudio.play();

        idioot();
        nuke();
    })


    treeButton.addEventListener('click', function onclick() {
        treeImage.src = './images/' + 'Boom_dood.png';
        rockAudio.play();

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
        simpsonsAudio.play();
        nuke();
        idioot();

        nukeProcces.src = './images/' + 'nukebar-4.png';
        berryImage.src = './images/' + 'explosie.png';
        treeImage.src = './images/' + 'explosie.png';
        homerImage.src = './images/' + 'explosie.png';
        houseImage.src = './images/' + 'explosie.png';
        nukeAudio.play();

        bodyImage.style.backgroundImage = "url('./images/volcano_background.png')";
    })

    simpsonsAudio.play();
    birdAudio.play();

}