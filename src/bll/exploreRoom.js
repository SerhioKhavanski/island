import { decreaseHp, findedSafeKey } from "../data/data.js";
import { action } from "./subscribers.js";

export function exploreTheRoom (){
    switch(Math.round(Math.random() * (2 - 1) + 1)){
        case 1:
            decreaseHp()
            action()
            alert(`Ты попал в ловушку Джокера, у тебя осталось  хп`)
            break;
        case 2:
            findedSafeKey()
            action()
            alert(`Вы нашли ключ от сейфа`)
            break;
    }
}