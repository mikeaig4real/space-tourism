// variables
const menu = document.querySelector('.menu img');
const navUl = document.querySelector('.nav-bar ul');
const conDom = document.querySelectorAll('.container');
const desDom = document.querySelector('.slide-con');
const desUl = document.querySelector('.info nav ul');
const desBig = document.querySelector('body > div > div.container.destination > main > section.info > h1');
const desText = document.querySelector("body > div > div.container.destination > main > section.info > div.para > p");
const desDis = document.querySelector("body > div > div.container.destination > main > section.info > div.pos > div.dis > h4");
const desTime = document.querySelector("body > div > div.container.destination > main > section.info > div.pos > div.time > h4");
let crewId = 0;
const crewBig = document.querySelector('.crew-con');
const crewRole = document.querySelector("body > div > div.container.crew > main > section.crew-info > h5");
const crewBio = document.querySelector("body > div > div.container.crew > main > section.crew-info > p");
const crewName = document.querySelector("body > div > div.container.crew > main > section.crew-info > h4");







//data
class Data {
    static async getData() {
        const data = await fetch('data.json');
        const dataJson = await data.json();
        UI.allUI(dataJson);
    }
}






// UI
class UI {
    static allUI(data) {
        const { destinations, crew, technology } = data;
        console.log(crew);
        menu.addEventListener('click', (e) => {
            const oSrc = e.target.src;
            let nSrc = oSrc.slice(0, oSrc.indexOf('/icon') + 5) + '-close.svg';
            if (oSrc.includes('hamburger')) {
                e.target.src = nSrc;
            } else {
                e.target.src = oSrc.slice(0, oSrc.indexOf('/icon') + 5) + '-hamburger.svg';
            }
            navUl.classList.toggle('show');
        });

        navUl.addEventListener('click', (e) => {
            let index;
            let item = e.target.innerText.slice(2,);
            switch (item) {
                case 'Home':
                    index = 0;
                    break;
                case 'Destination':
                    index = 1;
                    break;
                case 'Crew':
                    index = 2;
                    break;
                case 'Technology':
                    index = 3;
                    break;
                default:
                    break;
            }
            conDom.forEach((con) => {
                con.style.transform = `translateX(-${index}00%)`;
            });
        })
        desUl.addEventListener('click', (e) => {
            let index;
            let item = e.target.innerText.toLowerCase();
            console.log(item)
            switch (item) {
                case 'moon':
                    index = 0;
                    break;
                case 'mars':
                    index = 1;
                    break;
                case 'europa':
                    index = 2;
                    break;
                case 'titan':
                    index = 3;
                    break;
                default:
                    break;
            }
            desBig.innerText = destinations[index].name;
            desText.innerText = destinations[index].description;
            desDis.innerText = destinations[index].distance;
            desTime.innerText = destinations[index].travel;
            desDom.style.transform = `translateX(-${index}00%)`;
        });
        const changeCrew = setInterval(() => {
            if (crewId > crew.length - 1) {
                crewId = 0;
            }
            console.log(crewId);
            crewBig.style.transform = `translateX(-${crewId}00%)`;
            crewBio.innerText = crew[crewId].bio;
            crewName.innerText = crew[crewId].name;
            crewRole.innerText = crew[crewId].role;
            crewId++;
            return () => clearInterval(changeCrew);
        }, 6000);
    };
}






// on-load
document.addEventListener('DOMContentLoaded', () => {
    Data.getData();
});




