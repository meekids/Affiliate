var totalNumber = 0;

function generateNumber() {
	var randomNum = Math.floor(Math.random() * 8) + 2;
	totalNumber += randomNum;
	document.getElementById("number").innerHTML = totalNumber;
}

generateNumber(); // Call the function once when the page loads

setInterval(generateNumber, 3600000); // Call the function every hour (in milliseconds)
