export function createElementDOM(elementType, elementClass = 'default', elementId = '') {
    const currentElement = document.createElement(elementType);
    elementClass.split(' ').forEach(className => currentElement.classList.add(className));
    currentElement.setAttribute('id', elementId);
    return currentElement;
};