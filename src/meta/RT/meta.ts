import { BaseInfoField as AParentClass } from '../BaseInfoField'
import { NumberHashMap } from '../../entities/Collections';
import { map } from '../../map/map';
import { DeviceFieldForUI } from '../DeviceFieldForUI'

export class BaseInfoField extends AParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string = '', valueMap?: { [key: number]: string }) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
        this.unit = unit;
        if (valueMap) {
            this.valueMap = new NumberHashMap<string>(valueMap);
        }
    }
    haveValue(...bytes: number[]): boolean {
        this.value = (bytes[0] & 0xFF) << 8 | bytes[1] & 0xFF;
        return true;
    }

    getValueString(): string {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return super.getValueString();
    }

}
import { OpenCloseField as EParentClass } from '../OpenCloseField'
export class OpenCloseField extends EParentClass {

    constructor(name: string, startIndex: number, bytesLength: number, title: string,bit:number,valueMap: { [key: number]: string }|null) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
        this.bit = bit;
        if(valueMap){
            this.valueMap = new NumberHashMap<string>(valueMap);
        }
    }

    haveValue(...bytes: number[]): boolean {
        this.value = bytes[0]<<8|bytes[1];
        let i = 1 << this.bit;
        if ((i & this.value) == i) {
            this.value = 1;
        } else {
            this.value = 0;
        }
        return true;
    }

    getValueString(): string {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return super.getValueString();
    }
}
export class DeviceField extends OpenCloseField {
    constructor(name: string, startIndex: number, bytesLength: number, title: string,bit:number, valueMap: { [key: number]: string }) {
        super(name,startIndex,bytesLength,title,bit,valueMap);
    }

    setDeviceFieldForUIKey(fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_DEVICE);
    }
}

export class ExceptionField extends OpenCloseField {
    constructor(name: string, startIndex: number, bytesLength: number, title: string,bit:number) {
        super(name,startIndex,bytesLength,title,bit,null);
    }
    setDeviceFieldForUIKey(fieldForUI:DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_EXCEPTION);
    }
    getValueString(): string {
        return '';
    }
}
import { MockField as DParentClass } from '../MockField'
export class MockField extends DParentClass {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string = '', baseNumber?: number) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
        this.unit = unit;
        if (baseNumber) {
            this.baseNumber = baseNumber;
        }
    }
    haveValue(...bytes: number[]): boolean {
        let i = bytes[0] << 8 | bytes[1];
        //console.log(this.title+' basenumber:='+this.getBaseNumber() )
        this.value = i;
        if (this.getBaseNumber()) {
            this.value = i / this.getBaseNumber();
        }
        return true;
    }
}
export class SettingField extends MockField {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit?: string,baseNumber?: number){
        super(name, startIndex, bytesLength, title, unit,baseNumber);
    }
    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_SETTING);
    }
}