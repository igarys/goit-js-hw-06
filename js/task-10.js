function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const quantity = document.querySelector("input");
const boxDiv = document.getElementById("boxes");
const createBox = document.querySelector("button[data-create]");
const deleteBox = document.querySelector("button[data-destroy]");

function createBoxes() {
  const boxes = [];
  for (let i = 0; i < quantity.value; i++) {
    const element = document.createElement("div");
    element.style.width = 30 + i * 10 + "px";
    element.style.height = 30 + i * 10 + "px";
    element.style.backgroundColor = getRandomHexColor();
    element.style.margin = 15 + "px";
    boxes.push(element);
    boxDiv.append(element);
  }
  quantity.value = "";
  return boxes;
}

function deleteBoxes() {
  boxDiv.innerHTML = "";

}

createBox.addEventListener("click", createBoxes);

deleteBox.addEventListener("click", deleteBoxes);


