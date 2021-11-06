function notify(message) {
  const dirElement = document.querySelector('#notification');
  dirElement.textContent = message;
  dirElement.style.display = 'block';
  dirElement.addEventListener('click', (ev) => {
  dirElement.style.display = 'none';

  })
}