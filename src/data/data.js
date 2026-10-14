let hp = 100
export let inventory = [false, 0, false]
let steps = 10

export let screen = {
    img: "src/img/main_screen.png",
    text: "Добро пожаловать на чудо остров, поробуй отсюда сбежать"
} 

const screens = [
    {
        img: "src/img/main_screen.png",
        text: "Добро пожаловать на чудо остров, поробуй отсюда сбежать"
    } ,
    {
        img: "src/img/win.png",
        text: "Ты сбежал с чудо острова, молодец !"
    } ,
    {
        img: "src/img/loose.png",
        text: "Тебе не удалось сбежать с чудо острова, теперь ты здесь навеки "
    } ,
    {
        img: "src/img/trap.jfif",
        text: "Ты попал в ловушку Джокера"
    } ,
    {
        img: "src/img/key.jfif",
        text: "Ты нашёл ключ от сейфа, поздравляю !"
    } ,
    {
        img: "src/img/safe.jfif",
        text: "Ты нашёл сейф !"
    } ,
    {
        img: "src/img/exit.jfif",
        text: "Ты нашёл выход но у тебя нету ключа"
    } ,
]


export function changeScreen(room){

    switch(room){

        case "win":
            screen = screens[1]
        break;

        case "loose":
            screen = screens[2]
        break;

        case "trap":
            screen = screens[3]
        break;

        case "key":
            screen = screens[4]
        break;

        case "safe":
            screen = screens[5]
        break;

        case "exit":
            screen = screens[6]
        break;

        default:
            screen = screens[0]
        break;

    }
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