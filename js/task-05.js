const inputText = document.getElementById("name-input");
const greet = document.getElementById("name-output");

inputText.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
        greet.textContent = event.currentTarget.value;
    } else {
        greet.textContent = `Anonymous`;
    }
    
});