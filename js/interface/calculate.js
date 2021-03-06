
function getCalculate() {
	createButton();
	getClick();
}
function getClick() {
	var buttonBox = document.getElementById('buttonBox');
	buttonBox.onclick = function() {
		console.log(event.target.innerHTML);
		var res = event.target.innerHTML;
		if (res == "CE") {
			res = "";
		} else if (res == "+") {
			res = "+"
		} else if(res == "=") {
			res = "=";
		} else {
			res = event.target.innerHTML;
		}
		showResult(res);
		function showResult(res) {
			var input = document.getElementById('input'),
			val = '';
			if (res == "") {
				input.value = "";
			} else if (res == "+") {
				val = input.value;
				input.value = val + res;
			} else if (res == "=") {
				val = input.value + res;
				input.value = val;
				getEquals(val, input);
			} else if(res == "÷") {
				val = input.value + res;
				input.value = val;
			} else {
				val = input.value + res;
				input.value = val;
			}
		}
						function getDivi(val, input, o) {
							var str,
							str1,
							r;
							
							if (0 != -1) {
								str = val.split('÷');
								str1 = str[1].split('=');
								r = Number(str[0]) / Number(str1[0]);
								input.value = r;
							}
						}
						function getMultiplication (val, input, c) {
							var str,
							str1,
							r;
							
							if (0 != -1) {
								str = val.split('×');
								str1 = str[1].split('=');
								r = Number(str[0]) * Number(str1[0]);
								input.value = r;
							}
						}
						function getMiminus(val, input, b) {
							var str,
							str1,
							r;
							
							if (0 != -1) {
								str = val.split('–');
								str1 = str[1].split('=');
								r = Number(str[0]) - Number(str1[0]);
								input.value = r;
							}
						}
		function getEquals(val,input) {
			var o = val.search(/÷/),
			b = val.search(/–/),
			c = val.search(/×/),
			p = val.search(/\+/),
			str,
			str1,
			r;

			if (p != -1) {
				str = val.split('+');
				str1 = str[1].split('=');
				r = Number(str[0]) + Number(str1[0]);
				input.value = r;
			} else if (o != -1) {
				getDivi(val, input, o);
			} else if (c != -1 ) {
				getMultiplication(val, input, c);
			} else {
				getMiminus(val, input, b);
			}
		}
	}
}
function createButton() {
	var main = document.getElementById('main'),
		buttonBox = document.createElement('div'),
		numbers = document.createElement('div'),
		signs = document.createElement('div'),
		plusEquals = document.createElement('div');
			numbers.classList.add('numbers');
			buttonBox.classList.add('buttonBox');
			buttonBox.setAttribute('id', 'buttonBox');
					createFirstRow(numbers);
					createSecondRow(numbers);
					createThirdRow(numbers);
					createFourRow(numbers);
					createSigns(signs);
					createPlusEquals(plusEquals);
			buttonBox.appendChild(numbers);
			buttonBox.appendChild(signs);
			buttonBox.appendChild(plusEquals);
		main.appendChild(buttonBox);


		function createPlusEquals(plusEquals) {
				var plusE = document.createElement('div');
				getCE(plusE);
				getPlus(plusE);
				getEqua(plusE);
				plusEquals.appendChild(plusE);
				function getEqua(plusE) {
					var equa = document.createElement('div');
					equa.classList.add('plus');
					equa.innerHTML="=";
					plusE.appendChild(equa);
				}
				function getPlus(plusE) {
					var plus = document.createElement('div');
					plus.classList.add('plus');
					plus.innerHTML="+";
					plusE.appendChild(plus);
				}
				function getCE(plusE) {
					var ce = document.createElement('div');
					ce.classList.add('ce');
					ce.innerHTML="CE";
					plusE.appendChild(ce);
				}
		}
		function createSigns(signs) {
				var column = document.createElement('div');
				getDivide(column);
				getMulti(column);
				getMinus(column);
				getDot(column);
				signs.appendChild(column);

				function getDot(column) {
					var dot = document.createElement('div');
					dot.classList.add('sign')
					dot.innerHTML=".";
					column.appendChild(dot);
				}
				function getMinus(column) {
					var minus = document.createElement('div');
					minus.classList.add('sign');
					minus.innerHTML="&#8211;"
					column.appendChild(minus);
				}
				function getMulti(column) {
					var multi = document.createElement('div');
					multi.classList.add('sign');
					multi.innerHTML="&#215;"
					column.appendChild(multi);
				}
				function getDivide(column) {
					var divide = document.createElement('div');
					divide.classList.add('sign');
					divide.innerHTML="&#247;";
/*					divide.setAttribute('value' , "d");*/
					column.appendChild(divide);
				}
		}
		function createFourRow(numbers) {
				var fourRow = document.createElement('div');
				getL(fourRow);
				getNull(fourRow);
				getR(fourRow);
				fourRow.classList.add('rowCal');
				numbers.appendChild(fourRow);
				function getL(fourRow) {
					var none = document.createElement('div');
					none.classList.add('number');
					none.innerHTML="(";
					fourRow.appendChild(none);
				}
				function getNull(fourRow) {
					var nul = document.createElement('div');
					nul.classList.add('number');
					nul.innerHTML="0";
					fourRow.appendChild(nul);
				}
				function getR(fourRow) {
					var none = document.createElement('div');
					none.classList.add('number');
					none.innerHTML=")";
					fourRow.appendChild(none);
				}
		}
		function createThirdRow(numbers) {
				var thirdRow = document.createElement('div');
				getOne(thirdRow);
				getTwo(thirdRow);
				getTree(thirdRow);
				thirdRow.classList.add('rowCal');
				numbers.appendChild(thirdRow);
				function getOne(thirdRow) {
					var one = document.createElement('div');
					one.classList.add('number');
					one.innerHTML="1";
					thirdRow.appendChild(one);
				}
				function getTwo(thirdRow) {
					var two = document.createElement('div');
					two.classList.add('number');
					two.innerHTML="2";
					thirdRow.appendChild(two);
				}
				function getTree(thirdRow) {
					var tree = document.createElement('div');
					tree.classList.add('number');
					tree.innerHTML="3";
					thirdRow.appendChild(tree);
				}
		}

		function createSecondRow(numbers) {
				var secondRow = document.createElement('div');
				getFour(secondRow);
				getFive(secondRow);
				getSix(secondRow);
				secondRow.classList.add('rowCal');
				numbers.appendChild(secondRow);
				function getFour(secondRow) {
					var four = document.createElement('div');
					four.classList.add('number');
					four.innerHTML="4";
					secondRow.appendChild(four);
				}
				function getFive(secondRow) {
					var five = document.createElement('div');
					five.classList.add('number');
					five.innerHTML="5";
					secondRow.appendChild(five);
				}
				function getSix(secondRow) {
					var six = document.createElement('div');
					six.classList.add('number');
					six.innerHTML="6";
					secondRow.appendChild(six);
				}
		}

		function createFirstRow(numbers) {
				var firstRow = document.createElement('div');
				getSeven(firstRow);
				getEight(firstRow);
				getNine(firstRow);
				firstRow.classList.add('rowCal');
				numbers.appendChild(firstRow);
				function getNine(firstRow) {
					var nine = document.createElement('div');
					nine.classList.add('number');
					nine.innerHTML="9";
					firstRow.appendChild(nine);
				}
				function getEight(firstRow) {
					var eight = document.createElement('div');
					eight.classList.add('number');
					eight.innerHTML="8";
					firstRow.appendChild(eight);
				}
				function getSeven(firstRow) {
					var seven = document.createElement('div');
					seven.classList.add('number');
					seven.innerHTML="7";
					firstRow.appendChild(seven);
				}
		}
}
