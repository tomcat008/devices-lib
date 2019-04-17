import { CTL_RT_X1_Ts } from "../AScript/X1";
import { CountField } from "../../../../../meta/CountField";
import { BaseInfoField, DeviceField, MockField, ExceptionField, OpenCloseField, SettingField } from "../../../../../meta/RT/meta";
import { SdcSoftDevice } from "../../../../../devices/SdcSoftDevice";
import { CTL_RT } from "../../../../../devices/CTL/RT/RT";
import { ZH_CN } from "../../../ZH_CN";
import { CountShowField } from "../../../../../meta/CountShowField";
import { FixedValueField } from "../../../../../meta/FixedValueField";

export = class CTL_RT_X1_RYRS2 extends CTL_RT_X1_Ts {
    constructor() {
        super();

        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI,  "燃烧器"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "热水泵"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "控制器状态",'',CTL_RT_X1_RYRS2.coms_status));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "运行时间","时"));
        this.addPoint(new CountShowField(CTL_RT_X1_RYRS2.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"));
        this.addPoint(new CountShowField(CTL_RT_X1_RYRS2.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, ZH_CN.coms_media));

                
        this.addPoint(new DeviceField("de_xunhuanbeng_zidong/shoudong_", 49, 2, "热水泵",3, CTL_RT_X1_RYRS2.coms_auto));
        this.addPoint(new MockField("mo_chushuiwendu", 13, 2, "出水温度","℃"));

        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警",0));
        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiguzhang", 45, 2, "出水温度传感器故障",1));
        this.addPoint(new ExceptionField("ex_chushuiwendugaobaojing", 45, 2, "出水温度高报警",2));
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiguzhang", 45, 2, "水位传感器故障",3));
        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警",4));
        this.addPoint(new ExceptionField("ex_lubichaowenbaojing", 45, 2, "炉壁超温报警",5));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhangbaojing", 45, 2, "燃烧器故障报警",6));


        this.addPoint(new OpenCloseField("oc_jixiandishuiweidianji", 5, 2, "极限低水位电极",0,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_didianji/dianjiedianyalibiaodizhen", 5, 2, "低位电极/电接点压力表低针",1,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaodianji/dianjiedianyalibiaogaozhen", 5, 2, "高位电极/电接点压力表高针",2,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_bushuibengkongzhixinhao", 5, 2, "补水泵控制信号",3,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_lubiwendukaiguan", 5, 2, "炉壁温度开关",4,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_waibuliansuobaohu", 5, 2, "外部联锁保护",5,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警",6,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障",7,ZH_CN.coms_open_close));

        this.addPoint(new OpenCloseField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制",0,ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhetiaojie", 9, 2, "燃烧器负荷调节",1,ZH_CN.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG, 9, 2, "热水泵控制",2,ZH_CN.coms_open_close));

        //this.addPoint(new SettingField("se_dangqianmoshi", 55, 2, "当前模式"));
        this.addPoint(new SettingField("se_baojingwendu", 57, 2, "报警温度","℃"));
        this.addPoint(new SettingField("se_shangxianwendu", 59, 2, "上限温度","℃"));
        this.addPoint(new SettingField("se_xiaxianwendu", 61, 2, "下限温度","℃"));
        this.addPoint(new SettingField( "se_kaibengwendu", 63, 2, "开泵温度","℃"));
        this.addPoint(new SettingField("se_guanbengwendu", 65, 2, "关泵温度","℃"));
        this.addPoint(new SettingField( "se_zhuanhuowendu", 67, 2, "转火温度","℃"));
        this.addPoint(new SettingField("se_NC2", 69, 2, "NC"));
        this.addPoint(new SettingField("se_NC3", 71, 2, "NC"));
        this.addPoint(new SettingField("se_NC4", 73, 2, "NC"));
        this.addPoint(new SettingField("se_NC5", 75, 2, "NC"));
        this.addPoint(new SettingField("se_qidongshiduans1", 77, 2, "启动时段1","时"));
        this.addPoint(new SettingField("se_qidongshiduan1", 79, 2, "启动时段1","分"));
        this.addPoint(new SettingField("se_tingzhishiduans1", 81, 2, "停止时段1","时"));
        this.addPoint(new SettingField("se_tingzhishiduan1", 83, 2, "停止时段1","分"));
        this.addPoint(new SettingField("se_qidongshiduans2", 85, 2, "启动时段2","时"));
        this.addPoint(new SettingField("se_qidongshiduan2", 87, 2, "启动时段2","分"));
        this.addPoint(new SettingField("se_tingzhishiduans2", 89, 2, "停止时段2","时"));
        this.addPoint(new SettingField("se_tingzhishiduan2", 91, 2, "停止时段2","分"));
        this.addPoint(new SettingField("se_qidongshiduans3", 93, 2, "启动时段3","时"));
        this.addPoint(new SettingField("se_qidongshiduan3", 95, 2, "启动时段3","分"));
        this.addPoint(new SettingField("se_tingzhishiduans3", 97, 2, "停止时段3","时"));
        this.addPoint(new SettingField("se_tingzhishiduan3", 99, 2, "停止时段3","分"));
        this.addPoint(new SettingField("se_qidongshiduans4", 101, 2, "启动时段4","时"));
        this.addPoint(new SettingField("se_qidongshiduan4", 103, 2, "启动时段4","分"));
        this.addPoint(new SettingField("se_tingzhishiduans4", 105, 2, "停止时段4","时"));
        this.addPoint(new SettingField("se_tingzhishiduan4", 107, 2, "停止时段4","分"));
    }
}