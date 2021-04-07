import { html } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';


export function cardTemplate(data) {
   return html `
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${onClick} class="detailsBtn">Details</button>
        <div class="details" id=${data.id}>
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>`;
}


function onClick(event) {
    const element = event.target.parentNode;
    const currentStyle = element.querySelector('.details').style.display;
    if (currentStyle === 'block') {
        element.querySelector('.details').style.display = 'none';
    } else {
        element.querySelector('.details').style.display = 'block';
    }
}

const cardTemplateSecondWay = (data) => html `
 <div class="contact card">
     <div>
         <i class="far fa-user-circle gravatar"></i>
     </div>
     <div class="info">
         <h2>Name: ${data.name}</h2>
         <button class="detailsBtn">Details</button>
         <div class="details" id=${data.id} style=${styleMap({display: data.isVisible ? 'block' : 'none'})}>
             <p>Phone number: ${data.phoneNumber}</p>
             <p>Email: ${data.email}</p>
         </div>
     </div>
 </div>`;
 

 const messageLink = (isVisible) => isVisible ? html`<a href="javascript:void(0)">Send Message</a>` : '';

 export default cardTemplateSecondWay;
 
