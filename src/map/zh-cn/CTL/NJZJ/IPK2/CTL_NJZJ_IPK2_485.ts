import { CTL_NJZJ_IP_485 } from "../CTL_NJZJ_IP_485";
import { SettingField } from "../../../../../meta/NJZJ/485";


export = class CTL_NJZJ_IPK2_485 extends CTL_NJZJ_IP_485 {
    constructor() {
        super();
        this.addPoint(new SettingField("se_jiarezushu", 1114, 2, "加热组数", "组", 0, CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, "0517", 1, 15));
    }
}