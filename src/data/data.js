let hp = 100
export let inventory = [false, 0, false]
let steps = 10

export function decreaseHp (){
    hp = hp - Math.round(Math.random() * (20 - 10) + 10)
}

export function findedSafeKey () {
    inventory[2] = true
}

export function decreaseSteps (){
    steps--
}