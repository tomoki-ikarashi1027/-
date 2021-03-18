class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.getElementById("global-container");
    this.DOM.btn.addEventListener("click", this._toggle.bind(this));
    this.DOM.cover.addEventListener("click", this._toggle.bind(this));
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }
}

new MobileMenu();

// const btn = document.querySelector(".mobile-menu__btn");
// const container = document.getElementById("global-container");
// btn.addEventListener("click", function () {
//   container.classList.toggle("menu-open");
// });
