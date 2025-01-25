const mal = document.querySelector(".mal");
const ziggs = document.querySelector(".ziggs");
const brand = document.querySelector(".brand");

const ahri = document.querySelector(".ahri");
const corki = document.querySelector(".corki");
const ezreal = document.querySelector(".ezreal");

const boxes = document.querySelectorAll(".box");

mal.addEventListener("dragstart", dragStart);
mal.addEventListener("dragend", dragEnd);

ziggs.addEventListener("dragstart", dragStart);
ziggs.addEventListener("dragend", dragEnd);

brand.addEventListener("dragstart", dragStart);
brand.addEventListener("dragend", dragEnd);

ahri.addEventListener("dragstart", dragStart);
ahri.addEventListener("dragend", dragEnd);

corki.addEventListener("dragstart", dragStart);
corki.addEventListener("dragend", dragEnd);

ezreal.addEventListener("dragstart", dragStart);
ezreal.addEventListener("dragend", dragEnd);

for (const box of boxes) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
}

function dragStart() {
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "mal";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "box";
}

function dragDrop() {
  this.className = "box";
  this.append(mal);
}
