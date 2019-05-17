import { IP } from "./CTL_NJZJ";
import { ByteField } from "../../../meta/ByteField";
import { DeviceFieldForUI } from "../../../meta/DeviceFieldForUI";

export abstract class IP_485 extends IP {

    /**
     * 485数据读取指令
     */
    constructor(){
        super();
        this.BYTE_ARRAY_LENGTH = 1749;
    }
    
    public handleDeviceNo(bytes: number[]): string {
        return '';
    }

    public handleByteField(field: ByteField, bytes: Uint8Array) {
        //let view = new DataView(bytes);
        if (field.haveValue(
            bytes[field.getStartIndex()],
            bytes[field.getStartIndex() + 1])
        ) {
            /*
            if(field.getName()=='se_baojingwendu'){
                console.log('aaaaaaaa');
            }*/
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
