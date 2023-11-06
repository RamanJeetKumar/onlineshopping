const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky",this.window.scrollY > 0);
})

let menu = document.getElementById('menu-icon');
let navmenu = document.querySelector('.navmenu');
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
})