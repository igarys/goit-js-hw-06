const inputText = document.getElementById("name-input");
const greet = document.getElementById("name-output");

inputText.addEventListener("input", (event) => {
    greet.textContent = event.currentTarget.value;
});