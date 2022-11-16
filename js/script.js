let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", new Date().toISOString().slice(0, 10));

/*if (Number.isNaN(money)) {
    alert("Вы ввели не число!");
} */

// создаем объект
let appData = {
    budget: money, //передаем переменную 
    expenses: {},
    optionalExpenses: {},
    income: [], // создаем массив с данными
    timeData: time, // передаем переменную
    savings: false
};

let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
    twoQuestions = prompt("Во сколько обойдется?", ""),
    threeQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
    fourQuestions = prompt("Во сколько обойдется?", "");

appData.expenses.oneQuestions = twoQuestions;
appData.expenses.threeQuestions = fourQuestions;

alert(appData.budget / 30);