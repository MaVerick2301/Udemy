'use strict';
var money = +prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
var expenditure = prompt('Введите обязательную статью расходов в этом месяце');
var cost = +prompt('Во сколько обойдется?');

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpences: {
    expenditure: cost
  },
  income: [],
  savings: false
};

alert('Ваш бюджет на 1 день: ' + money / 30);
