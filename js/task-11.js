const refs = {
  ball: document.querySelector("#ball"),
  field: document.querySelector("#field"),
};
refs.field.addEventListener("click", findScreenCoords);
console.log(ball);

function findScreenCoords(mouseEvent) {
  console.log("clientX", mouseEvent.clientX);
  console.log("pageX ", mouseEvent.pageX);
  console.log("offsetX", mouseEvent.offsetX);
  console.log("screenX", mouseEvent.screenX);

  const fieldCoords = refs.field.getBoundingClientRect();
  let left =
    mouseEvent.clientX -
    fieldCoords.left -
    refs.field.clientLeft -
    refs.ball.offsetWidth / 2;

  let top =
    mouseEvent.clientY -
    fieldCoords.top -
    refs.field.clientTop -
    refs.ball.offsetWidth / 2;

  refs.ball.style.top = `${top}`;
  refs.ball.style.left = `${left}`;
}
