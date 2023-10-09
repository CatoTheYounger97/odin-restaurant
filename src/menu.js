import { createElementWithID } from './dom.js';
import contactPhotoOne from './img/contact1.jpg';
import contactPhotoTwo from './img/contact2.jpg';
import contactPhotoThree from './img/contact3.jpg';


// heading
// sub headings
// menu card
// menu card - name, description, cost, image

function Card(name, description, cost, image) {
    this.name = name ?? '';
    this.description = description ?? '';
    this.cost = cost ?? '';
    this.image = image ?? '';

    this.domNode = () => {
        
        const title = document.createElement('h2');
        const para = document.createElement('p');
        const titleCost  = document.createElement('h2');
        title.textContent = this.name;
        para.textContent = this.description;
        titleCost.textContent = this.cost;
        
        const contactPhoto = document.createElement('img');
        contactPhoto.src = image;
        contactPhoto.height = 100;
        
        // build contact card
        const card = createElementWithID('div', `${name}-card`);
        card.className = 'MenuCard';
        card.appendChild(title);
        card.appendChild(para);
        card.appendChild(titleCost);
        card.appendChild(contactPhoto);

        return card;
    };
}


const createMenuPageElement = () => {
    const menuContent = createElementWithID('div', 'menu-content');

    const heading = createElementWithID('h1', 'menu-heading');
    heading.textContent = 'Menu';
    const drinkHeading = createElementWithID('h2', 'menu-drink');
    drinkHeading.textContent = 'Drinks';
    const foodHeading = createElementWithID('h2', 'menu-food');
    foodHeading.textContent = 'Food';
    const desertHeading = createElementWithID('h2', 'menu-desert');
    desertHeading.textContent = 'Desert';

    const cardOne = new Card('Melted Snow', 'Description', '£5');
    const cardTwo = new Card('Frozen Fish', 'Description', '£15');
    const cardThree = new Card('Snow Balls', 'Description', '£7');

    menuContent.appendChild(heading);
    menuContent.appendChild(drinkHeading);
    menuContent.appendChild(cardOne.domNode());
    menuContent.appendChild(foodHeading);
    menuContent.appendChild(cardTwo.domNode());
    menuContent.appendChild(desertHeading);
    menuContent.appendChild(cardThree.domNode());


    return menuContent;
};

export default createMenuPageElement();