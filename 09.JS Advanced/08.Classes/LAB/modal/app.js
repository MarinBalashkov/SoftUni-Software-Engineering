class Modal{
    constructor(message){
        this.message = message;
        this.element = _initialize();
    }

    _initialize(){
        const container = e('div', e('p', this.message), button('Ok', this.onClose.bind(this)));
    }

    onClose(){
        this.element.remove();
    }

    render(parent) {
        parent.appendChild(this.element);
    }
}

document.querySelector('#createBtn').addEventListener('click', () => {
    const main = document.querySelector('main');
})

function button(label, callback) {
    const element = e('button', label);
    element.addEventListener('click', callback);
    return element;
}

function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach(e => {
      if (typeof e === string) {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }

      return result;
    })
  }