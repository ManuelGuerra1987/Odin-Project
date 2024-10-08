import pizzaSrc from './pizza.png';

const content = document.getElementById("content");

function getHome(){

    // Title
    const title = document.createElement("h1");

    title.textContent = "Nacho's pizza";
    title.style.fontSize = "45px";
    title.style.marginBottom = "20px";
    
    content.appendChild(title);

    // First paragraph
    const firstParagraph = document.createElement("p");

    firstParagraph.textContent = "Welcome Nachos's Pizza. Best pizza in your country. Made with passion since 1908.";
    firstParagraph.style.width = "40vw";
    firstParagraph.style.backgroundColor = "black";
    firstParagraph.style.padding = "15px";
    firstParagraph.style.border = "gold 1px solid";
    firstParagraph.style.borderRadius = "8px";
    firstParagraph.style.fontSize = "20px";
    firstParagraph.style.marginBottom = "20px";

    content.appendChild(firstParagraph);

    //Image
    const pizzaImage = document.createElement("img");

    pizzaImage.src = pizzaSrc;
    pizzaImage.alt = "Chef";

    content.appendChild(pizzaImage);

}

export { getHome };