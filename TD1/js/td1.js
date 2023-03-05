'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('In onLoad() function…');
	defineHeading();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	getNbDays();
	updateClock1();
	updateClock2();
	updateGraphicClock();
	intervalGraphicClock();
}

function defineHeading() {
	document.title = document.getElementById("title").innerText;
	document.querySelector("h1").classList.add("firstOrLast");
	document.querySelectorAll("h2")[1].classList.add("firstOrLast");
	document.querySelector("h3").classList.add("firstOrLast");
}

function defineHeading2() {
	var h2Recup = document.querySelectorAll("h2");
	if (h2Recup.length != 0) {
		h2Recup[h2Recup.length - 1].innerHTML = "TestH2";
	}
}

function defineHeading3() {
	var h2Recup = document.querySelectorAll("h2");
	if (h2Recup.length != 0) {
		h2Recup[h2Recup.length - 1].innerHTML = "TestH2";
	}
	else {
		document.title = "Yanis Benmimoun";
	}
}

function defineHeading4() {
	var nbElements = document.querySelectorAll(".firstOrLast");
	if (nbElements.length > 0) {
		if (nbElements.length % 2 === 0) {
			document.title = nbElements[0].innerText;
		} else {
			document.title = nbElements[nbElements.length - 1].innerText;
		}
	} else {
		document.title = "Yanis Benmimoun";
	}
}

function swapInnerHTML() {
	const paragraphs = document.getElementsByTagName("p");
	let temp = paragraphs[0].innerHTML;
	paragraphs[0].innerHTML = paragraphs[1].innerHTML;
	paragraphs[1].innerHTML = temp;
}

function dateAlter() {
	var today = new Date();
	var author = document.querySelector('meta[name="author"]').content;
	var date = "le " + today.getDate() + " " + today.toLocaleString('default', { month: 'long' }) + " " + today.getFullYear();
	var text = "Dernière modification : " + date + " par " + author;
	document.querySelector('#dateAlter').innerHTML = text;
}

function getNbDays(){
	const now = Date.now();
	const vacances = Date.parse('19 Jul 2023 00:00:00 GMT');
	const dif = vacances - now;
	const waiting = dif/1000/60/60/24;
	document.getElementById('echeance').textContent=`Il reste ${waiting | 0} jours avant le 19 juillet 2023 `
}

function updateClock1() {
	const now = new Date();
	const time = now.toLocaleTimeString();
	document.getElementById("clock").textContent = time;
}
setInterval(updateClock1, 1000); 


function updateClock2() {
	const now = new Date();
	const time = now.toLocaleTimeString();
	document.getElementById("clock").textContent = time;
	setTimeout(updateClock2, 1000); 
}


function updateGraphicClock(){
	var time = new Date(Date.now());
	const timeString = time.toTimeString().split(' ')[0];
	const value = [timeString[0],timeString[1],timeString[3],timeString[4],timeString[6], timeString[7]];
	const liste_img = document.querySelectorAll('img');
	for(let i=0;i<liste_img.length;i++){
		liste_img[i].src=`assets/images/${value[i]}.gif`
	}
}

function intervalGraphicClock(){
	window.setInterval(updateGraphicClock,1000)
}


const input = document.getElementById("number-input");

input.addEventListener("input", function() {
  if (input.value === "") {
    input.classList.remove("green", "red");
    input.classList.add("white");
  } else if (isNaN(input.value)) {
    input.classList.remove("green");
    input.classList.add("red");
  } else {
    input.classList.remove("red");
    input.classList.add("green");
  }
});


const toggleBtns = document.querySelectorAll('.toggle');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const menu = btn.nextElementSibling;
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        btn.classList.toggle('active');
      });
    });
