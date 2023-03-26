const showValue = document.getElementById("value");
const btnPlus = document.querySelector('button[data-action= "increment"]');
const btnMinus = document.getElementById("minus");
let counterValue = 0;

const plus = () => {
    counterValue++
    showValue.textContent = counterValue
    console.log(showValue)
};

btnPlus.addEventListener('click', plus);


const minus = () => {
    counterValue --
    showValue.textContent = counterValue;
    console.log(showValue);
};

btnMinus.addEventListener("click", minus);
console.log(counterValue)