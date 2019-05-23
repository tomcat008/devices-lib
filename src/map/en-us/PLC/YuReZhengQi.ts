import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_YuReZhengQi extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Feed water pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_YANG_BENG, "Deaeration pump"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 30, Map_PLC_YuReZhengQi.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 1, Map_PLC_YuReZhengQi.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_YuReZhengQi.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));


        this.addPoint(new MockField("mo_zhengqiyali", 35, 4, "Steam pressure", "MPa"));
        this.addPoint(new MockField("mo_zhengqiwendu", 39, 4, "Steam temperature", "℃"));
        this.addPoint(new MockField("mo_guolushuiwei", 43, 4, "Boiler water level", "mm"));
        this.addPoint(new MockField("mo_zhengqishunshiliuliang", 47, 4, "Instantaneous flow rate of steam", "T/H"));
        this.addPoint(new MockField("mo_bushuishunshiliuliang", 51, 4, "Instantaneous flow rate of replenishment water", "m³/h"));
        this.addPoint(new MockField("mo_zhengqileijiliuliang", 55, 4, "Cumulative steam flow", "T"));
        this.addPoint(new MockField("mo_bushuileijiliuliang", 59, 4, "Cumulative flow rate of recharge", "m³"));
        this.addPoint(new MockField("mo_jinyanwendu", 63, 4, "Inlet temperature", "℃"));
        this.addPoint(new MockField("mo_jinyanyali", 67, 4, "Smoke pressure", "Kpa"));
        this.addPoint(new MockField("mo_chuyanwendu", 71, 4, "Smoke temperature", "℃"));
        this.addPoint(new MockField("mo_chuyanyali", 75, 4, "Smoke pressure", "Kpa"));
        this.addPoint(new MockField("mo_bushuiwendu", 79, 4, "Make-up temperature", "℃"));
        this.addPoint(new MockField("mo_bushuiyali", 83, 4, "Water supplement pressure", "Mpa"));
        this.addPoint(new MockField("mo_bushuibengpinlvfankui", 87, 4, "Frequency Feedback of Supplementary Pump", "Hz"));
        this.addPoint(new MockField("mo_chushuibengpinlvfankui", 91, 4, "Frequency feedback of dewatering pump", "Hz"));
        this.addPoint(new MockField("mo_ruanshuixiangyewei", 95, 4, "Soft water tank level", "cm"));
        this.addPoint(new MockField("mo_chuyangqiyewei", 99, 4, "Deaerator level", "cm"));
        this.addPoint(new MockField("mo_chuyangqiwendu", 103, 4, "Deaerator temperature", "℃"));
        this.addPoint(new MockField("mo_chuyangqiyali", 107, 4, "Deaerator pressure", "KPa"));
        this.addPoint(new MockField("mo_bushuidiandongfafankui", 111, 4, "Feedback of Supplementary Electric Valve", "%"));
        this.addPoint(new MockField("mo_chuyangbushuidiandongfafankui", 115, 4, "Feedback of Electric Valve for Deoxygenation and Supplementary Water", "%"));
        this.addPoint(new MockField("mo_chuyangzhengqidiandongfafankui", 119, 4, "Feedback of Deoxygenated Steam Electric Valve", "%"));
        this.addPoint(new MockField("mo_jinyandiandongfafankui", 123, 4, "Feedback of smoke intake electric valve", "%"));
        this.addPoint(new MockField("mo_chuyandiandongfafankui", 127, 4, "Feedback of smoke discharge electric valve", "%"));
        this.addPoint(new MockField("mo_guoluzhuzhengqitiaojiefafankui", 131, 4, "Feedback of Boiler Main Steam Regulating Valve", "%"));
        this.addPoint(new MockField("mo_shigufangshuidiandongfafankui", 135, 4, "Feedback of Accident Discharge Electric Valve", "%"));
        this.addPoint(new MockField("mo_jinjipaiqidiandongfafankui", 139, 4, "Emergency Exhaust Electric Valve Feedback", "%"));
        this.addPoint(new MockField("mo_panyanwenduxianshi", 143, 4, "Exhaust smoke temperature display", "℃"));

        this.addPoint(new SettingField("se_chaoyabaojingyalisheding", 248, 4, "Overpressure alarm pressure setting", "MPa"));
        this.addPoint(new SettingField("se_guolushuiweimubiaosheding", 252, 4, "Target Setting of Boiler Water Level", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijigaobaojingsheding", 256, 4, "Alarm setting for extremely high water level of boiler", "mm"));
        this.addPoint(new SettingField("se_guolushuiweigaosheding", 260, 4, "Setting of Boiler Water Level Height", "mm"));
        this.addPoint(new SettingField("se_guolushuiweidisheding", 264, 4, "Low Setting of Boiler Water Level", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijidibaojingsheding", 268, 4, "Boiler Water Level Very Low Alarm Setting", "mm"));
        this.addPoint(new SettingField("se_jishuibengshoudongpinlvsheding", 272, 4, "Manual Frequency Setting of Feed Pump", "Hz"));
        this.addPoint(new SettingField("se_chuyangqibushuimubiaosheding", 276, 4, "Target setting of deaerator replenishment", "mm"));
        this.addPoint(new SettingField("se_chuyangqishuiweijigaobaojingsheding", 280, 4, "Alarm Setting for Extremely High Water Level of Deaerator", "CM"));
        this.addPoint(new SettingField("se_chuyangqitingbengyeweisheding", 284, 4, "Deoxygenator Stop Pump Level Setting", "CM"));
        this.addPoint(new SettingField("se_chuyangqiqibengyeweisheding", 288, 4, "Deoxidizer Start-up Level Setting", "CM"));
        this.addPoint(new SettingField("se_chuyangqijidibaojingsheding", 292, 4, "Deaerator Very Low Alarm Settings", "CM"));
        this.addPoint(new SettingField("se_chuyangqibushuishoudonggeisu", 296, 4, "Manual setting of deaerator replenishment", "%"));
        this.addPoint(new SettingField("se_jinyandiandongfageiding", 300, 4, "Given smoke intake electric valve", "%"));
        this.addPoint(new SettingField("se_chuyandiandongfageiding", 304, 4, "Given the Electric Valve for Exhausting Smoke", "%"));
        this.addPoint(new SettingField("se_chuyangqizhengqishoudongjiding", 308, 4, "Deaerator Steam Manual Setting", "%"));
        this.addPoint(new SettingField("se_chuyangqiwendumubiaojiding", 312, 4, "Deaerator temperature target setting", "℃"));
        this.addPoint(new SettingField("se_ruanshuixiangqueshuibaojingsheding", 316, 4, "Water shortage alarm setting for soft water tank", "%"));
        this.addPoint(new SettingField("se_paiyanchaowenbaojingsheding", 320, 4, "Setting of smoke exhaust overtemperature alarm", "℃"));

        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 368, 2, "1#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 370, 2, "1#Make-up Pump On/Off", Map_PLC_YuReZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 372, 2, "2#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 374, 2, "2#Make-up Pump On/Off", Map_PLC_YuReZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_1_chuyangbeng_auto", 376, 2, "1#Deaeration pump Manual/Automatic ", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_1, 378, 2, "1#Deaeration pump On/Off", Map_PLC_YuReZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_chuyangbeng_auto", 380, 2, "2#Deaeration pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_2, 382, 2, "2#Deaeration pump On/Off", Map_PLC_YuReZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_baojingshuchuzhishi", 384, 2, "Alarm output indication", Map_PLC_YuReZhengQi.coms_open_close));

        this.addPoint(new ExceptionField("ex_shuiweiweidibaojingdianji", 448, 2, "Alarm (electrode) for dangerous low water level", 8));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingdianji", 448, 2, "Very Low Water Level Alarm (Electrode)", 9));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingdianji", 448, 2, "Alarm (electrode) for extremely high water level", 10));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingshedingzhi", 448, 2, "Very low water level alarm (set value)", 11));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingshedingzhi", 448, 2, "Alarm of extremely high water level (set value)", 12));

        this.addPoint(new ExceptionField("ex_chaoyabaojingyalikaiguan", 448, 2, "Overvoltage alarm (pressure switch)", 13));
        this.addPoint(new ExceptionField("ex_chaoyabaojingshedingzhi", 448, 2, "Overvoltage alarm (set value)", 14));
        this.addPoint(new ExceptionField("ex_paiyanchaowenbaojing", 448, 2, "Exhaust smoke overtemperature alarm", 15));
        this.addPoint(new ExceptionField("ex_ruanshuixiangqueshuibaojing", 448, 2, "Water shortage alarm for soft water tank", 0));
        this.addPoint(new ExceptionField("ex_shuidianjiluojicuobaojing", 448, 2, "Water Electrode Logic Error Alarm", 1));
        this.addPoint(new ExceptionField("ex_yalibiansongqiguzhangbaojing", 448, 2, "Fault Alarm of Pressure Transmitter", 2));
        this.addPoint(new ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 448, 2, "Fault alarm of water level transmitter", 3));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhangbaojing", 448, 2, "Fault alarm of smoke exhaust temperature sensor", 4));
        this.addPoint(new ExceptionField("ex_chuyangqiqueshuibaojing", 448, 2, "Deaerator water shortage alarm", 5));
        this.addPoint(new ExceptionField("ex_chuyangqigaoshuiweibaojing", 448, 2, "Deaerator High Water Level Alarm", 6));
        this.addPoint(new ExceptionField("ex_addshuibengbianpinqiguzhang", 448, 2, "Fault of Frequency Converter of Feedwater Pump", 7));
        this.addPoint(new ExceptionField("ex_chuyangbengbianpinqiguzhang", 448, 2, "Fault of Deoxygenation Pump Frequency Converter", 8));

        this.addPoint(new ExceptionField("ex_bushuibeng1guzhang", 450, 2, "Failure of Supplementary Pump 1", 8));
        this.addPoint(new ExceptionField("ex_bushuibeng2guzhang", 450, 2, "Failure of Supplementary Pump 2", 9));
        this.addPoint(new ExceptionField("ex_chuyangbeng1guzhang", 450, 2, "Deaerator Pump 1 Fault", 10));
        this.addPoint(new ExceptionField("ex_chuyangbeng2guzhang", 450, 2, "Deoxygenation Pump 2 Failure", 11));

    }
}