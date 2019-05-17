import { CountField } from '../../../../../../../meta/CountField';
import { DeviceField, ExceptionField, OpenCloseField, MockField, SettingField } from '../../../../../../../meta/RT/meta';
import { CTL_RT } from '../../../../../../../devices/CTL/RT/RT';
import { Map_ZH_CN } from '../../../../../ZH_CN';
import { Map_CTL_RT_X1_ZhengQi } from '../../AScript/ZQ';
import { FixedValueField } from '../../../../../../../meta/FixedValueField';
import { SdcSoftDevice } from '../../../../../../../devices/SdcSoftDevice';
import { CountShowField } from '../../../../../../../meta/CountShowField';

//燃煤蒸汽
export class Map_CTL_RT_X1_BKSR_RMZQ_9 extends Map_CTL_RT_X1_ZhengQi {
    constructor() {
        super();
        //this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, '燃烧器'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, '循环泵'));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_GU_FENG_FAN, "鼓风机"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_YIN_FENG_FAN, "引风机"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, "给水泵"));


        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 2, Map_ZH_CN.coms_power));

        this.addPoint(new CountShowField(Map_CTL_RT_X1_BKSR_RMZQ_9.KEY_BASE, 'ba_yalizhuangtai', '压力状态', '',false,Map_CTL_RT_X1_BKSR_RMZQ_9.DJD_YaLiStatus));


        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, '给水泵', 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField('de_xunhuanbeng_zidong/shoudong_', 49, 2, '给水泵 手/自', 3, Map_CTL_RT_X1_BKSR_RMZQ_9.coms_auto));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_YIN_FENG_FAN_1, 9, 2, "引风机", 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_GU_FENG_FAN_1, 9, 2, "鼓风机", 1, Map_ZH_CN.coms_open_close));

        this.addPoint(new MockField("mo_paiyanwendu", 13, 2, "排烟温度","℃"));

        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障", 1));
        this.addPoint(new ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高", 2));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 3));
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障", 4));
        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 5));


        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力低针", 4, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力高针", 5, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警", 6, Map_ZH_CN.coms_open_close));

        this.addPoint(new SettingField("se_paiyanchaowen", 57, 2, "排烟超温","℃"));

        this.addPoint(new SettingField("se_gufengyanshi", 59, 2, "鼓风延时", "s"));
        this.addPoint(new SettingField("se_yinfengyanshi", 61, 2, "引风延时",'s'));

        //this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",7,null));


    }
}