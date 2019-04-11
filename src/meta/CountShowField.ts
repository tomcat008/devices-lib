import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
//namespace DevicesLib.meta {
export class CountShowField extends ByteField {

    constructor(name:string,title:string,unit:string){
        super();
        this.name = name;
        this.title = title;
        this.unit = unit;
    }
    setGroupKey(groupKey: string) {
        this.groupKey = groupKey;
    }

    /**
     * 分组Key
     */

    private groupKey: string='';


    getValue(): number {
        return 0;
    }


    haveValue(bytes: any): boolean {
        return true;
    }

    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(this.groupKey);
    }

}
//}