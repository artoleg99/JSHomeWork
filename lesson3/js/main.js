let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-item')[0],
    optionalExpensesValue = document.getElementsByClassName('expenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesBtn = document.getElementsByTagName('expenses-item-btn')[0],
    optionalExpensesBtn = document.getElementsByTagName('optionalexpenses-btn')[1],
    countBtn = document.getElementsByTagName('count-budget-btn')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkboxItem = document.querySelector('#checkbox'),
    percentValue = document.querySelector('.choose-percent'),
    sumValue = document.querySelector('.choose-sum'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let exp1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
                cost1 = prompt("Во сколько обойдется", "");
            if ( (typeof(exp1))=== 'string' && (typeof(exp1)) !=null && (typeof(cost1)) !=null 
                && exp1 !='' && cost1 != '' && exp1.length < 50) {
                    console.log("done");
                appData.expenses [exp1]  = cost1;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay =( appData.budget / 30).toFixed(1);
        alert("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("Ошибка!");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let exp2 = prompt("Статья необязательных расходов", "");
            appData.optionalExpenses [i]  = exp2;
            console.log(appData.optionalExpenses);        
        }
    },
    chooseIncome: function() {
        let items = prompt('что приносит дополнительный доход? (перечислите через запятую)', '');
        if (typeof (items) !="string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        }
        else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function(itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }

};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
} 




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







