import { screen } from "../data/data.js"
import { subscriber } from "../bll/subscribers.js"

export function Screen(){
    let mainScreen = getScreen(screen)
    let currentId = screen.id
    let currentText = screen.text
    let typeTimer = startTyping(mainScreen.querySelector(".screen-text"), screen.text)

    function changeScreen (){
        if (screen.id === currentId && screen.text === currentText) {
            return
        }

        currentId = screen.id
        currentText = screen.text

        const newMainScreen = getScreen(screen)
        mainScreen.replaceWith(newMainScreen)
        mainScreen = newMainScreen

        clearInterval(typeTimer)
        typeTimer = startTyping(newMainScreen.querySelector(".screen-text"), screen.text)
    }

    subscriber(changeScreen)

    return mainScreen
}

function getScreen (screen){
    const screenContainer = document.createElement("div")
    screenContainer.className = "screen"

    const screenImg = document.createElement("img")
    screenImg.className = "screen-img"
    screenImg.src = screen.img
    screenImg.alt = screen.text

    const h2 = document.createElement("h2")
    h2.className = "screen-text"

    screenContainer.append(screenImg, h2)
    return screenContainer
}

function startTyping (el, text, speed = 28){
    el.textContent = ""
    el.classList.add("typing")

    let i = 0
    const timer = setInterval(() => {
        el.textContent += text[i]
        i++
        if (i >= text.length) {
            clearInterval(timer)
            el.classList.remove("typing")
        }
    }, speed)

    return timer
}