// type 대신 interface 사용가능
type Shoe = {
    purpose : string
}

class BalletFlat implements Shoe{
    purpose = 'dancing'
}
class Boot implements Shoe{
    purpose = 'woodcutting'
}

class Sneaker implements Shoe{
    purpose = 'walking'
}

//Factory 구현
let Shoe = {
    create(type : 'BalletFlat' | 'Boot' | 'Sneaker') : Shoe {
        switch (type){
            case "BalletFlat": return new BalletFlat()
            case "Boot": return new Boot()
            case "Sneaker": return new Sneaker()
        }
    }
}