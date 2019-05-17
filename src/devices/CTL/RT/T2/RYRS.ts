import { DeviceFieldForUI } from "../../../../meta/DeviceFieldForUI"
import { List } from "../../../../entities/Collections"
import { CTL_RT } from "../RT"

export = class CTL_RT_T2_RYRS extends CTL_RT {
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie"

    constructor(){
        super()
        this.BYTE_ARRAY_LENGTH=99
    }
    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields()
        list.push(map.getItem("mo_chushuiwendu"))
        list.push(map.getItem("mo_huishuiwendu"))
        list.push(map.getItem("mo_paiyanwendu"))
    }
    
    protected getPowerInfo() {
        let map = this.getOpenCloseFields()
        let i = map.getItem(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
        if (i > 0) {
            return map.getItem(CTL_RT_T2_RYRS.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0
        }
        return 0
    }
}