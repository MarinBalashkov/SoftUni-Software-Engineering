function solve() {
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const createBTN = document.querySelector('.create');

   const postsSection = document.querySelector('main section');
   const archiveSection = document.querySelector('.archive-section ol');


   createBTN.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (author.value == '' || title.value == '' || category.value == '' || content.value == '') {
         return;
      }


      const titleElement = e('h1', {}, title.value);
      // const divButttons = document.createElement('div');
      // divButttons.className = 'buttons';
      const article = e('article', {}, 
                           titleElement, 
                           e('p', {}, 'Category:', 
                                 e('strong', {}, category.value)
                           ), 
                           e('p', {}, 'Creator:', 
                                 e('strong', {}, author.value)
                           ), 
                           e('p', {}, content.value), 
                           e('div', {className: 'buttons'}, 
                                 e('button', {className: 'btn delete', onClick: onDelete}, 'Delete'), 
                                 e('button', {className: 'btn archive', onClick: onArchive}, 'Archive')
                           ), 
                       );

      postsSection.appendChild(article);

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';


      function onDelete(ev) {
         article.remove();
      }

      function onArchive(ev) {
         const liElementArchive = e('li', {}, titleElement.textContent);
         archiveSection.appendChild(liElementArchive)
         Array.from(archiveSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(x => archiveSection.appendChild(x));
         article.remove();
      }
   });

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
            result.textContent = e;
         } else {
            result.appendChild(e);
         }
      });

      return result;
   }

}
