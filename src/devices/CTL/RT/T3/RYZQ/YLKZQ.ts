import { CTL_RT } from '../../RT'
import { CTL_RT_T3_RYZQ_Ts } from '../AScript/RYZQ'

export = class CTL_RT_T3_RYZQ_YLKZQ extends CTL_RT_T3_RYZQ_Ts {
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhetiaojie"
    
    protected getPowerInfo() {
        let map = this.getOpenCloseFields()
        let i = map.getItem(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
        if (i > 0) {
            return map.getItem(CTL_RT_T3_RYZQ_YLKZQ.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0
        }
        return 0
    }
}