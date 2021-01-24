// ======== Show Menu ==============

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

//========== Remove Menu =============
const navLink = document.querySelectorAll('.nav_link');
function removeMenu(){
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
    console.log("navlink clicked");
}
navLink.forEach(n =>n.addEventListener('click', removeMenu));


// ========== SCROLL ==============

// ============Show Scroll Top ========
function scrollTop(){
    const scrollTop =  document.getElementById('scrolltop');
    if(this.scrollY >= 560){
        scrollTop.classList.add('show_scroll');
    }
    else{
        scrollTop.classList.remove('show_scroll');
    }
}
window.addEventListener('scroll', scrollTop);

// ====== Activate or Deactivate the theme manually with the button ====
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

//Previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if(selectedTheme){
    document.body.classList[ selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[ selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click',  ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    console.log('hellow dark/light');

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


const sections = document.querySelectorAll('section[id]');
console.log(sections);

// ====== ACTIVATE SCROLL REVEAL ANIMATION =======
ScrollReveal = ScrollReveal({
    origin : 'top',
    distance: '30px',
    duration : '2000',
    reset : true
});
ScrollReveal.reveal(`.home_data, .home_img,
    .about_data, .about_img,
    .services_content, .menu_content, 
    .app_data, app_img,
    .contact_data, .contact_button,
    .footer_content
 `, {
        interval : 200
    })