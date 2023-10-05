import homePage from './home.js';
import { createElementWithID } from './dom.js';


const pageContent = createElementWithID('div', 'content');

//construct page
pageContent.appendChild(homePage);
document.body.appendChild(pageContent);
