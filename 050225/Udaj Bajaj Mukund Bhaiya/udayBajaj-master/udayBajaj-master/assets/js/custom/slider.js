document.addEventListener('DOMContentLoaded', function() {
    const brandLogo = document.querySelector('.brandLogo');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentPosition = 0;
    let cardsPerView = 3; // Default for tablet
    let isAnimating = false; // Flag to prevent rapid clicking

    // Function to check if we're in mobile/tablet view
    function isMobileOrTablet() {
        return window.innerWidth <= 1024;
    }

    // Function to update cards per view based on screen size
    function updateCardsPerView() {
        if (window.innerWidth <= 480) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 768) {
            cardsPerView = 2;
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 3;
        } else {
            cardsPerView = 5; // Show all cards in desktop view
        }
    }

    // Function to update arrow visibility
    function updateArrowVisibility() {
        if (isMobileOrTablet()) {
            const cards = document.querySelectorAll('.vehicleBrandLogo');
            prevArrow.style.display = currentPosition === 0 ? 'none' : 'flex';
            nextArrow.style.display = currentPosition >= cards.length - cardsPerView ? 'none' : 'flex';
        } else {
            prevArrow.style.display = 'none';
            nextArrow.style.display = 'none';
        }
    }

    // Function to move the slider
    function moveSlider(direction) {
        if (isAnimating) return; // Prevent rapid clicking
        isAnimating = true;

        const cards = document.querySelectorAll('.vehicleBrandLogo');
        const totalCards = cards.length;

        if (direction === 'prev' && currentPosition > 0) {
            currentPosition--;
        } else if (direction === 'next' && currentPosition < totalCards - cardsPerView) {
            currentPosition++;
        }

        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(brandLogo).gap);
        const moveAmount = -(currentPosition * (cardWidth + gap));
        
        // Add a class for smooth animation
        brandLogo.style.transform = `translateX(${moveAmount}px)`;
        
        // Update visibility and reset animation flag
        updateArrowVisibility();
        
        // Reset animation flag after transition completes
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Match this with CSS transition duration
    }

    // Previous button click handler
    prevArrow.addEventListener('click', () => {
        moveSlider('prev');
    });

    // Next button click handler
    nextArrow.addEventListener('click', () => {
        moveSlider('next');
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isMobileOrTablet()) {
            if (e.key === 'ArrowLeft') {
                moveSlider('prev');
            } else if (e.key === 'ArrowRight') {
                moveSlider('next');
            }
        }
    });

    // Update on resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCardsPerView();
            // Reset position when screen size changes
            currentPosition = 0;
            brandLogo.style.transform = 'translateX(0)';
            updateArrowVisibility();
        }, 150); // Debounce resize events
    });

    // Initial setup
    updateCardsPerView();
    updateArrowVisibility();
});
