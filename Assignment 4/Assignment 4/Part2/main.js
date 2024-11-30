const mainImage = document.querySelector('.displayed-img');
const thumbnailContainer = document.querySelector('.thumb-bar');
const toggleButton = document.querySelector('button');
const overlayEffect = document.querySelector('.overlay');

// Array of image data
const images = [
  { src: 'pic1.jpg', alt: 'A close-up of an eye' },
  { src: 'pic2.jpg', alt: 'A desert landscape' },
  { src: 'pic3.jpg', alt: 'Beautiful flowers' },
  { src: 'pic4.jpg', alt: 'Ancient Egyptian mummies' },
  { src: 'pic5.jpg', alt: 'A colorful butterfly' }
];

// Dynamically populate the thumbnail bar
images.forEach((image) => {
  const thumbImage = document.createElement('img');
  thumbImage.src = image.src;
  thumbImage.alt = image.alt;

  thumbnailContainer.appendChild(thumbImage);

  // Event listener to update the main displayed image
  thumbImage.addEventListener('click', () => {
    mainImage.src = image.src;
    mainImage.alt = image.alt;
  });
});

// Toggle dark/light mode
toggleButton.addEventListener('click', () => {
  if (overlayEffect.classList.contains('dark-mode')) {
    overlayEffect.classList.remove('dark-mode');
    toggleButton.textContent = 'Darken';
    overlayEffect.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  } else {
    overlayEffect.classList.add('dark-mode');
    toggleButton.textContent = 'Lighten';
    overlayEffect.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});
