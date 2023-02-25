var counter = 0;

function incrementCounter() {
	counter++;
	document.getElementById("counter").innerHTML = counter;
}

incrementCounter(); // Call the function once when the page loads

// Save the counter value to a server-side script
var xhr = new XMLHttpRequest();
xhr.open("POST", "save-counter.php", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("counter=" + counter);
