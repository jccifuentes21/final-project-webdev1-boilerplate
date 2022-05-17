import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Homepage");
  }

  async getHTML() {
    return "<h1>Home</h1>";
  }
}
