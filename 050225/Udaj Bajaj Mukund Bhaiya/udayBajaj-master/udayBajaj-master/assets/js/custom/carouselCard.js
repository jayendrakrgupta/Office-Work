document.addEventListener('DOMContentLoaded', function() {
    const sliderOptions = {
        type: 'slide',
        perPage: 'auto',
        gap: 12,
        padding: { left: 0, right: 0 },
        arrows: true,
        pagination: false,
        speed: 800,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        autoWidth: true,
        focus: 0,
        omitEnd: true,
        breakpoints: {
            768: {
                gap: 12,
                padding: { left: '5%', right: '5%' },
            }
        }
    };

    // Initialize first slider
    new Splide('#vehicleSlider', sliderOptions).mount();
    
    // Initialize second slider
    new Splide('#vehicleSlider2', sliderOptions).mount();
    new Splide('#vehicleSlider3', sliderOptions).mount();
});