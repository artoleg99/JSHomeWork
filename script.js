'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
};

let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost1 = prompt("Во сколько обойдется", ""),
    exp2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost2 = prompt("Во сколько обойдется", "");

appData.expenses [exp1] =  cost1;
appData.expenses [exp2] =  cost2;

alert('ваш бюджет на день = ' + appData.budget / 30 + ' рублей');
console.log(appData);