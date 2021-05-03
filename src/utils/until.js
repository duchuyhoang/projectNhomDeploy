export const parentUntil = (element, tagName, step = 1) => {
    let currentStep = step;
    let currentElement = element; 
    while (currentElement.parentNode !== null) {
        // console.log(currentElement.parentNode);
        if (currentElement.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
           currentStep--;
        }
        currentElement = currentElement.parentNode;
        if (currentStep === 0)
            return currentElement
    }
}


export const siblingUntil = (element, tagName, step = 1) => {
    let currentStep = step;
    let currentElement = element;
    while (currentElement.nextSibling !== null) {
        if (currentElement.nextSibling.tagName.toLowerCase() === tagName.toLowerCase()) {
         currentStep--
        }
        currentElement = currentElement.nextSibling;
        if (currentStep === 0)
            return currentElement
    }
}