function callCalculate() {
	removeSure();

	createCalculate(away);
}
function createCalculate(away) {
	var calculate = document.createElement('div'),
	input = document.createElement('input'),
	sure = document.createElement('div');

			sure.classList.add('sure');
			sure.setAttribute('id', 'sure');

			calculate.classList.add('main');
			calculate.setAttribute('id', 'main');
			input.setAttribute('type', 'text');
			input.setAttribute('id', 'input');
			input.classList.add('input');
	 		calculate.appendChild(input);
	 		sure.appendChild(calculate);
	 		away.appendChild(sure);
	 		getCalculate();
}