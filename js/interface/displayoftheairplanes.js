function start() {
	var id = setInterval(function() {
		big();
	}, 2000);
}
function big(id) {
	//запрос данных о самолётах на сервер
	requestData();
	function requestData() {
		fetch('https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48')
		 .then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  
		          response.status);  
		        return;  
		      }

		      
		      response.json().then(function(data) {  
		        
		        console.log(data)
		        reload();
		        var arr = sortGetArray(data);
		        createTable2(arr);  
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		 });

		
	} 
	// сортируем данные с сервера
	function sortGetArray(answer) {
		var array = [];
		for (var key in answer) {
			if (typeof answer[key] === "object") {
				array.push(answer[key]);
			}
		}
		return array;
	}
	//создаем таблицу
	function createTable2(array) {
				var wrap = document.getElementById('wrap'),
					parent = document.createElement('div');

		parent.classList.add('parent');
		parent.setAttribute('id','parent');

		parent.ondblclick = function() {
				 		clickOnRow();
				 	};
		array.forEach(function(item, i, array){
			var row = document.createElement('div');
			if( i % 2 == 0) {
				row.classList.add('row');
			} else {
				row.classList.add('rowtwo');
			}; 
			for(var j = 0; j < item.length; j++) {
				var data = document.createElement('div');
				data.classList.add('dataStyle');
				 if(j == 8) {
				 	
						
				 		data.innerHTML = item[j];
				 		row.appendChild(data);
					 } else if (j == 19) {
					 	
						
					 	data.innerHTML = item[j];
					 	row.appendChild(data);
					 } else if (j == 11) {
					 	
						
					 	data.innerHTML = item[j];
					 	row.appendChild(data);
					 } else if (j == 13) {
					 	
						
					 	data.innerHTML = item[j];
					 	row.appendChild(data);
					 }	else if (j == 12) {
					 	
						
					 	data.innerHTML = item[j];
					 	row.appendChild(data);
					 }	

			}
			parent.appendChild(row);
		});
		wrap.appendChild(parent);
	} 
	//создаем модальное окно 
	function createModalWindow(elems) {
		var i = 0,
			boss = document.getElementById('boss'),
			header = document.getElementById('header'),
			wrap = document.getElementById('wrap'),
			parent = document.getElementById('parent'),
			glass = document.createElement('div'),
			modalWindow = document.createElement('div'),
			button = document.createElement('div'),
			column = document.createElement('div');


		modalWindow.classList.add('modalWindow');
		modalWindow.setAttribute('id','modalWindow');
		column.classList.add('column');
		glass.setAttribute('id','glass');
		glass.style.cssText="position: fixed; width: 100%; height: 100%; z-index: 100; background: rgba(0,0,0,0.2)";
		button.classList.add('positionButton');
		button.innerHTML = "&#10006;";


		for (;i < elems.length; i++) {
			var row = document.createElement('div');
			row.classList.add('modalRow');
			var data = document.createElement('div');
			data.style.cssText = "width: 50%; margin-bottom: 10px;";
			var description = document.createElement('div');
			description.style.cssText = "width: 50%; margin-bottom:";
			if (i == 0) {
				data.innerHTML = elems[0];
				description.innerHTML = ' Модель самолёта';
				row.appendChild(description);
				row.appendChild(data);
			} else if ( i == 1) {
				data.innerHTML = elems[1];
				description.innerHTML = ' Аэропорт вылета';
				row.appendChild(description);
				row.appendChild(data);
			} else if (i == 2) {
				data.innerHTML = elems[2];
				description.innerHTML = ' Аэропорт прибытия';
				row.appendChild(description);
				row.appendChild(data);
			} else if( i == 3) {
				data.innerHTML = elems[3];
				description.innerHTML = ' Номер рейса';
				row.appendChild(description);
				row.appendChild(data);
			} else {
				data.innerHTML = elems[4];
				description.innerHTML = ' Аэропорт прибытия';
				row.appendChild(description);
				row.appendChild(data);
			}
			column.appendChild(row);
		}

		button.onclick = function() {	
			destroyModalWindow();
			start();
		}
		modalWindow.appendChild(button);
		modalWindow.appendChild(column);
		wrap.appendChild(modalWindow);
		boss.insertBefore(glass, header);

		function destroyModalWindow() {
			var boss = document.getElementById('boss'),
				wrap = document.getElementById('wrap'),
				modalWindow = document.getElementById('modalWindow'),
				glass = document.getElementById('glass');
			boss.removeChild(glass);
			wrap.removeChild(modalWindow);
		}
	}
	function reload() {
		var wrap = document.getElementById('wrap'),
			parent = document.getElementById('parent');
		wrap.removeChild(parent);
	}
	//вешаем дабл клик на строку таблицы для вызова модального окна
	function clickOnRow() {
		clearTimeout(id);
		var elems = event.target,
			parent = elems.parentElement,
			arrayForModal = [],
			p, 
			i,
			result;
			p = parent.children;
			for (i = 0; i < p.length; i++) {
				 if(i == 0) {
				 	result = p[i].innerHTML;
				 	arrayForModal.push(result);
				 } else if (i == 1) {
				 	result = p[i].innerHTML;
				 	arrayForModal.push(result);
				 } else if (i == 2) {
				 	result = p[i].innerHTML;
				 	arrayForModal.push(result);
				 } else if (i == 3) {
				 	result = p[i].innerHTML;
				 	arrayForModal.push(result);
				 }	else if (i == 4) {
				 	result = p[i].innerHTML;
				 	arrayForModal.push(result);
				 		}		 			
				 };
			createModalWindow(arrayForModal);	
	}
}
		//создаем шапку таблицы
function createHead() {
		var i,
			div,
			sure = document.getElementById('head'),
			head = document.createElement('div');

		head.classList.add('headTable');
		for (i = 0; i < 4; i++) {
			div = document.createElement('div');
			div.classList.add('headData');
			if (i == 0) {
				
				div.innerHTML = "<p>Модель самолёта</p>";
				head.appendChild(div);
			} else if ( i == 1) {
				
				div.innerHTML = '<p>Аэропорт вылета</p>';
				head.appendChild(div);
			} else if ( i == 2) {
				
				div.innerHTML = '<p>Аэропорт прибытия</p>';
				head.appendChild(div);
			} else {
				
				div.innerHTML = '<p>Номер рейса</p>';
				head.appendChild(div);
			}
		}
	sure.appendChild(head);

}