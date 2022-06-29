type ClassConstructor<T> = new (...args : any[]) => T

function withEZDubug<C extends ClassConstructor<{getDebugValue():object}>>(Class : C){
    return class extends Class{
        constructor(...args : any[]) {
            super(...args);
        }
        debug(){
            const Name = this.constructor.name
            const value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ")"
        }
    }
}

// tslint:disable-next-line:max-classes-per-file
class HardToDebugUser{
    constructor(private id:number,
                private firstName : string,
                private lastName : string) {
    }
    getDebugValue(){
        return {
            id : this.id,
            name : this.firstName + ' ' + this.lastName
        }
    }
}

let User = withEZDubug(HardToDebugUser)
let user = new User(3,'Emma','Gluzman')
user.debug()