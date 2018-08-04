function callWeather() {
	var weath = document.getElementById('weather'),
	forecast = document.createElement('div'),
	city = 'Moscow';
	forecast.setAttribute('id', 'forecast');
	forecast.classList.add('forecast');
	fillForecast(forecast);
	weath.appendChild(forecast);

	weather(city);

}

function removeWeather() {
	var weather = document.getElementById('weather'),
	forecast = document.getElementById('forecast');
	weather.removeChild(forecast);
}

function fillForecast(forecast) {
	var select = document.createElement('select'),
	p = document.createElement('p'),
	city = document.createElement('div'),
	temp = document.createElement('div'),
	pressure = document.createElement('div'),
	op1 = document.createElement('option'),
	op2 = document.createElement('option'),
	op3 = document.createElement('option');

	select.classList.add('select');
	select.setAttribute('id', 'search');

	op1.setAttribute('value', 'Moscow');
	//op1.setAttribute('selected', 'selected');
	op2.setAttribute('value', 'Volgograd');
	op3.setAttribute('value', 'Penza');

	op1.innerHTML = 'Москва';
	op2.innerHTML = 'Волгоград';
	op3.innerHTML = 'Пенза';

	select.appendChild(op1);
	select.appendChild(op2);
	select.appendChild(op3);
	forecast.appendChild(select);

	p.setAttribute('id', 'p');
	forecast.appendChild(p);

	city.setAttribute('id', 'city');
	city.classList.add('city');
	forecast.appendChild(city);

	temp.setAttribute('id', 'temp');
	temp.classList.add('temp');
	forecast.appendChild(temp);

	pressure.setAttribute('id', 'pressure');
	pressure.classList.add('pressure');
	forecast.appendChild(pressure);
}





function secondRequestWeather() {
	if (sky.classList.contains('button') === true) {
		sky.classList.remove('button');
		sky.classList.add('redButton');
		removeWeather();
	} else {
		sky.classList.remove('redButton');
		sky.classList.add('button');
		callWeather();
	}
}