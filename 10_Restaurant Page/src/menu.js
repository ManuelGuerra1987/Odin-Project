const content = document.getElementById("content");

// Factory function to create menu items
function createMenuItem(titleText, ingredientsText) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'menu-card';

    const titleElement = document.createElement("p");
    titleElement.textContent = titleText;
    titleElement.style.fontSize = "35px";
    optionDiv.appendChild(titleElement);

    const ingredientsElement = document.createElement("p");
    ingredientsElement.textContent = ingredientsText;
    optionDiv.appendChild(ingredientsElement);

    return optionDiv;
}

function getMenu(){

    // Title
    const title = document.createElement("h1");

    title.textContent = "Menu";
    title.style.fontSize = "35px";
    title.style.marginBottom = "20px";
        
    content.appendChild(title);

    //Menu container
    const menuDiv = document.createElement('div'); 
    menuDiv.className = 'menu-container'; 

    // Use factory to create menu items
    const menuItems = [
        { title: "Peperoni pizza", ingredients: "Tomato sauce, Mozarella, Peperoni" },
        { title: "Pomodoro pizza", ingredients: "Tomato sauce, Mozarella, Tomato, Onion" },
        { title: "Quattro formaggi pizza", ingredients: "Tomato sauce, Mozarella, Gorgonzola, Parmigiano Reggiano, Goat cheese" },
        { title: "Prosciuto e rucola pizza", ingredients: "Pomodoro italiano, Mozzarella fior di latte, Rucola, Prosciutto, Bocconcino, Pomodorini asados" }
    ];

    menuItems.forEach(item => {
        const menuItem = createMenuItem(item.title, item.ingredients);
        menuDiv.appendChild(menuItem);
    });

    content.appendChild(menuDiv);   

}

export { getMenu };