'use strict';

let money = prompt("Ваш бюджет на месяц?"); //Переменная money спрашивает
let time = prompt("Введите дату в формате YYYY-MM-DD"); ////Переменная time спрашивает
let appData = {                 //Создаём объект appData
    budget: money,              //Бюджет
    timeData: time,             //Данные времени
    expences: {},               //Объект с обязательными расходами
    optionalExpences: {},       //Объект с необязательными расходами
    income: [],                 //Массив данных с доп. доходом
    savings: false,             //Свойство
};

let a = prompt("Введите обязательную статью расходов в этом месяце" , "");
let b = prompt("Во сколько обойдётся?", "");
let c = prompt("Введите обязательную статью расходов в этом месяце" , "");
let d = prompt("Во сколько обойдётся?", "");

appData.expences[a]=b;
appData.expences[c]=d;

alert(appData.budget/30);
console.log(appData.expences)



