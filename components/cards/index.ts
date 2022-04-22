import { state } from "../../state";

customElements.define("my-card",
class extends HTMLElement{
    shadow: ShadowRoot;
    tagName: string;

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"})

        this.render();
       const style = document.createElement("style");
       style.innerHTML = `
       
       .root {
           border-radius: 4px;
           padding: 22px 13px;
           background-color: #FFF599;
       }
       
       `;


       this.shadow.appendChild(style)
    }
    render(){
        
    
        this.shadow.innerHTML = `
        <div class="root" >${this.innerHTML}</div>
        `;
    }

})

