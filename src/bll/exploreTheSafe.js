import { inventory } from "../data/data.js"
import { changeScreen, useSafeKey, decreaseSteps } from "../data/data.js";
import { action } from "./subscribers.js";
import { takeLoot } from "./takeLoot.js";


export function exploreTheSafe() {

    if (inventory[2]) {
        takeLoot()
        useSafeKey()

        decreaseSteps()
        return
    }

    changeScreen("hacking")
    action()

    setTimeout(() => {
        if (Math.round(Math.random() * (2 - 1) + 1) === 1) {
            takeLoot()
            return
        }

        changeScreen("didn't_hack")
        action()
    }, 10000)

    decreaseSteps()
}



