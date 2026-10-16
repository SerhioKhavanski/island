import { Inventory } from "./src/ui/Inventory.js"
import { Screen } from "./src/ui/Screen.js"
import { Button } from "./src/ui/Button.js"
import { exploreTheRoom } from "./src/bll/exploreRoom.js"
import { exploreTheSafe } from "./src/bll/exploreTheSafe.js"
import { esc } from "./src/bll/escapeFromIsland.js"
import { InfoBar } from "./src/ui/InfoBar.js"
import { subscriber } from "./src/bll/subscribers.js"
import { steps, hp } from "./src/data/data.js"

const root = document.getElementById('root')

const controls = document.createElement('div')
controls.className = "controls"
controls.append(
    Button(exploreTheRoom, "Исследовать комнату"),
    Button(exploreTheSafe, "Открыть сейф"),
    Button(esc, "Сбежать с острова")
)

root.append(InfoBar(),
            Inventory(), 
            Screen(), 
            controls)


function gameOver() {
     document.querySelectorAll('.btn').forEach(btn => btn.classList.add('hidden'))  
    
}

subscriber(() => {
    if (steps === 0 || hp <= 0) {
        gameOver()
    }
})
