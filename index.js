// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
	if (parseInt(dodger.style.left) - 1 < 0) {
		alert("edge of screen");
		return;
	} else {
		dodger.style.left = parseInt(dodger.style.left) - 1 + "px";
	}
}
function moveDodgerRight() {
	if (parseInt(dodger.style.left) + 1 > 360) {
		alert("edge of screen");
		return;
	} else {
		dodger.style.left = parseInt(dodger.style.left) + 1 + "px";
	}
}

document.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowLeft":
			moveDodgerLeft();
			break;
		case "ArrowRight":
			moveDodgerRight();
			break;
		default:
			alert("Press right or left arrow key to move the dodger");
	}
});
