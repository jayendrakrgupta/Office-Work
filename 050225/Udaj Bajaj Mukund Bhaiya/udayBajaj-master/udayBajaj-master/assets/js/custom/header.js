document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('.HeaderContainer');
    const mostTop = document.querySelector('.MostTopContainer');
    let mostTopHeight = mostTop ? mostTop.offsetHeight : 0;

    // Handle sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > mostTopHeight) {
            header.classList.add('sticky');
            document.body.style.paddingTop = header.offsetHeight + 'px';
        } else {
            header.classList.remove('sticky');
            document.body.style.paddingTop = '0';
        }
    });

    // Handle mobile menu
    const menuIcon = document.querySelector('.menuIcon');
    const closeIcon = document.querySelector('.closeIcon');
    const mobileMenu = document.querySelector('.MobileMenu');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;
    const mobileDropdownHeader = document.querySelector('.MobileMenuItemHeader');

    function openMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open');
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        // Close any open dropdowns when closing menu
        const activeDropdowns = document.querySelectorAll('.MobileMenuItem.hasDropdown.active');
        activeDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }

    menuIcon.addEventListener('click', openMenu);
    closeIcon.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Handle mobile dropdown
    if (mobileDropdownHeader) {
        mobileDropdownHeader.addEventListener('click', function(e) {
            const parentItem = this.closest('.MobileMenuItem.hasDropdown');
            if (parentItem) {
                parentItem.classList.toggle('active');
            }
        });
    }

    // Close menu on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});