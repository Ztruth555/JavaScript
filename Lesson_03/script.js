let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,                                                                 
    expences: {},                                                                   
    optionalExpences: {},                                                           
    income: [],                                                                     
    savings: true,                                                                
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {   
        let a = prompt("Введите обязательную статью расходов в этом месяце" , ""),
            b = prompt("Во сколько обойдётся?", "");
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null     
            && a !='' && b != '' && a.length < 50) {
            console.log("done")
            appData.expences[a]=b;  
        } else {--i};                           // i = i - 1                                       
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget/30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }  else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    }  else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optionalExpenses = prompt("Статья необязательных расходов?", "");
        if ((typeof(optionalExpenses)) === 'string' && (typeof(optionalExpenses)) != '' &&
        (typeof(optionalExpenses)) != null && optionalExpenses.length < 50) {
        console.log("done");
        appData.optionalExpenses[i] = optionalExpenses;
        } else {
            --i}
        }
}
chooseOptExpenses();