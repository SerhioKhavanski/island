import { inventory } from "../data/data.js";
import { changeScreen,decreaseSteps } from "../data/data.js";
import { action } from "../bll/subscribers.js";

export function esc(){
    if(inventory[0]){
        changeScreen("win")
        action()

        decreaseSteps()
        return
    }

    changeScreen("exit")
    action()
    
    decreaseSteps()
}