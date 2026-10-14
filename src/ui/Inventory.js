import {inventory} from "../data/data.js"
import { subscriber } from "../bll/subscribers.js"

export function Inventory(){
    let inventoryTable  = getInventoryTable(inventory)

    function changeInventory(){
        const newInventory = getInventoryTable(inventory)
        inventoryTable.replaceWith(newInventory)
        inventoryTable = newInventory
    }

    subscriber(changeInventory)

    return inventoryTable
}


function getInventoryTable(items){

    const table = document.createElement('table')
    const tr = document.createElement('tr')
    const tdKeyCard = document.createElement('td')
    const tdTenge = document.createElement('td')
    const tdKeySafe = document.createElement('td')

    tdKeyCard.textContent =  "Key Card: "  + items[0]
    tdTenge.textContent = "Tenge: " + items[1]
    tdKeySafe.textContent = "Key Safe: " + items[2]

    tr.append(tdKeyCard, tdTenge, tdKeySafe)
    table.append(tr)
    return table

}