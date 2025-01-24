const left = document.querySelector(".left-slide");
const right = document.querySelector(".right-slide");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
  const div = createDiv("X");
  setTimeout(() => div.classList.add("visible"), 1);
  left.appendChild(div);
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
  removeDiv(left);
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
  const div = createDiv("Zero");
  setTimeout(() => div.classList.add("visible"), 1);
  right.appendChild(div);
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
  removeDiv(right);
});

function createDiv(text) {
  const div = document.createElement("div");
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        div.textContent = data[text];
        div.classList.add(text.toLowerCase());
        div.classList.add("description"); // 2000 milliseconds = 2 seconds
    })
    .catch((error) => console.error("Error fetching JSON:", error));
  return div;
}

function removeDiv(container) {
  const div = container.querySelector("div");
  if (div) {
    div.classList.remove("visible");
    container.removeChild(div);
  }
}
