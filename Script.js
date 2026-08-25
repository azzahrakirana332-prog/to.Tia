const playBtn = document.getElementById('play-btn');
const overlayStart = document.getElementById('overlay-start');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('myVideo');
const mainContent = document.getElementById('main-content');

playBtn.addEventListener('click', () => {
  overlayStart.classList.add('hidden');
  videoContainer.classList.remove('hidden');
  video.muted = false;
  video.play();
});

video.addEventListener('ended', () => {
  videoContainer.classList.add('hidden');
  mainContent.classList.remove('hidden');
});
