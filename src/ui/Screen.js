import { screen } from "../data/data.js"
import { subscriber } from "../bll/subscribers.js"

export function Screen(){
    let mainScreen = getScreen(screen) 

    function changeScreen (){
        const newMainScreen = getScreen(screen)
        mainScreen.replaceWith(newMainScreen)
        mainScreen = newMainScreen
    }

    subscriber(changeScreen)


    return mainScreen
}

function getScreen (screen){
    const screenContainer = document.createElement("div")
    const screenImg = document.createElement("img")
    const h2 = document.createElement("h2")
    h2.textContent = screen.text
    screenImg.src = screen.img
    screenImg.width = "500"
    screenContainer.append(screenImg, h2)
    return screenContainer
}