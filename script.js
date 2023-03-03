let result = document.getElementById("result");
let display = document.getElementById("display")

function clearDisplay() {
	result.value = "";
}

function appendChar(char) {
	result.value += char;
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = "Error";
	}
}

function screenOn(){
	display=none;
}