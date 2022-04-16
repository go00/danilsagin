const header = document.querySelector(".header__baber")
const burger = document.querySelector(".burger")
const nav = document.querySelector(".adaptive__head")
const body = document.querySelector("body")


const trackHeader = () => {
    if (window.scrollY > 824) {
        header.classList.add("header__baber-active")
    } else {
        header.classList.remove("header__baber-active")
    }
}

window.addEventListener("scroll", trackHeader)


burger.addEventListener("click", () => {
    nav.classList.toggle("active__nav")
    burger.classList.toggle("burger__close")
    body.classList.toggle("lock-scroll")
})


let swiper = new Swiper(".blocks__gallery", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });