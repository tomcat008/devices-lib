import { ByteField } from './ByteField'
import { DeviceFieldForUI } from './DeviceFieldForUI'
import { NumberHashMap } from '../entities/Collections';
//namespace DevicesLib.meta {
export class CountShowField extends ByteField {

   //protected valueMap: NumberHashMap<string>|null=null;
    constructor(groupKey:string,name:string,title:string,unit:string){
        super();
        this.groupKey = groupKey;
        this.name = name;
        this.title = title;
        this.unit = unit;
        // if(valueMap){
        //     this.valueMap = new NumberHashMap(valueMap);
        // }
    }

    /**
     * 分组Key
     */

    private groupKey: string='';


    getValue(): number {
        return this.value;
    }


    haveValue(...bytes: number[]): boolean {
        this.value = bytes[0];
        return true;
    }

    setDeviceFieldForUIKey(fieldForUI: DeviceFieldForUI) {
        fieldForUI.setKey(this.groupKey);
    }
}
//}