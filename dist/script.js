var menuToggleOpen, menuToggleClose, mobilenav;

menuToggleOpen = document.getElementById('menuToggleOpen');
menuToggleClose = document.getElementById('menuToggleClose');
mobilenav = document.querySelector('.navigation');

menuToggleOpen.addEventListener('click', function () {
    mobilenav.classList.toggle('open');
    mobilenav.classList.add('fade-in');
    mobilenav.classList.remove('fade-out');
})

menuToggleClose.addEventListener('click', function () {
    mobilenav.classList.toggle('open');
    mobilenav.classList.add('fade-out');
    mobilenav.classList.remove('fade-in');
})

window.addEventListener('scroll', function () {
    const headerNav = document.getElementById('headerNav');
    headerNav.classList.toggle("fixed", window.scrollY > 300);
})

// new Splide('#splide', {
//     type: 'loop'
//     perPage: 3,
//     focus: 'center',
// }).mount();