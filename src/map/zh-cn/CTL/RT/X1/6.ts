import { Map_CTL_RT_X1_Ts } from "../AScript/X1";
import { CountField } from "../../../../../meta/CountField";
import { BaseInfoField, DeviceField, MockField, ExceptionField, OpenCloseField, SettingField } from "../../../../../meta/RT/meta";
import { SdcSoftDevice } from "../../../../../devices/SdcSoftDevice";
import { CTL_RT } from "../../../../../devices/CTL/RT/RT";
import { Map_ZH_CN } from "../../../ZH_CN";
import { CountShowField } from "../../../../../meta/CountShowField";
import { FixedValueField } from "../../../../../meta/FixedValueField";

export = class Map_CTL_RT_X1_6 extends Map_CTL_RT_X1_Ts {
    constructor() {
        super();

        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, "燃烧器"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, "给水泵"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态", '', Map_CTL_RT_X1_6.coms_status));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间", "时"));
        this.addPoint(new CountShowField(Map_CTL_RT_X1_6.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        this.addPoint(new CountShowField(Map_CTL_RT_X1_6.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        this.addPoint(new CountShowField(Map_CTL_RT_X1_6.KEY_BASE, 'ba_yalizhuangtai', "压力状态", ''));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, Map_ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, Map_ZH_CN.coms_media));
        this.addPoint(new DeviceField("de_bushuibeng_shoudong/zidong_", 49, 2, "给水泵", 1, Map_CTL_RT_X1_6.coms_auto));
        this.addPoint(new MockField("mo_paiyanwendu", 13, 2, "排烟温度", "℃"));

        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 0));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 1));
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障", 2));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障", 3));
        this.addPoint(new ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高", 4));
        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 5));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhangbaojing", 45, 2, "燃烧器故障报警", 6));


        this.addPoint(new OpenCloseField("oc_jixiandishuiweidianji", 5, 2, "极限低水位电极", 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_didianji", 5, 2, "低位电极", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaodianji", 5, 2, "高位电极", 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaobaojingdianji", 5, 2, "高报警电极", 3, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_fuhetiaojie", 5, 2, "负荷调节", 4, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_qitingkongzhi", 5, 2, "启停控制", 5, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警", 6, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障", 7, Map_ZH_CN.coms_open_close));

        this.addPoint(new OpenCloseField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_ranshaoqifuhetiaojie', 9, 2, "燃烧器负荷调节", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "给水泵控制", 2, Map_ZH_CN.coms_open_close));

        this.addPoint(new SettingField("se_dangqianmoshi", 55, 2, "当前模式"));
        this.addPoint(new SettingField("se_paiyanchaowen", 57, 2, "排烟超温", "℃"));
    }
}