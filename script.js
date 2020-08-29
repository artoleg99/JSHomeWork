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
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let exp2 = prompt("Статья необязательных расходов", "");
        appData.optionalExpenses [i]  = exp2;
        console.log(appData.optionalExpenses);        
    }    
}
chooseOptExpenses();



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

function detectDayBudget() {
    appData.moneyPerDay =( appData.budget / 30).toFixed(1);
    alert("ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("Ошибка!");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();