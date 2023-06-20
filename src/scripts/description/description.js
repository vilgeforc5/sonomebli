export function Description(){
    let desc = document.querySelector("#description");
    desc.addEventListener("click", (e) => {
        let descriptionCollapse =  e.target.dataset.descriptionCollapse ;
        if(descriptionCollapse) { 
            if (descriptionCollapse === "open") {
                e.target.parentElement.nextElementSibling.classList.replace("grid-rows-[0fr]" , "grid-rows-[1fr]")
                e.target.classList.add("rotate-180");
                e.target.dataset.descriptionCollapse = "close";

            } else if (descriptionCollapse  === "close") {
                e.target.parentElement.nextElementSibling.classList.replace("grid-rows-[1fr]" , "grid-rows-[0fr]")
                e.target.classList.remove("rotate-180");
                e.target.dataset.descriptionCollapse = "open";
    
            }
        } 
    })
}