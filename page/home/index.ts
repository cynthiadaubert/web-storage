import { state } from "../../state";

export function initHomePage(container){
    const div = document.createElement("div");

    const tasks = state.getEnabledTasks();

    div.innerHTML = `
    <header>
    <h1>Mis pendientes</h1>
    <button class="add-button">Agregar</button>
    <ul class="lista"></ul>

    `;

    const listaElem = div.querySelector(".lista")
    //console.log("soy la lista", listaElem)

    function createTasks(items){

    /*         const itemsHTML =  items.map((tarea)=>       
        `
        <my-todo-item title="${tarea.title}" 
        ${tarea.completed ? "checked" : ""}>
        </my-todo-item>
     `
    ); */
    
    listaElem.innerHTML = "";

        for (const item of items) {
            const todoItemElem = document.createElement("todo-item")
            todoItemElem.setAttribute("title",item.title)
            todoItemElem.setAttribute("id", item.id)
            
            if (item.completed) {
                todoItemElem.setAttribute("checked", "true")
            }
            todoItemElem.addEventListener("change", (e: any)=>{
                console.log(e.detail);
                state.changeItemState(e.detail.id, e.detail.value)
            })

            listaElem.appendChild(todoItemElem)
        }   


    }
    
    state.subscribe(()=>{
        console.log("test")
        createTasks(state.getEnabledTasks())
    });

    createTasks(tasks); 

    //console.log("soy las tareas",tasks)

    div.querySelector(".add-button").addEventListener("click", ()=>{
        state.addTask("Desde el boton" , Math.random())
    });

    container.appendChild(div)

}

//<my-todo-item title="hola" checked="true"></my-todo-item>
//<my-todo-item title="chau"></my-todo-item>
//<my-todo-item title="patata"></my-todo-item>