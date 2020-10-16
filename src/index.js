import '@scss/main.scss';

const $body = document.querySelector('body');

window.addEventListener('load', function() {
  $body.classList.remove('loading');
});
