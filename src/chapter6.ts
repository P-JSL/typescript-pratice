// sub, super
type ExistingUser = {
    id : number,
    name : string
}
type NewUser = {
    name : string
}

function deleteUser(user : {id?:number, name : string}){
    delete user.id
}

let existingUser : ExistingUser ={
    id:123456,
    name : 'Ima User'
}
deleteUser(existingUser)

// type widening
type Options = {
    baseURL :string,
    cacheSize? : number,
    tier?:'prod' | 'dev'
}
class API {
    constructor(private options : Options) {
    }
}
// tslint:disable-next-line:no-unused-expression
new API({baseURL :'https://api.mysite.com',tier :'prod'})


type APIResponse = {
    user : {
        userId : string
        friendList : {
            count : number
            friends : {
                firstName : string
                lastName : string
            }[]
        }
    }
}
type FriendList = APIResponse['user']['friendList']
function renderFriendList(friendList:FriendList){
}
type Friend = FriendList['friends'][number]

type ResponseKey = keyof APIResponse
type UserKeys = keyof APIResponse['user']
type FriendListKeys = keyof APIResponse['user']['friendList']

function get<O extends object,
    K extends keyof  O>(
        o : O,
        k : K
) : O[K] {
    return o[k]
}

type ActivityLog = {
    lastEvent : Date
    events : {
        id : string
        timestamp : Date
        type : 'Read'|'Write'
    }[]
}

// tslint:disable-next-line:one-variable-per-declaration
// @ts-ignore
let activityLog : ActivityLog = {lastEvent : Date,events : { // @ts-ignore
    id : "123", timestamp : Date,type : 'Read'}}
let lastEvent = get(activityLog,'lastEvent')

type Get = <O extends object,
        K1 extends keyof O>(o:O, k1:K1)  => O[K1]