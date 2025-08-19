const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentIndex = 0;
let images = Array.from(galleryItems);

// Show image in lightbox
function openLightbox(index) {
  currentIndex = index;
  const img = images[currentIndex].querySelector('img').src;
  lightboxImg.src = img;
  lightbox.style.display = 'flex';
}

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
});

// Image click event
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openLightbox(index));
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-filter');

    images.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (category === 'all' || category === itemCat) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
