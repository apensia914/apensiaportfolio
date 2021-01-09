// Navbar Burger Menu 
const menuShow = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
};

menuShow('nav-burger', 'nav-menu');

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('add');

    // Removing mobile menu 
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));