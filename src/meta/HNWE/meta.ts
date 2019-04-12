import { BaseInfoField as AParentClass } from '../BaseInfoField'
import { DeviceField as BParentClass } from '../DeviceField'
import { NumberHashMap } from '../../entities/Collections';

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
export class DemandField extends BaseInfoField {

    haveValue(...bytes: number[]): boolean {
        if (0x7F == bytes[0]) {
            this.value = 1;
        }
        else {
            this.value = 0;
        }
        return true;
    }
}
export class DeviceField extends BParentClass {
    protected sb: string = "";
    constructor(name: string, startIndex: number, bytesLength: number, title: string, valueMap: { [key: number]: string }) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
        this.valueMap = new NumberHashMap<string>(valueMap);
    }
    haveValue(...bytes: number[]): boolean {
        this.value = bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;
        if (0x7FFF == this.value) {
            this.value = 1;
        }
        if (0x0000 == this.value) {
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
import { ExceptionField as CParentClass } from '../ExceptionField'

export class ExceptionField extends CParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string,valueMap: { [key: number]: string }) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
        this.valueMap = new NumberHashMap(valueMap);
    }
    haveValue(...bytes: number[]): boolean {
        this.value = bytes[0] & 0xFF;
        if (this.value >= 1 && this.value <= 99){
            this.title = this.getValueString();
            return true;
        }
        else
            return false;
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

        if (0x8000 == i)
            return false;

        this.value = i;
        if (this.getBaseNumber()) {
            this.value = i / this.getBaseNumber();
        }
        return true;
    }
}
import { OpenCloseField as EParentClass } from '../OpenCloseField'
export class OpenCloseField extends EParentClass {

    constructor(name: string, startIndex: number, bytesLength: number, title: string,bit:number,valueMap: { [key: number]: string }) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
        this.bit = bit;
        this.valueMap = new NumberHashMap<string>(valueMap);
    }

    haveValue(...bytes: number[]): boolean {
        this.value = bytes[0];
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
import { DeviceFieldForUI } from '../DeviceFieldForUI'
import { map } from '../../map/map';
export class SettingField extends MockField {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit?: string){
        super(name, startIndex, bytesLength, title, unit, 0);
    }
    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_SETTING);
    }
}