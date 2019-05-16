import { CTL_RT_X1_ZhengQi } from "./ZQ";

//燃油蒸汽电接点压力表
export class CTL_RT_X1_RY_ZhengQi extends CTL_RT_X1_ZhengQi {

    protected getPowerInfo() {
        let map = this.getDeviceFields();
        if (map.getItem(CTL_RT_X1_RY_ZhengQi.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue() > 0) {
            if (this.getOpenCloseFields().getItem('oc_ranshaoqifuhetiaojie').getValue() > 0)
                return 2;
            return 1;
        }
        else
            return 0;
    }
}