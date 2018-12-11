function timer() {

    let deadline = '2018_12_31';

    const addZeroToDate = date => {
        if (date.toString().length == 1) {
          return '0' + date.toString();
        } else {
          return date;
        }
      };

    const getTimeRemaining = endtime => {                            // Фукнций которая определяет остаток времени и вычленяет оттуда полностью время, 
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours.toString(),
            'minutes': minutes.toString(),
            'seconds': seconds.toString()
        };
    };

    function setClock(id, endtime) {                                // У нас есть фукция setClock, которая создает переменные, она их берёт со страницы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

    const updateClock = () => {
        let t = getTimeRemaining(endtime);
        hours.textContent = addZeroToDate(t.hours);
        minutes.textContent = addZeroToDate(t.minutes);
        seconds.textContent = addZeroToDate(t.seconds);
          
        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            }
        };
          
        setClock('timer', deadline);
    }
};

export default timer;