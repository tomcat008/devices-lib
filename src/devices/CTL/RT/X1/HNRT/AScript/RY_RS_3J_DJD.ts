import { CTL_RT_X1_RS3JDJD } from "./RS_3J_DJD";

export class CTL_RT_X1_RY_RS3JDJD extends CTL_RT_X1_RS3JDJD {

    protected getPowerInfo() {
        let map = this.getOpenCloseFields();
        let r = map.getItem(CTL_RT_X1_RY_RS3JDJD.KEY_POINT_RAN_SHAO_QI_KONGZHI).getValue()
        let f = map.getItem('oc_ranshaoqifuhetiaojie')
        if (f) {
            if (r) {
                return f.getValue() ? 2 : 1;
            }
            return 0;
        }
        else {
            return r
        }
    }

}