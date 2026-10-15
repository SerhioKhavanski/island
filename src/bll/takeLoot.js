import { increaseHp, changeScreen, findTenge, findCardKey } from "../data/data.js";
import { action } from "./subscribers.js";

export function takeLoot() {
    switch (Math.round(Math.random() * (3 - 1) + 1)) {
        case 1:
            increaseHp();
            changeScreen("hp");
            action();
            break;

        case 2:
            findTenge();
            changeScreen("tenge");
            action();
            break;

        case 3:
            findCardKey();
            changeScreen("key_card");
            action();
            break;
    }
}
