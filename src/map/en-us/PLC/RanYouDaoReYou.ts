import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { Map_ZH_CN } from "../ZH_CN";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_RanYouDaoReYou extends PLC_Map {
    constructor(){
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_ZHU_YOU_BENG,  "注油泵"));
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG,   "循环泵"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "运行小时数", "时"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "运行天数", "天"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "系统状态", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料", 0, Map_ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质", 2, Map_ZH_CN.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "水位状态", '', Map_ZH_CN.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "燃烧器状态", '', PLC_Map.coms_ranshaoqi_status));



        this.addPoint(new MockField("mo_jinkouwendu", 35, 4, "进口温度", "℃"));
        this.addPoint(new MockField("mo_chukouwendu", 39, 4, "出口温度", "℃"));
        this.addPoint(new MockField("mo_gaoweiyoucaowendu", 43, 4, "高位油槽温度", "℃"));
        this.addPoint(new MockField("mo_paiyanwendu", 47, 4, "排烟温度", "℃"));
        this.addPoint(new MockField("mo_lutangwendu", 51, 4, "炉膛温度", "℃"));
        this.addPoint(new MockField("mo_lutangchukouwendu", 55, 4, "炉膛出口温度", "℃"));
        this.addPoint(new MockField("mo_kongyuqianwendu", 59, 4, "空预前温度", "℃"));
        this.addPoint(new MockField("mo_kongyuhouwendu", 63, 4, "空预后温度", "℃"));
        this.addPoint(new MockField("mo_jinkouyali", 67, 4, "进口压力", "MPa"));
        this.addPoint(new MockField("mo_chukouyali", 71, 4, "出口压力", "MPa"));
        this.addPoint(new MockField("mo_danqiyali", 75, 4, "氮气压力", "kPa"));
        this.addPoint(new MockField("mo_lutangyali", 79, 4, "炉膛压力", "kPa"));
        this.addPoint(new MockField("mo_gaoweiyoucaowei", 83, 4, "高位槽油位", "%"));
        this.addPoint(new MockField("mo_chuyouguanyouwei", 87, 4, "储油罐油位", "%"));
        this.addPoint(new MockField("mo_liuliangceliang", 91, 4, "流量测量", "m³/h"));
        this.addPoint(new MockField("mo_diandongtiaojiefashuchu", 95, 4, "电动调节阀输出", "%"));
        this.addPoint(new MockField("mo_bianpinqipinlvshuchu", 99, 4, "变频器频率输出", "Hz"));

        this.addPoint(new SettingField("se_chukouwenduqiluwendusheding", 111, 4, "出口温度起炉温度设定", "℃"));
        this.addPoint(new SettingField("se_chukouwendubitiaowendusheding", 115, 4, "出口温度比调温度设定", "℃"));
        this.addPoint(new SettingField("se_chukouwendutingluwendusheding", 119, 4, "出口温度停炉温度设定", "℃"));
        this.addPoint(new SettingField("se_chukouwenduchaogaobaojingwendusheding", 123, 4, "出口温度超高报警温度设定", "℃"));
        this.addPoint(new SettingField("se_paiyanwenduchaogaobaojingsheding", 127, 4, "排烟温度超高报警设定", "℃"));
        this.addPoint(new SettingField("se_gaoweicaoyouweidisheding", 131, 4, "高位槽油位低设定", "%"));
        this.addPoint(new SettingField("se_gaoweicaoyouweigaosheding", 135, 4, "高位槽油位高设定", "%"));
        this.addPoint(new SettingField("se_anquanyouwensheding", 139, 4, "安全油温设定", "℃"));
        this.addPoint(new SettingField("se_fengjiqidongshijiansheding", 143, 4, "风机启动时间设定", "S"));
        this.addPoint(new SettingField("se_fengjiqidongpinlvsheding", 147, 4, "风机启动频率设定", "Hz"));
        this.addPoint(new SettingField("se_fengjiyunxingpinlvsheding", 151, 4, "风机运行频率设定", "Hz"));
        this.addPoint(new SettingField("se_jinchukouyachagaobaojingsheding", 155, 4, "进出口压差高报警设定", "MPa"));
        this.addPoint(new SettingField("se_jinchukouyachadibaojingsheding", 159, 4, "进出口压差低报警设定", "MPa"));
        this.addPoint(new SettingField("se_liuliangxiaxianbaojing", 163, 4, "流量下限报警", "m³/h"));
        this.addPoint(new SettingField("se_liuliangjidibaojing", 167, 4, "流量极低报警", "m³/h"));
        this.addPoint(new SettingField("se_danqiyalidisheding", 171, 4, "氮气压力低设定", "kPa"));
        this.addPoint(new SettingField("se_danqiyaligaosheding", 175, 4, "氮气压力高设定", "kPa"));
        this.addPoint(new SettingField("se_diandongfashoudongkaidusheding", 179, 4, "电动阀手动开度设定", "%"));

        this.addPoint(new DeviceField("de_1_xunhuanbeng_auto", 203, 2, "1#循环泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 205, 2, "1#循环泵", Map_ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_xunhuanbeng_auto", 207, 2, "2#循环泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 209, 2, "2#循环泵", Map_ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_3_xunhuanbeng_auto", 211, 2, "3#循环泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_3, 213, 2, "3#循环泵", Map_ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_zhuyoubeng_auto", 215, 2, "注油泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHU_YOU_BENG_1, 217, 2, "注油泵", Map_ZH_CN.coms_start_stop));

        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 229, 2, "燃烧器故障", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 229, 2, "燃气泄漏", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 229, 2, "燃气压力异常", 10));
        this.addPoint(new ExceptionField("ex_fengjiguzhang", 229, 2, "风机故障", 11));
        this.addPoint(new ExceptionField("ex_1_xunhuanbengguzhang", 229, 2, "1#循环泵故障", 12));
        this.addPoint(new ExceptionField("ex_2_xunhuanbengguzhang", 229, 2, "2#循环泵故障", 13));
        this.addPoint(new ExceptionField("ex_3_xunhuanbengguzhang", 229, 2, "3#循环泵故障", 14));
        this.addPoint(new ExceptionField("ex_zhuyoubengguzhang", 229, 2, "注油泵故障", 15));
        this.addPoint(new ExceptionField("ex_jinchukouyachachaogao", 229, 2, "进出口压差超高", 0));
        this.addPoint(new ExceptionField("ex_jinchukouyachachaodi", 229, 2, "进出口压差超低", 1));
        this.addPoint(new ExceptionField("ex_paiyanwenduchaogao", 229, 2, "排烟温度超高", 2));
        this.addPoint(new ExceptionField("ex_chukouwenduchaogao", 229, 2, "出口温度超高", 3));
        this.addPoint(new ExceptionField("ex_liuliangxiaxianbaojing", 229, 2, "流量下限报警", 4));
        this.addPoint(new ExceptionField("ex_liuliangjidibaojing", 229, 2, "流量极低报警", 5));
        this.addPoint(new ExceptionField("ex_queyoubaojingfuqiu", 229, 2, "缺油报警（浮球）", 6));
        this.addPoint(new ExceptionField("ex_chuyouwenduchuanganqibaojing", 229, 2, "出油温度传感器故障", 7));

        this.addPoint(new ExceptionField("ex_huiyouwenduchuanganqibaojing", 231, 2, "回油温度传感器故障", 8));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 231, 2, "排烟温度传感器故障", 9));
        this.addPoint(new ExceptionField("ex_xunhuanbengliansuoguzhang", 231, 2, "循环泵连锁故障", 10));
        this.addPoint(new ExceptionField("ex_wendushedingcuowuguzhang", 231, 2, "温度设定错误故障", 11));
        this.addPoint(new ExceptionField("ex_gaoweiyoucaoyouweidibaojing", 231, 2, "高位油槽油位低报警", 12));
        this.addPoint(new ExceptionField("ex_gaoweiyoucaoyouweigaobaojing", 231, 2, "高位油槽油位高报警", 13));
        this.addPoint(new ExceptionField("ex_1_zhiguanchaowenbaojing", 231, 2, "1#支管超温报警", 14));
        this.addPoint(new ExceptionField("ex_2_zhiguanchaowenbaojing", 231, 2, "2#支管超温报警", 15));
        this.addPoint(new ExceptionField("ex_3_zhiguanchaowenbaojing", 231, 2, "3#支管超温报警", 0));
        this.addPoint(new ExceptionField("ex_4_zhiguanchaowenbaojing", 231, 2, "4#支管超温报警", 1));
        this.addPoint(new ExceptionField("ex_5_zhiguanchaowenbaojing", 231, 2, "5#支管超温报警", 2));
        this.addPoint(new ExceptionField("ex_6_zhiguanchaowenbaojing", 231, 2, "6#支管超温报警", 3));
        this.addPoint(new ExceptionField("ex_7_zhiguanchaowenbaojing", 231, 2, "7#支管超温报警", 4));
        this.addPoint(new ExceptionField("ex_8_zhiguanchaowenbaojing", 231, 2, "8#支管超温报警", 5));
        this.addPoint(new ExceptionField("ex_9_zhiguanchaowenbaojing", 231, 2, "9#支管超温报警", 6));
        this.addPoint(new ExceptionField("ex_10_zhiguanchaowenbaojing", 231, 2, "10#支管超温报警", 7));
        this.addPoint(new ExceptionField("ex_plcguzhangbaojing", 233, 2, "PLC故障报警", 8));
    
    }

}