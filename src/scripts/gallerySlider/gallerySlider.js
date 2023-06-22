import Swiper, { Autoplay, Navigation } from "swiper";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function GallerySwider() {
  let swiperOptions = {
    centeredSlides: true,
    spaceBetween: "100%",
    autoHeight: true,
    direction: "horizontal",
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    modules: [Autoplay, Navigation],
    loop: true,
  };
  new Swiper(".swiper-container", swiperOptions);

  const lightbox = new PhotoSwipeLightbox({
    gallery: ".swiper-slide__1",
    children: "a",
    pswpModule: () => import("photoswipe"),
    showAnimationDuration: 500,
    padding: { top: 20, bottom: 20, left: 0, right: 0 },
  });

  const lightbox2 = new PhotoSwipeLightbox({
    gallery: ".swiper-slide__2",
    children: "a",
    pswpModule: () => import("photoswipe"),
    showAnimationDuration: 500,
    padding: { top: 20, bottom: 20, left: 0, right: 0 },
  });

  const lightbox3 = new PhotoSwipeLightbox({
    gallery: ".swiper-slide__3",
    children: "a",
    pswpModule: () => import("photoswipe"),
    showAnimationDuration: 500,
    padding: { top: 20, bottom: 20, left: 0, right: 0 },
  });

  const lightbox4 = new PhotoSwipeLightbox({
    gallery: ".swiper-slide__4",
    children: "a",
    pswpModule: () => import("photoswipe"),
    showAnimationDuration: 500,
    padding: { top: 20, bottom: 20, left: 0, right: 0 },
  });

  const lightbox5 = new PhotoSwipeLightbox({
    gallery: ".swiper-slide__5",
    children: "a",
    pswpModule: () => import("photoswipe"),
    showAnimationDuration: 500,
    padding: { top: 20, bottom: 20, left: 0, right: 0 },
  });


  lightbox.init();
  lightbox2.init();
  lightbox3.init();
  lightbox4.init();
  lightbox5.init();

  document.querySelector("#gallery").addEventListener("click", (e) => {
    let toggleOpen = e.target.dataset.galleryOpen;
    if (toggleOpen) {
      lightbox.loadAndOpen(0, {
        gallery: document.querySelector(`.swiper-slide__${toggleOpen[0]}`),
      });
    }
  });
}
