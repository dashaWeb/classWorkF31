 //Функціонал для конопки start
 // кнопку приховати, змінити фон на білий 

 let $start = document.querySelector('#start');
 let $game = document.querySelector('#game');
 let $time = document.querySelector('#time');
 let $result = document.querySelector('#result');
 let $timeHeader = document.querySelector('#time-header')
 let $resultHeader = document.querySelector('#result-header')
 let $gameTime = document.querySelector('#game-time')

 let score = 0;
 let isGameStarted = false

 $start.addEventListener('click',startGame);
 $game.addEventListener('click',handBoxClick);
 $gameTime.addEventListener('input',setGameTime)

 function startGame(){
     score = 0;
     setGameTime();
     $gameTime.setAttribute('disabled','true')
     $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide');
     isGameStarted = true;
    $start.classList.add('hide');
    $game.style.backgroundColor = '#fff';

    let interval = setInterval(function(){
        //Створення таймера
        let time = parseFloat($time.textContent)
        if(time<=0){
            //endGame
            clearInterval(interval);
            endGame();
        }
        else{
            $time.textContent = (time - 0.1).toFixed(1);
        }
    },100)

    renderBox();
 }

 //Створюємо фунцію renderBox() - створення квадратів

 function renderBox(){
    //  $game.innerHTML = ''
   let box = document.createElement('div')
   let boxSize = getRandom(30,100);
   let gameSize = $game.getBoundingClientRect();
   let maxTop = gameSize.height - boxSize;
   let maxLeft = gameSize.width - boxSize;
   box.style.height = box.style.width = boxSize + 'px';
   box.style.position = 'absolute';
   box.style.backgroundColor = '#000';
   box.style.top = getRandom(0,maxTop) + 'px'
   box.style.left = getRandom(0,maxLeft) + 'px'
   box.style.cursor = 'pointer'
   box.setAttribute('data-box','true')
   $game.insertAdjacentElement('afterbegin',box)
 }
 //Делегирование собития, додаємо подію клік на поле гри, будем відслідковувати box
 function handBoxClick(event){
     if(!isGameStarted){
         return
     }
    if(event.target.dataset.box){
        event.target.dataset.box.remove()
        score++;
        renderBox()
    }
 }
 //Створюємо випадкові значення
 function getRandom(min,max){
     return Math.floor(Math.random()*(max-min)+min)
 }
 function setGameScore(){
     $result.textContent = score.toString();
 }
 function setGameTime(){
     let time = parseFloat($gameTime.value);
     $time.textContent = time.toFixed(1)
 }
 function endGame(){
     $gameTime.removeAttribute('disabled')
    isGameStarted = false;
    $start.classList.remove('hide');
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide');
    setGameScore();

 }
 
