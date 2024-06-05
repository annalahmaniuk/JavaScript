document.getElementById('hamburgerBtn').addEventListener('click', function() {
    const navbarItems = document.querySelector('.navbar-items');
    if (navbarItems.style.display === 'block') {
      navbarItems.style.display = 'none';
    } else {
      navbarItems.style.display = 'block';
    }
  });
  
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelectorAll('.indicator');
  
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, 3000);
  
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
  });
  
  function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
    updateCarousel();
  }
  
  function showPrevSlide() {
    showSlide(currentIndex - 1);
  }
  
  function showNextSlide() {
    showSlide(currentIndex + 1);
  }
  
  function nextSlide() {
    showNextSlide();
  }
  
  function updateCarousel() {
    const slideWidth = slides[currentIndex].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }
  
  window.addEventListener('resize', updateCarousel);
  
  updateCarousel();
  