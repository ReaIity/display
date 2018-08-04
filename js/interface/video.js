function callVideo() {
	removeSure();

	getVideo();
}

function getVideo() {
	var sure = document.createElement('div'),
	video = document.createElement('div'),
	away = document.getElementById('away');

	sure.classList.add('sure');
	sure.setAttribute('id', 'sure');
	away.appendChild(sure);

	video.classList.add('video');
	video.innerHTML = '<iframe width="100%" height="100%";  src="https://www.youtube.com/embed/uYq7wgvVETI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	sure.appendChild(video);
}