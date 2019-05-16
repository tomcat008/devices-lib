import { BaseInfoField } from './BaseInfoField'
import { NumberHashMap } from '../entities/Collections';
//namespace DevicesLib.meta {
export class FixedValueField extends BaseInfoField {
    constructor(name:string,title:string,value:number,valueMap?: { [key: number]: string }){
        super();
        this.name = name;
        this.title = title;
        this.value = value;
        if(valueMap){
            this.valueMap = new NumberHashMap<string>(valueMap);
        }
    }
    setValue(value:number){
        this.value = value;
    }

    haveValue(...bytes:number[]):boolean {
        return true;
    }

    getValueString() {
        if (this.valueMap)
            return this.valueMap.getItem(this.value);
        return super.getValueString();
    }
}
//}