
document.addEventListener('DOMContentLoaded', function() {
    const filterIcon = document.querySelector('.filterIcon');
    const filterDiv = document.getElementById('filterDiv');
    const closeBtn = document.getElementById('closeBtn');
    const applyBtn = document.getElementById('applyBtn');

    // Open filter div
    filterIcon.addEventListener('click', function() {
        filterDiv.style.right = '0'; // Slide in
    });

    // Close filter div
    closeBtn.addEventListener('click', function() {
        filterDiv.style.right = '-100%'; // Slide out
    });

    // Apply button functionality (you can add your logic here)
    applyBtn.addEventListener('click', function() {
        // Add your apply logic here
        filterDiv.style.right = '-100%'; // Slide out
    });
});