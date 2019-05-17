import { NumberHashMap } from '../entities/Collections'

//namespace DevicesLib.meta {
export class DeviceFieldForUI {
    constructor(valueMap?:NumberHashMap<string>){
        if(valueMap){
            this.valueMap = valueMap
        }
    }
    private name: string=''
    private value: number=0
    private key: string=''
    private title: string=''
    private valueString: string=''
    private valueMap: NumberHashMap<string> | null = null

    getValueMap(){
        return this.valueMap
    }
    
    getUnit(): string {
        return this.unit
    }

    setUnit(unit: string) {
        this.unit = unit
    }

    private unit: string=''

    // setNeedFormat(needFormat: boolean) {
    //     this.needFormat = needFormat
    // }

    //private needFormat: boolean =false


    getKey(): string {
        return this.key
    }

    setKey(key: string) {
        this.key = key
    }

    public getName(): string {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getValue(): number {
        return this.value
    }

    setValue(value: number) {
        this.value = value
        if(this.valueMap){
            this.valueString = this.valueMap.getItem(value)
        }
    }

    getTitle(): string {
        return this.title
    }

    setTitle(title: string) {
        this.title = title
    }

    getValueString(): string {
        // if (this.needFormat){
        //     return this.valueString.replace('%s', this.value.toString())
        // }
        return this.valueString
    }

    setValueString(valueString: string) {
        this.valueString = valueString
    }
}
//}