// variables
const menu = document.querySelector('.menu img');
const navUl = document.querySelector('.nav-bar ul');






//data








// UI







// on-load
document.addEventListener('DOMContentLoaded', () => {
    menu.addEventListener('click', (e) => {
        const oSrc = e.target.src;
        let nSrc = oSrc.slice(0, oSrc.indexOf('/icon') + 5) + '-close.svg';
        if (oSrc.includes('hamburger')) {
            e.target.src = nSrc;
        } else {
            e.target.src = oSrc.slice(0, oSrc.indexOf('/icon') + 5) + '-hamburger.svg';
        }
        // if (e.target.src == './assets/shared/icon-hamburger.svg') {
        //     menu.src = './assets/shared/icon-close.svg';
        // } else {
        //     e.target.src = './assets/shared/icon-hamburger.svg'
        // }
        navUl.classList.toggle('show');
    })
});




