function createSiteMap() {
	var siteMap,
	div1 = document.createElement('div'),
	div2 = document.createElement('div'),
	boss = document.getElementById('boss');
	sitemap = document.createElement('div');
	sitemap.classList.add('sitemap');
	sitemap.setAttribute('id', 'sitemap');
	div1.classList.add('sidebar');
	//div2.classList.add('sidebar');
	fillDiv1(div1);
	//fillDiv2(div2);
	sitemap.appendChild(div1);
	sitemap.appendChild(div2);
	boss.appendChild(sitemap);
	getClickOnSideBar(sitemap);
}
function fillDiv1(div1) {
 var table = document.createElement('div'),
 	sky = document.createElement('div'),
 	salary = document.createElement('div'),
 	calculate = document.createElement('div'),
 	vid = document.createElement('div');
	 	table.innerHTML = "самолёты";
	 	table.classList.add('button');
	 	table.setAttribute('id', 'table');
	 	sky.innerHTML = 'погода';
	 	sky.classList.add('button');
	 	sky.setAttribute('id', 'sky');
	 	salary.innerHTML = 'таблица с рассчетом зарплаты';
	 	salary.classList.add('button');
	 	salary.setAttribute('id', 'salary');
	 	calculate.innerHTML = 'калькулятор';
	 	calculate.classList.add('button');
	 	calculate.setAttribute('id', 'calculate');
	 	vid.classList.add('button');
	 	vid.setAttribute('id', 'video');
	 	vid.innerHTML = 'видео';
 	div1.appendChild(table);
 	div1.appendChild(sky);
 	div1.appendChild(salary);
 	div1.appendChild(calculate);
 	div1.appendChild(vid);
}
function getClickOnSideBar(sitemap) {
	sitemap.onclick = function() {
		if (event.target.innerHTML == 'погода') {
			secondRequestWeather();
		} else if (event.target.innerHTML == 'калькулятор') {
			callCalculate();
		} else if (event.target.innerHTML == 'самолёты') {
			callDisplay();
		} else if (event.target.innerHTML == 'таблица с рассчетом зарплаты') {
			callSalary();
		} else if (event.target.innerHTML == 'видео') {
			callVideo();
		}
	}
}
function fillDiv2(div2) {
	div2.classList.add('video');
	div2.innerHTML = '<iframe width="100%" height="350px";  src="https://www.youtube.com/embed/uYq7wgvVETI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}