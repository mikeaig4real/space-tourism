// variables
const menu = document.querySelector('.menu img');
const navUl = document.querySelector('.nav-bar ul');
const conDom = document.querySelectorAll('.container');
const desDom = document.querySelector('.slide-con');
const desUl = document.querySelector('.info nav ul');






//data
class Data {
    

}








// UI
class UI {
    static showMenu() {
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
            })
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
            desDom.style.transform = `translateX(-${index}00%)`;
        })
    };
}






// on-load
document.addEventListener('DOMContentLoaded', () => {
    UI.showMenu();
});




