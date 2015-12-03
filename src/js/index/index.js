let btnFontToggle = document.getElementById('font-toggle');

btnFontToggle.addEventListener('click', (evt) => {
  document.body.classList.toggle('font-off');
});