const osho = document.querySelector(".shogi-piece");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

osho.addEventListener("drag", dragging);
osho.addEventListener("dragstart", dragStart);

squares.forEach((square) => {
    square.addEventListener("drop", dragDrop);
    square.addEventListener("dragenter", dragEnter);
    square.addEventListener("dragleave", dragLeave);
    square.addEventListener("dragend", dragEnd);
    square.addEventListener("dragover", dragOver);
});

let beingDragged;

function dragStart(e) {
    console.log("Being dragged...", e.target);
    beingDragged = e.target;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add("highlight");
}

function dragLeave(e) {
    e.target.classList.remove("highlight");
}

function dragDrop(e) {
    console.log("Dropped into... ", e.target);
    e.target.append(beingDragged);
    e.target.classList.remove('highlight')
}

function dragEnd(e) {
    e.target.classList.add("target");
    setTimeout(( ) => e.target.classList.remove('target'), 100)
    infoDisplay.textContent = 'Success!'
}

function dragging() {
    infoDisplay.textContent = "You are dragging a..." + beingDragged.id;
}
