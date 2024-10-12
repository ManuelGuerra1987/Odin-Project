function createInfoDiv(cityName, tempFahrenheit, tempCelsius, description, humidity){

    const infoDiv = document.querySelector("#weather-info-div");
    infoDiv.innerHTML = "";
    infoDiv.style.backgroundColor = '#2f93d6';
    infoDiv.style.border = '1px solid transparent';
    infoDiv.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
  
    const titleElement = document.createElement("p");
    titleElement.style.fontSize = "24px"; 
    titleElement.textContent = `${cityName}`;
  
    const tempCelsiusParagraph = document.createElement("p");
    tempCelsiusParagraph.textContent = `${tempCelsius} °C`;
  
    const humidityParagraph = document.createElement("p");
    humidityParagraph.textContent = `Humidity: ${humidity} %`;
  
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = `${description}`;
  
    infoDiv.appendChild(titleElement);
    infoDiv.appendChild(tempCelsiusParagraph);
    infoDiv.appendChild(humidityParagraph);
    infoDiv.appendChild(descriptionParagraph);
  }

  
  function createErrorDiv(){

    const infoDiv = document.querySelector("#weather-info-div");
    infoDiv.innerHTML = "";
    infoDiv.style.backgroundColor = '#2f93d6';
    infoDiv.style.border = '1px solid transparent';
    infoDiv.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
  
    const titleElement = document.createElement("p");
    titleElement.style.fontSize = "24px"; 
    titleElement.textContent = "City not found";

    infoDiv.appendChild(titleElement);

  }
  
  async function getWeatherData(city) {

    try{

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2MT74KPWF3DZQHL8YFCSWAMD6`, {mode: 'cors'});

        if (response.ok === false) {
            createErrorDiv();
            return;
        }
        const data = await response.json();
        
        const cityName = data.address;
        const tempFahrenheit = parseFloat(data.currentConditions.temp);
        const tempCelsius = (tempFahrenheit  - 32) / 1.8;
        const tempCelsiusFormatted = tempCelsius.toFixed(2);
        const humidity = data.currentConditions.humidity;
        const description = data.description;
    
        createInfoDiv(cityName, tempFahrenheit, tempCelsiusFormatted, description, humidity);

    } catch (error){

        createErrorDiv();
    }
  }
  

  document.getElementById('submit-button').addEventListener('click', () => {
  
    const city = document.querySelector("#form-city").value;

    getWeatherData(city);
  
  });