"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;

    percent = parseInt(percent) / 100;
    contribution =  parseInt(contribution);
    amount = parseInt(amount);

   	if (isNaN(percent) == true)
   		return "Параметр percent содержит неправильное значение " + percent.valueOf();
   	else if (isNaN(contribution) == true)
   		return "Параметр contribution содержит неправильное значение " + contribution.valueOf();
   	else if (isNaN(amount) == true)
   		return "Параметр amount содержит неправильное значение " + amount.valueOf();//

    let data = date.getFullYear() - new Date().getFullYear();
    let months = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();

    let monthlyPayment = (amount - contribution) * (percent / 12 + percent / 12 / (((1 + percent / 12) ** months) - 1));
    let totalAmount = monthlyPayment * months;

    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;

    if (!name || name == undefined)
    	return "Привет, мир! Меня зовут Аноним.";
    else
    	return `Привет, мир! Меня зовут ${name}.`;
}