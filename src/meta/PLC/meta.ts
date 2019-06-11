import { BaseInfoField as AParentClass } from '../BaseInfoField'
import { DeviceField as BParentClass } from '../DeviceField'
import { ExceptionField as CParentClass } from '../ExceptionField'
import { MockField as DParentClass } from '../MockField'
import { OpenCloseField as EParentClass } from '../OpenCloseField'
import { DeviceFieldForUI } from '../DeviceFieldForUI'
import { map } from '../../map/map'
import { Command, FloatCommand } from '../../command/Command'
import { NumberHashMap } from '../../entities/Collections'

export class BaseInfoField extends AParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string, valueMap?: { [key: number]: string }) {
        super()
        this.name = name
        this.startIndex = startIndex
        this.bytesLength = bytesLength
        this.title = title
        this.unit = unit
        if (valueMap) {
            this.valueMap = new NumberHashMap<string>(valueMap)
        }
    }
    haveValue(...bytes: number[]): boolean {
        this.value = ((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF)
        return this.value != 0x7FFF
    }

    getValueString(): string {
        if (null != this.valueMap)
            return this.valueMap.getItem(this.value)
        return super.getValueString()
    }
}

export class DeviceField extends BParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string, valueMap: { [key: number]: string }) {
        super()
        this.name = name
        this.startIndex = startIndex
        this.bytesLength = bytesLength
        this.title = title
        this.valueMap = new NumberHashMap<string>(valueMap)
    }
    haveValue(...bytes: number[]): boolean {
        this.value = ((bytes[0] & 0xFF) << 8) | (bytes[1] & 0xFF)
        return this.value != 0x7FFF
    }

    getValueString(): string {
        if (null != this.valueMap)
            return this.valueMap.getItem(this.value)
        return super.getValueString()
    }
}
export class ExceptionField extends CParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string, bit: number, level:number = ExceptionField.Exception_Waring) {
        super()
        this.level = level
        this.name = name
        this.startIndex = startIndex
        this.bytesLength = bytesLength
        this.title = title
        this.bit = bit
    }
    haveValue(...bytes: number[]): boolean {
        this.value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF
        let i = 1 << this.bit
        if ((i & this.value) == i) {
            this.value = 1
            return true
        } else {
            this.value = 0
            return false
        }
    }
}

export class MockField extends DParentClass {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string, baseNumber?: number) {
        super()
        this.name = name
        this.startIndex = startIndex
        this.bytesLength = bytesLength
        this.title = title
        this.unit = unit
        if (baseNumber) {
            this.baseNumber = baseNumber
        }
    }
    public haveValue(...bytes: number[]): boolean {
        /*
        if (this.getTitle() == '软水箱液位') {
            console.log('软水箱液位')
        }
        */
        let i = bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3]
        if (0x7FFFFFFF == i) {
            return false
        }
        let dv = new DataView(new ArrayBuffer(4))
        dv.setInt32(0, i)
        i = dv.getFloat32(0)
        this.value = i
        
        if (this.getBaseNumber()) {
            this.value = parseFloat((i / this.getBaseNumber()).toFixed(2))
        }
        else{
            this.value = parseFloat(i.toFixed(2))
        }
        return true
        // let data = new ArrayBuffer(4)
        // let view = new Uint8Array(data)

        // view[0] = bytes[0]
        // view[1] = bytes[1]
        // view[2] = bytes[2]
        // view[3] = bytes[3]

        // this.value = (new DataView(data)).getFloat32(0)
        // return true
    }
}

export class OpenCloseField extends EParentClass {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, bit: number) {
        super()
        this.name = name
        this.startIndex = startIndex
        this.bytesLength = bytesLength
        this.title = title
        this.bit = bit
    }

    public haveValue(...bytes: number[]): boolean {
        this.value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF

        let i = 1 << this.bit
        if ((i & this.value) == i) {
            this.value = 1
            return true
        } else {
            this.value = 0
            return false
        }
    }
}

export class SettingField extends MockField {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string)
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string, baseNumber: number)
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string, baseNumber?: number, cmdGroupKey?: string, address?: string, minValue?: number, maxValue?: number)
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string, baseNumber?: number, cmdGroupKey?: string, address?: string, minValue?: number, maxValue?: number) {
        super(name, startIndex, bytesLength, title, unit, 0)
        if (baseNumber) {
            this.baseNumber = baseNumber
        }
        if (cmdGroupKey) {
            this.commandGroupKey = cmdGroupKey
            if (address) {
                this.address = address
            }
            if (minValue) {
                this.minValue = minValue
            }
            if (maxValue) {
                this.maxValue = maxValue
            }
        }
    }

    public setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_SETTING)
    }

    protected createCommandAndInitValue(): Command {
        let cmd = new FloatCommand(this.title,this.address,this.maxValue,this.minValue)
        cmd.initValue(this.getValue())
        return cmd
    }
}
