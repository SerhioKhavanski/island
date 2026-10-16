import { HPBar } from "./HPBar.js";
import { StepsBar } from "./StepsBar.js";

export function InfoBar(){
    const infoBar = document.createElement("div")
    infoBar.className = "info-bar"
    infoBar.append(HPBar(), StepsBar())
    return infoBar
}