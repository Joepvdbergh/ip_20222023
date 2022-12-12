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
})



redButton.addEventListener('click', function () {
    console.log("rood");
    homerImage.src = './images/' + 'Homer_rood.png';
    dohAudio.play();
})


orangeButton.addEventListener('click', function () {
    console.log("orange");
    homerImage.src = './images/' + 'Homer_jail.png';
    dohAudio.play();

})

blackButton.addEventListener('click', function () {
    console.log("black");
    homerImage.src = './images/' + 'Homer-zwart.png';
    dohAudio.play();

})

blackButton.addEventListener('click', function () {
    console.log("start");


})

beginAudio.play();