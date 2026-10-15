import { exploreTheSafe } from "./src/bll/exploreTheSafe"

let hp = 100
let inventory = [false, 0, false]
let steps = 10
let choose
let out = false


while(steps > 0){
    do
        choose = Number(prompt(`кол-во шагов ${steps}\nСделай выбор\n1 - исследовать комнату\n2 - открыть сейф\n3 - убежать с острова через турникет`))
    while(choose === 1 && choose === 2 && choose === 3)

    switch(choose){

        case 1:
            let [hpF, inventoryF] = exploreTheRoom(hp, inventory)

            if(hpF <= 0){
                alert("Ты умер")
                break;
            }

            hp = hpF
            inventory[2] = inventoryF[2]

            steps--

            break;

        case 2:

            let [hpS, inventoryS] = exploreTheSafe(hp, inventory)
            hp = hpS
            inventory[0] = inventoryS[0]
            inventory[1] = inventoryS[1]
            inventory[2] = inventoryS[2]
            steps--

            break;

            

        case 3:
            if(inventory[0]){
                alert("Ты сбежал с чудо острава!!!!")
                out = true
            }
            else{
                alert("Капча не пройдена")
                steps--
            }
            break;
        
    }

    if(out){
        break;
    }
}
if(steps === 0){
    alert("Ты проиграл и не успел убежать с сотрова")
}





