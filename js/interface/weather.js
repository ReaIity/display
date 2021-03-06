function weather(city) {
	getCity(city);
	function getCity(city) {
					var search = $("#search"),
					url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=68b26f6d3fbcc173eed1b628a08ee439';
					requestDate(url);	
				
			}
			//запрос данных на сервер
	function requestDate(url) {
		$.ajax({url: url, success: function(result){
      		 var answer = result,
				 arr = [],
				 name = 'name';
				 createImage(answer);
				 arr = {name: answer[name], temp: createTemper(answer), pressure: showPressure(answer)};
				 showValue(arr);
				 function showValue(arr) {
					showCity(arr);
					temperature(arr);
					pressure(arr);
						function showCity(arr) {
							var city = $('#city'),
							name = 'name';
							if(arr[name] == 'Moscow') {
								$(city).html('Москва');
							} else if(arr[name] == 'Penza') {
								$(city).html('Пенза');
							} else if(arr[name] == 'Volgograd') {
								$(city).html('Волгоград');
							}
						}
						function temperature(arr) {
							var temp = $('#temp'),
							temper = 'temp';
							$(temp).html('Температура : ' + arr[temper] + '&#176; C');
						}
						function pressure(arr) {
							var pressure = $('#pressure'),
							pressur = 'pressure';
							$(pressure).html('Давление : ' + arr[pressur]);
						}
				}
    	}});
	}
	//рисуем картинку с погодой в реальном времени
	function createImage(answer) {
		var img = [],
		p = $('#p'),
		forecast = $('#forecast'),
		obj = [],
		main = 'main',
		weather = 'weather';
		obj = answer[weather];
		img = (obj[0]);
		if (img[main] == 'Rain') {
			$(p).remove().appendTo($(forecast)).css('background-image',' url(http://icons.wxug.com/i/c/v4/chancerain.svg)').addClass('image');
			
		} else if (img[main] == 'Clear') {
			$(p).remove().css('background-image', 'url(http://icons.wxug.com/i/c/v4/clear.svg)').addClass('image').appendTo($(forecast));
			
		} 
	} 
	//записываем данные о погоде в див forecast
	function createTemper(answer) {
		var array = [],
		press,
		temperature,
		main = 'main',
		temp = 'temp',
		obj = {};
		obj = answer[main];
		array.push(obj[temp]);
		temperature =  Math.round(changeKelvin(array));
		return temperature;
	}
	//переводим из кельвинов в цельсии
	function changeKelvin(array) {
		var k = 273,
		grade = array[0] - k;
		return grade;
	}
	//показываем давление
	function showPressure(answer) {
		var 
		shower,
		array = [],
		main = 'main',
		pressure = 'pressure',
		obj = answer[main];
		array.push(obj[pressure]);
		shower = changePressure(array);
		return shower;
	}
	function changePressure(array) {
		var press,
		r = '';
		press = array[0] * 0.75;
		r = r + press;
		r = r.split('.', 1);
		return r[0] + ' мм. рт. ст.';
	}
}