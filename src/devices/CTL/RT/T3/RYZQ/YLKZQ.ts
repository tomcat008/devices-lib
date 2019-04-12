import { CTL_RT_RY } from '../../RY'

export = class CTL_RT_T3_RYZQ_YLKZQ extends CTL_RT_RY {
    static readonly KEY_POINT_RAN_SHAO_QI_STATUS = "oc_ranshaoqifuhetiaojie";
    
    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        let i = map.getItem(CTL_RT_RY.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue();
        if (i > 0) {
            return map.getItem(CTL_RT_T3_RYZQ_YLKZQ.KEY_POINT_RAN_SHAO_QI_STATUS).getValue() > 0 ? 1 : 0;
        }
        return 0;
    }
}