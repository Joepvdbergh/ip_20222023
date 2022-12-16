// ****variabele****

var bodyTag = document.querySelector('body');
var outfits = ['homer-normaal.png', 'Homer_rood.png', 'Homer_jail.png', 'Homer-magic.png'];


if (bodyTag.classList.contains('pre')) {
    var normalButton = document.querySelector('.normal-button');
    var homerImage = document.querySelector('.homer-outfit');
    var redButton = document.querySelector('.red-button');
    var orangeButton = document.querySelector('.orange-button');
    var blackButton = document.querySelector('.black-button');
    var dohAudio = new Audio('doh.mp3');

    var startButton = document.querySelector('.outfit-button')
    var beginAudio = new Audio('blockbuster-logo-13085.mp3')


    normalButton.addEventListener('click', function () {
        console.log("normal");
        homerImage.src = './images/' + 'homer-normaal.png';
        dohAudio.play();
        localStorage.setItem('activeNumber', 0);

    })



    redButton.addEventListener('click', function () {
        console.log("rood");
        homerImage.src = './images/' + 'Homer_rood.png';
        dohAudio.play();
        localStorage.setItem('activeNumber', 1);
    })


    orangeButton.addEventListener('click', function () {
        console.log("orange");
        homerImage.src = './images/' + 'Homer_jail.png';
        dohAudio.play();
        localStorage.setItem('activeNumber', 2);

    })

    blackButton.addEventListener('click', function () {
        console.log("black");
        homerImage.src = './images/' + 'Homer-magic.png';
        dohAudio.play();
        localStorage.setItem('activeNumber', 3);

    })

    beginAudio.play();



} else {
    var houseImage = document.querySelector('.house-image');
    var houseButton = document.querySelector('.house-button');
    var flameAudio = new Audio("fire-sound-efftect-21991.mp3");
    flameAudio.volume = (.3);
    flameAudio.duration = (.0001);

    var treeImage = document.querySelector('.tree-image');
    var treeButton = document.querySelector('.tree-button');
    var rockAudio = new Audio("punch-2-123106.mp3")


    var berryImage = document.querySelector('.struik-image');
    var berryButton = document.querySelector('.berry-button');
    var homerImage = document.querySelector('.homer-image');
    var eatingAudio = new Audio("eatingsfxwav-14588.mp3");
    var screamAudio = new Audio("male-scream-123080.mp3");


    var nukeButton = document.querySelector('.nuke-button');
    var nukeAudio = new Audio('hq-explosion-6288.mp3')


    var index = 0;
    var alertIndex = 4;
    var eindTekst = document.querySelector('.eind-tekst')

    var proccesIndex = 0;
    var nukeProcces = document.querySelector('.proccesbar')

    var birdAudio = new Audio("birds.mp3");
    var simpsonsAudio = new Audio('simpsons-sax-11798.mp3')
    simpsonsAudio.volume = ('.2')


    var activeNumber = localStorage.getItem('activeNumber');
    console.log("hallo", activeNumber);

    homerImage.src = './images/' + outfits[activeNumber];
    console.log('./images/' + outfits[activeNumber])
    console.log(homerImage);

    var bodyImage = document.querySelector('.game-body');







    // ****functies voor de proccesbar****

    function idioot() {

        index++;

        if (index == alertIndex) {
            console.log("Geweldig je bent een idioot");
            eindTekst.replaceWith("geweldig je bent een ware idioot");


            var idiotDiv = document.createElement("div");
            var idotContent = document.createTextNode("geweldig je bent een ware idioot");

            document.body.appendChild(idiotDiv);








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
            berryImage.src = './images/' + 'explosie.png';
            treeImage.src = './images/' + 'explosie.png';
            homerImage.src = './images/' + 'explosie.png';
            houseImage.src = './images/' + 'explosie.png';
            nukeAudio.play();
            bodyImage.style.backgroundImage = "url('./images/volcano_background.png')";
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