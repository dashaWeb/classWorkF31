import { Cell } from "./cell.js";

export class Grid {
    constructor(gridElement, size = 10) {
        this.size = size;
        this.board = []

        for (let i = 0; i < this.size; i++) {
            let tmp = []
            for (let j = 0; j < this.size; j++) {
                tmp.push(
                    new Cell(gridElement)
                )
            }
            this.board.push(tmp)
        }
        if (this.size == 10) {
            gridElement.className = 'root'
        }
        if (this.size == 18) {
            gridElement.className = 'root medium'
        }
        if (this.size == 30) {
            gridElement.className = 'root hard'
        }
        return this.board
    }
}