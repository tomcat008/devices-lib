import { CountField } from '../../../../../../../meta/CountField';
import { DeviceField, ExceptionField, OpenCloseField } from '../../../../../../../meta/RT/meta';
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT';
import { Map_ZH_CN } from '../../../../../ZH_CN';
import { CountShowField } from '../../../../../../../meta/CountShowField';
import { Map_CTL_RT_X1_ReShui } from '../../AScript/RS';

//燃油开水
export class Map_CTL_RT_X1_HNRT_RYRS_8 extends Map_CTL_RT_X1_ReShui {
    constructor() {
        super();
        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, '出水泵'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, '补水泵'));

        this.addPoint(new CountShowField(Map_CTL_RT_X1_HNRT_RYRS_8.KEY_BASE, 'ba_yalizhuangtai', '压力状态', ''));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器', 0, Map_ZH_CN.coms_open_close));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵', 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('de_bushuibeng_shoudong/zidong_', 49, 2, '补水泵 手/自', 1, Map_CTL_RT_X1_HNRT_RYRS_8.coms_auto));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '出水泵', 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '出水泵 手/自', 3, Map_CTL_RT_X1_HNRT_RYRS_8.coms_auto));

        this.addPoint(new ExceptionField('ex_shuiweichuanganqiguzhang', 45, 2, '水位传感器故障', 1));
        this.addPoint(new ExceptionField('ex_chushuiwenduchuanganqiguzhang', 45, 2, '出水温度传感器故障', 2));
        this.addPoint(new ExceptionField('ex_chushuiwendugaobaojing', 45, 2, '出水温度高报警', 3));
        this.addPoint(new ExceptionField('ex_lubichaowenbaojing', 45, 2, '炉壁超温报警', 4));
        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 45, 2, '燃烧器故障报警', 5));

        this.addPoint(new OpenCloseField('oc_jixiandishuiweidianji', 5, 2, '极限低水位电极', 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_didianji', 5, 2, '低位电极', 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_gaodianji', 5, 2, '高位电极', 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_lubiwendukaiguan', 5, 2, '炉壁温度开关', 4, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_shuixiangdiweidianji', 5, 2, '水箱低位电极', 5, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_shuixianggaoweidianji', 5, 2, '水箱高位电极', 6, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_ranshaoqiguzhang', 5, 2, '燃烧器故障', 7, Map_ZH_CN.coms_open_close));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵控制', 1, Map_ZH_CN.coms_open_close));


    }
}