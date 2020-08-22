'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        cost1 = prompt("Во сколько обойдется", "");
    if ( (typeof(exp1))=== 'string' && (typeof(exp1)) !=null && (typeof(cost1)) !=null 
        && exp1 !='' && cost1 != '' && exp1.length < 50) {
            console.log("done");
        appData.expenses [exp1]  = cost1;
    } else {

    }
};

// let i = 0;

// do {
//     i++;
//     let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         cost1 = prompt("Во сколько обойдется", "");
//     if ( (typeof(exp1))=== 'string' && (typeof(exp1)) !=null && (typeof(cost1)) !=null 
//         && exp1 !='' && cost1 != '' && exp1.length < 50) {
//             console.log("done");
//         appData.expenses [exp1]  = cost1;
//     }
// }
// while (i < 2);

// while (i < 2) {
//     i++;
//     let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         cost1 = prompt("Во сколько обойдется", "");
//     if ( (typeof(exp1))=== 'string' && (typeof(exp1)) !=null && (typeof(cost1)) !=null 
//         && exp1 !='' && cost1 != '' && exp1.length < 50) {
//             console.log("done");
//         appData.expenses [exp1]  = cost1;
//     }  
// }

appData.moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий уровень достатка");
} else {
    console.log("Ошибка!");
}

