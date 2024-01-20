export default class TicTacToeModel {
  #list = [];
  #aktJatekos = "X";

  constructor() {
    this.#list = ["", "", "", "", "", "", "", "", ""];
  }

  getList() {
    return this.#list;
  }

  setAllapot(id) {
    this.#list[id] = this.#aktJatekos;
    if (this.#aktJatekos === "O") {
      this.#aktJatekos = "X";
    } else {
      this.#aktJatekos = "O";
    }
  }

  getKov() {
    return this.#aktJatekos;
  }
}
