function callDisplay() {
	removeSure();


	createDisplay(away);
} 


	function createDisplay(away) {

		var sure = document.createElement('div'),
		wrap = document.createElement('div'),
		head = document.createElement('div'),
		parent = document.createElement('div');


		head.setAttribute('id', 'head');
		wrap.setAttribute('id', 'wrap');
		wrap.classList.add('wrap');
		parent.setAttribute('id', 'parent');
		parent.setAttribute('scroll', 'yes');


		sure.classList.add('sure');
		sure.setAttribute('id', 'sure');
		sure.appendChild(head);
		wrap.appendChild(parent);
		sure.appendChild(wrap);
		away.appendChild(sure);
		

		showTable();
	}