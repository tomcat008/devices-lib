import { CTL_RT_X1_Ts } from "../AScript/X1";
import { CountField } from "../../../../../meta/CountField";
import { BaseInfoField, DeviceField, MockField, ExceptionField, OpenCloseField, SettingField } from "../../../../../meta/RT/meta";
import { SdcSoftDevice } from "../../../../../devices/SdcSoftDevice";
import { CTL_RT } from "../../../../../devices/CTL/RT/RT";
import { ZH_CN } from "../../../ZH_CN";
import { CountShowField } from "../../../../../meta/CountShowField";
import { FixedValueField } from "../../../../../meta/FixedValueField";
import { INumberIndex } from "../../../../../entities/IIndex";

export = class CTL_RT_X1_RYZQDJD extends CTL_RT_X1_Ts {

    constructor() {
        super();

        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI,  "燃烧器"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG,  "给水泵"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态",'',CTL_RT_X1_RYZQDJD.coms_status));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间","时"));
        this.addPoint(new CountShowField(CTL_RT_X1_RYZQDJD.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        this.addPoint(new CountShowField(CTL_RT_X1_RYZQDJD.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        this.addPoint(new CountShowField(CTL_RT_X1_RYZQDJD.KEY_BASE, 'ba_yalizhuangtai', "压力状态", ''));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, ZH_CN.coms_media));
        this.addPoint(new DeviceField("de_bushuibeng_shoudong/zidong_", 49, 2, "给水泵",1, CTL_RT_X1_RYZQDJD.coms_auto));
        this.addPoint(new MockField("mo_paiyanwendu", 13, 2, "排烟温度","℃"));

        this.addPoint(new ExceptionField( "ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警",0));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警",1));
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障",2));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 45, 2, "排烟温度传感器故障",3));
        this.addPoint(new ExceptionField("ex_paiyanwendugao", 45, 2, "排烟温度高",4));
        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警",5));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhangbaojing", 45, 2, "燃烧器故障报警",6));


        this.addPoint(new OpenCloseField("oc_jixiandishuiweidianji", 5, 2, "极限低水位电极",0,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_didianji", 5, 2, "低位电极",1,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaodianji", 5, 2, "高位电极",2,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaobaojingdianji", 5, 2, "高报警电极",3,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力低针",4,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力高针",5,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警",6,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",7,ZH_CN.coms_open_close));

        this.addPoint(new OpenCloseField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制",0,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField('oc_ranshaoqifuhetiaojie', 9, 2, "燃烧器负荷调节",1,ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "给水泵控制",2,ZH_CN.coms_open_close));

        this.addPoint(new SettingField("se_dangqianmoshi", 55, 2, "当前模式"));
        this.addPoint(new SettingField("se_paiyanchaowen", 57, 2, "排烟超温","℃"));
    }
}