import { steps } from "../data/data.js"
import { subscriber } from "../bll/subscribers.js"

export function StepsBar (){
    let stepsBar = getSteps(steps)

    function updateSteps(){
        const newStepBar = getSteps(steps)
        stepsBar.replaceWith(newStepBar)
        stepsBar = newStepBar   
    }

    subscriber(updateSteps)

    return stepsBar
}

function getSteps (steps){
    const stepContainer = document.createElement("div")
    stepContainer.className = "steps-container"

    const label = document.createElement("span")
    label.className = "steps-label"
    label.textContent = "Шаги"

    const value = document.createElement("span")
    value.className = "steps-value"
    value.textContent = steps

    stepContainer.append(label, value)
    return stepContainer
}