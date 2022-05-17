import AbstractView from "./AbstractView.js";


export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Homepage");
    }

    async getHTML() {
        // const div = document.createElement("div");
        // const section = document.createElement("section")
        
        return `
            <section id=header>
                <div id="header">
                    <h1>Where in the world?</h1>
                    <button id="mode">Dark Mode</button>
                </div>
            </section>

            <section id=homepage>
                <div id="backgroundImage">
                    <div id=rectangle></div>
                        <div id=country></div>
                </div>
                    <button id="explore">Explore</button>    
                </div>
            </section>

            <section id="footer">
                <h3>Final project of CICCC students</h3>
            </section>


            
        
        
        
        
        
        
        
        
        `;
    }
}