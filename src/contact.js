import { createElementWithID } from './dom.js';
import contactPhotoOne from './img/contact1.jpg';
import contactPhotoTwo from './img/contact2.jpg';
import contactPhotoThree from './img/contact3.jpg';


// heading
// contact card x3
// contact card - name, role, tele, email

function Card(name, role, tele, email, pic) {
    this.name = name ?? '';
    this.role = role ?? '';
    this.tele = tele ?? '';
    this.email = email ?? '';
    this.pic = pic ?? '';
    this.detailArray = [this.name, this.role, this.tele, this.email];

    this.domNode = () => {
        const cardDetail = document.createElement('ul');
        
        this.detailArray.forEach( (element) => {
            const node = document.createElement('li');
            node.textContent = element;
            cardDetail.appendChild(node);
        });
        
        const contactPhoto = document.createElement('img');
        contactPhoto.src = pic;
        contactPhoto.height = 100;
        // contactPhoto.width = 100;
        
        // build contact card
        const card = createElementWithID('div', `${name}-card`);
        card.className = 'ContactCard';
        card.appendChild(cardDetail);
        card.appendChild(contactPhoto);

        return card;
    };
}


const createContactPageElement = () => {
    const contactContent = createElementWithID('div', 'contact-content');

    const heading = createElementWithID('h1', 'contact-heading');
    heading.textContent = 'Contact Us';

    const cardOne = new Card('Emperor', 'Head Chef', '555-555-555', 'emperor@chef.com', contactPhotoOne);
    const cardTwo = new Card('Empress', 'General Manager', '777-777-777', 'empress@chef.com', contactPhotoTwo);
    const cardThree = new Card('Prince', 'Waiter', '333-333-333', 'prince@chef.com', contactPhotoThree);

    contactContent.appendChild(heading);
    contactContent.appendChild(cardOne.domNode());
    contactContent.appendChild(cardTwo.domNode());
    contactContent.appendChild(cardThree.domNode());


    return contactContent;
};

export default createContactPageElement();