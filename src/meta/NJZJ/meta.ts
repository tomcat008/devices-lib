import { BaseInfoField as AParentClass } from '../BaseInfoField'
import { DeviceField as BParentClass } from '../DeviceField'
import { NumberHashMap } from '../../entities/Collections';
export class BaseInfoField extends AParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string, valueMap?: { [key: number]: string }) {
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
        this.value = bytes[1] & 0xFF;
        return 0xFF != this.value;
    }

    getValueString(): string {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return super.getValueString();
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
        if (0x7FFF == this.value)
            return false;
        this.value = 0;

        if (this.valueMap) {
            let v = (bytes[0] & 0xFF) | 0x3F;
            if (0xC0 == (v & 0xC0)) {
                this.sb += this.valueMap.getItem(0xC0);
            } else {
                this.sb += this.valueMap.getItem(0x3F);
            }
            this.sb += '/';
            v = (bytes[0] & 0xFF) | 0xCF;
            if (0x30 == (v & 0x30)) {
                this.sb += this.valueMap.getItem(0x30);
            } else {
                this.sb += this.valueMap.getItem(0xCF);
            }
            this.sb += '/';
            v = (bytes[0] & 0xFF) | 0xF0;
            if (0x0F == (v & 0x0F)) {
                this.sb += this.valueMap.getItem(0x0F);
                this.value = (bytes[1] | 0x80) & 0xFF;//最高位补1，表示设备为运行状态
            } else {
                this.sb += this.valueMap.getItem(0xF0);
                this.value = bytes[1] & 0xFF;
            }
        }
        return true;
    }

    getValueString(): string {
        return this.sb;
    }
}
import { ExceptionField as CParentClass } from '../ExceptionField'

export class ExceptionField extends CParentClass {
    constructor(name: string, startIndex: number, bytesLength: number, title: string) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
    }
    haveValue(...bytes: number[]): boolean {
        this.value = bytes[1];
        return this.value == 0xff ? false : (this.value > 0)
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

        if (0x7FFF == i)
            return false;

        let dv = new DataView(new ArrayBuffer(2));
        dv.setInt16(0, i);
        i = dv.getInt16(0);
        this.value = i;
        if (this.getBaseNumber()) {
            this.value = i / this.getBaseNumber();
        }
        return true;
    }
}

export class RanShaoQiField extends DeviceField {
    haveValue(...bytes: number[]): boolean {
        this.value = bytes[1] & 0xFF | (bytes[0] & 0xFF) << 8;

        if (0x7FFF != this.value) {
            this.value = bytes[1] & 0xFF;
            return true;
        }
        return false;
    }

    getValueString(): string {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);

        return super.getValueString();
    }
}

export class RunDaysField extends BaseInfoField {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string) {
        super(name, startIndex, bytesLength, title, unit);
    }

    haveValue(...bytes: number[]): boolean {
        this.value = bytes[1] | (bytes[0] << 8)
        return true;
    }
}
import { DeviceFieldForUI } from '../DeviceFieldForUI'
import { map } from '../../map/map';
export class SettingField extends MockField {

    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit?: string);
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit?: string, baseNumber?: number);
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit?: string, baseNumber?: number, cmdGroupKey?: string, address?: string, minValue?: number, maxValue?: number);
    constructor(name: string, startIndex: number, bytesLength: number, title: string, unit: string = '', baseNumber?: number, cmdGroupKey?: string, address?: string, minValue?: number, maxValue?: number) {
        super(name, startIndex, bytesLength, title, unit, 0);
        if (baseNumber) {
            this.baseNumber = baseNumber;
        }
        if (cmdGroupKey) {
            this.commandGroupKey = cmdGroupKey;
            if (address) {
                this.address = address;
            }
            if (minValue) {
                this.minValue = minValue;
            }
            if (maxValue) {
                this.maxValue = maxValue;
            }
        }
    }
    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(map.KEY_SETTING);
    }
}
import { StartStopField as EParentClass } from '../StartStopField'
import { Command, TimeCommand, SystemCommand } from '../../command/Command'

export class StartStopField extends EParentClass {

    constructor(name: string, startIndex: number, bytesLength: number, title: string) {
        super();
        this.name = name;
        this.startIndex = startIndex;
        this.bytesLength = bytesLength;
        this.title = title;
    }

    haveValue(...bytes: number[]): boolean {
        this.value = bytes[1] | (bytes[0] << 8)
        return 0x7FFF != this.value;
    }

    getValueString(): string {
        let h = (this.value / 60).toString();
        if (2 > h.length)
            h = "0" + h;
        let m = (this.value % 60).toString();
        if (2 > m.length)
            m = "0" + m;

        return h + ":" + m;
    }

    getCommand(): Command {
        let cmd = new TimeCommand();
        cmd.setAddress(this.address);
        cmd.setMaxValue(this.maxValue);
        cmd.setMinValue(this.minValue);
        cmd.initValue(this.value / 60, this.value % 60);
        cmd.setTitle(this.getTitle());
        return cmd;
    }

}