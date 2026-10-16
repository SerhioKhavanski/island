import { action } from "../bll/subscribers.js"

export let hp = 100
export let inventory = [false, 0, false]
let hpPotion = 0
let tenge = 0
export let steps = 10
const screens = [
    {
        id:"main_screen",
        img: "src/img/main_screen.png",
        text: "Добро пожаловать на Чудо-остров! Попробуй отсюда сбежать."
    } ,
    {
        id:"win",
        img: "src/img/win.png",
        text: "Ты сбежал с Чудо-острова. Молодец!"
    } ,
    {
        id:"loose",
        img: "src/img/loose.png",
        text: "Тебе не удалось сбежать с Чудо-острова. Теперь ты здесь навеки."
    } ,
    {
        id:"trap",
        img: "src/img/trap.jfif",
        text: "Ты попал в ловушку Джокера."
    } ,
    {
        id:"key",
        img: "src/img/key.jfif",
        text: "Ты нашёл ключ от сейфа. Поздравляю!"
    } ,
    {
        id:"safe",
        img: "src/img/safe.jfif",
        text: "Ты нашёл сейф!"
    } ,
    {
        id:"exit",
        img: "src/img/exit.jfif",
        text: "Ты нашёл выход, но у тебя нет ключа."
    } ,
    {
        id:"hacking",
        img: "src/img/hacking.jpg",
        text: "У тебя нет ключа от сейфа. Ты пытаешься взломать сейф..."
    } ,
    {
        id:"didn't_hack",
        img: "src/img/didn't_hack.jpg",
        text: "Ты не смог взломать сейф."
    } ,
    {
        id:"hp",
        img: "src/img/hp.jpg",
        text: "Ты взломал сейф и теперь у тебя есть зелье HP на "
    } ,
    {
        id:"key_card",
        img: "src/img/key_card.jpg",
        text: "Ты нашёл ключ-карту. Теперь ты можешь сбежать с острова!"
    } ,
    {
        id:"tenge",
        img: "src/img/tenge.jpg",
        text: "Ты нашёл "
    } 

]
export let screen = screens[0]


export function changeScreen(room){

    if(room === screens[9].id){
        screen = { ...screens[9], text: screens[9].text + hpPotion }
        return 
    }

    if(room === screens[11].id){
        screen = { ...screens[11], text: screens[11].text + `${tenge} тенге` }
        return 

    }

   screen = screens.find(s => s.id === room)
}

export function increaseHp (){

    hpPotion = Math.round(Math.random() * (20 - 10) + 10);
    hp = hp + hpPotion  
    if (hp > 100) {
        hp = 100;
    }
}

export function findTenge (){
    tenge = Math.round(Math.random() * (100 - 50) + 50);
    inventory[1] += tenge;
}

export function decreaseHp (){
    hp = hp - Math.round(Math.random() * (20 - 10) + 10)
    action()

    if (hp <= 0) {
        changeScreen("loose")
        action()
    }
}

export function findedSafeKey () {
    inventory[2] = true
}

export function useSafeKey () {
    inventory[2] = false
}

export function findCardKey () {
    inventory[0] = true
}

export function decreaseSteps() {
    if (steps > 0) {
        steps--
        action() 
        
        if (steps === 0) {
            changeScreen("loose") 
            action()             
        }
    }
}