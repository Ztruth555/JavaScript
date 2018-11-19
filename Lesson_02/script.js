'use strict';

let money = +prompt("Ваш бюджет на месяц?");                                        //Переменная money спрашивает
let time = prompt("Введите дату в формате YYYY-MM-DD");                             //Переменная time спрашивает

let appData = {                                                                     //Создаём объект appData
    budget: money,                                                                  //Бюджет
    timeData: time,                                                                 //Данные времени
    expences: {},                                                                   //Объект с обязательными расходами
    optionalExpences: {},                                                           //Объект с необязательными расходами
    income: [],                                                                     //Массив данных с доп. доходом
    savings: false,                                                                 //Свойство
};

for (let i = 0; i < 2; i++) {   
    let a = prompt("Введите обязательную статью расходов в этом месяце" , ""),
        b = prompt("Во сколько обойдётся?", "");

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null     // Если выполняется условие
        && a !='' && b != '' && a.length < 50) {
        console.log("done")
        appData.expences[a]=b;  
    } else {--i};                                                                   // Если не выполняется условие 

};


// Другие методы решения

// let i = 0;
// do {   
//  let a = prompt("Введите обязательную статью расходов в этом месяце" , ""),
//      b = prompt("Во сколько обойдётся?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null     // Если выполняется условие
//         && a !='' && b != '' && a.length < 50) {

//         appData.expences[a] = b;                                                    // Если не выполняется условие
//     } else {--i;
//     }                            
//     i++;
//  }  while (i < 2);



appData.moneyPerDay = appData.budget/30

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}  else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}  else {
    console.log("Произошла ошибка")
}
