import { NumberHashMap } from '../entities/Collections'
import { ExceptionField } from './ExceptionField';

//namespace DevicesLib.meta {
export class DeviceFieldForUI {
    constructor(valueMap?: NumberHashMap<string>) {
        if (valueMap) {
            this.valueMap = valueMap
        }
    }
    private name: string = ''
    private value: number | null = 0
    private key: string = ''
    private title: string = ''
    private valueString: string | null = null
    private exceptionLevel: number | null = null
    private valueMap: NumberHashMap<string> | null = null

    getValueMap() {
        return this.valueMap
    }

    getUnit(): string {
        return this.unit
    }

    setUnit(unit: string) {
        this.unit = unit
    }

    setExcptionLevel(level: number) {
        this.exceptionLevel = level;
    }
    private unit: string = ''

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
        if (this.value)
            return this.value
        return 0
    }

    setValue(value: number) {
        this.value = value
        if (this.valueMap) {
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
        if (this.valueString)
            return this.valueString
        return ''
    }

    setValueString(valueString: string) {
        this.valueString = valueString
    }

    getExceptionLevel() {
        if (this.exceptionLevel)
            return this.exceptionLevel
        return ExceptionField.Exception_NULL
    }
}
//}