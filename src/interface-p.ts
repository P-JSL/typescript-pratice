interface Animal{
    readonly name : string
    eat(food : string) : void
    sleep(hours : number) : void
}

interface Feline{
    meow() : void
}

class Cat implements Animal,Feline{
    name = 'Whiskers'
    eat(food: string) {
        // tslint:disable-next-line:no-console
        console.info("Ate some", food, '. Mmm!')
    }
    sleep(hours: number) {
        // tslint:disable-next-line:no-console
        console.info("Slept for", hours,'hours')
    }
    meow() {
        // tslint:disable-next-line:no-console
        console.info("Meow")
    }
}

//StringDatabase -- typeof , instanceof

type State = {
    [key : string] : string
}

interface StringDatabaseConstructor {
    new(state? : State) : StringDatabase
    from(state : State) : StringDatabase
}
// tslint:disable-next-line:max-classes-per-file
class StringDatabase {
    constructor(public state : State = {}) {
    }
    // @ts-ignore
    state : State = {}
    get(key : string) : string | null {
        return key in this.state ? this.state[key] : null
    }
    set(key : string, value : string) : void {
        this.state[key] = value
    }
    static  from(state : State){
        // tslint:disable-next-line:new-parens
        const db = new StringDatabase
        // tslint:disable-next-line:forin
        for (const key in state){
                db.set(key, state[key])
            }
        return db
    }
}

// 다형성 - generic
// tslint:disable-next-line:max-classes-per-file
class MyMap<K,V>{
    constructor(initialKey : K, initialValue : V) {
    }
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    get(key : K) : V {}
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    set(key : K, value : V) : void{}
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    marge<K1,V1>(map:MyMap<K1, V1>) : MyMap<K | K1, V | V1>{}
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    static of<K,V>(k:K,v:V) : MyMap<K, V>{}
}