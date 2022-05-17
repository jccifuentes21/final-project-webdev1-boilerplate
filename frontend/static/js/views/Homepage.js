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
                <nav id="headerHP">
                    <h1>Where in the world?</h1>
                    <button id="mode">Dark Mode</button>
                </nav>

            <section id=homepage>
                <div id="backgroundImage">
                    <div id=rectangle>
                        <div id=country></div>
                    </div>
                    <div>
                        <button id="explore">Explore</button>    
                    </div>
                </div>
            </section>

            <section id="footerHP">
                <h3>Final project of CICCC students</h3>
            </section>


            
        
        
        
        
        
        
        
        
        `;
    }
}
