type Currency = {
    unit : 'EUR' | 'GBP' | 'JPY' | 'USD'
    value : number
}

// @ts-ignore
let Currency = {
    DEFAULT : 'USD',
    from(value : number, unit = Currency.DEFAULT) : Currency {
        return {unit, value}
    }
}

let amountDue : Currency = {
    unit : 'JPY',
    value : 83733.10
}

// 튜플 타입추론 개선

function tuple<T extends unknown[]>(...ts : T) : T{
    return ts
}
let a = tuple(1,true)

// 사용자 정의 타입 안전 장치
function isString(a : unknown):a is string {
    return typeof  a === 'string'
}

console.log(isString('a'))
console.log(isString([7]))

function parseInput(input : string | number){
    let formattedInput : string
    if(isString(input)){
            formattedInput = input.toUpperCase();
    }
}

// 조건부타입
type isString<T> = T extends  string ? true : false
type A = isString<string>
type B = isString<number>

type without<T,U> = T extends U ? never : T

type C = without<boolean | number | string, boolean>

// inter keyword
type ElementType<T> = T extends unknown[] ? T[number] : T
type D = ElementType<number[]>
// inter 이용
type ElementType2<T> = T extends (infer U)[] ? U : T
type F = ElementType2<number[]>
