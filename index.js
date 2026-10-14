import { Inventory } from "./src/ui/Inventory.js"
import { Button } from "./src/ui/Button.js"
import { exploreTheRoom } from "./src/bll/exploreRoom.js"

const root = document.getElementById('root')

root.append(Inventory(), Button(exploreTheRoom, "Explore the Room"))