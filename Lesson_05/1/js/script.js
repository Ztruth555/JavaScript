let menu = document.querySelector('.menu'),                             //восстановить порядок в меню
    menuItem = document.querySelectorAll('.menu-item');
        
menu.insertBefore(menuItems[2], menuItems[1]);                          //замена

let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item')                                  // document.querySelectorAll('.menu-item'),
newMenuItem.innerText = 'Пятый пункт';                                  // textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';     // Заменить картинку заднего фона на другую из папки img


let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

let answer = prompt ('Как вы относитесь к технике Apple?', '');