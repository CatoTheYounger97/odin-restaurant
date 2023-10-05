

const createElementWithID = (type='div', id='') => {
    const element = document.createElement(type);
    element.setAttribute('id', id);
    return element;
};

export {createElementWithID };