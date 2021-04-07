	let theTime = moment().hour();
	let currentDay = moment(); $("#currentDay").text(currentDay.format('dddd, MMMM Do YYYY'));
	
	/*------------------------- 9:00 AM ----------------------------*/
	let inputNine = document.querySelector('.writeTaskNine');
	let outputNine = document.querySelector('.writeTaskNine');
	let saveNine = document.querySelector('#clipNine');

	saveNine.addEventListener('click', writeTaskNine);

	outputNine.textContent = localStorage.getItem('taskNine');
	inputNine.value = localStorage.getItem('taskNine');

	function writeTaskNine() {
		localStorage.setItem('taskNine', inputNine.value);
		outputNine.textContent = inputNine.value;
	}

	if (theTime >= 0 && theTime < 9) {
		$(backNine).addClass("future");
	} else if (theTime === 9) {
		$(backNine).addClass("present");
	} else if (theTime >= 10 && theTime < 24) {
		$(backNine).addClass("past");
	}

	/*------------------------- 10:00 AM ---------------------------*/
	let inputTen = document.querySelector('.writeTaskTen');
	let outputTen = document.querySelector('.writeTaskTen');
	let saveTen = document.querySelector('#clipTen');

	saveTen.addEventListener('click', writeTaskTen);

	outputTen.textContent = localStorage.getItem('taskTen');
	inputTen.value = localStorage.getItem('taskTen');

	function writeTaskTen() {
		localStorage.setItem('taskTen', inputTen.value);
		outputTen.textContent = inputTen.value;
	}

	if (theTime >= 0 && theTime < 10) {
		$(backTen).addClass("future");
	} else if (theTime === 10) {
		$(backTen).addClass("present");
	} else if (theTime >= 11 && theTime < 24) {
		$(backTen).addClass("past");
	}

	/*------------------------- 11:00 AM ---------------------------*/
	let inputEleven = document.querySelector('.writeTaskEleven');
	let outputEleven = document.querySelector('.writeTaskEleven');
	let saveEleven = document.querySelector('#clipEleven');

	saveEleven.addEventListener('click', writeTaskEleven);

	outputEleven.textContent = localStorage.getItem('taskEleven');
	inputEleven.value = localStorage.getItem('taskEleven');

	function writeTaskEleven() {
		localStorage.setItem('taskEleven', inputEleven.value);
		outputEleven.textContent = inputEleven.value;
	}

	if (theTime >= 0 && theTime < 11) {
		$(backEleven).addClass("future");
	} else if (theTime === 11) {
		$(backEleven).addClass("present");
	} else if (theTime >= 12 && theTime < 24) {
		$(backEleven).addClass("past");
	}
	
	/*------------------------- 12:00 PM ---------------------------*/
	let inputTwelve = document.querySelector('.writeTaskTwelve');
	let outputTwelve = document.querySelector('.writeTaskTwelve');
	let saveTwelve = document.querySelector('#clipTwelve');

	saveTwelve.addEventListener('click', writeTaskTwelve);

	outputTwelve.textContent = localStorage.getItem('taskTwelve');
	inputTwelve.value = localStorage.getItem('taskTwelve');

	function writeTaskTwelve() {
		localStorage.setItem('taskTwelve', inputTwelve.value);
		outputTwelve.textContent = inputTwelve.value;
	}

	if (theTime >= 0 && theTime < 12) {
		$(backTwelve).addClass("future");
	} else if (theTime === 12) {
		$(backTwelve).addClass("present");
	} else if (theTime >= 13 && theTime < 24) {
		$(backTwelve).addClass("past");
	}

	/*------------------------- 1:00 PM ---------------------------*/
	let inputOne = document.querySelector('.writeTaskOne');
	let outputOne = document.querySelector('.writeTaskOne');
	let saveOne = document.querySelector('#clipOne');

	saveOne.addEventListener('click', writeTaskOne);

	outputOne.textContent = localStorage.getItem('taskOne');
	inputOne.value = localStorage.getItem('taskOne');

	function writeTaskOne() {
		localStorage.setItem('taskOne', inputOne.value);
		outputOne.textContent = inputOne.value;
	}

	if (theTime >= 0 && theTime < 13) {
		$(backOne).addClass("future");
	} else if (theTime === 13) {
		$(backOne).addClass("present");
	} else if (theTime >= 14 && theTime < 24) {
		$(backOne).addClass("past");
	}

	/*-------------------------- 2:00 PM ---------------------------*/
	let inputTwo = document.querySelector('.writeTaskTwo');
	let outputTwo = document.querySelector('.writeTaskTwo');
	let saveTwo = document.querySelector('#clipTwo');

	saveTwo.addEventListener('click', writeTaskTwo);

	outputTwo.textContent = localStorage.getItem('taskTwo');
	inputTwo.value = localStorage.getItem('taskTwo');

	function writeTaskTwo() {
		localStorage.setItem('taskTwo', inputTwo.value);
		outputTwo.textContent = inputTwo.value;
	}

	if (theTime >= 0 && theTime < 14) {
		$(backTwo).addClass("future");
	} else if (theTime === 14) {
		$(backTwo).addClass("present");
	} else if (theTime >= 15 && theTime < 24) {
		$(backTwo).addClass("past");
	}

	/*-------------------------- 3:00 PM ---------------------------*/
	let inputThree = document.querySelector('.writeTaskThree');
	let outputThree = document.querySelector('.writeTaskThree');
	let saveThree = document.querySelector('#clipThree');

	saveThree.addEventListener('click', writeTaskThree);

	outputThree.textContent = localStorage.getItem('taskThree');
	inputThree.value = localStorage.getItem('taskThree');

	function writeTaskThree() {
		localStorage.setItem('taskThree', inputThree.value);
		outputThree.textContent = inputThree.value;
	}

	if (theTime >= 0 && theTime < 15) {
		$(backThree).addClass("future");
	} else if (theTime === 15) {
		$(backThree).addClass("present");
	} else if (theTime >= 16 && theTime < 24) {
		$(backThree).addClass("past");
	}

	/*-------------------------- 4:00 PM ---------------------------*/
	let inputFour = document.querySelector('.writeTaskFour');
	let outputFour = document.querySelector('.writeTaskFour');
	let saveFour = document.querySelector('#clipFour');

	saveFour.addEventListener('click', writeTaskFour);

	outputFour.textContent = localStorage.getItem('taskFour');
	inputFour.value = localStorage.getItem('taskFour');

	function writeTaskFour() {
		localStorage.setItem('taskFour', inputFour.value);
		outputFour.textContent = inputFour.value;
	}

	if (theTime >= 0 && theTime < 16) {
		$(backFour).addClass("future");
	} else if (theTime === 16) {
		$(backFour).addClass("present");
	} else if (theTime >= 17 && theTime < 24) {
		$(backFour).addClass("past");
	}

	/*-------------------------- 5:00 PM ---------------------------*/
	let inputFive = document.querySelector('.writeTaskFive');
	let outputFive = document.querySelector('.writeTaskFive');
	let saveFive = document.querySelector('#clipFive');

	saveFive.addEventListener('click', writeTaskFive);

	outputFive.textContent = localStorage.getItem('taskFive');
	inputFive.value = localStorage.getItem('taskFive');

	function writeTaskFive() {
		localStorage.setItem('taskFive', inputFive.value);
		outputFive.textContent = inputFive.value;
	}

	if (theTime >= 0 && theTime < 17) {
		$(backFive).addClass("future");
	} else if (theTime === 17) {
		$(backFive).addClass("present");
	} else if (theTime >= 18 && theTime < 24) {
		$(backFive).addClass("past");
	}