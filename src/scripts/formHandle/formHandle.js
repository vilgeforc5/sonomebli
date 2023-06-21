export function formHandle() {
    document.addEventListener("submit", (e) => {
        const form = e.target;

        fetch("formHandling.php", {
            method: "POST",
            body: new FormData(form),
        })
        .then((r) => {
            if (! r.ok ) return new Error("Bad status")
        })
        .then (() => {
            console.log("yep")
            handleError(form)
        })
        .catch((r) => {
            console.log("err");
            handleError(form)
        });

        e.preventDefault();
    });
}

function handleError(form) {
    if(form.classList.contains("quickform")) {
        console.log("quick")


    } else if (form.classList.contains("mainform")){
        console.log("main")
    }

}

function handleSuccess(form) {
    if(form.classList.contains("quickform")) {
        console.log("quick")


    } else if (form.classList.contains("mainform")){
        console.log("main")
    }

}