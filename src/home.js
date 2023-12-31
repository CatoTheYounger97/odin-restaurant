import homeImage from './img/home.jpg';
import { createElementWithID } from './dom.js';

// header = title 
// footer = text 
// home content = headline, img, para

const createHomePageElement = () => {
    const homeContent = createElementWithID('div', 'home-content');

    const heading = createElementWithID('h1', 'home-heading');
    heading.textContent = 'Emperor Family Restaurant';

    const image = createElementWithID('img', 'home-image');
    image.setAttribute('src', homeImage);

    const para = createElementWithID('p', 'home-para');
    para.textContent = 'I highly recommend this restaurant. ' 
        + 'The chef is amazing and cooks many great dishes. '
        + 'I believe they come from Antarctica.';

    homeContent.appendChild(heading);
    homeContent.appendChild(image);
    homeContent.appendChild(para);

    return homeContent;
};

export default createHomePageElement();