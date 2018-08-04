function callSalary() {
	removeSure();

	createSalary();
}

 function createSalary() {
 	var sure = document.createElement('div'),
 	away = document.getElementById('away'),
 	mainParent = document.createElement('div'),
 	tableSalary = document.createElement('div'),
 	resultSalary = document.createElement('div'),
 	result = document.createElement('div');

 	sure.setAttribute('id', 'sure');
 	sure.classList.add('sure');

 	mainParent.classList.add('mainParent');
 	mainParent.setAttribute('id', 'mainParent');

 	tableSalary.classList.add('tableSalary');
 	tableSalary.setAttribute('id', 'table');

 	mainParent.appendChild(tableSalary);

 	sure.appendChild(mainParent);

 	resultSalary.classList.add('resultSalary');
 	resultSalary.setAttribute('id', 'result');

 	result.setAttribute('id', 'div');


 	resultSalary.appendChild(result);

 	sure.appendChild(resultSalary);

 	away.appendChild(sure);
 	getFillSalary();

 }