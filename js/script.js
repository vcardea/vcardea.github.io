window.onload = () => {
    const hamburger = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.mobile-nav');
    const mobile_menu = document.querySelectorAll('a.mobile-menu');

    function menu() {
        hamburger.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    }

    hamburger.addEventListener('click', menu);
    mobile_menu.forEach((mob_men) => {
        mob_men.addEventListener('click', menu);
    });
}