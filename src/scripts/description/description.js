import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


export function Description(){
    let desc = document.querySelector("#description");
    desc.addEventListener("click", (e) => {
        let elemWrapperDiv = e.target.closest("div");
        let descriptionCollapse =  elemWrapperDiv.dataset.descriptionCollapse;

        if(descriptionCollapse) { 
            if (descriptionCollapse === "open") {
                elemWrapperDiv.nextElementSibling.classList.replace("grid-rows-[0fr]" , "grid-rows-[1fr]")
                elemWrapperDiv.querySelector("svg").classList.add("rotate-180");
                elemWrapperDiv.dataset.descriptionCollapse = "close";

            } else if (descriptionCollapse  === "close") {
                elemWrapperDiv.nextElementSibling.classList.replace("grid-rows-[1fr]" , "grid-rows-[0fr]")
                elemWrapperDiv.querySelector("svg").classList.remove("rotate-180");
                elemWrapperDiv.dataset.descriptionCollapse = "open";
    
            }
        } 
    })


    const lightbox = new PhotoSwipeLightbox({
        gallery: "#description_gallery",
        children: "a",
        pswpModule: () => import("photoswipe")
      });
      lightbox.init();
}