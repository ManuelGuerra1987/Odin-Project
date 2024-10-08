const content = document.getElementById("content");

function getAbout(){

        // Title
        const title = document.createElement("h1");

        title.textContent = "Contact";
        title.style.fontSize = "35px";
        title.style.marginBottom = "20px";
            
        content.appendChild(title);

        // First paragraph
        const firstParagraph = document.createElement("p");

        firstParagraph.innerHTML = "Tel 123 456 789<br>Hollywood Boulevard 42, Los Angeles, USA";
        firstParagraph.style.width = "40vw";
        firstParagraph.style.backgroundColor = "black";
        firstParagraph.style.padding = "15px";
        firstParagraph.style.border = "gold 1px solid";
        firstParagraph.style.borderRadius = "8px";
        firstParagraph.style.fontSize = "20px";
        firstParagraph.style.marginBottom = "20px";

        content.appendChild(firstParagraph);

}

export { getAbout };