// اسلایدر نظرات مشتریان
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0;
const totalSlides = slides.length;

// ساخت نقطه‌ها
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// رفتن به اسلاید مشخص
function goToSlide(index) {
    currentIndex = index;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // به‌روزرسانی نقطه‌ها
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// اسلاید بعدی
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

// اسلاید قبلی
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

// اتصال دکمه‌ها
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// ساخت نقطه‌ها در ابتدا
createDots();