import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        
        return `
            <header>
                <div class="header">
                    <a href = "/">Where in the world?</a>
                    <button id="dark-light-mode"></button>
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