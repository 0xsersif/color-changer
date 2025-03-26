document.addEventListener('DOMContentLoaded', () => {
	// Select the necessary DOM elements
	const colorBox = document.getElementById('color-box');
	const changeColorBtn = document.getElementById('change-color-btn');

	// Function to generate a random hexadecimal color
	function getRandomColor() {
			// Generate a random color hex code
			return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	}

	// Event listener for the change color button
	changeColorBtn.addEventListener('click', () => {
			// Generate a new random color and apply it to the color box
			const newColor = getRandomColor();
			colorBox.style.backgroundColor = newColor;
	});
});
