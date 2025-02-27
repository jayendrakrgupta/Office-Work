document.addEventListener('DOMContentLoaded', function() {
    // Engine specifications toggle
    const engineWrapper = document.querySelector('.vehicleDetailEngineWrapper');
    const engineTable = document.querySelector('.engineSpecificationsWrapper');

    engineWrapper.addEventListener('click', function() {
        engineTable.classList.toggle('collapsed');
        const toggleSign = engineWrapper.querySelector('div:last-child');
        toggleSign.innerText = engineTable.classList.contains('collapsed') ? '-' : '+';
    });

    // Location switching functionality
    const locationButtons = document.querySelectorAll('.vehicleLocation, .vehicleLocationSelected');
    const locationMaps = [
        document.querySelector('.vehicleLocationMapDiv1'),
        document.querySelector('.vehicleLocationMapDiv2'),
        document.querySelector('.vehicleLocationMapDiv3')
    ];

    function showLocation(index) {
        locationMaps.forEach(map => map.style.display = 'none');
        locationMaps[index].style.display = 'block';
        
        locationButtons.forEach(btn => {
            btn.classList.remove('vehicleLocationSelected');
            btn.classList.add('vehicleLocation');
        });
        locationButtons[index].classList.remove('vehicleLocation');
        locationButtons[index].classList.add('vehicleLocationSelected');
    }

    locationButtons.forEach((button, index) => {
        button.addEventListener('click', () => showLocation(index));
    });

    // Image preview and slider functionality
    const mainPreview = document.querySelector('.vehicleDetailPreview');

    // Initialize Splide
    const splide = new Splide('#thumbnail-slider', {
        perPage: 'auto',
        gap: -5,
        pagination: false,
        arrows: true,
        drag: true,
        snap: true,
        speed: 400,
        // dragMinThreshold: 5,
        focus: 0,
        // trimSpace: false,
        // slideFocus: true,
        // flickMaxPages: 1,
        wheel: false,
        // perMove: 1,
        // fixedWidth: 120,
        // isNavigation: true
    });

    // Handle thumbnail clicks and navigation
    splide.on('click', function(slide) {
        const image = slide.slide.querySelector('img');
        if (image) {
            mainPreview.src = image.src;
        }
    });

    // Set initial active slide
    splide.on('mounted', function() {
        const firstSlide = document.querySelector('.splide__slide');
        if (firstSlide) {
            firstSlide.classList.add('is-active');
        }
    });

    // Update active state on slide change
    splide.on('moved', function() {
        const activeSlide = splide.Components.Elements.slides[splide.index];
        if (activeSlide) {
            const image = activeSlide.querySelector('img');
            if (image) {
                mainPreview.src = image.src;
            }
        }
    });

    splide.mount();
});