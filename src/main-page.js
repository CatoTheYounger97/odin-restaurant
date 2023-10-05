import mainImage from './main.jpg';

// header = title 
// footer = text 
// main content = headline, img, para

const createElementAndID = (elementType='div', elementId='') => {
    const element = document.createElement(elementType);
    element.setAttribute('id', elementId);
    return element;
};

const createMainPageElement = () => {
    const mainContent = createElementAndID('div', 'main-content');

    const heading = createElementAndID('h1', 'main-heading');
    heading.textContent = 'My Restaurant Page';

    const image = createElementAndID('img', 'main-image');
    image.setAttribute('src', mainImage);

    const para = createElementAndID('p', 'main-para');
    para.textContent = 'I highly recommend this restaurant. ' 
        + 'The chef is amazing and cooks many great dishes. '
        + 'I believe they come from Antarctica.';

    mainContent.appendChild(heading);
    mainContent.appendChild(image);
    mainContent.appendChild(para);

    return mainContent;
};

export default createMainPageElement();