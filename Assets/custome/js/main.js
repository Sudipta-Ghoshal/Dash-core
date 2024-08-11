// //// nabbar fixed to top ///////
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    navbar.classList.add("to-fixed");
  } else {
    navbar.classList.remove("to-fixed");
  }
});

// /// Swiper initialize ///////
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

///////  AOS/ animation on scroll ///////////
AOS.init({
  offset: 80,
  duration: 1500,
});
