let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist'); // Corrected class name

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
