import { Inventory } from "./src/ui/Inventory.js"
import { Screen } from "./src/ui/Screen.js"
import { Button } from "./src/ui/Button.js"
import { exploreTheRoom } from "./src/bll/exploreRoom.js"
import { exploreTheSafe } from "./src/bll/exploreTheSafe.js"
import { HPBar } from "./src/ui/HPBar.js"

const root = document.getElementById('root')

root.append(HPBar(),Inventory(), Screen(), Button(exploreTheRoom, "Explore the Room"), Button(exploreTheSafe, "Explore the Safe"))