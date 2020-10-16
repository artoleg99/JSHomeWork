
let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    li =   document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptforApple = document.querySelector("#prompt");


menu.insertBefore(menuItem[2], menuItem[1]); 
li.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
li.textContent = "Пятый элемент";                       
menu.appendChild(li);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let yourOpinion = prompt('Ваше отношение к технике Apple?');
promptforApple.textContent = yourOpinion;