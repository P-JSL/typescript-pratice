"use strict";
function serializable(param) {
}
// tslint:disable-next-line:no-shadowed-variable
const APIPayload = serializable(class APIPayload {
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    getValue() { }
});
// @ts-ignore
const DecoratoredAPIPayload = serializable(APIPayload);
// @ts-ignore
// tslint:disable-next-line:new-parens
const payload = new DecoratoredAPIPayload;
payload.serialize();
//# sourceMappingURL=decorator.js.map