import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Countries");
  }

  async getHTML() {
    const cards1 = document.createElement("div");
    for (let i = 1; i <= 12; i++) {
      const card = document.createElement("div");
      card.innerHTML = `
    <div class="countries-part-cards">
     <div class="countries-img"></div>
     <div class="countries-information-part">
      <h2>Name</h2>
      <p>Population:</p>
      <p>Region:</p>
      <p>Capital:</p>
     </div>
    </div>
      `;
      cards1.appendChild(card);
    }
    return `
    <section class="countries-home">
    <div class="searching-part">
    <form>
    <input type="text" name="searching" placeholder="Search for a country..." class="searching-part-inpt" style="border:none">
    </form>
    <select class="searching-part-slc">
    <option>Filter by Region</option>
    <option>Africa</option>
    <option>America</option>
    <option>Asia</option>
    <option>Europe</option>
    <option>Oceania</option>
    </select>
    </div>
    <div class="container">
    ${cards1.innerHTML}
    </div>
    </section>
    `;
  }
}
