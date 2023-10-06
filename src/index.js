import homePage from './home.js';
import { createElementWithID } from './dom.js';


const container = createElementWithID('div', 'container'); 

// construct header
const pageHeader = createElementWithID('header', 'header');
const numberOfButtons = 3;

for (let i = 1; i <= numberOfButtons; ++i)
{
    const button = createElementWithID('button', `button ${i}`);
    button.className = 'NavButton';
    button.textContent = i;
    pageHeader.appendChild(button);
    button.addEventListener('click', () => console.log('click'));
}

// construct footer
const pageFooter = createElementWithID('footer', 'footer');
pageFooter.textContent = 'footer content';

// construct page content, may need switch statement for different pages
const pageContent = createElementWithID('div', 'content');
pageContent.appendChild(homePage);


// build fullpage
container.appendChild(pageHeader);
container.appendChild(pageContent);
container.appendChild(pageFooter);

document.body.appendChild(container);
