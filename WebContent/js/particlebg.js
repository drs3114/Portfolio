/**
 * This is the source JavaScript file which uses the particleground js to create
 * the animated background.
 */

document.addEventListener('DOMContentLoaded', function() {
	particleground(document.getElementById('particlesBody'), {
		dotColor : '#5cbdaa',
		lineColor : '#5cbdaa'
	});
	var intro = document.getElementById('intro');
	intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);