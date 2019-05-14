import { CTL_RT } from "../RT";


export class CTL_RT_X1_Ts extends CTL_RT {
    constructor(){
        super();
        this.BYTE_ARRAY_LENGTH=111;
    }
    getSubDeviceType():string{
        let t = this.getSettingFields().getItem('se_dangqianmoshi').getValue().toString();
        //console.log('sub:='+t)
        return t;
    }
}