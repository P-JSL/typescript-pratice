"use strict";
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
//Factory 구현
let Shoe = {
    create(type) {
        switch (type) {
            case "BalletFlat": return new BalletFlat();
            case "Boot": return new Boot();
            case "Sneaker": return new Sneaker();
        }
    }
};
//# sourceMappingURL=factoryPattern.js.map