let startBtn = document.getElementById("start"), //начать расчёт

  budgetValue = document.querySelector('.budget-value'),  //доход 
  dayBudgetValue = document.querySelector('.daybudget-value'),  //бюджет на день
  levelValue = document.querySelector('.level-value'),  //уровень дохода
  expensesValue = document.querySelector('.expenses-value'),  //обязательные расходы
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),  //возможные траты
  monthSavingsValue = document.querySelector('.monthsavings-value'),  //накопления за один месяц
  yearSavingsValue = document.querySelector('.yearsavings-value'),  //накопления за год
  incomeValue = document.querySelector('.income-value'),
  
  expensesItem = document.querySelectorAll('.expenses-item'), //траты
  expensesBtn = document.getElementsByTagName('button')[0], //утвердить

  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),  //необязательные траты
  optionalExpensesBtn = document.getElementsByTagName('button')[1], //утвердить!

  countBtn = document.getElementsByTagName('button')[2],  //рассчитать бюджет

  incomeItem = document.querySelector('.choose-income'),  //статьи возможного дохода

  checkSavings = document.querySelector('#savings'),  //чекбокс накоплений

  sumValue = document.querySelector('.choose-sum'), //сумма
  percentValue = document.querySelector('.choose-percent'), //процент

  yearValue = document.querySelector('.year-value'),  //год
  monthValue = document.querySelector('.month-value'),  //месяц
  dayValue = document.querySelector('.day-value');  //день



let money, time;


countBtn.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    countBtn.disabled = false;

    while (isNaN(money) || money == "" || money == null) { //проверка дохода, чтобы оно было числом и не отмахнуться
      money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money; //записываем данные в глобальный объект
    appData.timeData = time; //передаём значение time
    budgetValue.textContent = money.toFixed();  //доход записываем в это поле
    yearValue.value = new Date(Date.parse(time)).getFullYear(); //в конце вытаскиваем полный год
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate()

});
  
expensesBtn.disabled = true; //

expensesItem.forEach(function (element, i) {
    element.addEventListener('change', function () {
        if (element.value == '') {
            expensesBtn.disabled = true;
        } else {
            expensesBtn.disabled = false;
        }
    });
});




expensesBtn.addEventListener('click', function() {    //при клике запускается функция
    let sum = 0;    //переменная суммы, которая будет собирать всё что ввел пользователь

    for (let i = 0; i < expensesItem.length; i++) {   //проверка
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null     
            && a !='' && b != '' && a.length < 50) {
            appData.expenses[a] = b; //ключ-значение
            sum += +b;
            
        } else {
            i = i - 1;                                      
        }
    }
    expensesValue.textContent = sum;
});


optionalExpensesBtn.disabled = true;

optionalExpensesItem.forEach(function (element, i) {
    element.addEventListener('change', function () {
        if (element.value == '') {
            optionalExpensesBtn.disabled = true;
        } else {
            optionalExpensesBtn.disabled = false;
        }
    })
    });
    

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 1; i < optionalExpensesItem.length; i++) {
        let a = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

countBtn.addEventListener('click', function() {
        
        if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - expensesValue.textContent)/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings ==true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

}
