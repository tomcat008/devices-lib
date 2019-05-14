import { CountField } from '../../../../../../../meta/CountField';
import { DeviceField, OpenCloseField, ExceptionField } from '../../../../../../../meta/RT/meta';
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT';
import { Map_ZH_CN } from '../../../../../ZH_CN';
import { Map_CTL_RT_X1_3JDJD } from './RS_3J_DJD';

//燃油热水1段火
export class Map_CTL_RT_X1_HNRT_RYRS_1 extends Map_CTL_RT_X1_3JDJD {


    constructor() {
        super();

        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, '补水泵'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, '热水泵'));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵', 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '补水泵 手/自', 1, Map_CTL_RT_X1_HNRT_RYRS_1.coms_auto));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '热水泵', 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '热水泵 手/自', 3, Map_CTL_RT_X1_HNRT_RYRS_1.coms_auto));


        this.addPoint(new OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_ZH_CN.coms_open_close));
        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 6));

    }
}