let currCount = 0
function buttonClicked() {
	console.log("Button was clicked");

	//select element we want to modify
	let count = document.getElementById("count");

	let buttonDiv = document.getElementById("button-div");

	currCount += 1;
	
	count.innerHTML = currCount;
	
}