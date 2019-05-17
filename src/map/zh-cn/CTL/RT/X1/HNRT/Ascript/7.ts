import { CountField } from '../../../../../../../meta/CountField';
import { DeviceField, ExceptionField, OpenCloseField } from '../../../../../../../meta/RT/meta';
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT';
import { Map_ZH_CN } from '../../../../../ZH_CN';
import { Map_CTL_RT_X1_ZhengQi } from '../../AScript/ZQ';
import { CountShowField } from '../../../../../../../meta/CountShowField';
//电蒸汽电接点压力表
export class Map_CTL_RT_X1_HNRT_DZQ_7 extends Map_CTL_RT_X1_ZhengQi {
    constructor() {
        super();
        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '加热组'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, '给水泵'));

        this.addPoint(new CountShowField(Map_CTL_RT_X1_HNRT_DZQ_7.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '',false,Map_CTL_RT_X1_HNRT_DZQ_7.DJD_YaLiStatus));
        this.addPoint(new DeviceField('oc_jiarezu1kongzhi', 9, 2, '加热组1', 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('oc_jiarezu2kongzhi', 9, 2, '加热组2', 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '给水泵', 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '给水泵 手/自', 1, Map_CTL_RT_X1_HNRT_DZQ_7.coms_auto));

        this.addPoint(new ExceptionField('ex_chaoyabaojing', 45, 2, '超压报警', 3));

        this.addPoint(new OpenCloseField('oc_dianjiedianyalibiaodizhen', 5, 2, '电接点压力低针', 4, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_dianjiedianyalibiaogaozhen', 5, 2, '电接点压力高针', 5, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_chaoyabaojing', 5, 2, '超压报警', 6, Map_ZH_CN.coms_open_close));



    }
}