const excludeClasses = ["dragging", "invisible", "hovered"];

const pics = document.querySelectorAll(".pic");
const boxes = document.querySelectorAll(".box");

let currentListClass = null;
let currentListClassHover = null;

for (const box of boxes) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
}
for (const pic of pics) {
  pic.addEventListener("dragstart", dragStart);
  pic.addEventListener("dragend", dragEnd);
}

// Function to handle the start of dragging
function dragStart() {
  this.className += " dragging";
  setTimeout(() => (this.className += " invisible"), 0);
  currentListClass = Array.from(this.classList).filter(
    (className) => !excludeClasses.includes(className)
  );
}

// Function to handle the end of dragging
function dragEnd() {
  currentListClass.forEach((className) => this.classList.add(className));
}

// Function to handle the drag over event
function dragOver(e) {
  e.preventDefault();
}

// Function to handle the drag enter event
function dragEnter(e) {
  e.preventDefault();

  const childElement = this.querySelector(".pic");
  currentListClassHover = Array.from(childElement.classList).filter(
    (className) => !excludeClasses.includes(className)
  );
  childElement.classList.add("hovered");
}

// Function to handle the drag leave event
function dragLeave(e) {
  if (e.relatedTarget && this.contains(e.relatedTarget)) return;

  currentListClassHover = null;
  this.querySelector(".pic").classList.remove("hovered");
}

// Function to handle the drop event
function dragDrop() {
  const draggedElement = document.querySelector(".dragging");
  const targetElement = this.querySelector(".pic");

  if (draggedElement && targetElement) {
    const parent1 = draggedElement.parentNode;
    const parent2 = targetElement.parentNode;

    swapChildren(parent1, draggedElement, parent2, targetElement);
  }

  this.classList.remove("hovered");
}

// Function to swap children between two parent elements
function swapChildren(parent1, child1, parent2, child2) {
  // refine class names
  child1.className = "";
  child2.className = "";

  currentListClassHover.forEach((className) => child2.classList.add(className));
  currentListClass.forEach((className) => child1.classList.add(className));
  // Move child1 to parent2
  parent2.appendChild(child1);

  // Move child2 to parent1
  parent1.appendChild(child2);
}
