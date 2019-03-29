import { IP } from "./CTL_NJZJ_IP";
import { ByteField } from "../meta/ByteField";
import { DeviceFieldForUI } from "../meta/DeviceFieldForUI";

export abstract class IP_485 extends IP {

    public handleDeviceNo(bytes: number[]): string {
        return '';
    }

    public handleByteField(field: ByteField, bytes: Buffer) {
        //let view = new DataView(bytes);
        if (field.haveValue(
            bytes.readUInt8(field.getStartIndex()),
            bytes.readUInt8(field.getStartIndex() + 1))
        ) {
            this.addField(field);
        }
    }

    public getDeviceFocusFields(): DeviceFieldForUI[] {
        let list = super.getDeviceFocusFields();
        let i = list[1].getValue();
        list[0].setValue(i / 24);
        list[1].setValue(i % 24);
        return list;
    }
}
