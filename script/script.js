// Mobile menu
const menuIcon = document.querySelector('.menu-icon'),
    header = document.querySelector('header');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');

});

// Slider Arrows
const sliderArrows = document.querySelector('.slider_arrows'),
    slidesArrows = sliderArrows.querySelectorAll('.slider_arrows-item'),
    prev = sliderArrows.querySelector('.arrows_left'),
    next = sliderArrows.querySelector('.arrows_right');


let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n) {
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slidesArrows.length - 1;
    };
    if (slideIndex >= slidesArrows.length) {
        slideIndex = 0;
    };

    slidesArrows.forEach(item => item.style.display = 'none');
    slidesArrows[slideIndex].style.display = 'block';
}
showSlideArrows(0);

// Slider Dots
const sliderDots = document.querySelector('.slider_dots'),
    slidesDots = sliderDots.querySelectorAll('.slider_dots-item'),
    wrapperDots = sliderDots.querySelector('.slider_dots-nav');

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');
    dot.dataset.slideTo = i;
    dot.classList.add('slider_dots-nav_item');
    if (i == 0) dot.classList.add('slider_dots-nav_item-activ');

    if (i != 0) slidesDots[i].style.display = 'none';

    dot.addEventListener('click', showSlideDots);

    wrapperDots.append(dot);
};

function showSlideDots(event) {
    const slideTo = event.target.dataset.slideTo;

    slidesDots.forEach(item => item.style.display = 'none');
    slidesDots[slideTo].style.display = 'block';

    dots.forEach(dot => dot.classList.remove('slider_dots-nav_item-activ'));
    event.target.classList.add('slider_dots-nav_item-activ');
};
