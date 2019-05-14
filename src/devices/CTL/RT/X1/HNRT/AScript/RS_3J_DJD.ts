import { List } from "../../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../../meta/DeviceFieldForUI";
import { Map_CTL_RT_X1_3JDJD } from "../../../../../../map/zh-cn/CTL/RT/X1/HNRT/Ascript/RS_3J_DJD";
import { CTL_RT_X1_Ts } from "../../../AScript/X1";

export class CTL_RT_X1_RS3JDJD extends CTL_RT_X1_Ts {
        
    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields()
        let f = map.getItem('ba_shuiweizhuangtai')

        let map2 = this.getOpenCloseFields()
        let x = map2.getItem('oc_bushuibengkongzhixinhao').getValue()
        let a = map2.getItem('oc_jixiandishuiweidianji').getValue();
        let b = map2.getItem('oc_didianji/dianjiedianyalibiaodizhen').getValue()
        let c = map2.getItem('oc_gaodianji/dianjiedianyalibiaogaozhen').getValue();
        if (x) {
            console.log('电接点 水位='+a)
            f.setValue(a, Map_CTL_RT_X1_3JDJD.ShuiWeiStatus_1)
            list.push(f)
            f = map.getItem('ba_yalizhuangtai');
            let y = (b ? 2 : 0) | c
            f.setValue(y, Map_CTL_RT_X1_3JDJD.YaLiStatus)
        }
        else {
            console.log('水位='+ (a + b + c))
            f.setValue(a + b + c, Map_CTL_RT_X1_3JDJD.ShuiWeiStatus_3)
            map.remove('ba_yalizhuangtai')
        }
        list.push(f)
        let map3 = this.getMockFields()
        list.push(map3.getItem('mo_chushuiwendu'));
    }

}