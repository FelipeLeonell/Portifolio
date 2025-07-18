document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
    const inputField = copyLinkContainer.querySelector(".copy-link-input");
    const copyButton = copyLinkContainer.querySelector(".copy-link-button"); 

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        const text = inputField.value;

        inputField.select();
        navigator.clipboard.writeText(text);

        inputField.value = "Copiado com sucesso!";
        setTimeout(() => inputField.value = text , 500);
    });
});