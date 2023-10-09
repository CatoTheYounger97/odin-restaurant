import { createElementWithID } from './dom.js';

const createMenuPageElement = () => {
    const menuContent = createElementWithID('div', 'menu-content');

    const heading = createElementWithID('h1', 'menu-heading');
    heading.textContent = 'Menu';

    menuContent.appendChild(heading);

    return menuContent;
};

export default createMenuPageElement();