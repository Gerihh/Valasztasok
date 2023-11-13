export default class Jelölt {
    #kerület: string = "";
    #név: string = "";
    #párt: string = "";

    constructor(sor: string) {
        const t: string[] = sor.split(" ");
        this.#kerület = t[0];
        this.#név = t[1];
        this.#párt = t[2];
    }
}
