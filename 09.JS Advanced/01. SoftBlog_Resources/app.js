function solve() {
   const title = document.getElementById('title');
   const creator = document.querySelector('#creator');
   const category = document.querySelector('#category');
   const content = document.getElementById('content');
   const createBtn = document.querySelector('.create');
   const arhivSection = document.querySelector('.archive-section>ol');
   const postSection = document.querySelector('main>section');

   function createElement(type, text, attributes = []) {
      let element = document.createElement(type);
      if (text) {
         element.textContent = text;
      }

      attributes
         .map(attr => attr.split('='))
         .forEach(([name, value]) => {
            element.setAttribute(name, value);
         })

      return element;
   }

   function addArticle(ev) {
      ev.preventDefault();
      //console.log(creator.value, category.value);

      const article = createElement('article');

      const h1 = createElement('h1', title.value);
      article.appendChild(h1);

      const strong1 = createElement('strong', category.value);
      const strong2 = createElement('strong', creator.value);

      const p1 = createElement('p', 'Category:');
      p1.appendChild(strong1);
      article.appendChild(p1);

      const p2 = createElement('p', 'Creator');
      p2.appendChild(strong2);
      article.appendChild(p2);

      const pContent = createElement('p', content.value);
      article.appendChild(pContent);

      const div = createElement('div');

      const delBtn = createElement('button', 'Delete');
      delBtn.classList.add('btn');
      delBtn.classList.add('delete');

      const archiveBtn = createElement('button', 'Archive');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');

      div.appendChild(delBtn);
      div.appendChild(archiveBtn)
      article.appendChild(div);

      postSection.appendChild(article);
   }

   document.querySelector('main').addEventListener('click', (ev) => {
      if (ev.target.tagName === 'BUTTON') {
         ev.preventDefault();
         if (ev.target.classList.contain('create')) {

            addArticle(ev);
         }
      }
   })
}
