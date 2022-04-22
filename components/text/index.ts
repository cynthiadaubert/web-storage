import { state } from "../../state";

class Text extends HTMLElement{
    shadow: ShadowRoot;
    tagName: string;
    tags: string[] = ["h1","p"]
    tag: string = "p";
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"})

        if (this.tags.includes(this.getAttribute("tag"))){
            this.tag = this.getAttribute("tag") || this.tag;
        }

        this.render();
        console.log("imprimo lo que es tag:",this.tag)
    }
    render(){
        const rootElem = document.createElement(this.tag)
        rootElem.textContent = this.textContent
        this.shadow.appendChild(rootElem)

    }
}

customElements.define("my-text",Text)