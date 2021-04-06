let primaryTime = moment();
$("#primaryTime").text(primaryTime.format('dddd, MMMM Do YYYY'));

/*---------- 9:00 AM ----------*/
let inputNine = document.querySelector('.writeTaskNine');
let outputNine = document.querySelector('.writeTaskNine');
let saveNine = document.querySelector('#clipNine');
/*---------- ----------*/
saveNine.addEventListener('click', writeTaskNine);
/*---------- ----------*/
outputNine.textContent = localStorage.getItem('taskNine');
inputNine.value = localStorage.getItem('taskNine');
/*---------- ----------*/
function writeTaskNine() {
	localStorage.setItem('taskNine', inputNine.value);
	outputNine.textContent = inputNine.value;
}

/*---------- 10:00 AM ----------*/
let inputTen = document.querySelector('.writeTaskTen');
let outputTen = document.querySelector('.writeTaskTen');
let saveTen= document.querySelector('#clipTen');
/*---------- ----------*/
saveTen.addEventListener('click', writeTaskTen);
/*---------- ----------*/
outputTen.textContent = localStorage.getItem('taskTen');
inputTen.value = localStorage.getItem('taskTen');
/*---------- ----------*/
function writeTaskTen() {
	localStorage.setItem('taskTen', inputTen.value);
	outputTen.textContent = inputTen.value;
}