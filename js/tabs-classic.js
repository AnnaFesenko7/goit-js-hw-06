const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

refs.controls.addEventListener("click", onTabClick);
function onTabClick(e) {
  e.preventDefault;
  if (e.target.nodeName !== "A") {
    console.log("hi");
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector(
    ".controls__item--active"
  );
  const controlItem = e.target;

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove("controls__item--active");

    const pane = getPaneById(`#${getPaneId(currentActiveControlItem)}`);
    pane.classList.remove("pane--active");
  }

  controlItem.classList.add("controls__item--active");

  const pane = getPaneById(`#${getPaneId(controlItem)}`);
  pane.classList.add("pane--active");
}

function getPaneId(control) {
  return control.getAttribute("href").slice(1);
}

function getPaneById(id) {
  return refs.panes.querySelector(id);
}
