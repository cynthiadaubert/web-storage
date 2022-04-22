import { state } from "./state";

import "./components/text"
import "./components/cards"
import "./components/todo-item"

import {initHomePage} from "./page/home"

(function(){
    state.init()
 initHomePage(document.querySelector(".root"))
})()