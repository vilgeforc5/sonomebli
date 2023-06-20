import  Swiper, {Autoplay} from 'swiper';



export function Heading() {
    let swiperOptionsHeading = {
        spaceBetween: 200,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        speed: 1000,
        modules: [Autoplay],
        
    
    };

    // font change color
    const swiper = new Swiper('.swiper-heading', swiperOptionsHeading);
    swiper.on("activeIndexChange", function() {
        switch(swiper.activeIndex){
            case 0:
                document.querySelector("[font-heading-change]").className = "dark:text-orange-300 text-orange-500";
                break
            case 1:
                document.querySelector("[font-heading-change]").className = "dark:text-green-300 text-green-500";
                break
            case 2:
                document.querySelector("[font-heading-change]").className = "dark:text-red-300 text-red-500";
                break
        }
    })
}
