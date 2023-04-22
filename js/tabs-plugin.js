class Tabs {
  constructor({
    rootSelector,
    activeControlClass = "active",
    activePaneClass = "active",
    activeTab = 1,
  }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._activePaneClass = activePaneClass;
    this._bindEvents();
    this._activeTabIndx = activeTab - 1;
    this._setActiveTab();
  }

  _getRefs(root) {
    const refs = {};
    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);
    return refs;
  }

  _setActiveTab() {
    const controls = this._refs.controls.querySelectorAll("a");
    const controlItem = controls[this._activeTabIndx];
    controlItem.classList.add(this._activeControlClass);
    const id = this._getPaneId(controlItem);
    this._setActivePane(id);
  }
  _removeActiveTab() {
    const currentActiveControlItem = this._refs.controls.querySelector(
      `.${this._activeControlClass}`
    );

    if (currentActiveControlItem) {
      currentActiveControlItem.classList.remove(`${this._activeControlClass}`);
      const id = this._getPaneId(currentActiveControlItem);
      this._removeActivePane(id);
    }
  }
  _setActivePane(id) {
    const pane = this._getPaneById(`#${id}`);
    pane.classList.add(this._activePaneClass);
  }
  _removeActivePane(id) {
    const pane = this._getPaneById(`#${id}`);
    pane.classList.remove(this._activePaneClass);
  }

  _bindEvents() {
    this._refs.controls.addEventListener(
      "click",
      this._onControlsClick.bind(this)
    );
  }

  _onControlsClick(e) {
    e.preventDefault;
    if (e.target.nodeName !== "A") {
      console.log("hi");
      return;
    }
    this._removeActiveTab();

    const controlItem = e.target;
    controlItem.classList.add(`${this._activeControlClass}`);
    const id = this._getPaneId(controlItem);
    this._setActivePane(id);
  }

  _getPaneId(control) {
    return control.getAttribute("href").slice(1);
  }

  _getPaneById(id) {
    return this._refs.panes.querySelector(id);
  }
}

const tabs1 = new Tabs({
  rootSelector: "#tabs-1",
  activeControlClass: "controls__item--active",
  activePaneClass: "pane--active",
  activeTab: "1",
});

const tabs2 = new Tabs({
  rootSelector: "#tabs-2",
  activeControlClass: "controls__item--active",
  activePaneClass: "pane--active",
  activeTab: "1",
});
