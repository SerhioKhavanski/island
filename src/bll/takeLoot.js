import { increaseHp, changeScreen, findTenge, findCardKey } from "../data/data.js";


export function takeLoot() {
    switch (Math.round(Math.random() * (3 - 1) + 1)) {
        case 1:
            increaseHp();
            changeScreen("hp");
            break;

        case 2:
            findTenge();
            changeScreen("tenge");
            break;

        case 3:
            findCardKey();
            changeScreen("key_card");
            break;
    }
}
