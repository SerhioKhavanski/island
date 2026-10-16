import { inventory } from "../data/data.js"
import { changeScreen, useSafeKey, decreaseSteps } from "../data/data.js";
import { action } from "./subscribers.js";
import { takeLoot } from "./takeLoot.js";


export function exploreTheSafe(event) {

    if (inventory[2]) {
        takeLoot()
        useSafeKey()
        decreaseSteps()
        return
    }

    changeScreen("hacking")

    const btn = event.target
    btn.disabled = true

    setTimeout(() => {
        if (Math.round(Math.random() * (2 - 1) + 1) === 1) {
            takeLoot()
            action()
            btn.disabled = false
            return
        }
        changeScreen("didn't_hack")
        action()
        btn.disabled = false
    }, 10000)

    decreaseSteps()
}




