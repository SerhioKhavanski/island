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

    const label = document.createElement("span")
    label.className = "hp-label"
    label.textContent = "Здоровье"

    const value = document.createElement("span")
    value.className = "hp-value"
    value.textContent = hp

    const track = document.createElement("div")
    track.className = "hp-track"

    const bar = document.createElement('div')
    bar.className = "hp-bar"
    bar.style.width = `${hp}%`

    if (hp > 60) {
        bar.style.background = "linear-gradient(90deg, #3fae5a, #7ed957)"
    } else if (hp > 30) {
        bar.style.background = "linear-gradient(90deg, #d99a2b, #f6d987)"
    } else {
        bar.style.background = "linear-gradient(90deg, #a12b1d, #e5533d)"
    }

    track.append(bar)
    hpContainer.append(label, value, track)

    return hpContainer
}