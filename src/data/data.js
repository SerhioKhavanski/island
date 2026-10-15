export let hp = 100
export let inventory = [false, 0, false]
let steps = 10

export let screen = {
    img: "src/img/main_screen.png",
    text: "Добро пожаловать на чудо остров, поробуй отсюда сбежать"
} 

const screens = [
    {
        id:"main_screen",
        img: "src/img/main_screen.png",
        text: "Добро пожаловать на чудо остров, поробуй отсюда сбежать"
    } ,
    {
        id:"win",
        img: "src/img/win.png",
        text: "Ты сбежал с чудо острова, молодец !"
    } ,
    {
        id:"loose",
        img: "src/img/loose.png",
        text: "Тебе не удалось сбежать с чудо острова, теперь ты здесь навеки "
    } ,
    {
        id:"trap",
        img: "src/img/trap.jfif",
        text: "Ты попал в ловушку Джокера"
    } ,
    {
        id:"key",
        img: "src/img/key.jfif",
        text: "Ты нашёл ключ от сейфа, поздравляю !"
    } ,
    {
        id:"safe",
        img: "src/img/safe.jfif",
        text: "Ты нашёл сейф !"
    } ,
    {
        id:"exit",
        img: "src/img/exit.jfif",
        text: "Ты нашёл выход но у тебя нету ключа"
    } ,
    {
        id:"hacking",
        img: "src/img/hacking.jpg",
        text: "У тебя нет ключа от сейфа ты пытаешься взломать сейф"
    } ,
    {
        id:"didn't_hack",
        img: "src/img/didn't_hack.jpg",
        text: "Ты не смог взломать сейф"
    } ,
    {
        id:"hp",
        img: "src/img/hp.jpg",
        text: "Ты взломал сейф и теперь у тебя есть зелье hp"
    } ,
    {
        id:"key_card",
        img: "src/img/key_card.jpg",
        text: "Ты нашёл ключ-карту, теперь ты можешь сбежать с острова"
    } ,
    {
        id:"tenge",
        img: "src/img/tenge.jpg",
        text: "Ты нашёл тенге"
    } 

]


export function changeScreen(room){

   screen = screens.find(s => s.id === room)
}


export function decreaseHp (){
    hp = hp - Math.round(Math.random() * (20 - 10) + 10)
}

export function findedSafeKey () {
    inventory[2] = true
}

export function decreaseSteps (){
    steps--
}