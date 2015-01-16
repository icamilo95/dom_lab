// Your code here
window.addEventListener ("load", function () {


//Part1

var titleChange = document.getElementById("greeting");
titleChange.innerHTML = "Hello, Planet Earth!";

// Part 2

var backgroundChange = document.getElementById("essentials");
//console.log(backgroundChange); // It shows me what it returns in the console, so I can see why 
backgroundChange.style.backgroundColor = "yellow";


//Part3 && Part4


function clicking(event) {
//	console.log(event);
	event.target.setAttribute("class", "selected");
	document.querySelector("img").setAttribute("src", "./images/"+event.target.innerHTML+".jpeg");
}

var textClick = document.getElementsByTagName("li");
//console.log(textClick);
	for (var i = 0; i < textClick.length; i++) {
		textClick[i].addEventListener("click", clicking);	
	}


// Part 5

function panic(event) {
	
	var allTag = document.getElementsByTagName("li");
	for (var i = 0; i < allTag.length; i++) {
		//allTag[i].className ="";
		allTag[i].setAttribute("class", "");
		document.querySelector("img").setAttribute("src", "./images/panic.jpeg");
	}
	//alert("button clicked");
}

var myButton = document.getElementById("reset");

myButton.addEventListener("click", panic);















});