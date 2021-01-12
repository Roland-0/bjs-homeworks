//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
	let space1 = 0;
	let space2 = 0;

	for (let i = 0; i < this.length; i++) {
		if (this[i + space1] == " ")
			space1++;
		if (this[this.length - i - space2 - 1] == " ")
			space2++;

		let sym1 = this[i + space1];
		let sym2 = this[this.length - i - space2 - 1];

		if (sym1.toLowerCase() == sym2.toLowerCase()) {
			if (i + space1 == this.length - 1)
				return true;
			continue;
		}
		else
			return false;
	}
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark

    if (marks.length == 0)
    	return 0;
 
    let average = 0;

    for (let i = 0; i < marks.length; i++) {
    	average += marks[i];
    }

    roundedAverage = Math.round(average / marks.length);

    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}