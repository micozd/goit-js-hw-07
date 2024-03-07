function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
  let boxSize = 30

  const box = document.createElement("div");
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  box.classList.add("box");
  boxesContainer.appendChild(box);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  

}

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
})

document.querySelector("[data-destroy]").addEventListener("click", () => { 
  destroyBoxes();
})