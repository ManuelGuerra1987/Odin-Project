import "./styles.css";
import { getHome } from "./home";
import { getMenu } from "./menu";
import { getAbout } from "./about";

getHome();

//Home button
const homeButton = document.querySelector("#homeBtn");

homeButton.addEventListener('click', function(){

    const content = document.getElementById("content");
    content.innerHTML = "";

    getHome();

});

//Menu button
const menuButton = document.querySelector("#menuBtn");

menuButton.addEventListener('click', function(){

    const content = document.getElementById("content");
    content.innerHTML = "";

    getMenu();

});

//About button
const aboutButton = document.querySelector("#aboutBtn");

aboutButton.addEventListener('click', function(){

    const content = document.getElementById("content");
    content.innerHTML = "";

    getAbout();

});