export function formHandle() {
    document.addEventListener("submit", (e) => {
        const form = e.target;
        let button = form.querySelector("button");
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
        }, 2500)
        fetch("formHandling.php123", {
            method: "POST",
            body: new FormData(form),
        })
        .then((r) => {
            if (! r.ok ) return new Error("Bad status")
        })
        .then (() => {
            handleSuccess(form)
            
        })
        .catch((r) => {
            handleError(form)
        })

        e.preventDefault();
    })
}


function handleError(form) {
    let modalError = document.querySelector(".modal-info_error");
    modalError.classList.toggle("hidden")
    setTimeout(() => {
        modalError.classList.toggle("hidden")
    }, 2000)
}

function handleSuccess(form) {
    let modalSucess = document.querySelector(".modal-info_success");
    modalSucess.classList.toggle("hidden")
    setTimeout(() => {
        modalSucess.classList.toggle("hidden")
    }, 2000)
    if(form.closest(".cta__modal")) {
        form.closest(".cta__modal").classList.add("animate-fade-out")
        form.closest(".cta__modal").addEventListener("animationend", () => {
            form.closest(".cta__modal").classList.add("hidden")
        }, { once: true })

    }



}
