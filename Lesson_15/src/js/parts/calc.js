function calculator() {

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        counter = document.querySelector('.counter'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.textContent = "Давайте посчитаем...";

        persons.addEventListener('input', function () {
        persons.value = persons.value.replace(/[^0-9() ]/ig, '');
        });

        restDays.addEventListener('input', function () {
        restDays.value = restDays.value.replace(/[^0-9() ]/ig, '');
        });

        function calcTotal() {
        let person = +persons.value,
            days = +restDays.value,
            sity = +place.value;
        if ((person == '' || days == '') || (person == 0 || days == 0)) {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = (days + person) * 4000 * sity;
        }

    }

        counter.addEventListener('input', function (event) {
        let target = event.target;

        if (target && target.classList.contains('counter-block-input')) {
            calcTotal();
        }
        if (target && target.options) {
            calcTotal();
        }
    });

}

export default calculator;