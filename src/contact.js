import { createElementWithID } from './dom.js';

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
        cardDetail.appendChild(contactPhoto);
        
        // build contact card
        const card = createElementWithID('div', `${name}-card`);
        card.appendChild(cardDetail);
        return card;
    };
}


const createContactPageElement = () => {
    const contactContent = createElementWithID('div', 'contact-content');

    const heading = createElementWithID('h1', 'contact-heading');
    heading.textContent = 'Contact Us';

    const cardOne = new Card('Emperor', 'head chef', '5555', 'emperor@chef.com');
    const cardTwo = new Card('Empress', 'General Manager', '7777', 'empress@chef.com');

    contactContent.appendChild(heading);
    contactContent.appendChild(cardOne.domNode());
    contactContent.appendChild(cardTwo.domNode());

    return contactContent;
};

export default createContactPageElement();