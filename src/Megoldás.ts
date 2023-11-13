import Jelölt from "./Jelölt";
import fs from "fs";

export default class Megoldás {
    #jelöltek: Jelölt[] = [];

    get jelöltekSzáma(): number {
        return this.#jelöltek.length;
    }
}
