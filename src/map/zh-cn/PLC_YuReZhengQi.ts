import { PLC as PLC_Map } from "./PLC";
import { PLC } from "../../devices/PLC";
import { CountField } from "../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../meta/PLC/meta";
import { ZH_CN } from "./ZH_CN";
import { BaseInfoField } from "../../meta/CTL_NJZJ_485/meta";
import { SdcSoftDevice } from "../../devices/SdcSoftDevice";
import { FixedValueField } from "../../meta/FixedValueField";

export = class PLC_YuReZhengQi extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "给水泵"));
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_YANG_BENG, "除氧泵"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "运行小时数", "时"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "运行天数", "天"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "系统状态", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料", 30, ZH_CN.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质", 1, ZH_CN.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "水位状态", '', ZH_CN.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "燃烧器状态", '', PLC_Map.coms_ranshaoqi_status));


        this.addPoint(new MockField("mo_zhengqiyali", 35, 4, "蒸汽压力", "MPa"));
        this.addPoint(new MockField("mo_zhengqiwendu", 39, 4, "蒸汽温度", "℃"));
        this.addPoint(new MockField("mo_guolushuiwei", 43, 4, "锅炉水位", "mm"));
        this.addPoint(new MockField("mo_zhengqishunshiliuliang", 47, 4, "蒸汽瞬时流量", "T/H"));
        this.addPoint(new MockField("mo_bushuishunshiliuliang", 51, 4, "补水瞬时流量", "m³/h"));
        this.addPoint(new MockField("mo_zhengqileijiliuliang", 55, 4, "蒸汽累计流量", "T"));
        this.addPoint(new MockField("mo_bushuileijiliuliang", 59, 4, "补水累计流量", "m³"));
        this.addPoint(new MockField("mo_jinyanwendu", 63, 4, "进烟温度", "℃"));
        this.addPoint(new MockField("mo_jinyanyali", 67, 4, "进烟压力", "Kpa"));
        this.addPoint(new MockField("mo_chuyanwendu", 71, 4, "出烟温度", "℃"));
        this.addPoint(new MockField("mo_chuyanyali", 75, 4, "出烟压力", "Kpa"));
        this.addPoint(new MockField("mo_bushuiwendu", 79, 4, "补水温度", "℃"));
        this.addPoint(new MockField("mo_bushuiyali", 83, 4, "补水压力", "Mpa"));
        this.addPoint(new MockField("mo_bushuibengpinlvfankui", 87, 4, "补水泵频率反馈", "Hz"));
        this.addPoint(new MockField("mo_chushuibengpinlvfankui", 91, 4, "除水泵频率反馈", "Hz"));
        this.addPoint(new MockField("mo_ruanshuixiangyewei", 95, 4, "软水箱液位", "cm"));
        this.addPoint(new MockField("mo_chuyangqiyewei", 99, 4, "除氧器液位", "cm"));
        this.addPoint(new MockField("mo_chuyangqiwendu", 103, 4, "除氧器温度", "℃"));
        this.addPoint(new MockField("mo_chuyangqiyali", 107, 4, "除氧器压力", "KPa"));
        this.addPoint(new MockField("mo_bushuidiandongfafankui", 111, 4, "补水电动阀反馈", "%"));
        this.addPoint(new MockField("mo_chuyangbushuidiandongfafankui", 115, 4, "除氧补水电动阀反馈", "%"));
        this.addPoint(new MockField("mo_chuyangzhengqidiandongfafankui", 119, 4, "除氧蒸汽电动阀反馈", "%"));
        this.addPoint(new MockField("mo_jinyandiandongfafankui", 123, 4, "进烟电动阀反馈", "%"));
        this.addPoint(new MockField("mo_chuyandiandongfafankui", 127, 4, "出烟电动阀反馈", "%"));
        this.addPoint(new MockField("mo_guoluzhuzhengqitiaojiefafankui", 131, 4, "锅炉主蒸汽调节阀反馈", "%"));
        this.addPoint(new MockField("mo_shigufangshuidiandongfafankui", 135, 4, "事故放水电动阀反馈", "%"));
        this.addPoint(new MockField("mo_jinjipaiqidiandongfafankui", 139, 4, "紧急排气电动阀反馈", "%"));
        this.addPoint(new MockField("mo_panyanwenduxianshi", 143, 4, "排烟温度显示", "℃"));

        this.addPoint(new SettingField("se_chaoyabaojingyalisheding", 248, 4, "超压报警压力设定", "MPa"));
        this.addPoint(new SettingField("se_guolushuiweimubiaosheding", 252, 4, "锅炉水位目标设定", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijigaobaojingsheding", 256, 4, "锅炉水位极高报警设定", "mm"));
        this.addPoint(new SettingField("se_guolushuiweigaosheding", 260, 4, "锅炉水位高设定", "mm"));
        this.addPoint(new SettingField("se_guolushuiweidisheding", 264, 4, "锅炉水位低设定", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijidibaojingsheding", 268, 4, "锅炉水位极低报警设定", "mm"));
        this.addPoint(new SettingField("se_jishuibengshoudongpinlvsheding", 272, 4, "给水泵手动频率设定", "Hz"));
        this.addPoint(new SettingField("se_chuyangqibushuimubiaosheding", 276, 4, "除氧器补水目标设定", "mm"));
        this.addPoint(new SettingField("se_chuyangqishuiweijigaobaojingsheding", 280, 4, "除氧器水位极高报警设定", "CM"));
        this.addPoint(new SettingField("se_chuyangqitingbengyeweisheding", 284, 4, "除氧器停泵液位设定", "CM"));
        this.addPoint(new SettingField("se_chuyangqiqibengyeweisheding", 288, 4, "除氧器启泵液位设定", "CM"));
        this.addPoint(new SettingField("se_chuyangqijidibaojingsheding", 292, 4, "除氧器极低报警设定", "CM"));
        this.addPoint(new SettingField("se_chuyangqibushuishoudonggeisu", 296, 4, "除氧器补水手动给定", "%"));
        this.addPoint(new SettingField("se_jinyandiandongfageiding", 300, 4, "进烟电动阀给定", "%"));
        this.addPoint(new SettingField("se_chuyandiandongfageiding", 304, 4, "出烟电动阀给定", "%"));
        this.addPoint(new SettingField("se_chuyangqizhengqishoudongjiding", 308, 4, "除氧器蒸汽手动给定", "%"));
        this.addPoint(new SettingField("se_chuyangqiwendumubiaojiding", 312, 4, "除氧器温度目标给定", "℃"));
        this.addPoint(new SettingField("se_ruanshuixiangqueshuibaojingsheding", 316, 4, "软水箱缺水报警设定", "%"));
        this.addPoint(new SettingField("se_paiyanchaowenbaojingsheding", 320, 4, "排烟超温报警设定", "℃"));

        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 368, 2, "1#给水泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 370, 2, "1#给水泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 372, 2, "2#给水泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 374, 2, "2#给水泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_1_chuyangbeng_auto", 376, 2, "1#除氧泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_1, 378, 2, "1#除氧泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_2_chuyangbeng_auto", 380, 2, "2#除氧泵",PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_2, 382, 2, "2#除氧泵", ZH_CN.coms_start_stop));
        this.addPoint(new DeviceField("de_baojingshuchuzhishi", 384, 2, "报警输出指示", ZH_CN.coms_open_close));

        this.addPoint(new ExceptionField("ex_shuiweiweidibaojingdianji", 448, 2, "水位危低报警（电极）", 8));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingdianji", 448, 2, "水位极低报警（电极）", 9));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingdianji", 448, 2, "水位极高报警（电极）", 10));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingshedingzhi", 448, 2, "水位极低报警（设定值）", 11));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingshedingzhi", 448, 2, "水位极高报警（设定值）", 12));

        this.addPoint(new ExceptionField("ex_chaoyabaojingyalikaiguan", 448, 2, "超压报警（压力开关）", 13));
        this.addPoint(new ExceptionField("ex_chaoyabaojingshedingzhi", 448, 2, "超压报警（设定值）", 14));
        this.addPoint(new ExceptionField("ex_paiyanchaowenbaojing", 448, 2, "排烟超温报警", 15));
        this.addPoint(new ExceptionField("ex_ruanshuixiangqueshuibaojing", 448, 2, "软水箱缺水报警", 0));
        this.addPoint(new ExceptionField("ex_shuidianjiluojicuobaojing", 448, 2, "水电极逻辑错报警", 1));
        this.addPoint(new ExceptionField("ex_yalibiansongqiguzhangbaojing", 448, 2, "压力变送器故障报警", 2));
        this.addPoint(new ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 448, 2, "水位变送器故障报警", 3));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhangbaojing", 448, 2, "排烟温度传感器故障报警", 4));
        this.addPoint(new ExceptionField("ex_chuyangqiqueshuibaojing", 448, 2, "除氧器缺水报警", 5));
        this.addPoint(new ExceptionField("ex_chuyangqigaoshuiweibaojing", 448, 2, "除氧器高水位报警", 6));
        this.addPoint(new ExceptionField("ex_addshuibengbianpinqiguzhang", 448, 2, "给水泵变频器故障", 7));
        this.addPoint(new ExceptionField("ex_chuyangbengbianpinqiguzhang", 448, 2, "除氧泵变频器故障", 8));

        this.addPoint(new ExceptionField("ex_bushuibeng1guzhang", 450, 2, "补水泵1故障", 8));
        this.addPoint(new ExceptionField("ex_bushuibeng2guzhang", 450, 2, "补水泵2故障", 9));
        this.addPoint(new ExceptionField("ex_chuyangbeng1guzhang", 450, 2, "除氧泵1故障", 10));
        this.addPoint(new ExceptionField("ex_chuyangbeng2guzhang", 450, 2, "除氧泵2故障", 11));
   
    }
}