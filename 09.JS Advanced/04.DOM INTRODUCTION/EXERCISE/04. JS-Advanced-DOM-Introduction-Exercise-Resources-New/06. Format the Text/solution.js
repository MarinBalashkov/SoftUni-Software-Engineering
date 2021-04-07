function solve() {
  const text = document.querySelector('#input').value;
  const splitText = text.split('.').filter(x => x).map(x => x.trim() + '.');

  const paragraphs = [];
  while (splitText.length != 0) {
    const paragraph = splitText.splice(0, 3).join(' ');
    paragraphs.push(`<p>${paragraph}</p>`);
  }

  document.querySelector('#output').innerHTML = paragraphs.join();

}