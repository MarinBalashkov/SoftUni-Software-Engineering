function solve() {
  const textareas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const tbody = document.querySelector('tbody');
  buttons[0].addEventListener('click', createTable);
  buttons[1].addEventListener('click', createReport);


  function createTable(ev) {
    const input = JSON.parse(textareas[0].value);

    function createCellElement(type, content, attributes) {
      const tdelement = document.createElement('td');
      const element = document.createElement(type);
      if (attributes) {
        element.setAttribute(attributes[0], attributes[1]);
      }
      element.textContent = content;
      tdelement.appendChild(element);
      return tdelement;
    }

    input.forEach(inputFurniture => {
      const trElement = document.createElement('tr');

      const imgElement = createCellElement('img', '', ['src', inputFurniture.img]);
      const checkboxElement = createCellElement('input', '', ['type', 'checkbox']);
      const nameElement = createCellElement('p', inputFurniture.name);
      const priceElement = createCellElement('p', inputFurniture.price);
      const decFactorElement = createCellElement('p', inputFurniture.decFactor);

      trElement.appendChild(imgElement);
      trElement.appendChild(nameElement);
      trElement.appendChild(priceElement);
      trElement.appendChild(decFactorElement);
      trElement.appendChild(checkboxElement);

      tbody.appendChild(trElement);
    });
  }

  function createReport(ev) {
    const furnitures = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(x => x.parentNode.parentNode);

    const result = furnitures.reduce((result, row) => {
      const cells = row.children;

      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      const price = Number(cells[2].children[0].textContent);
      result.totalPrice += price;

      const decFactor = Number(cells[3].children[0].textContent);
      result.decFactorSum += decFactor;

      return result;
    }, {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0
    })

    textareas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice}\nAverage decoration factor: ${result.decFactorSum / furnitures.length}`
  }
}


function secondSolve() {
  const [input, output] = [...document.querySelectorAll('textarea')];
  const table = document.querySelector('table.table tbpdy');
  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];

  const furniture = [];;

  generateBtn.addEventListener('click', () => {
    const furnitureArray = JSON.parse(input.value.trim());
    table.innerHTML = '';
    furnitureArray.forEach(f => {
      const item = createRow(f);
      furniture.push(item);
      table.appendChild(item.element)
    })
  });

  buyBtn.addEventListener('click', () => {
    furniture.forEach(f => console.log(f.getValue().name, f.isChecked()));
  })


  const td = e.bind(null, 'td');



  function createRow(data) {
    const img = e('img');
    img.src = data.img;

    const check = e('input');
    check.type = 'checkbox';

    const element = e('tr',
      td(img),
      td(e('p', data.name)),
      td(e('p', data.price)),
      td(e('p', data.decFactor)),
      td(check)
    );

    return {
      element,
      isChecked,
      getValues
    }

    function isChecked() {
      return check.checked;
    }

    function getValue() {
      return data;
    }
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
}

