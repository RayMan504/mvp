const mainContainer = document.getElementById('js-main-container');
const loginContainer = document.getElementById('js-login-container');
const loginButton = document.getElementById('js-btn-login');
const background = document.getElementById('js-background');

const spotifyPlayer = new SpotifyPlayer({
  exchangeHost: 'http://localhost:8080',
});

const template = function (data) {
  console.log('am i hitting?');
  return `
    <div class="main-wrapper">
      <img class="now-playing__img" src="${data.item.album.images[0].url}">
      <div class="now-playing__side">
        <div class="now-playing__name">${data.item.name}</div>
        <div class="now-playing__artist">${data.item.artists[0].name}</div>
        <div class="now-playing__status">${data.is_playing ? 'Playing' : 'Paused'}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div>
        </div>
      </div>
    </div>
    <div class="background" style="background-image:url(${data.item.album.images[0].url})"></div>
  `;
};

spotifyPlayer.on('update', (response) => {
  mainContainer.innerHTML = template(response);
});

spotifyPlayer.on('login', (user) => {
  if (user === null) {
    // loginContainer.style.display = 'block';
    // mainContainer.style.display = 'none';
  } else {
    console.log('user', user);
    // loginContainer.style.display = 'none';
    // mainContainer.style.display = 'block';
  }
});

loginButton.addEventListener('click', () => {
  spotifyPlayer.login();
});

spotifyPlayer.init();
