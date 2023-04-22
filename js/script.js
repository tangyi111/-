// 轮播图自动播放
let currentIndex = 0;
const carouselImages = document.querySelectorAll('.carousel img');

function showNextImage() {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);
