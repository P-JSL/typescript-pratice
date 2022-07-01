"use strict";
function deleteUser(user) {
    delete user.id;
}
let existingUser = {
    id: 123456,
    name: 'Ima User'
};
deleteUser(existingUser);
class API {
    constructor(options) {
        this.options = options;
    }
}
// tslint:disable-next-line:no-unused-expression
new API({ baseURL: 'https://api.mysite.com', tier: 'prod' });
function renderFriendList(friendList) {
}
function get(o, k) {
    return o[k];
}
// tslint:disable-next-line:one-variable-per-declaration
// @ts-ignore
let activityLog = { lastEvent: Date, events: {
        id: "123", timestamp: Date, type: 'Read'
    } };
let lastEvent = get(activityLog, 'lastEvent');
//# sourceMappingURL=chapter6.js.map