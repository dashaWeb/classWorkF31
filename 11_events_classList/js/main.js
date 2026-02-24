let p = document.querySelector('p');



//let flag = false;
let div = document.createElement('div');
div.classList.add('done');
div.textContent = "dolorem aspernatur porro impedit iure nihil cumque tenetur cupiditate quis, optio quidem quia autem temporibus sequi repellat?";
console.log(div)
p.addEventListener('click', () => {
    document.querySelector('body').insertAdjacentElement('afterbegin',div);
    //p.remove(); // видаляє вузл
    // console.log(p.textContent);
    // p.textContent = "Hyper text <b> Markup </b> Language";
    // console.log(p.innerText)
    // console.log(p.innerHTML)

    // p.innerHTML = "Hyper text <b> Markup </b> Language";

    //p.className = " ";
    //p.classList.toggle("done");

    // if(p.classList.contains("done")){
    //     p.classList.remove("done");
    // }
    // else{
    //     p.classList.add("done");
    // }
    //console.log(p.classList) // повертає список класів елемента
    // if (!p.classList.contains("done")) {
    //     p.classList.add("done"); // додає клас до р
    //     //flag = true;
    // }
    // else {
    //     p.classList.remove("done"); // видаляє клас з р
    //     //flag = false;
    // }
    // console.log(p.classList)
    // if(!flag){
    //     p.style.color = '#fff';
    //     p.style.fontSize = '35px';
    //     p.style.fontStyle = 'italic';
    //     p.style.backgroundColor = 'rgba(0,0,0,.7)';

    //     flag = true;
    // }
    // else{
    //     p.style.color = '#000';
    //     p.style.fontSize = '14px';
    //     p.style.fontStyle = 'normal';
    //     p.style.backgroundColor = '#fff';

    //     flag = false;
    // }
})

// let blue = document.querySelector('.blue');
// let red = document.querySelector('.red');
// let yellow = document.querySelector('.yellow');

// blue.addEventListener('click', () => console.log('Blue'));
// red.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('Red')
// });
// yellow.addEventListener('mouseenter', () => {
//     yellow.style.background= "purple";
// })
// yellow.addEventListener('mouseleave', () => {
//     yellow.style.background= "yellow";
// })
// yellow.addEventListener('mousedown', () => {
//     yellow.textContent = "Mouse Down";
// })
// yellow.addEventListener('mouseup', () => {
//     yellow.textContent = "Mouse Up";
// })

// yellow.addEventListener('selectstart', (e) => {
//     yellow.textContent = "Context Menu";
//     e.preventDefault();
// })

// document.querySelector('a').addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(e)
// })
// yellow.addEventListener('mouseenter', () => {
//     this.style.backgroundColor = "puple";
// })
//  document.body.addEventListener('selectstart', (ev) => {
//     let x = ev.clientX;
//     let y = ev.clientY;
//     yellow.textContent = `X = ${x}; Y = ${y}`;
//     yellow.style.top = `${y}px`;
//     yellow.style.left = `${x}px`;
// })