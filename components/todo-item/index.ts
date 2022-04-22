customElements.define("my-todo-item",
    class extends HTMLElement{
        shadow: ShadowRoot;
        title: string;
        checked: boolean = false;

        constructor(){
            super();
            this.shadow = this.attachShadow({mode: "open"}) 
        }

        connectedCallback(){
            this.title = this.getAttribute("title") || "";
            //this.checked = JSON.parse(this.getAttribute("checked") || "false");
            this.checked = this.hasAttribute("checked")
            this.id = this.getAttribute("id")
            // console.log("tiene atributo",this.hasAttribute("checked"))
            // console.log("soy el checked",this.getAttribute("checked"));

            const style = document.createElement("style");
            style.innerHTML = `
       
            .root {
            font-size: 18px;
            border-radius: 4px;
            padding: 22px 13px;
            background-color: #FFF599;
            }

            .titulo.checked{
            text-decoration:line-through;
            }
       
            `;

            this.render();

            this.shadow.appendChild(style)
 
        }

        addListeners(){
            const checkedElem = this.shadow.querySelector(".checkbox-input")
            checkedElem.addEventListener("click", (event)=>{
             const target = event.target as any;
                const evento = new CustomEvent("change", {
                    detail: {
                        id: this.id,
                        value: target.checked,
                    }
                })
                this.dispatchEvent(evento)
            });
        }

        render(){  

            const div = document.createElement("div")
            div.innerHTML = `
        
            <div class="root">
                <h4 class="titulo" ${this.checked ? "checked" : ""}>${this.title}</h4>
                    <div>
                    <input class="checkbox-input" type="checkbox" ${this.checked ? "checked" : ""} />
                </div>
            
            </div>
        
            `;

        
            this.shadow.appendChild(div)
            this.addListeners()
        }  
        
        

})

