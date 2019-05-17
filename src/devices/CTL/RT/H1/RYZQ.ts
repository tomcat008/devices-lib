import { CTL_RT } from "../RT"
import { List } from "../../../../entities/Collections"
import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI"

export = class CTL_RT_H1_RYZQ extends CTL_RT {


    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie"

    constructor(){
        super()
        this.BYTE_ARRAY_LENGTH=151
    }

    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields()
        list.push(map.getItem("mo_zhengqiyali"))
    }

    protected getPowerInfo() {
        return 0
    }
}