export function modalCTA() {

    let cta = document.querySelector("#cta");
    let modal = document.querySelector(".cta__modal");
    let isShown = false;

    document.addEventListener("click", (e) => {
        if (isShown && (e.target.closest(".cta__modal") === null)) {
            modal.classList.add("animate-fade-out")
            modal.addEventListener("animationend", () => {
                modal.classList.add("hidden")
            }, { once: true })
        }
    })

    const target = document.getElementById("target");
    function callback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !isShown) {
                isShown = true;
                modal.classList.remove("hidden")
                modal.firstElementChild.classList.add("animate-focus-in-expand")
            }
        });
    }

    function createObserver(target, callback) {
        const options = {
            root: null,
            threshold: 0.25
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);
    }
    createObserver(cta, callback);

}

