"use strict";
class Game {
    constructor() {
        this.pieces = Game.makePieces();
    }
    static makePieces() {
        return [
            //Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            //Queen
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),
            //Bishop
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
        ];
    }
}
// @ts-ignore
// tslint:disable-next-line:max-classes-per-file
class King extends Piece {
    canMoveTo(position) {
        const distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    }
}
// @ts-ignore
// tslint:disable-next-line:max-classes-per-file
class Queen extends Piece {
}
// @ts-ignore
// tslint:disable-next-line:max-classes-per-file
class Bishop extends Piece {
}
// @ts-ignore
// tslint:disable-next-line:max-classes-per-file
class Knight extends Piece {
}
// @ts-ignore
// tslint:disable-next-line:max-classes-per-file
class Rook extends Piece {
}
// @ts-ignore
// tslint:disable-next-line:max-classes-per-file
class Pawn extends Piece {
}
// tslint:disable-next-line:max-classes-per-file
class Position {
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    }
}
// tslint:disable-next-line:max-classes-per-file
class Piece {
    constructor(color, file, rank) {
        this.color = color;
        // @ts-ignore
        this.position = new Position(file, rank);
    }
    moveTo(position) {
        this.position = position;
    }
}
//# sourceMappingURL=chess.js.map