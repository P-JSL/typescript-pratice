"use strict";
function withEZDubug(Class) {
    return class extends Class {
        constructor(...args) {
            super(...args);
        }
        debug() {
            const Name = this.constructor.name;
            const value = this.getDebugValue();
            return Name + '(' + JSON.stringify(value) + ")";
        }
    };
}
// tslint:disable-next-line:max-classes-per-file
class HardToDebugUser {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        };
    }
}
let User = withEZDubug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
user.debug();
//# sourceMappingURL=Mixins.js.map