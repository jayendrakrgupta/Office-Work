
document.addEventListener('DOMContentLoaded', () => {
    const photoText = document.querySelector('.PhotoText');
    const videoText = document.querySelector('.VideoText');
    const imagesContainer = document.querySelector('.GalleryImagesContainer');
    const videoContainer = document.querySelector('.GalleryVideoContainer');

    // Show photos by default
    photoText.classList.add('active');
    imagesContainer.classList.add('active');

    photoText.addEventListener('click', () => {
        photoText.classList.add('active');
        videoText.classList.remove('active');
        imagesContainer.classList.add('active');
        videoContainer.classList.remove('active');
    });

    videoText.addEventListener('click', () => {
        videoText.classList.add('active');
        photoText.classList.remove('active');
        videoContainer.classList.add('active');
        imagesContainer.classList.remove('active');
    });
});