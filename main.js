
var glassesImg = document.getElementById("glasses");
var stasheImg = document.getElementById("stashe");
var bowtieImg = document.getElementById("bowtie");


he onclick event

var glassesIndex = 1;
function glassesClick() {
	glassesIndex += 1;
	if (glassesIndex > 6) {
		glassesIndex = 1;
	}
	glassesImg.setAttribute("src", "images/glasses" + glassesIndex + ".gif");
}
glassesImg.onclick = glassesClick;


var stasheIndex = 1;
function stasheClick() {	
	stasheIndex += 1;
	if (stasheIndex > 6) {
		stasheIndex = 1;
	}
	stasheImg.setAttribute("src", "images/stashe" + stasheIndex + ".gif");
}
stasheImg.onclick = stasheClick;

var bowtieIndex = 1;
function bowtieClick() {
	bowtieIndex += 1;
	if (bowtieIndex > 6) {
		bowtieIndex = 1;
	}
	bowtieImg.setAttribute("src", "images/bowtie" + bowtieIndex + ".gif");
}
bowtieImg.onclick = bowtieClick;