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

    const container = document.createElement('div')
    container.className = "inventory"

    const slots = [
        { label: "Ключ-карта", value: items[0] ? "есть" : "нет", active: items[0] },
        { label: "Тенге", value: items[1], active: items[1] > 0 },
        { label: "Ключ от сейфа", value: items[2] ? "есть" : "нет", active: items[2] }
    ]

    slots.forEach(slot => {
        const cell = document.createElement('div')
        cell.className = "inventory-slot" + (slot.active ? " active" : "")

        const label = document.createElement('span')
        label.className = "inventory-label"
        label.textContent = slot.label

        const value = document.createElement('span')
        value.className = "inventory-value"
        value.textContent = slot.value

        cell.append(label, value)
        container.append(cell)
    })

    return container
}