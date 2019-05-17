import { CTL_RT_T2_RYZQ_4JBS } from "./4J_BS"


export class CTL_RT_T2_RYZQ_4JBS2 extends CTL_RT_T2_RYZQ_4JBS{
    //4电极压力变送器2段火

    protected getPowerInfo2() {
        let map = this.getDeviceFields()
        if (map.getItem(CTL_RT_T2_RYZQ_4JBS2.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (this.getOpenCloseFields().getItem('oc_ranshaoqifuhe_zengda').getValue() > 0)
                return 2
            return 1
        }
        else
            return 0
    }

}