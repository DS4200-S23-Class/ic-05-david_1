function buttonClicked() {
	console.log("Button was clicked");

	let newText = "Number of times button clicked: ";
	let counter = 0;
	//select element we want to modify

	let	buttonDiv = document.getElementById("button-div");
	
	buttonDiv.innerHTML = newText.concat(counter);
}