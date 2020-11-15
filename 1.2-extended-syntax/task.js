"use strict"

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // return x;
    let dis = b**2 - 4 * a * c;
	let results = [];

    if (dis == 0) {
    	results.push((-b - Math.sqrt(dis)) / (2 * a));
    }
    else if (dis > 0) {
    	results.push((-b + Math.sqrt(dis)) / (2 * a));
    	results.push((-b - Math.sqrt(dis)) / (2 * a));
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
    else {
    	if (marks.length > 5) {
    		console.log("Количество оценок больше 5!");
			marks.splice(5);
    	}

    	for (let i = 0; i < marks.length; i++) {
    		averageMark += marks[i];
    	}
	}

	return averageMark / marks.length;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;

    if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18)
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    else if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18)
    	return `Не желаете ли олд-фэшн, ${name}?`;
}