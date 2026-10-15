import { inventory } from "../data/data.js"
import { changeScreen, increaseHp, findTenge, findCardKey } from "../data/data.js";
import { action } from "../bll/subscribers.js";

export function exploreTheSafe() {

    if (inventory[2]) {

        switch (Math.round(Math.random() * (3 - 1) + 1)) {
            case 1:
                increaseHp()
                changeScreen("hp")
                action()
                break;

            case 2:
                findTenge()
                changeScreen("tenge")
                action()
                break;

            case 3:
                findCardKey()
                changeScreen("key_card")
                action()
                break;
        }
        inventory[2] = false;
    }
    else {
        alert("У вас нет ключа, вы пытаетесь взломать сейф");

        switch (Math.round(Math.random() * (2 - 1) + 1)) {

            case 1:
                alert("Вы взломали сейф");
                switch (Math.round(Math.random() * (3 - 1) + 1)) {
                    case 1:
                        hp = hp + Math.round(Math.random() * (20 - 10) + 10);
                        if (hp > 100) {
                            hp = 100;
                        }
                        alert(`Ты залутал зельку на хп у тебя ${hp} хп`);
                        break;

                    case 2:
                        let findTenge = Math.round(Math.random() * (100 - 50) + 50);
                        inventory[1] += findTenge;
                        alert(`Вы нашли ${findTenge} тенге, у тебя ${inventory[1]}`);
                        break;

                    case 3:
                        inventory[0] = true;
                        alert(`Вы нашли ключ-карту с острова`);
                        break;
                }

                break;

            case 2:
                alert("Вы не взломали сейф");
                break;
        }

    }
    return [hp, inventory];
}
