const content = document.getElementById("content");

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

    //Option 1
    const option1Div = document.createElement('div'); 
    option1Div.className = 'menu-card';

    const title1Element = document.createElement("p");
    title1Element.textContent = "Peperoni pizza";
    title1Element.style.fontSize = "35px";
    option1Div.appendChild(title1Element);

    const ingredients1Element = document.createElement("p");
    ingredients1Element.textContent = "Tomato sauce, Mozarella, peperoni";
    option1Div.appendChild(ingredients1Element);

    menuDiv.appendChild(option1Div);

    //Option 2
    const option2Div = document.createElement('div'); 
    option2Div.className = 'menu-card';
    
    const title2Element = document.createElement("p");
    title2Element.textContent = "Pomodoro pizza";
    title2Element.style.fontSize = "35px";
    option2Div.appendChild(title2Element);
    
    const ingredients2Element = document.createElement("p");
    ingredients2Element.textContent = "Tomato sauce, Mozarella, Tomato, Onion";
    option2Div.appendChild(ingredients2Element);
    
    menuDiv.appendChild(option2Div);

    //Option 3
    const option3Div = document.createElement('div'); 
    option3Div.className = 'menu-card';
    
    const title3Element = document.createElement("p");
    title3Element.textContent = "Quattro formaggi pizza";
    title3Element.style.fontSize = "35px";
    option3Div.appendChild(title3Element);
    
    const ingredients3Element = document.createElement("p");
    ingredients3Element.textContent = "Tomato sauce, Mozarella, gorgonzola, Parmigiano Reggiano, and goat cheese";
    option3Div.appendChild(ingredients3Element);
    
    menuDiv.appendChild(option3Div);    

    content.appendChild(menuDiv);

    //Option 4
    const option4Div = document.createElement('div'); 
    option4Div.className = 'menu-card';
    
    const title4Element = document.createElement("p");
    title4Element.textContent = "Prosciuto e rucola pizza";
    title4Element.style.fontSize = "35px";
    option4Div.appendChild(title4Element);
    
    const ingredients4Element = document.createElement("p");
    ingredients4Element.textContent = "Pomodoro italiano, mozzarella fior di latte, colchón di rucola, prosciutto, bocconcino, pomodorini asados";
    option4Div.appendChild(ingredients4Element);
    
    menuDiv.appendChild(option4Div);    

    content.appendChild(menuDiv);    

}

export { getMenu };