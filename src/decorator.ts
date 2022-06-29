// tslint:disable-next-line:no-empty-interface
interface Payload {
}

// tslint:disable-next-line:no-empty-interface
interface APIPayload {
}

function serializable(param: { new(): APIPayload; prototype: APIPayload }) {

}

// tslint:disable-next-line:no-shadowed-variable
const APIPayload = serializable(class APIPayload{
    // @ts-ignore
    // tslint:disable-next-line:no-empty
    getValue():Payload{}
})

// @ts-ignore
const DecoratoredAPIPayload = serializable(APIPayload)
// @ts-ignore
// tslint:disable-next-line:new-parens
const payload = new DecoratoredAPIPayload
payload.serialize()