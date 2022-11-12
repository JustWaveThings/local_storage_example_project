const colorBoxes = document.getElementsByClassName('color-boxes')[0];
const color = document.getElementById('color');
const hex = document.getElementById('hex');

let colorsArray = localStorage.getItem('items')
	? JSON.parse(localStorage.getItem('items'))
	: [];

colorsArray.forEach(divMaker);

function divMaker(text) {
	const div = document.createElement('div');
	const h2 = document.createElement('h2');
	div.className = 'box';
	div.style.background = text.color_name;
	h2.textContent = `${text.color_name} & ${text.hex_code}`;
	div.appendChild(h2);
	colorBoxes.appendChild(div);
}

function add() {
	let color_info = {
		color_name: color.value,
		hex_code: hex.value,
	};

	colorsArray.push(color_info);
	localStorage.setItem('items', JSON.stringify(colorsArray));
	divMaker(colorsArray[colorsArray.length - 1]);
	color.value = '';
	hex.value = '';
}

function del() {
	localStorage.clear();
	colorsArray = [];
	colorBoxes.textContent = '';
}
