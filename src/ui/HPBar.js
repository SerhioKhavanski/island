import { subscriber } from "../bll/subscribers.js"
import { hp } from "../data/data.js"

export function HPBar (){
    let hpBar = getHPBar(hp)

    function hpBarUpdate (){
        const newHPBar = getHPBar(hp)   
        hpBar.replaceWith(newHPBar) 
        hpBar = newHPBar
    }

    subscriber(hpBarUpdate)

    return hpBar

}

function getHPBar (hp){
    const hpContainer = document.createElement("div")
    hpContainer.className = "hp-container"
    const bar = document.createElement('div');
    bar.className = "hp-bar"
    bar.style.width = `${hp}%`
    hpContainer.append(bar)

    return hpContainer
}