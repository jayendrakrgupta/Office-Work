const swiper = new Swiper('.vehicleSwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 50,
    effect: 'slide',
    speed: 500,
    watchSlidesProgress: true,
    slideActiveClass: 'swiper-slide-active',
    loopedSlides: 1,
    loop: false,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});

// Custom navigation
const prevBtn = document.querySelector('.custom-prev');
const nextBtn = document.querySelector('.custom-next');

prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
    updateNavigationState();
});

nextBtn.addEventListener('click', () => {
    swiper.slideNext();
    updateNavigationState();
});

function updateNavigationState() {
    if (swiper.isBeginning) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    if (swiper.isEnd) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

// Initial state
updateNavigationState();

// Ensure proper initial state
window.addEventListener('load', () => {
    swiper.update();
    updateNavigationState();
});

// Update on slide change
swiper.on('slideChange', updateNavigationState);
