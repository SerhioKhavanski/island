import { inventory } from "../data/data.js";
import { changeScreen,decreaseSteps } from "../data/data.js";

export function esc(){
    if(inventory[0]){
        changeScreen("win")
        decreaseSteps()
        return
    }

    changeScreen("exit")
    decreaseSteps()
}
