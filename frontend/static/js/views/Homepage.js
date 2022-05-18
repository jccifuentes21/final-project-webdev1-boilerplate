import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        
        return `
            <div id="headerHP">
                <h1 id="nameHP">Where in the world?</h1>
                <button id="mode">Dark Mode</button>
            </div>

            <section id=homepage>
                <div id="backgroundImage">
                    <div id=rectangle>
                        <div id=country></div>
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