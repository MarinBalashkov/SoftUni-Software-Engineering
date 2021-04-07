function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   //const trElements = document.querySelectorAll('tbody tr');

   const body = document.querySelector('tbody');

   let convertRow = function (rows, searchString) {
      return Array.from(rows).map(row => {
         if (row.textContent.toLowerCase().includes(searchString) && searchString !== '') {
            row.classList.add('select');
         }else{
            row.setAttribute('class', 'select')
         }
      })
   }

   function onClick() {
      const searchString = document.querySelector('#searchField').value.toLowerCase();

      // for (let i = 0; i < trElements.length; i++) {
      //    const element = trElements[i];
      //    let isMatch = false;
      //    for (let y = 0; y < element.children.length; y++) {
      //       if (element.children[y].textContent.includes(searchString)) {
      //          isMatch = true;
      //       }
      //    }

      //    if (isMatch && searchString) {
      //       element.classList.add('select');
      //    } else {
      //       element.classList.remove('select');
      //    }
      // }

      // document.querySelector('#searchField').value = '';





      // for (const row of trElements) {
      //    if (row.textContent.toLowerCase().includes(searchString)) {
      //       row.setAttribute('class', 'select');
      //    }else{
      //       row.removeAttribute('class')
      //    }
      // }



      let rows = body.children;
      body.innerHTML = convertRow(rows, searchString);

   }
}