	/*---------------------- Global Variables ------------------------*/
	let theTime = moment().hour();
	let currentDay = moment(); $("#currentDay").text(currentDay.format('dddd, MMMM Do YYYY'));
	

	/*-------------------------- 9:00 AM -----------------------------*/
	let inputNine = document.querySelector('.writeTaskNine');
	let outputNine = document.querySelector('.writeTaskNine');
	let saveNine = document.querySelector('#clipNine');
	let deleteNine = document.querySelector('#deleteNine');
	/*------------------- Icon Event Listeners -----------------------*/
	saveNine.addEventListener('click', writeTaskNine);
	deleteNine.addEventListener('click', deleteTaskNine);
	/*------------------- Local Storage Get Item ---------------------*/
	outputNine.textContent = localStorage.getItem('taskNine');
	inputNine.value = localStorage.getItem('taskNine');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskNine() {
		localStorage.setItem('taskNine', inputNine.value);
		outputNine.textContent = inputNine.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskNine() {
		localStorage.removeItem('taskNine');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 9) {
		$(backNine).addClass("future");
	} else if (theTime === 9) {
		$(backNine).addClass("present");
	} else if (theTime >= 10 && theTime < 24) {
		$(backNine).addClass("past");
	}


	/*-------------------------- 10:00 AM ----------------------------*/
	let inputTen = document.querySelector('.writeTaskTen');
	let outputTen = document.querySelector('.writeTaskTen');
	let saveTen = document.querySelector('#clipTen');
	let deleteTen = document.querySelector('#deleteTen');
	/*------------------- Icon Event Listeners -----------------------*/
	saveTen.addEventListener('click', writeTaskTen);
	deleteTen.addEventListener('click', deleteTaskTen);
	/*------------------- Local Storage Get Item ---------------------*/
	outputTen.textContent = localStorage.getItem('taskTen');
	inputTen.value = localStorage.getItem('taskTen');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskTen() {
		localStorage.setItem('taskTen', inputTen.value);
		outputTen.textContent = inputTen.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskTen() {
		localStorage.removeItem('taskTen');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 10) {
		$(backTen).addClass("future");
	} else if (theTime === 10) {
		$(backTen).addClass("present");
	} else if (theTime >= 11 && theTime < 24) {
		$(backTen).addClass("past");
	}


	/*-------------------------- 11:00 AM ----------------------------*/
	let inputEleven = document.querySelector('.writeTaskEleven');
	let outputEleven = document.querySelector('.writeTaskEleven');
	let saveEleven = document.querySelector('#clipEleven');
	let deleteEleven = document.querySelector('#deleteEleven');
	/*------------------- Icon Event Listeners -----------------------*/
	saveEleven.addEventListener('click', writeTaskEleven);
	deleteEleven.addEventListener('click', deleteTaskEleven);
	/*------------------- Local Storage Get Item ---------------------*/
	outputEleven.textContent = localStorage.getItem('taskEleven');
	inputEleven.value = localStorage.getItem('taskEleven');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskEleven() {
		localStorage.setItem('taskEleven', inputEleven.value);
		outputEleven.textContent = inputEleven.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskEleven() {
		localStorage.removeItem('taskEleven');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 11) {
		$(backEleven).addClass("future");
	} else if (theTime === 11) {
		$(backEleven).addClass("present");
	} else if (theTime >= 12 && theTime < 24) {
		$(backEleven).addClass("past");
	}
	

	/*-------------------------- 12:00 PM ----------------------------*/
	let inputTwelve = document.querySelector('.writeTaskTwelve');
	let outputTwelve = document.querySelector('.writeTaskTwelve');
	let saveTwelve = document.querySelector('#clipTwelve');
	let deleteTwelve = document.querySelector('#deleteTwelve');
	/*------------------- Icon Event Listeners -----------------------*/
	saveTwelve.addEventListener('click', writeTaskTwelve);
	deleteTwelve.addEventListener('click', deleteTaskTwelve);
	/*------------------- Local Storage Get Item ---------------------*/
	outputTwelve.textContent = localStorage.getItem('taskTwelve');
	inputTwelve.value = localStorage.getItem('taskTwelve');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskTwelve() {
		localStorage.setItem('taskTwelve', inputTwelve.value);
		outputTwelve.textContent = inputTwelve.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskTwelve() {
		localStorage.removeItem('taskTwelve');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 12) {
		$(backTwelve).addClass("future");
	} else if (theTime === 12) {
		$(backTwelve).addClass("present");
	} else if (theTime >= 13 && theTime < 24) {
		$(backTwelve).addClass("past");
	}


	/*--------------------------- 1:00 PM ----------------------------*/
	let inputOne = document.querySelector('.writeTaskOne');
	let outputOne = document.querySelector('.writeTaskOne');
	let saveOne = document.querySelector('#clipOne');
	let deleteOne = document.querySelector('#deleteOne');
	/*------------------- Icon Event Listeners -----------------------*/
	saveOne.addEventListener('click', writeTaskOne);
	deleteOne.addEventListener('click', deleteTaskOne);
	/*------------------- Local Storage Get Item ---------------------*/
	outputOne.textContent = localStorage.getItem('taskOne');
	inputOne.value = localStorage.getItem('taskOne');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskOne() {
		localStorage.setItem('taskOne', inputOne.value);
		outputOne.textContent = inputOne.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskOne() {
		localStorage.removeItem('taskOne');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 13) {
		$(backOne).addClass("future");
	} else if (theTime === 13) {
		$(backOne).addClass("present");
	} else if (theTime >= 14 && theTime < 24) {
		$(backOne).addClass("past");
	}


	/*--------------------------- 2:00 PM ----------------------------*/
	let inputTwo = document.querySelector('.writeTaskTwo');
	let outputTwo = document.querySelector('.writeTaskTwo');
	let saveTwo = document.querySelector('#clipTwo');
	let deleteTwo = document.querySelector('#deleteTwo');
	/*------------------- Icon Event Listeners -----------------------*/
	saveTwo.addEventListener('click', writeTaskTwo);
	deleteTwo.addEventListener('click', deleteTaskTwo);
	/*------------------- Local Storage Get Item ---------------------*/
	outputTwo.textContent = localStorage.getItem('taskTwo');
	inputTwo.value = localStorage.getItem('taskTwo');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskTwo() {
		localStorage.setItem('taskTwo', inputTwo.value);
		outputTwo.textContent = inputTwo.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskTwo() {
		localStorage.removeItem('taskTwo');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 14) {
		$(backTwo).addClass("future");
	} else if (theTime === 14) {
		$(backTwo).addClass("present");
	} else if (theTime >= 15 && theTime < 24) {
		$(backTwo).addClass("past");
	}


	/*--------------------------- 3:00 PM ----------------------------*/
	let inputThree = document.querySelector('.writeTaskThree');
	let outputThree = document.querySelector('.writeTaskThree');
	let saveThree = document.querySelector('#clipThree');
	let deleteThree = document.querySelector('#deleteThree');
	/*------------------- Icon Event Listeners -----------------------*/
	saveThree.addEventListener('click', writeTaskThree);
	deleteThree.addEventListener('click', deleteTaskThree);
	/*------------------- Local Storage Get Item ---------------------*/
	outputThree.textContent = localStorage.getItem('taskThree');
	inputThree.value = localStorage.getItem('taskThree');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskThree() {
		localStorage.setItem('taskThree', inputThree.value);
		outputThree.textContent = inputThree.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskThree() {
		localStorage.removeItem('taskThree');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 15) {
		$(backThree).addClass("future");
	} else if (theTime === 15) {
		$(backThree).addClass("present");
	} else if (theTime >= 16 && theTime < 24) {
		$(backThree).addClass("past");
	}


	/*--------------------------- 4:00 PM ----------------------------*/
	let inputFour = document.querySelector('.writeTaskFour');
	let outputFour = document.querySelector('.writeTaskFour');
	let saveFour = document.querySelector('#clipFour');
	let deleteFour = document.querySelector('#deleteFour');
	/*------------------- Icon Event Listeners -----------------------*/
	saveFour.addEventListener('click', writeTaskFour);
	deleteFour.addEventListener('click', deleteTaskFour);
	/*------------------- Local Storage Get Item ---------------------*/
	outputFour.textContent = localStorage.getItem('taskFour');
	inputFour.value = localStorage.getItem('taskFour');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskFour() {
		localStorage.setItem('taskFour', inputFour.value);
		outputFour.textContent = inputFour.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskFour() {
		localStorage.removeItem('taskFour');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 16) {
		$(backFour).addClass("future");
	} else if (theTime === 16) {
		$(backFour).addClass("present");
	} else if (theTime >= 17 && theTime < 24) {
		$(backFour).addClass("past");
	}


	/*--------------------------- 5:00 PM ----------------------------*/
	let inputFive = document.querySelector('.writeTaskFive');
	let outputFive = document.querySelector('.writeTaskFive');
	let saveFive = document.querySelector('#clipFive');
	let deleteFive = document.querySelector('#deleteFive');
	/*------------------- Icon Event Listeners -----------------------*/
	saveFive.addEventListener('click', writeTaskFive);
	deleteFive.addEventListener('click', deleteTaskFive);
	/*------------------- Local Storage Get Item ---------------------*/
	outputFive.textContent = localStorage.getItem('taskFive');
	inputFive.value = localStorage.getItem('taskFive');
	/*-------------------- Write Task Function -----------------------*/
	function writeTaskFive() {
		localStorage.setItem('taskFive', inputFive.value);
		outputFive.textContent = inputFive.value;
	}
	/*-------------------- Delete Task Function ----------------------*/
	function deleteTaskFive() {
		localStorage.removeItem('taskFive');
		window.location.reload();
	}
	/*----------- If Else Statement To Set Background Color ----------*/
	if (theTime >= 0 && theTime < 17) {
		$(backFive).addClass("future");
	} else if (theTime === 17) {
		$(backFive).addClass("present");
	} else if (theTime >= 18 && theTime < 24) {
		$(backFive).addClass("past");
	}