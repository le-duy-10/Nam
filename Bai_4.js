const textarea = document.querySelector("textarea");
textarea.addEventListener("Keyup", e => {
    let scHeight = e.target.scrollHeight;
    textarea.style.height = "auto";
    textarea.style.height = `${scHeight}px`;

});