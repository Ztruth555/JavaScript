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

    let deadline = '2018-12-31';

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

            // чтобы не уходил в минус
            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            // чтобы сделал проверку на количество нолей подставил
            } else {
                hours.textContent = t.hours.length < 2 ? `0${t.hours}` : t.hours;
                minutes.textContent = t.minutes.length < 2 ? `0${t.minutes}` : t.minutes;
                seconds.textContent = t.seconds.length < 2 ? `0${t.seconds}` : t.seconds;
            }
                
        }

    }

    setClock('timer', deadline); 

    // Modal
    function Modal() {
        let more = document.querySelector('.more'),                     //подробнее
            overlay = document.querySelector('.overlay'),               //само окно
            close = document.querySelector('.popup-close'),             //крестик
            descrBtn = document.getElementsByClassName('description-btn');

        more.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');                          //небольшая анимация
            document.body.style.overflow = 'hidden';

        });

        close.addEventListener('click', function () {    //  
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
        for (let i = 0; i < descrBtn.length; i++) {
            descrBtn[i].addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';

            });
        }

        for (let i = 0; i < descrBtn.length; i++) {
            close.addEventListener('click', function () {
                overlay.style.display = 'none';
                descrBtn[i].classList.remove('more-splash');
                document.body.style.overflow = '';
            });
        }
    }
    Modal();

    // Forms
    //создаём объект, в котором будут различные данные нашего запроса, мы используем текстовый формат, хотя
    //тут могут быть и картинки и анимации и т.д.
    let message = {
        loading: 'Загрузка',    // это строка будет показываться польз. пока запрос не обработался
        success: 'Спасибо! Скоро мы с Вами свяжемся',   // 
        failure: 'Что-то пошло не так...'                  
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),  //создаём новый элемент, задаем класс и помещаем его на
        form2 = document.querySelector('#form'),
        input2 = form2.getElementsByTagName('input'),
        inputPhone = document.getElementsByName('phone');

    statusMessage.classList.add('status');              // этот класс прописан в css для стилистки сообщения

    form.addEventListener('submit',function(event) {    // подтверждение нашей формы, форма должна отправляться
        event.preventDefault();                         // нужно чтобы именно форма отправлялась на сервер
        form.appendChild(statusMessage);                // добавляем новый div, он лежит в statusMessage

        let request = new XMLHttpRequest();             // создаем запрос и помещаем конструктор в неё
        request.open('POST', 'server.php');         // "планирем покупки"
        request.setRequestHeader('Content-Type', 'application/json', 'charset=UTF-8');

        let formData = new FormData(form);                      // при помощи встр. объекта formData мы получаем всё, что ответил пользователь в нашей форме, она создаст структуры из данных, которые ввел пользователь в формате: ключ - значение

        let obj = {};                       // потом создаем новый объект, в который мы поместим все эти данные
        formData.forEach(function(value, key) {     // потом мы берём объект formData и все данные в нём помещаем в объект obj
            obj[key] = value;
        });
        let json = JSON.stringify(obj);     // потом превращем в json формат при помощи одного из двух методов json'a

        request.send(json);                 // отправляем на сервер

        request.addEventListener('readystatechange', function() {       // наблюдение за изменениями состояния нашего запроса
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;              // записываем свойство со значением "загрузка"
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
            // чтобы все введенные инпуты очищались после нашего submit'а 
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
    });

    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json', 'charset=UTF-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }

    });

        for(let i = 0; i < input2.length; i++) {
            input2[i].value = '';
        }
    });

    for (let i = 0; i < inputPhone.length; i++) {
        inputPhone[i].addEventListener('input', () => {
          inputPhone[i].value = inputPhone[i].value.replace(/[^\+?\d]/g, '');
        });
      }


    
});