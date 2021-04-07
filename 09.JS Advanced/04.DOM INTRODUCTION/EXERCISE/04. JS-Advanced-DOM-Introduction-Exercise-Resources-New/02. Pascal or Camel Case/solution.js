function solve() {

  function transformString(text, namingConvention) {
    if (namingConvention === 'Camel Case') {
      return text.split(' ').filter(x => x).map((x, i) => {
        if (i === 0) {
          return x.toLowerCase();
        } else {
          return `${x[0].toUpperCase()}${x.slice(1)}`;
        }
      }).join('');

    } else if (namingConvention === 'Pascal Case') {
      let result = text.split(' ').filter(x => x).map(x => `${x[0].toUpperCase()}${x.slice(1)}`).join('');
      return result;
    } else {
      return 'Error!';
    }
  }

  const text = document.querySelector('#text').value;
  const namingConvention = document.querySelector('#naming-convention').value;
  document.querySelector('#result').textContent = transformString(text, namingConvention);
}