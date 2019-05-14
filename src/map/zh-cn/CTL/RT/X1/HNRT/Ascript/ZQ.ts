import { Map_CTL_RT_X1_Base } from './Base';
import { ExceptionField, OpenCloseField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from '../../../../../ZH_CN';
import { CountShowField } from '../../../../../../../meta/CountShowField';
import { INumberIndex } from '../../../../../../../entities/IIndex';

export class Map_CTL_RT_X1_ZhengQi extends Map_CTL_RT_X1_Base {

    static ShuiWeiStatus_4: INumberIndex = {
        0: '缺水',
        1: '低位',
        2: '中位',
        3: '高位',
        4: '超高'
    }

    static DJD_YaLiStatus: INumberIndex = {
        0: '中压',
        1: '高压',
        2: '低压'
    }

    static KZQ_YaLiStatus: INumberIndex = {
        0: "高压",
        1: "中压",
        2: '错误',
        3: "低压"
    }

    constructor() {
        super();

        this.addPoint(new CountShowField(Map_CTL_RT_X1_ZhengQi.KEY_BASE, 'ba_yalizhuangtai', '压力状态', ''));


        this.addPoint(new ExceptionField('ex_jixiandishuiweibaojing', 45, 2, '极限低水位报警', 0));
        this.addPoint(new ExceptionField('ex_gaoshuiweibaojing', 45, 2, '高水位报警', 1));
        this.addPoint(new ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 2));

        this.addPoint(new OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_didianji', 5, 2, '低位电极', 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_gaodianji', 5, 2, '高位电极', 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_gaobaojingdianji', 5, 2, '高报警电极', 3, Map_ZH_CN.coms_open_close));
    }
}