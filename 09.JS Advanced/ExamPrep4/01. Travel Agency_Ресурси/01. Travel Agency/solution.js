window.addEventListener('load', solution);

function solution() {
  const block = document.getElementById('block');

  const fullName = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const code = document.getElementById('code');
  const submitBTN = document.getElementById('submitBTN');

  const infoPreviewUl = document.getElementById('infoPreview');
  const editBTN = document.getElementById('editBTN');
  const continueBTN = document.getElementById('continueBTN');

  const data = {};

  submitBTN.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (fullName.value == '' || email.value == '') {
      return;
    }

    data.fullName = fullName.value;
    data.email = email.value;
    data.phone = phone.value;
    data.address = address.value;
    data.code = code.value;

    data.fullName ? infoPreviewUl.appendChild(e('li', {}, `Full Name: ${fullName.value}`)) : '';
    data.email ? infoPreviewUl.appendChild(e('li', {}, `Email: ${email.value}`)) : '';
    data.phone ? infoPreviewUl.appendChild(e('li', {}, `Phone Number: ${phone.value}`)) : '';
    data.address ? infoPreviewUl.appendChild(e('li', {}, `Address: ${address.value}`)) : '';
    data.code ? infoPreviewUl.appendChild(e('li', {}, `Postal Code: ${code.value}`)) : '';

    submitBTN.disabled = true;
    editBTN.disabled = false;
    continueBTN.disabled = false;

    fullName.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    code.value = '';
  });

  editBTN.addEventListener('click', (ev) => {
    Array.from(infoPreviewUl.children).forEach(x => x.remove());

    submitBTN.disabled = false;
    editBTN.disabled = true;
    continueBTN.disabled = true;

    fullName.value = data.fullName;
    email.value = data.email;
    phone.value = data.phone;
    address.value = data.address;
    code.value = data.code;

  });

  continueBTN.addEventListener('click', (ev) => {
    block.innerHTML = '';
    block.appendChild(e('h3', {}, 'Thank you for your reservation!'));
  })

  function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == 'on') {
        result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
        result[attr] = value;
      }
    }

    content.forEach(e => {
      if (typeof e == 'string' || typeof e == 'number') {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}
