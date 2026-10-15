import { changeScreen, decreaseHp, findedSafeKey, decreaseSteps } from "../data/data.js";
import { action } from "./subscribers.js";

export function exploreTheRoom (){
    switch(Math.round(Math.random() * (2 - 1) + 1)){
        case 1:
            decreaseHp()
            changeScreen("trap")
            action()
            break;
        case 2:
            findedSafeKey()
            changeScreen("key")
            action()
            break;
    }

    decreaseSteps()
}