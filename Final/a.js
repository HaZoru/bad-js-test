//basic functions //

function blockDisplay() {
	document.getElementById('a').style.display = "none";
	document.getElementById('btn').style.display = "none";
	document.getElementById('validate').style.display = "none";
}

function showNew() {
	document.getElementById('g').style.display = "block";
}

//defining the input boxes as variables

var alpha = document.getElementById('alpha');
var beta = document.getElementById('beta');
var charly = document.getElementById('charly');
var dino = document.getElementById('dino');
var echo = document.getElementById('echo');
var fox = document.getElementById('fox');


//to address the character length of the input boxes

function fiveLetter() {
	alpha.style.left = "30%";
	beta.style.left = "40%";
	charly.style.left = "50%";
	dino.style.left = "60%";
	echo.style.left = "70%";
	fox.style.display = "none";
}

function sixLetter() {
	alpha.style.left = "25%";
	beta.style.left = "35%";
	charly.style.left = "45%";
	dino.style.left = "55%";
	echo.style.left = "65%";
	fox.style.left = "75%";
}

function fourLetter(){

	alpha.style.left = "35%";
	beta.style.left = "45%";
	charly.style.left = "55%";
	dino.style.left = "65%";
	echo.style.display = "none";
	fox.style.display = "none";

}

// codewords

var code1 = "AC01"
var code2 = "GC02"
var code3 = "AC03"
var code4 = "HA04"

//encryted

var a = "z-k-e-h-m"
var b = "a-g-z-q-z-s"
var c = "z-f-m-z-k"
var d = "k-p-i-o"

//de''

var name1 = "alfin"
    name2 = "bharat"
		name3 = "agnal"
		name4 = "john"



function getValue() {
	var val = document.getElementById('validate').value;


	if (val == code1) {
		blockDisplay();
		document.getElementById('lan').innerHTML = a;
		fiveLetter();
		showNew();

	} else if (val == code2) {

		blockDisplay();
		document.getElementById('lan').innerHTML = b;
		sixLetter();
		showNew();

	} else if (val == code3) {

		blockDisplay();
		document.getElementById('lan').innerHTML = c;
		fiveLetter();
		showNew();

	}

	else if (val == code4) {

		blockDisplay();
		document.getElementById('lan').innerHTML = d;
		fourLetter();
		showNew();

	}  else {
		window.location = "b.html";
	}

}

function getVal() {

	var l = alpha.value + beta.value + charly.value + dino.value + echo.value + fox.value;
	var la = l.toLowerCase();
	console.log(la);

	if (la == name1) {
		alert("right");
	} else if (la == name2) {
		alert("right");
	} else if (la == name3) {
		alert("right");
	} else if (la == name4) {
		alert("right");
	}else {
		alert("wrong");
	}
}
