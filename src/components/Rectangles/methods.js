export function allowDrop(ev) {
  ev.preventDefault();
}

export function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.dataset.id);
}

export function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.querySelector(`[data-id="${data}"]`);
  if (draggedElement) {
    ev.target.appendChild(draggedElement);
  }
}
