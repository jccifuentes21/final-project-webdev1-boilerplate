import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Homepage");
  }

  async getHTML() {
    return `
    <header>
            <div class="header lightmode" id="header" data-theme = "light">
            <h1 class="header-title"><a class="link-home lightmode" href=http://localhost:8081/ data-theme = "light">Where in the world?</a></h1>
            <div class="header-btn" id="dark-light-mode" data-toggle = "light">
            <span class="iconify" data-icon="bi:moon-fill" style="color: #ccc; font-size: 17px;"></span>
            <span classs="header-darkmode" id="span">Dark Mode</sapn>
            </div>
            </div>
        </header>

            <section id="homepage">
                <div id="backgroundImage">
                    <div id="rectangle">
                        <div id="country">
                            <div id="flagContainer">
                                <img id="flagHP" src="static/css/flag/czech.png"></img>
                            </div>
                            <span id="countryNameHP">Czech Republic</span>
                            <span id="populationHP">Population: 10,698,896</span>
                            <span id="regionHP">Region: Europe</span>
                            <span id="capitalHP">Capital: Prague</span>
                        </div>
                    </div>
                    <button id="explore" onclick="location.href='/countries'">Explore</button>    
                </div>
            </section>

            <section id="footerHP">
                <h3>Final project of CICCC students</h3>
            </section>
        `;
  }
}
