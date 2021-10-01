function search() {
   const input = document.querySelector('#searchText').value;
   const elements = document.querySelectorAll('#towns li');
   let counter = 0;
   // for (let i = 0; i < elements.length; i++) {
   //    const element = elements[i].textContent;
   //    if (element.includes(input)) {
   //       elements[i].setAttribute("style", "font-weight: bold; text-decoration: underline;");
   //       //elements[i].style.cssText = "style", "font-weight: bold; text-decoration: underline;";

   //       counter++;
   //    }
      
   // }
   for (const li of elements) {
      if ((li.textContent).toLowerCase().includes(input.toLowerCase()) && input !== '') {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         counter++;
      }else{
         li.style.fontWeigt = '';
         li.style.textDecoration = '';
      }
   }




   document.querySelector('#result').textContent = `${counter} matches found`;
}
