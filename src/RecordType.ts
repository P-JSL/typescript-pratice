type Weekday = 'Mon' |'Tue'|'Wed'|'Thr'| 'Fri'
type Day = Weekday | 'Sat' | 'Sun'
/*
let nextDay : Record<Weekday, Day> = {
    Mon : 'Tue'
}*/
/*
let nextDay : { [K in Weekday] : Day} = {
    Mon : 'Tue'
}*/
/*
type MyMappedType = {
    [Key in UnionType] : ValueType
}*/

// 내장맵핑된 타입
/*
*  Record<Keys, Values> : Keys타입의 키와 Values타입을 갖는 객체
*  Partial<Object> : Object 의 모든 필드를 선택형표시
*  Required<Object> : Object의 모든 필드를 필수형으로 표시
*  Readonly<Object> : Object의 모든 필드를 읽기 전용으로 표시
*  Pick<Object, Keys> : 주어진 Keys에 대응하는 Object의 서브타입을 반환
* */