export class NumberUtil{
    static NumberToString(x: number,stringType:number=10, length: number = 10): string {
        let str = x.toString(stringType)
        for (let i = str.length; i < length; i++) {
            str = ('0' + str)
        }
        return str
    }
}