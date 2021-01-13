// Show Menu 

const shwoMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if(toggle && nav ){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show_menu');
        })
    }
}
shwoMenu('nav_toggle', 'nav_menu');

// Remove Menu
const navLink = document.querySelectorAll('.nav_link');
function removeMenu(){
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
    console.log("navlink clicked");
}
navLink.forEach(n =>n.addEventListener('click', removeMenu));

