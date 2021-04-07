function extractText() {
    const elements = [...document.getElementsByTagName('li')];
    const elementText = elements.map(x => x.textContent)

    document.getElementById('result').value = elementText.join('\n')
}