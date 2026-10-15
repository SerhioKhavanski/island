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


function exploreTheRoom (hp, inventory){
    switch(Math.round(Math.random() * (2 - 1) + 1)){
        case 1:
            hp = hp - Math.round(Math.random() * (20 - 10) + 10)
            alert(`Ты попал в ловушку Джокера, у тебя осталось ${hp} хп`)
            break;
        case 2:
            inventory[2] = true
            alert(`Вы нашли ключ от сейфа`)
            break;
    }
    return [hp, inventory]
}

function exploreTheSafe(hp, inventory){

    if(inventory[2]){

        switch(Math.round(Math.random() * (3 - 1) + 1)){
            case 1:
                hp = hp + Math.round(Math.random() * (20 - 10) + 10)
                if(hp > 100){
                    hp = 100
                }
                alert(`Ты залутал зельку на хп у тебя ${hp} хп`)
                break;

            case 2:
                let findTenge = Math.round(Math.random() * (100 - 50) + 50)
                inventory[1] += findTenge
                alert(`Вы нашли ${findTenge} тенге, у тебя ${inventory[1]}`)
                break;
                
            case 3:
                inventory[0] = true
                alert(`Вы нашли ключ-карту с острова`)
                break;
        }
        inventory[2] = false
    }
    else{
        alert("У вас нет ключа, вы пытаетесь взломать сейф")

        switch(Math.round(Math.random() * (2 - 1) + 1)){

            case 1:
                alert("Вы взломали сейф")
                switch(Math.round(Math.random() * (3 - 1) + 1)){
                    case 1:
                        hp = hp + Math.round(Math.random() * (20 - 10) + 10)
                        if(hp > 100){
                            hp = 100
                        }
                        alert(`Ты залутал зельку на хп у тебя ${hp} хп`)
                        break;

                    case 2:
                        let findTenge = Math.round(Math.random() * (100 - 50) + 50)
                        inventory[1] += findTenge
                        alert(`Вы нашли ${findTenge} тенге, у тебя ${inventory[1]}`)
                        break;
                        
                    case 3:
                        inventory[0] = true
                        alert(`Вы нашли ключ-карту с острова`)
                        break;
                    }

                break;
            
            case 2:
                alert("Вы не взломали сейф")
            break;
        }

    }
    return [hp, inventory]
}




