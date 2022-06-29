"use strict";
class Cat {
    constructor() {
        this.name = 'Whiskers';
    }
    eat(food) {
        // tslint:disable-next-line:no-console
        console.info("Ate some", food, '. Mmm!');
    }
    sleep(hours) {
        // tslint:disable-next-line:no-console
        console.info("Slept for", hours, 'hours');
    }
    meow() {
        // tslint:disable-next-line:no-console
        console.info("Meow");
    }
}
// tslint:disable-next-line:max-classes-per-file
class StringDatabase {
    constructor(state = {}) {
        this.state = state;
        // @ts-ignore
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        // tslint:disable-next-line:new-parens
        const db = new StringDatabase;
        // tslint:disable-next-line:forin
        for (const key in state) {
            db.set(key, state[key]);
        }
        return db;
    }
}
// 다형성 - generic
// tslint:disable-next-line:max-classes-per-file
class MyMap {
    constructor(initialKey, initialValue) {
    }
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    get(key) { }
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    set(key, value) { }
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    marge(map) { }
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    static of(k, v) { }
}
//# sourceMappingURL=interface-p.js.map