// Module for helping create images and paragraphs
// Function to create text with 1 parameters.
// text content
function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}

// Function to create image with credits. Containing 3 parameters.
// Image source, credit link and credit text.
function createImage(src, creditLink, creditText) {
    const image = new Image();
    image.src = src;

    const creditContainer = document.createElement("div");
    creditContainer.setAttribute("class", "credit")

    const credit = document.createElement("a");
    credit.href = creditLink;
    credit.textContent = creditText;

    creditContainer.appendChild(credit);

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "img-container");

    imageContainer.appendChild(image);
    imageContainer.appendChild(creditContainer);

    return imageContainer;
}

// Create icon from https://fonts.google.com/icons
function createIcon(name) {
    const icon = document.createElement("span");
    icon.setAttribute("class", "material-symbols-rounded");
    icon.textContent = name;

    return icon;
}

// Create add button for task and projects
function createButtonWithIcon(icon, text) {
    const buttonIcon = createIcon(icon);
    const buttonText = createText(text);
    
    const button = document.createElement("button");
    button.setAttribute("class", "btn-add");

    button.appendChild(buttonIcon);
    button.appendChild(buttonText);

    return button;
}

// Create form element with labels
const createFormWithLabel = {
    createForm(id, element) {
        const form = document.createElement(element);
        form.setAttribute("id", id);

        return form;
    },

    createLabel(id, text) {
        const titleLabel = document.createElement("label");
        titleLabel.textContent = text;
        titleLabel.setAttribute("for", id);

        return titleLabel;
    },
};

function createDropDownOption(text) {
    const option = document.createElement("option");
    option.setAttribute("value", text);
    option.textContent = text;

    return option;
}

export {
    createText,
    createImage,
    createIcon,
    createButtonWithIcon,
    createFormWithLabel,
    createDropDownOption,
};