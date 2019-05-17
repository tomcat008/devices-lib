
import { CTL_RT } from '../../RT'
import { List } from '../../../../../entities/Collections'
import { DeviceFieldForUI } from '../../../../../meta/DeviceFieldForUI'
import { CTL_RT_T3_RYZQ_Ts } from '../AScript/RYZQ'


export = class CTL_RT_T3_RYZQ_YLBSQ extends CTL_RT_T3_RYZQ_Ts {
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhediaojie/zengdadiaojie"

    protected addFocusFields(list:List<DeviceFieldForUI>){
        let map = this.getMockFields()
        list.push(map.getItem("mo_zhengqiyali"))
        list.push(map.getItem("mo_lengningqiyanwen"))
        list.push(map.getItem("mo_jishuiwendu"))
        list.push(map.getItem("mo_shuiweixinhao"))
        list.push(map.getItem("mo_paiyanwendu"))
        list.push(map.getItem("mo_jienengqiyanwen"))
    }
    
    protected getPowerInfo() {
        let map = this.getOpenCloseFields()
        let i = map.getItem(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
        if (i > 0) {
            return map.getItem(CTL_RT_T3_RYZQ_YLBSQ.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0
        }
        return 0
    }
}