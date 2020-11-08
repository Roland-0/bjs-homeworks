"use strict"

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // return x;
    let dis = b**2 - 4 * a * c;
	let results = [];

    if (dis == 0) {
    	let x = (-b - Math.sqrt(dis)) / (2 * a);
    	results.push(x);
    }
    else if (dis > 0) {
    	let x1 = (-b + Math.sqrt(dis)) / (2 * a);
    	let x2 = (-b - Math.sqrt(dis)) / (2 * a);

    	results.push(x1);
    	results.push(x2);
    }
    
    return results;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
    let averageMark = 0;

    if (marks.length == 0) {
    	return 0;
    }
    else if (marks.length > 0) {
    	if (marks.length > 5) {
    		console.log("Количество оценок больше 5!");
			for (let i = 5; i < marks.length; i++)
				marks.splice(i);
    	}

    	for (let i = 0; i < marks.length; i++) {
    		averageMark += marks[i];
    	}
    	averageMark = averageMark / marks.length;
	}

	return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
    let today = new Date();

    let todayYear = today.getFullYear();
    let personYear = dateOfBirthday.getFullYear();

    let old = todayYear - personYear;

    let message;

    if (old < 18)
    	message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    else if (old >= 18)
    	message = `Не желаете ли олд-фэшн, ${name}?`;

    return message;
}