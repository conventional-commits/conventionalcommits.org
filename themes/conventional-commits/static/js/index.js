import AnchorJS from 'anchor-js';

class App {
  constructor(anchors) {
    this.anchors = anchors;
    this.onInit();
  }

  _addEventListeners() {
    // using 'load' instead of 'DOMContentLoaded' because we want to wait the css
    // https://javascript.info/onload-ondomcontentloaded
    window.addEventListener('load', () => {
      // wrapped in a timeout for wait css parsing
      setTimeout(() => this._onPageLoaded(), 0);
    });
  }

  _onPageLoaded() {
    this.removeLoadingClass();
  }

  onInit() {
    this.addAnchorsLinks();
    this._addEventListeners();
  }

  addAnchorsLinks() {
    this.anchors.options = {placement: 'left'};
    this.anchors.add();
  }

  removeLoadingClass() {
    document.body.classList.remove('conventional-commits--loading');
  }
}

const app = new App(new AnchorJS());
