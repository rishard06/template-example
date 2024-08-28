import "./style.css";
import { Menu } from "./menu";
import { Home } from "./home";
import { About } from "./about";
import adoboImg from "./adobo.jpg";
import calderetaImg from "./caldereta.jpg";
import karekareImg from "./kare-kare.jpg";
import lechonImg from "./lechon.jpg";
import lumpiaImg from "./lumpia.jpg";
import sinigangImg from "./sinigang.jpg";


Home();

document.querySelector('.home').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = "";
    Home();
});

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = "";
    Menu("Adobo", adoboImg).create();
    Menu("Caldereta", calderetaImg).create();
    Menu("Kare-kare", karekareImg).create();
    Menu("Crispy Lechon", lechonImg).create();
    Menu("Lumpia", lumpiaImg).create();
    Menu("Sinigang", sinigangImg).create();    
});

document.querySelector('.about').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = "";
    About();
});

// const tabButtons = document.querySelectorAll('button');
// tabButtons.forEach((tab, index) => {
//    tab.addEventListener('click', ()=> {
//         tabButtons.forEach(tab=> {tab.classList.remove('active')});
//         tab.classList.add('active');
//    })
// });