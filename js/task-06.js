const textInput = document.getElementById("validation-input");
const valid = document.querySelector("validation-input.valid");
const invalid = document.querySelector("validation-input.invalid");

textInput.addEventListener("blur", () => {
  textInput.className =  textInput.value.length === +textInput.dataset.length
    ?  'valid' : 'invalid'
    });
