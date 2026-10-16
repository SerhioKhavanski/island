import { changeScreen, decreaseHp, findedSafeKey, decreaseSteps } from "../data/data.js";

export function exploreTheRoom (){
    switch(Math.round(Math.random() * (2 - 1) + 1)){
        case 1:
            changeScreen("trap")
            decreaseHp()
            break;
        case 2:
            findedSafeKey()
            changeScreen("key")
            break;
    }

    decreaseSteps()
}
