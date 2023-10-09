import homePage from './home.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import { createElementWithID } from './dom.js';

function pageSwitch(button)
{
    const content = document.querySelector('#content');
    content.removeChild(content.firstChild);

    switch(button.id)
    {
        case 'button 1': content.appendChild(homePage); break;
        case 'button 2': content.appendChild(menuPage); break;
        case 'button 3': content.appendChild(contactPage); break;
    }
}

// construct header
const pageHeader = createElementWithID('header', 'header');
const numberOfButtons = 3;

for (let i = 1; i <= numberOfButtons; ++i)
{
    const button = createElementWithID('button', `button ${i}`);
    button.className = 'NavButton';
    button.textContent = i;
    pageHeader.appendChild(button);
    button.addEventListener('click', (button) => pageSwitch(button.target));
}

// construct footer
const pageFooter = createElementWithID('footer', 'footer');
pageFooter.textContent = 'Restaurant Page for The Odin Project';

// construct page content
const pageContent = createElementWithID('div', 'content');
pageContent.appendChild(homePage);


// build fullpage
const container = createElementWithID('div', 'container'); 

container.appendChild(pageHeader);
container.appendChild(pageContent);
container.appendChild(pageFooter);

document.body.appendChild(container);
