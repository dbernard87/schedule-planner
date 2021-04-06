$(document).ready(function( $ ) {

let thehours = new Date().getHours();
let backNine = document.querySelector('#backNine')
let themessage;
let morning = ('Good morning');
let afternoon = ('Good afternoon');
let evening = ('Good evening');
let primaryTime = moment(); $("#primaryTime").text(primaryTime.format('dddd, MMMM Do YYYY'));


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

if (thehours >= 0 && thehours < 8) {
$(backNine).css("background-color","#d3d3d3");	
} else if (thehours == 1) {
$(backNine).css("background-color","#ff6961");	
} else if (thehours >= 10 && thehours < 24) {
$(backNine).css("background-color","#77dd77");
}	
$(backNine).append(themessage);


/*------------------------- 10:00 AM ---------------------------*/
let inputTen = document.querySelector('.writeTaskTen');
let outputTen = document.querySelector('.writeTaskTen');
let saveTen= document.querySelector('#clipTen');

saveTen.addEventListener('click', writeTaskTen);

outputTen.textContent = localStorage.getItem('taskTen');
inputTen.value = localStorage.getItem('taskTen');

function writeTaskTen() {
	localStorage.setItem('taskTen', inputTen.value);
	outputTen.textContent = inputTen.value;
}

if (thehours >= 0 && thehours < 9) {
$(backTen).css("background-color","#d3d3d3");	
} else if (thehours == 10) {
$(backTen).css("background-color","#ff6961");	
} else if (thehours >= 11 && thehours < 24) {
$(backTen).css("background-color","#77dd77");
}	
$(backTen).append(themessage);


/*------------------------- 11:00 AM ---------------------------*/
let inputEleven = document.querySelector('.writeTaskEleven');
let outputEleven = document.querySelector('.writeTaskEleven');
let saveEleven= document.querySelector('#clipEleven');

saveEleven.addEventListener('click', writeTaskEleven);

outputEleven.textContent = localStorage.getItem('taskEleven');
inputEleven.value = localStorage.getItem('taskEleven');

function writeTaskEleven() {
	localStorage.setItem('taskEleven', inputEleven.value);
	outputEleven.textContent = inputEleven.value;
}

if (thehours >= 0 && thehours < 10) {
$(backEleven).css("background-color","#d3d3d3");	
} else if (thehours == 11) {
$(backEleven).css("background-color","#ff6961");	
} else if (thehours >= 12 && thehours < 24) {
$(backEleven).css("background-color","#77dd77");
}	
$(backEleven).append(themessage);


/*------------------------- 12:00 PM ---------------------------*/
let inputTwelve = document.querySelector('.writeTaskTwelve');
let outputTwelve = document.querySelector('.writeTaskTwelve');
let saveTwelve= document.querySelector('#clipTwelve');

saveTwelve.addEventListener('click', writeTaskTwelve);

outputTwelve.textContent = localStorage.getItem('taskTwelve');
inputTwelve.value = localStorage.getItem('taskTwelve');

function writeTaskTwelve() {
	localStorage.setItem('taskTwelve', inputTwelve.value);
	outputTwelve.textContent = inputTwelve.value;
}

if (thehours >= 0 && thehours < 11) {
$(backTwelve).css("background-color","#d3d3d3");	
} else if (thehours == 12) {
$(backTwelve).css("background-color","#ff6961");	
} else if (thehours >= 13 && thehours < 24) {
$(backTwelve).css("background-color","#77dd77");
}	
$(backTwelve).append(themessage);


/*------------------------- 1:00 PM ---------------------------*/
let inputOne = document.querySelector('.writeTaskOne');
let outputOne = document.querySelector('.writeTaskOne');
let saveOne= document.querySelector('#clipOne');

saveOne.addEventListener('click', writeTaskOne);

outputOne.textContent = localStorage.getItem('taskOne');
inputOne.value = localStorage.getItem('taskOne');

function writeTaskOne() {
	localStorage.setItem('taskOne', inputOne.value);
	outputOne.textContent = inputOne.value;
}

if (thehours >= 0 && thehours < 12) {
$(backOne).css("background-color","#d3d3d3");	
} else if (thehours == 13) {
$(backOne).css("background-color","#ff6961");	
} else if (thehours >= 1 && thehours < 24) {
$(backOne).css("background-color","#77dd77");
}	
$(backOne).append(themessage);


/*-------------------------- 2:00 PM ---------------------------*/
let inputTwo = document.querySelector('.writeTaskTwo');
let outputTwo = document.querySelector('.writeTaskTwo');
let saveTwo= document.querySelector('#clipTwo');

saveTwo.addEventListener('click', writeTaskTwo);

outputTwo.textContent = localStorage.getItem('taskTwo');
inputTwo.value = localStorage.getItem('taskTwo');

function writeTaskTwo() {
	localStorage.setItem('taskTwo', inputTwo.value);
	outputTwo.textContent = inputTwo.value;
}

if (thehours >= 0 && thehours < 13) {
$(backTwo).css("background-color","#d3d3d3");	
} else if (thehours == 14) {
$(backTwo).css("background-color","#ff6961");	
} else if (thehours >= 15 && thehours < 24) {
$(backTwo).css("background-color","#77dd77");
}	
$(backTwo).append(themessage);


/*-------------------------- 3:00 PM ---------------------------*/
let inputThree = document.querySelector('.writeTaskThree');
let outputThree = document.querySelector('.writeTaskThree');
let saveThree= document.querySelector('#clipThree');

saveThree.addEventListener('click', writeTaskThree);

outputThree.textContent = localStorage.getItem('taskThree');
inputThree.value = localStorage.getItem('taskThree');

function writeTaskThree() {
	localStorage.setItem('taskThree', inputThree.value);
	outputThree.textContent = inputThree.value;
}

if (thehours >= 0 && thehours < 14) {
$(backThree).css("background-color","#d3d3d3");	
} else if (thehours == 15) {
$(backThree).css("background-color","#ff6961");	
} else if (thehours >= 16 && thehours < 24) {
$(backThree).css("background-color","#77dd77");
}	
$(backThree).append(themessage);


/*-------------------------- 4:00 PM ---------------------------*/
let inputFour = document.querySelector('.writeTaskFour');
let outputFour = document.querySelector('.writeTaskFour');
let saveFour= document.querySelector('#clipFour');

saveFour.addEventListener('click', writeTaskFour);

outputFour.textContent = localStorage.getItem('taskFour');
inputFour.value = localStorage.getItem('taskFour');

function writeTaskFour() {
	localStorage.setItem('taskFour', inputFour.value);
	outputFour.textContent = inputFour.value;
}

if (thehours >= 0 && thehours < 15) {
$(backFour).css("background-color","#d3d3d3");	
} else if (thehours == 16) {
$(backFour).css("background-color","#ff6961");	
} else if (thehours >= 17 && thehours < 24) {
$(backFour).css("background-color","#77dd77");
}	
$(backFour).append(themessage);


/*-------------------------- 5:00 PM ---------------------------*/
let inputFive = document.querySelector('.writeTaskFive');
let outputFive = document.querySelector('.writeTaskFive');
let saveFive= document.querySelector('#clipFive');

saveFive.addEventListener('click', writeTaskFive);

outputFive.textContent = localStorage.getItem('taskFive');
inputFive.value = localStorage.getItem('taskFive');

function writeTaskFive() {
	localStorage.setItem('taskFive', inputFive.value);
	outputFive.textContent = inputFive.value;
}

if (thehours >= 0 && thehours < 17) {
$(backFive).css("background-color","#d3d3d3");	
} else if (thehours == 18) {
$(backFive).css("background-color","#ff6961");	
} else if (thehours >= 19 && thehours < 24) {
$(backFive).css("background-color","#77dd77");
}	
$(backFive).append(themessage);

});