import { List } from "../../../../../entities/Collections";
import { DeviceFieldForUI } from "../../../../../meta/DeviceFieldForUI";
import { CTL_RT_X1_Ts } from "../../AScript/X1";

export class CTL_RT_X1_RS3JDJD extends CTL_RT_X1_Ts {

    protected addFocusFields(list: List<DeviceFieldForUI>) {
        super.addFocusFields(list)
        let map = this.getBaseInfoFields()
        let f = map.getItem('ba_shuiweizhuangtai')
        let values = f.getValueMap()
        if (values) {
            let map2 = this.getOpenCloseFields()
            let x = map2.getItem('oc_bushuibengkongzhixinhao').getValue()
            let a = map2.getItem('oc_jixiandishuiweidianji').getValue();
            let b = map2.getItem('oc_didianji/dianjiedianyalibiaodizhen').getValue()
            let c = map2.getItem('oc_gaodianji/dianjiedianyalibiaogaozhen').getValue();
            if (x) {
                f.setValueString(values.getItem(a))
                list.push(f)
                f = map.getItem('ba_yalizhuangtai');
                let y = (b ? 2 : 0) | c
                f.setValue(y)
            }
            else {
                f.setValueString(values.getItem((1<<3)|(a + b + c)))
                map.remove('ba_yalizhuangtai')
            }
            list.push(f)
        }

        let map3 = this.getMockFields()
        list.push(map3.getItem('mo_chushuiwendu'));
    }

}