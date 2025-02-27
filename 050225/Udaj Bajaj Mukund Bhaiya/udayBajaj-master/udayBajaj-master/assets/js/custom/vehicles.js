document.addEventListener('DOMContentLoaded', function() {

    const splide = new Splide('.splide', {
        // perPage    : 1, 
        gap        : '20px', 
        pagination : false, 
        arrows     : false, 
        drag       : 'free', 
        autoWidth  : true,
    }).mount();
    
    const vehicleSelector = document.getElementById('vehicle');
    const twoWheelerSection = document.querySelector('.TwoWheelerSection');
    const threeWheelerSection = document.querySelector('.ThreeWheelerSection');
    const fourWheelerSection = document.querySelector('.FourWheelerSection');

    // Initially show all sections
    twoWheelerSection.style.display = 'block';
    threeWheelerSection.style.display = 'block';
    fourWheelerSection.style.display = 'block';

    vehicleSelector.addEventListener('change', function() {
        const selectedValue = vehicleSelector.value;

        // Hide all sections
        twoWheelerSection.style.display = 'none';
        threeWheelerSection.style.display = 'none';
        fourWheelerSection.style.display = 'none';

        // Show the selected section or all if no selection
        if (selectedValue === '2-wheelers') {
            twoWheelerSection.style.display = 'block';
        } else if (selectedValue === '3-wheelers') {
            threeWheelerSection.style.display = 'block';
        } else if (selectedValue === '4-wheelers') {
            fourWheelerSection.style.display = 'block';
        } else {
            // Show all sections if no selection
            twoWheelerSection.style.display = 'block';
            threeWheelerSection.style.display = 'block';
            fourWheelerSection.style.display = 'block';
        }
    });
});