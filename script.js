function orderNow() {
    alert("Order Now feature coming soon!");
}



const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('closePopup');
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startSlider() {
    showImage(currentIndex);
    setInterval(nextImage, 1000); // Change image every 3 seconds
}

// Show popup on page load
window.addEventListener('load', () => {
    popup.style.display = 'flex';
    startSlider();
});

closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close popup if clicked outside of the content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
