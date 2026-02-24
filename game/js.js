var game=document.querySelector('#game');
var start=document.querySelector('#start');
var time=document.querySelector('#time')
var timeHeader=document.querySelector('#time-header');
var resultHeader=document.querySelector('#result-header')
var resultText=document.querySelector('#result')
var gameTime=document.querySelector('#game-time')
var score=0;

var isGameStarted=false;
start.addEventListener('click',startGame);
gameTime.addEventListener('input',setGameTime);

function show(el){
    el.style.display='block';
}
function hide(el){
   el.style.display='none';
}
function startGame(){
    score=0;
    isGameStarted=true;
    setGameTime();
    
    gameTime.setAttribute('disabled','false');
    // timeHeader.style.display='block';
    // resultHeader.style.display='none';
    start.style.display='none';
    game.style.backgroundColor='#fff'
    var interval = setInterval(function(){
        var timeScore= parseFloat(time.textContent);
        if (timeScore<=0){
            clearInterval(interval)
            endGame();
        }
        else{
            time.textContent= (timeScore - 0.1).toFixed(1);
        }
    },100)
    renderBox();
}
function setGameScore(){
    resultText.textContent=score.toString();
}
function setGameTime(){
    timeHeader.style.display='block';
    resultHeader.style.display='none';
    var timeScore=parseInt(gameTime.value);
    time.textContent=timeScore.toFixed(1);
}
function endGame(){
    isGameStarted=false;
    start.style.display='block';
    game.style.backgroundColor='#ccc';
    game.innerHTML=''
    timeHeader.style.display='none';
    resultHeader.style.display='block';
    gameTime.removeAttribute('disabled');
    setGameScore();
}
function renderBox(){
    game.innerHTML=''
    var boxSize=getRandom(30,100);
    var gameSize=game.getBoundingClientRect();
    var maxTop=gameSize.height-boxSize;
    var maxLeft=gameSize.width- boxSize;
    var bgColor=getColor();
    var box=document.createElement('div');
    box.style.height=box.style.width=boxSize + 'px';
    box.style.backgroundColor='rgb('+bgColor+')';
    box.style.position='absolute'
    box.style.cursor='pointer';
    box.style.top=getRandom(0,maxTop) + 'px';
    box.style.left=getRandom(0,maxLeft) + 'px';

    game.insertAdjacentElement('afterbegin',box);

    box.addEventListener('click',clickBox)
}
function clickBox(){
    if(isGameStarted){
    score++;
    renderBox();
    }
}
function getRandom(min,max){
return Math.floor(Math.random()*(max-min)+min);}

function getColor(){
    var r=Math.ceil(Math.random()*255);
    var g=Math.ceil(Math.random()*255);
    var b=Math.ceil(Math.random()*255);
    return r+','+g+','+b;
  }