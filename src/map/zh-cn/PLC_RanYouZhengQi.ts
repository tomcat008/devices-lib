import { PLC as PLC_Map } from "./PLC";
import { PLC } from "../../devices/PLC";
import { CountField } from "../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../meta/PLC/meta";
import { ZH_CN } from "./ZH_CN";
import { BaseInfoField } from "../../meta/CTL_NJZJ_485/meta";
import { SdcSoftDevice } from "../../devices/SdcSoftDevice";
import { FixedValueField } from "../../meta/FixedValueField";

export = class PLC_RanYouZhengQi extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "补水泵"));
        this.addPoint(new CountField(PLC.KEY_POINT_JIE_NENG_BENG, "节能泵"));
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_YANG_BENG, "除氧泵"));
        this.addPoint(new CountField(PLC.KEY_POINT_ZHAO_QI_FAN, "沼气风机"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "运行小时数", "时"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "运行天数", "天"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "系统状态", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料", 0, ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质", 1, ZH_CN.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "水位状态", '', ZH_CN.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "燃烧器状态", '', PLC_Map.coms_ranshaoqi_status));


        this.addPoint(new MockField("mo_zhengqiyali", 35, 4, "蒸汽压力", "MPa"));
        this.addPoint(new MockField("mo_guorezhengqiyali", 39, 4, "过热蒸汽压力", "MPa"));
        this.addPoint(new MockField("mo_zhengqiwendu", 43, 4, "蒸汽温度", "℃"));
        this.addPoint(new MockField("mo_guorezhengqiwendu", 47, 4, "过热蒸汽温度", "℃"));
        this.addPoint(new MockField("mo_guolushuiwei", 51, 4, "锅炉水位", ""));
        this.addPoint(new MockField("mo_zhengqishunshiliuliang", 55, 4, "蒸汽瞬时流量", "m³/h"));
        this.addPoint(new MockField("mo_bushuishunshiliuliang", 59, 4, "补水瞬时流量", "m³/h"));
        this.addPoint(new MockField("mo_lutangwendu", 63, 4, "炉膛温度", "℃"));
        this.addPoint(new MockField("mo_lutangyali", 67, 4, "炉膛压力", "MPa"));
        this.addPoint(new MockField("mo_lengningqijinkouyanwen", 71, 4, "冷凝器进口烟温", "℃"));
        this.addPoint(new MockField("mo_lengningqijinkouyanya", 75, 4, "冷凝器进口烟压", "kPa"));
        this.addPoint(new MockField("mo_jienengqijinkouyanwen", 79, 4, "节能器进口烟温", "℃"));
        this.addPoint(new MockField("mo_jienengqijinkouyanya", 83, 4, "节能器进口烟压", "kPa"));
        this.addPoint(new MockField("mo_zhengqileijiliuliang", 87, 4, "蒸汽累计流量", "m³/h"));
        this.addPoint(new MockField("mo_bushuileijiliuliang", 91, 4, "补水累计流量", "m³/h"));
        this.addPoint(new MockField("mo_kongyuqijinyanwendu", 95, 4, "空预器进烟温度", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinyanyali", 99, 4, "空预器进烟压力", "kPa"));
        this.addPoint(new MockField("mo_zuizhongpaiyanwendu", 103, 4, "最终排烟温度", "℃"));
        this.addPoint(new MockField("mo_zuizhongpaiyanyali", 107, 4, "最终排烟压力", "MPa"));
        this.addPoint(new MockField("mo_lengningqijinshuiwendu", 111, 4, "冷凝器进水温度", "℃"));
        this.addPoint(new MockField("mo_lengningqichushuiwendu", 115, 4, "冷凝器出水温度", "℃"));
        this.addPoint(new MockField("mo_jienengqijinshuiwendu", 119, 4, "节能器进水温度", "℃"));
        this.addPoint(new MockField("mo_jienengqichushuiwendu", 123, 4, "节能器出水温度", "℃"));
        this.addPoint(new MockField("mo_lengningqichushuiyali", 127, 4, "冷凝器出水压力", "MPa"));
        this.addPoint(new MockField("mo_jienengqichushuiyali", 131, 4, "节能器出水压力", "MPa"));
        this.addPoint(new MockField("mo_addshuibengpinlüfankui", 135, 4, "补水泵频率反馈", ""));
        this.addPoint(new MockField("mo_ruanshuixiangyewei", 139, 4, "软水箱液位", "mm"));
        this.addPoint(new MockField("mo_chuyangqiyewei", 143, 4, "除氧器液位", "mm"));
        this.addPoint(new MockField("mo_chuyangqiwendu", 147, 4, "除氧器温度", "℃"));
        this.addPoint(new MockField("mo_bushuidiandongfafankui", 151, 4, "补水电动阀反馈", ""));
        this.addPoint(new MockField("mo_guoreqijiangwendiandongfafankui", 155, 4, "过热器降温电动阀反馈", ""));
        this.addPoint(new MockField("mo_zhufengjipinlüfankui", 159, 4, "主风机频率反馈", ""));
        this.addPoint(new MockField("mo_xunhuanfengjipinlüfankui", 163, 4, "循环风机频率反馈", ""));
        this.addPoint(new MockField("mo_kongyuqijinfengwendu", 167, 4, "空预器进风温度", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinfengyali", 171, 4, "空预器进风压力", "MPa"));
        this.addPoint(new MockField("mo_kongyuqichufengwendu", 175, 4, "空预器出风温度", "℃"));
        this.addPoint(new MockField("mo_kongyuqichufengyali", 179, 4, "空预器出风压力", "MPa"));
        this.addPoint(new MockField("mo_zhaoqiyali", 183, 4, "沼气压力", "KPa"));
        this.addPoint(new MockField("mo_zhaoqishunshiliuliang", 187, 4, "沼气瞬时流量", "m³/h"));
        this.addPoint(new MockField("mo_zhaoqileijiliuliang", 191, 4, "沼气累计流量", "m³/h"));
        this.addPoint(new MockField("mo_zhaoqifengjipinlvfankui", 195, 4, "沼气风机频率反馈", "Hz"));


        this.addPoint(new SettingField("se_qiluyalisheding", 248, 4, "启炉压力设定", "MPa"));
        this.addPoint(new SettingField("se_mubiaoyalisheding", 252, 4, "目标压力设定", "MPa"));
        this.addPoint(new SettingField("se_tingluyalisheding", 256, 4, "停炉压力设定", "MPa"));
        this.addPoint(new SettingField("se_chaoyabaojingyalisheding", 260, 4, "超压报警压力设定", "MPa"));
        this.addPoint(new SettingField("se_paiyanchaowenbaojing", 264, 4, "排烟超温报警", "℃"));
        this.addPoint(new SettingField("se_guolushuiweimubiaosheding", 268, 4, "锅炉水位目标设定", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijigaobaojingsheding", 272, 4, "锅炉水位极高报警设定", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijidibaojingsheding", 276, 4, "锅炉水位极低报警设定", "mm"));
        this.addPoint(new SettingField("se_addshuibengshoudongpinlüsheding", 280, 4, "给水泵手动频率设定", "Hz"));
        this.addPoint(new SettingField("se_chuyangqibushuimubiaosheding", 284, 4, "除氧器补水目标设定", "mm"));
        this.addPoint(new SettingField("se_chuyangqijigaobaojingsheding", 288, 4, "除氧器极高报警设定", "mm"));
        this.addPoint(new SettingField("se_chuyangqitingbengyeweisheding", 292, 4, "除氧器停泵液位设定", "mm"));
        this.addPoint(new SettingField("se_chuyangqiqibengyeweisheding", 296, 4, "除氧器启泵液位设定", "mm"));
        this.addPoint(new SettingField("se_chuyangqijidibaojingsheding", 300, 4, "除氧器极低报警设定", "mm"));
        this.addPoint(new SettingField("se_chuyangqibushuishoudonggeisu", 304, 4, "除氧器补水手动给速", "Hz"));
        this.addPoint(new SettingField("se_zhaoqiyalimubiaosheding", 308, 4, "沼气压力目标设定", "KPa"));


        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 368, 2, "1#补水泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 370, 2, "1#补水泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 372, 2, "2#补水泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 374, 2, "2#补水泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_1_jienengbeng_auto", 376, 2, "1#节能泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_JIE_NENG_BENG_1, 378, 2, "1#节能泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_jienengbeng_auto", 380, 2, "2#节能泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_JIE_NENG_BENG_2, 382, 2, "2#节能泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_1_chuyangbeng_auto", 384, 2, "1#除氧泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_1, 386, 2, "1#除氧泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_chuyangbeng_auto", 388, 2, "2#除氧泵", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_2, 390, 2, "2#除氧泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_baojingshuchuzhishi", 392, 2, "报警输出指示", ZH_CN.coms_open_close));
        this.addPoint(new DeviceField("de_1_zhaoqifengji_auto", 394, 2, "1#沼气风机", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHAO_QI_FAN_1, 396, 2, "1#沼气风机", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_zhaoqifengji_auto", 398, 2, "2#沼气风机", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHAO_QI_FAN_2, 400, 2, "2#沼气风机启", ZH_CN.coms_start_stop));

        this.addPoint(new ExceptionField("ex_chaoyabaojingyalikaiguan", 448, 2, "超压报警（压力开关）", 0));
        this.addPoint(new ExceptionField("ex_chaoyabaojingshedingzhi", 448, 2, "超压报警（设定值）", 1));
        this.addPoint(new ExceptionField("ex_paiyanchaowenbaojing", 448, 2, "排烟超温报警", 2));
        this.addPoint(new ExceptionField("ex_ruanshuixiangqueshuibaojing", 448, 2, "软水箱缺水报警", 3));
        this.addPoint(new ExceptionField("ex_shuidianjiluojicuobaojing", 448, 2, "水电极逻辑错报警", 4));
        this.addPoint(new ExceptionField("ex_yalibiansongqiguzhangbaojing", 448, 2, "压力变送器故障报警", 5));
        this.addPoint(new ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 448, 2, "水位变送器故障报警", 6));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhangbaojing", 448, 2, "排烟温度传感器故障报警", 7));

        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 448, 2, "燃烧器故障", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 448, 2, "燃气泄漏", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 448, 2, "燃气压力异常", 10));
        this.addPoint(new ExceptionField("ex_shuiweiweidibaojingdianji", 448, 2, "水位危低报警（电极）", 11));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingdianji", 448, 2, "水位极低报警（电极）", 12));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingdianji", 448, 2, "水位极高报警（电极）", 13));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingshedingzhi", 448, 2, "水位极低报警（设定值）", 14));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingshedingzhi", 448, 2, "水位极高报警（设定值）", 15));

        this.addPoint(new ExceptionField("ex_addshuibeng1guzhang", 450, 2, "给水泵1故障", 0));
        this.addPoint(new ExceptionField("ex_addshuibeng2guzhang", 450, 2, "给水泵2故障", 1));
        this.addPoint(new ExceptionField("ex_zhaoqifengjibianpinqiguzhang", 450, 2, "沼气风机变频器故障", 2));

        this.addPoint(new ExceptionField("ex_chuyangqiqueshuibaojing", 450, 2, "除氧器缺水报警", 8));
        this.addPoint(new ExceptionField("ex_chuyangqigaoshuiweibaojing", 450, 2, "除氧器高水位报警", 9));
        this.addPoint(new ExceptionField("ex_addshuibengbianpinqiguzhang", 450, 2, "给水泵变频器故障", 10));
        this.addPoint(new ExceptionField("ex_chuyangbengbianpinqiguzhang", 450, 2, "除氧泵变频器故障", 11));
        this.addPoint(new ExceptionField("ex_zhufengjibianpinqiguzhang", 450, 2, "主风机变频器故障", 12));
        this.addPoint(new ExceptionField("ex_xunhuanfengjibianpinqiguzhang", 450, 2, "循环风机变频器故障", 13));
        this.addPoint(new ExceptionField("ex_jienengbeng1guzhang", 450, 2, "节能泵1故障", 14));
        this.addPoint(new ExceptionField("ex_jienengbeng2guzhang", 450, 2, "节能泵2故障", 15));

    }
}