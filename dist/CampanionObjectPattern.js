"use strict";
// @ts-ignore
let Currency = {
    DEFAULT: 'USD',
    from(value, unit = Currency.DEFAULT) {
        return { unit, value };
    }
};
let amountDue = {
    unit: 'JPY',
    value: 83733.10
};
// 튜플 타입추론 개선
function tuple(...ts) {
    return ts;
}
let a = tuple(1, true);
// 사용자 정의 타입 안전 장치
function isString(a) {
    return typeof a === 'string';
}
console.log(isString('a'));
console.log(isString([7]));
function parseInput(input) {
    let formattedInput;
    if (isString(input)) {
        if (typeof input !== "number") {
            formattedInput = input.toUpperCase();
        }
    }
}
//# sourceMappingURL=CampanionObjectPattern.js.map