export function formHandle() {
    document.addEventListener('submit', (e) => {
        console.log(123)
        // Store reference to form to make later code easier to read
        const form = e.target;
        fetch("formHandling.php", {
            method: "POST",
            body: new FormData(form),
        });
    
        e.preventDefault();
    });
}