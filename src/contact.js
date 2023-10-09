import { createElementWithID } from './dom.js';

// heading
// contact card x3
// contact card - name, role, tele, email

const createContactCard = () => {
    const cardContainer = createElementWithID('div', 'contact-container');
    const numberOfCards = 3;

    for (let i = 1; i <= numberOfCards; ++i)
    {
        const card = createElementWithID('div', `contact ${i}`);
        card.className = 'ContactCard';
        card.textContent = `Contact Card ${i}`;

        cardContainer.appendChild(card);
    }

    return cardContainer;

};

const createContactPageElement = () => {
    const contactContent = createElementWithID('div', 'contact-content');

    const heading = createElementWithID('h1', 'contact-heading');
    heading.textContent = 'Contact Us';

    const contactCards = createContactCard();

    contactContent.appendChild(heading);
    contactContent.appendChild(contactCards);

    return contactContent;
};

export default createContactPageElement();