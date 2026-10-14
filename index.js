import { Inventory } from "./src/ui/Inventory.js"
import { Screen } from "./src/ui/Screen.js"
import { Button } from "./src/ui/Button.js"
import { exploreTheRoom } from "./src/bll/exploreRoom.js"

const root = document.getElementById('root')

root.append(Inventory(), Screen(), Button(exploreTheRoom, "Explore the Room"))