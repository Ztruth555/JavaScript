let startBtn = document.getElementById('start'), //начать расчёт

  budgetValue = document.querySelectorAll('.budget-value'),  //доход 
  daybudgetValue = document.querySelectorAll('.daybudget-value'),  //бюджет на день
  levelValue = document.querySelectorAll('.level-value'),  //уровень дохода
  expensesValue = document.querySelectorAll('.expenses-value'),  //обязательные расходы
  optionalexpensesValue = document.querySelectorAll('.optionalexpenses-value'),  //возможные траты
  monthsavingsValue = document.querySelectorAll('.monthsavings-value'),  //накопления за один месяц
  yearsavingsValue = document.querySelectorAll('.yearsavings-value'),  //накопления за год

  expensesItem = document.querySelectorAll('.expenses-item'), //траты
  expensesItemBtn = document.getElementsByTagName('button')[0], //утвердить

  optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),  //необязательные траты
  optionalexpensesBtn = document.getElementsByTagName('button')[1], //утвердить!

  countBudgetBtn = document.querySelector('.count-budget-btn')[2];  //рассчитать бюджет

  chooseIncome = document.querySelector('.choose-income'),  //статьи возможного дохода

  savings = document.querySelector('#savings'),  //чекбокс накоплений
  sum = document.querySelector('#sum'), //сумма
  percent = document.querySelector('#percent'), //процент

  year = document.querySelector('.year-value'),  //год
  month = document.querySelector('.month-value'),  //месяц
  day = document.querySelector('.day-value');  //день


  


