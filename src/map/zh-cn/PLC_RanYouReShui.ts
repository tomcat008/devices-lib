import { PLC as PLC_Map } from "./PLC";
import { PLC } from "../../devices/PLC";
import { CountField } from "../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../meta/PLC/meta";
import { ZH_CN } from "./ZH_CN";
import { BaseInfoField } from "../../meta/CTL_NJZJ_485/meta";
import { SdcSoftDevice } from "../..";
import { FixedValueField } from "../../meta/FixedValueField";

export = class PLC_RanYouReShui extends PLC_Map {
    constructor(){
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG,  "补水泵"));
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG,   "循环泵"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "运行小时数", "时"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "运行天数", "天"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "系统状态", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料", 0, ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质", 0, ZH_CN.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "水位状态", '', ZH_CN.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "燃烧器状态", '', PLC_Map.coms_ranshaoqi_status));


        
        this.addPoint(new MockField("mo_chushuiwendu", 35, 4, "出水温度", "℃"));
        this.addPoint(new MockField("mo_huishuiwendu", 39, 4, "回水温度", "℃"));
        this.addPoint(new MockField("mo_paiyanwendu", 43, 4, "排烟温度", "℃"));
        this.addPoint(new MockField("mo_chushuiyali", 47, 4, "出水压力", "Mpa"));
        this.addPoint(new MockField("mo_huishuiyali", 51, 4, "回水压力", "Mpa"));
        this.addPoint(new MockField("mo_yacha", 55, 4, "压差", "Mpa"));
        this.addPoint(new MockField("mo_lengningqijinyanwendu", 59, 4, "冷凝器进烟温度", "℃"));
        this.addPoint(new MockField("mo_lengningqijinyanyali", 63, 4, "冷凝器进烟压力", "Pa"));
        this.addPoint(new MockField("mo_jienengqijinyanwendu", 67, 4, "节能器进烟温度", "℃"));
        this.addPoint(new MockField("mo_jienengqijinyanyali", 71, 4, "节能器进烟压力", "Pa"));
        this.addPoint(new MockField("mo_lutangwendu", 75, 4, "炉膛温度", "℃"));
        this.addPoint(new MockField("mo_lutangyali", 79, 4, "炉膛压力", "Pa"));
        this.addPoint(new MockField("mo_kongyuqijinyanwendu", 83, 4, "空预器进烟温度", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinyanyali", 87, 4, "空预器进烟压力", "Pa"));
        this.addPoint(new MockField("mo_kongyuqijinfengwendu", 91, 4, "空预器进风温度", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinfengyali", 95, 4, "空预器进风压力", "Kpa"));
        this.addPoint(new MockField("mo_kongyuqichufengwendu", 99, 4, "空预器出风温度", "℃"));
        this.addPoint(new MockField("mo_zhufengjipinlüfankui", 103, 4, "主风机频率反馈", "Hz"));
        this.addPoint(new MockField("mo_xunhuanfengjipinlüfankui", 107, 4, "循环风机频率反馈", "Hz"));
        this.addPoint(new MockField("mo_addshuibengpinlüfankui", 111, 4, "补水泵频率反馈", "Hz"));
        this.addPoint(new MockField("mo_shiwaiwendu", 115, 4, "室外温度", "℃"));
        this.addPoint(new MockField("mo_xunhuanbeng1pinlüfankui", 119, 4, "循环泵1频率反馈", "Hz"));
        this.addPoint(new MockField("mo_xunhuanbeng2pinlüfankui", 123, 4, "循环泵2频率反馈", "Hz"));

        this.addPoint(new SettingField("se_qiluwendusheding", 248, 4, "启炉温度设定", "℃"));
        this.addPoint(new SettingField("se_mubiaowendusheding", 252, 4, "目标温度设定", "℃"));
        this.addPoint(new SettingField("se_tingluwendusheding", 256, 4, "停炉温度设定", "℃"));
        this.addPoint(new SettingField("se_yalidisheding", 260, 4, "压力低设定", "Mpa"));
        this.addPoint(new SettingField("se_yaligaosheding", 264, 4, "压力高设定", "Mpa"));
        this.addPoint(new SettingField("se_paiyanwenduchaogaobaojingsheding", 268, 4, "排烟温度超高报警设定", "℃"));
        this.addPoint(new SettingField("se_chukouwenduchaogaobaojingsheding", 272, 4, "出口温度超高报警设定", "℃"));
        this.addPoint(new SettingField("se_yalichaogaobaojingsheding", 276, 4, "压力超高报警设定", "Mpa"));
        this.addPoint(new SettingField("se_yalichaodibaojingsheding", 280, 4, "压力超低报警设定", "Mpa"));


        this.addPoint(new DeviceField("de_ranshaoqiqiting", 368, 2, "燃烧器", PLC_Map.coms_ranshaoqi_status));
        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 370, 2, "1#补水泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 372, 2, "1#补水泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 374, 2, "2#补水泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 376, 2, "2#补水泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_1_xunhuanbeng_auto", 378, 2, "1#循环泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 380, 2, "1#循环泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_xunhuanbeng_auto", 382, 2, "2#循环泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 384, 2, "2#循环泵", ZH_CN.coms_start_stop));


        this.addPoint(new ExceptionField("ex_lubichaowenbaojing", 448, 2, "炉壁超温报警", 0));
        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiguzhang", 448, 2, "出水温度传感器故障", 1));
        this.addPoint(new ExceptionField("ex_huishuiwenduchuanganqiguzhang", 448, 2, "回水温度传感器故障", 2));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 448, 2, "排烟温度传感器故障", 3));
        this.addPoint(new ExceptionField("ex_wendushedingcuowubaojing", 448, 2, "温度设定错误报警", 4));
        this.addPoint(new ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 448, 2, "循环泵连锁断开报警", 5));
        this.addPoint(new ExceptionField("ex_waibuliansuoduankaibaojing", 448, 2, "外部连锁断开报警", 6));
        this.addPoint(new ExceptionField("ex_chushuiyalibiansongqiguzhang", 448, 2, "出水压力变送器故障", 7));

        this.addPoint(new ExceptionField("ex_ranshaojiguzhang", 448, 2, "燃烧器故障", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 448, 2, "燃气泄漏", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 448, 2, "燃气压力异常", 10));
        this.addPoint(new ExceptionField("ex_yalichaogaobaojing", 448, 2, "压力超高报警", 11));
        this.addPoint(new ExceptionField("ex_yalichaodibaojing", 448, 2, "压力超低报警", 12));
        this.addPoint(new ExceptionField("ex_paiyanwenduchaogaobaojing", 448, 2, "排烟温度超高报警", 13));
        this.addPoint(new ExceptionField("ex_chushuiwenduchaogaobaojing", 448, 2, "出水温度超高报警", 14));
        this.addPoint(new ExceptionField("ex_queshuibaohubaojing", 448, 2, "缺水保护报警", 15));

        this.addPoint(new ExceptionField("ex_huishuiyalibiansongqiguzhang", 450, 2, "回水压力变送器故障", 8));


    }
}