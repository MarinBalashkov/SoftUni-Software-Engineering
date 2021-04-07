function create(words) {
   const divElement = document.getElementById('content');

   words.forEach(word => {
      let div = createElemnet('div', '');
      let par = createElemnet('p', word);
      div.appendChild(par);
      par.style.display = 'none'
      divElement.appendChild(div);  
   });
   
   divElement.addEventListener('click', (ev) => {
      if(ev.target.tagName === 'DIV' || ev.target.tagName === 'P'){
         const p = ev.target.children[0] || ev.target;
         p.style.display = p.style.display === 'block' ? 'none' : 'block';
      }
   })
   
   function createElemnet(type, content) {
      const element = document.createElement(type);
      element.textContent = content;
      return element;
   }
}