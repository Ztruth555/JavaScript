window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),                  //если через классы или теги то []
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i =a ; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');                        //функция скрывает
        }
    }

    hideTabContent(1);                                                  //у нас скрываются все tabContent'ы кроме 1

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');                        //функция показывает какой-то определенный 
        }
    }

    info.addEventListener('click', function(event) {                    //будем сравнивать с тем, куда мы кликаем
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // timer

    let deadline = '2019-01-30';

    function getTimeRemaining(endtime) {                            // Фукнций которая определяет остаток времени и вычленяет оттуда полностью время, 
        let t = Date.parse(endtime) - Date.parse(new Date()),       // часы, минуты и секунды
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        // hours = Math.floor((t / 1000 / 60 / 60) % 24),
        // days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'hours': hours.toString(),
            'minutes': minutes.toString(),
            'seconds': seconds.toString()
        };
    }

    function setClock(id, endtime) {                                // У нас есть фукция setClock, которая создает переменные, она их берёт со страницы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {                                    // У нас есть фукция updateClock, которая сначала получает разницу между временем
            let t = getTimeRemaining(endtime);                      // при помощи функии timeRemaining, эта функций сначала возвращает целый объект, то что
            hours.textContent = t.hours;                            // нужно в ташем таймере и мы эти данные записываем прямо в вёрстку 
            minutes.textContent = t.minutes;                        // каждую секунду мы будем получать обновленное кол-во часов
            seconds.textContent = t.seconds;

            //чтобы не уходил в минус
            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
                hours.textContent = t.hours.length < 2 ? `0${t.hours}` : t.hours;
                minutes.textContent = t.minutes.length < 2 ? `0${t.minutes}` : t.minutes;
                seconds.textContent = t.seconds.length < 2 ? `0${t.seconds}` : t.seconds;
            
                
        }

    }

    setClock('timer', deadline); 

    // Modal

    let more = document.querySelector('.more'),                     //подробнее
        overlay = document.querySelector('.overlay'),               //само окно
        close = document.querySelector('.popup-close');             //крестик

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');                          //небольшая анимация
        document.body.style.overflow = 'hidden';

    });

    close.addEventListener('click', function() {    //  
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })

    
});