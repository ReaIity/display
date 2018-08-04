function getFillSalary() {
	createTop();
	createBody();
}
function createTop() {	
	createId(name);
	var parent = document.getElementById('table');
    	for (var i = 0; i < 1; i++){
    		var row = document.createElement('div');
    		row.classList.add('styleForTopRowSalary');
    	 		for(var n = 0; n < 4; n++) {
    	 			var div = document.createElement('div');
    	 			if (n == 0) {
						div.innerHTML = '<p class="p">Фамилия</p>' ;
						div.classList.add('styleForTopSalary');
						
					} else if (n == 1) {
						div.innerHTML = 'Количество отработанных смен';
						div.classList.add('styleForTopSalary');
						
					} else if (n == 2) {
						div.innerHTML = '<p class="p">Ставка за одну смену</p>';
						div.classList.add('styleForTopSalary');
						
					} else {
						div.innerHTML = '<p class="p">Заработная плата</p>' ;
						div.classList.add('styleForTopSalary');
						
    	 			}  	 			
    		row.appendChild(div);
    	    parent.appendChild(row);
    	    
    	}
    }
}
function createBody() {
	var i = 0,
		j = 0,
		resultFromFir = 0,
		resultFromSec = 0;
	var parent = document.getElementById('mainParent');
	var body = document.createElement('div');
	body.classList.add('styleForBody');
		for (; i < 11; i++) {
			j = 0;
			var row = document.createElement('div');
			row.classList.add('styleForRowSalary');
			row.addEventListener('input', getInput, false);
			for(; j < 4; j++) {
				var div = document.createElement('div');
				if (j == 0) {
					div.classList.add('styleForTopSalary');
					div.innerHTML = createId(name);
				} else if (j == 1) {
					div.classList.add('styleForTopSalary');
					div.innerHTML = "<input type='number'>";
				} else if (j == 2) {
					div.classList.add('styleForTopSalary');
					div.innerHTML = "<input type='number'>";
				} else {
					div.classList.add('salary');
					div.innerHTML = '';
				}
				row.appendChild(div);
			}
		body.appendChild(row);
	}
	parent.appendChild(body);
}
function createId(name) {
	var strict = 'qwertyuiopasdfghjklzxcvbnm';
	var name = '';
	var n = 0,
		m = 0;
	
	for (; n < 4; n++) {
		for (; m < 8; m++){
			name = name + strict.charAt(getRandomInt(0, 26));
		}
	}
	return name;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getInput(row) {
		if (typeof row.stopPropagation === "function") {
	        row.stopPropagation();
	    }
	    checkSibling(row);
}
function checkSibling(row) {
	var elem = row.target,
	parent,
	bossparent,
	e,
	result,
	last;
	
	parent = elem.parentNode;
	bossparent = parent.parentNode;
	e = bossparent.getElementsByTagName('input');
	result = e[0].value * e[1].value;
	last = bossparent.lastChild;
	last.innerHTML = result;
	getSalary();
}
function getSalary() {
	var arr = Array.from(document.getElementsByClassName('salary')),
	i,
	result = [],
	res = 0;
	for (i = 0; i < arr.length; i++) {
			res = res + +arr[i].innerHTML;
				showResult(res);
	}
	function showResult(res) {
		var div = document.getElementById('div'),
		result = document.getElementById('result');
		result.removeChild(div);
		div.classList.add('nothing');
		div.innerHTML = 'Итого: ' + res;
		result.appendChild(div);
	}
}