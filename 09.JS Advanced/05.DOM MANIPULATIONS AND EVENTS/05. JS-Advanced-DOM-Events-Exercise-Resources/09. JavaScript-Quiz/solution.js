function solve() {
  const sections = document.querySelectorAll('section');
  const result = document.querySelector('#results li h1');
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let counter = 0;
  let sectionIndex = 0;

  document.getElementById('quizzie').addEventListener('click', (ev) => {
    if (ev.target.tagName === 'P') {
      const answer = ev.target.textContent;
      const correctAns = rightAnswers.shift();
      if (correctAns === answer) {
        counter++;
      }

      if (sectionIndex + 1 < sections.length) {
        sections[sectionIndex].style.display = 'none';
        sections[sectionIndex + 1].style.display = 'block';
        sections[sectionIndex + 1].className = '';

      }else{
        sections[sectionIndex].style.display = 'none';
        result.parentNode.parentNode.style.display = 'block';
        counter === 3 ? result.textContent = 'You are recognized as top JavaScript fan' : result.textContent = `You have ${counter} right answers`;
      }

      sectionIndex++;
    }
  })
}
