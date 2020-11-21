function getSolutions(a, b, c) {
	let D = b**2 - 4 * a * c;

	if (D < 0) {
		let result = {
			D: D,
			roots: []
		}
		return result;
	}
	else if (D == 0) {
		let x1 = -b / 2 * a;
		let result = {
			D: D,
			roots: [x1]
		}
		return result;
	}
	else {
		let x1 = (-b + Math.sqrt(D)) / 2 * a;
		let x2 = (-b - Math.sqrt(D)) / 2 * a;
		let result = {
			D: D,
			roots: [x1, x2]
		}
		return result;
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);

	console.log(`Вычисляем корни квадратного уравнения ${a} * ${x}² + ${b} * ${x} + ${c}`);
	console.log("Значение дискриминанта: " + result.D);

	switch(result.roots.length) {
		case 0:
			console.log("Уравнение не имеет вещественных корней");
		case 1:
			console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
		case 2:
			console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

function getAverageMark(marks) {
	if (marks.length == 0)
		return 0;

	let sum = 0;

	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}

	return sum / marks.length;
}

function getAverageScore(data) {
	let objects = ["algebra", "geometry", "russian", "physics", "music", "english", "poetry", "chemistry", "french"];

	for (let i = 0; i < 9; i++) {
  		if (data[objects[objects.length - 1]] == undefined)
    		objects.splice(objects.length - 1, 1);
	}

	let resultMarks = new Object();
	let sum = 0;

	if (objects.length > 0) {
		for (let i = 0; i < objects.length; i++) {
			resultMarks[objects[i]] = getAverageMark(data[objects[i]]);
			sum += getAverageMark(data[objects[i]]);
		}
		resultMarks.average = sum / objects.length;
	}

	if (objects.length == 0)
		resultMarks.average = 0;

	return resultMarks;
}

function getDecodedValue(secret) {
	switch(secret) {
		case 0:
			return "Родриго";
			break;
		case 1:
			return "Эмильо";
	}
}

function getPersonData(secretData) {
	let pirate = new Object();

	pirate.firstName = getDecodedValue(secretData.aaa);
	pirate.lastName = getDecodedValue(secretData.bbb);

	return pirate;
}