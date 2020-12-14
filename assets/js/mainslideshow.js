var switcher = document.getElementById('slideshow_switcher');
switcher.onclick = function () {
  if (switcher.getAttribute('status') == 'play') {
    UIkit.slideshow('#mainslideshow').stopAutoplay();
    switcher.setAttribute('status', 'stop');
    changeStatus('play');
  } else {
    UIkit.slideshow('#mainslideshow').startAutoplay();
    switcher.setAttribute('status', 'play');
    changeStatus('pause');
  }
};

function changeStatus(icon) {
  let buttonIcon = switcher.querySelector('svg');
  buttonIcon.dataset.icon = icon + '-circle';
}
