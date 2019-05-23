import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_RanYouZhengQi extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Water Feeding Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_JIE_NENG_BENG, "Energy-Saving Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_YANG_BENG, "De-aerator Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_ZHAO_QI_FAN, "Biogas Blower"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hour"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 0, Map_PLC_RanYouZhengQi.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 1, Map_PLC_RanYouZhengQi.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanYouZhengQi.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));


        this.addPoint(new MockField("mo_zhengqiyali", 35, 4, "Steam Pressure", "MPa"));
        this.addPoint(new MockField("mo_guorezhengqiyali", 39, 4, "Super-heated Steam Pressure", "MPa"));
        this.addPoint(new MockField("mo_zhengqiwendu", 43, 4, "Steam Temperature", "℃"));
        this.addPoint(new MockField("mo_guorezhengqiwendu", 47, 4, "Super-heated Steam Temperature", "℃"));
        this.addPoint(new MockField("mo_guolushuiwei", 51, 4, "Boiler Water Level", ""));
        this.addPoint(new MockField("mo_zhengqishunshiliuliang", 55, 4, "Steam Instantaneous Flow Rate", "m³/h"));
        this.addPoint(new MockField("mo_bushuishunshiliuliang", 59, 4, "Make-up Water Instantaneous Flow Rate", "m³/h"));
        this.addPoint(new MockField("mo_lutangwendu", 63, 4, "Furnace Temperature", "℃"));
        this.addPoint(new MockField("mo_lutangyali", 67, 4, "Furnace Pressure", "MPa"));
        this.addPoint(new MockField("mo_lengningqijinkouyanwen", 71, 4, "Condenser Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_lengningqijinkouyanya", 75, 4, "Condenser Inlet Flue Gas Pressure", "kPa"));
        this.addPoint(new MockField("mo_jienengqijinkouyanwen", 79, 4, "Economizer Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_jienengqijinkouyanya", 83, 4, "Economizer Inlet Flue Gas Pressure", "kPa"));
        this.addPoint(new MockField("mo_zhengqileijiliuliang", 87, 4, "Steam  Integrated Flow Rate", "m³/h"));
        this.addPoint(new MockField("mo_bushuileijiliuliang", 91, 4, "Make-up Integrated Flow Rate", "m³/h"));
        this.addPoint(new MockField("mo_kongyuqijinyanwendu", 95, 4, "Aire Pre-heater Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinyanyali", 99, 4, "Air Pre-heater Inlet Flue Gas Pressure", "kPa"));
        this.addPoint(new MockField("mo_zuizhongpaiyanwendu", 103, 4, "Discharged Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_zuizhongpaiyanyali", 107, 4, "Discharged Flue Gas Pressure", "MPa"));
        this.addPoint(new MockField("mo_lengningqijinshuiwendu", 111, 4, "Condenser Inlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_lengningqichushuiwendu", 115, 4, "Condenser Outlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_jienengqijinshuiwendu", 119, 4, "Economizer Inlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_jienengqichushuiwendu", 123, 4, "Economizer Outlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_lengningqichushuiyali", 127, 4, "Condenser Outlet Water Pressure", "MPa"));
        this.addPoint(new MockField("mo_jienengqichushuiyali", 131, 4, "Economizer Outlet Water Pressure", "MPa"));
        this.addPoint(new MockField("mo_addshuibengpinlüfankui", 135, 4, "Make-up Pump Frequency Feedback", ""));
        this.addPoint(new MockField("mo_ruanshuixiangyewei", 139, 4, "Soft Water Tank Water Level", "mm"));
        this.addPoint(new MockField("mo_chuyangqiyewei", 143, 4, "De-aeraor Water Level", "mm"));
        this.addPoint(new MockField("mo_chuyangqiwendu", 147, 4, "De-aerator Temperature", "℃"));
        this.addPoint(new MockField("mo_bushuidiandongfafankui", 151, 4, "Make-up Electric Valve Feedback", ""));
        this.addPoint(new MockField("mo_guoreqijiangwendiandongfafankui", 155, 4, "Superheater Attemperating Electric Valve Feedback", ""));
        this.addPoint(new MockField("mo_zhufengjipinlüfankui", 159, 4, "Main Blower Frequency Feedback", ""));
        this.addPoint(new MockField("mo_xunhuanfengjipinlüfankui", 163, 4, "Circulating Blower Frequency Feedback", ""));
        this.addPoint(new MockField("mo_kongyuqijinfengwendu", 167, 4, "Air Pre-heater Inlet Air Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinfengyali", 171, 4, "Air pre-heater Inlet Air Pressure", "MPa"));
        this.addPoint(new MockField("mo_kongyuqichufengwendu", 175, 4, "Air Pre-heater Outlet Air Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqichufengyali", 179, 4, "Air Pre-heater Outlet Air Pressure", "MPa"));
        this.addPoint(new MockField("mo_zhaoqiyali", 183, 4, "Methane pressure", "KPa"));
        this.addPoint(new MockField("mo_zhaoqishunshiliuliang", 187, 4, "Methane instantaneous flow rate", "m³/h"));
        this.addPoint(new MockField("mo_zhaoqileijiliuliang", 191, 4, "Cumulative flow of Biogas", "m³/h"));
        this.addPoint(new MockField("mo_zhaoqifengjipinlvfankui", 195, 4, "Frequency feedback of biogas blower", "Hz"));


        this.addPoint(new SettingField("se_qiluyalisheding", 248, 4, "Boiler Start Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_mubiaoyalisheding", 252, 4, "Target Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_tingluyalisheding", 256, 4, "Boiler Stop Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_chaoyabaojingyalisheding", 260, 4, "Overpressure Alarm Setting", "MPa"));
        this.addPoint(new SettingField("se_paiyanchaowenbaojing", 264, 4, "Discharged Flue Gas Over temperature Alarm", "℃"));
        this.addPoint(new SettingField("se_guolushuiweimubiaosheding", 268, 4, "Boiler Water Level Target Setting", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijigaobaojingsheding", 272, 4, "Extrem High Boiler Water Level Setting", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijidibaojingsheding", 276, 4, "Extrem Low Boiler Water Level Alarm Setting", "mm"));
        this.addPoint(new SettingField("se_addshuibengshoudongpinlüsheding", 280, 4, "Feeding Water Pump Manual Frequency Setting", "Hz"));
        this.addPoint(new SettingField("se_chuyangqibushuimubiaosheding", 284, 4, "De-aerator Make-up Water Target Setting", "mm"));
        this.addPoint(new SettingField("se_chuyangqijigaobaojingsheding", 288, 4, "Extrem High Water Level Alarm Setting of De-aerator", "mm"));
        this.addPoint(new SettingField("se_chuyangqitingbengyeweisheding", 292, 4, "Pump-stop Level Setting of De-aerator", "mm"));
        this.addPoint(new SettingField("se_chuyangqiqibengyeweisheding", 296, 4, "Pump-Start Level Setting of De-aerator", "mm"));
        this.addPoint(new SettingField("se_chuyangqijidibaojingsheding", 300, 4, "Extrem Low Water Level  Alarm Setting of De-aerator", "mm"));
        this.addPoint(new SettingField("se_chuyangqibushuishoudonggeisu", 304, 4, "Manual De-aerator Make-up", "Hz"));
        this.addPoint(new SettingField("se_zhaoqiyalimubiaosheding", 308, 4, "Biogas Pressure Target Setting", "KPa"));


        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 368, 2, "1#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 370, 2, "1#Make-up Pump On/Off", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 372, 2, "2#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 374, 2, "2#Make-up Pump On/Off", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_1_jienengbeng_auto", 376, 2, "1#Energy-saving Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_JIE_NENG_BENG_1, 378, 2, "1#Energy-saving Pump On/Off", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_jienengbeng_auto", 380, 2, "2#Energy-saving Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_JIE_NENG_BENG_2, 382, 2, "2#Energy-saving Pump On/Off", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_1_chuyangbeng_auto", 384, 2, "1#De-aerator Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_1, 386, 2, "1#De-aerator Pump On/Off", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_chuyangbeng_auto", 388, 2, "2#De-aerator Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_2, 390, 2, "2#De-aerator Pump On/Off", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_baojingshuchuzhishi", 392, 2, "Alarm Output Indication", Map_PLC_RanYouZhengQi.coms_open_close));
        this.addPoint(new DeviceField("de_1_zhaoqifengji_auto", 394, 2, "1#Biogas Blower Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHAO_QI_FAN_1, 396, 2, "1#Biogas Blower Start/Stop", Map_PLC_RanYouZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_zhaoqifengji_auto", 398, 2, "2#Biogas Blower Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHAO_QI_FAN_2, 400, 2, "2#Biogas Blower Start/Stop", Map_PLC_RanYouZhengQi.coms_start_stop));

        this.addPoint(new ExceptionField("ex_chaoyabaojingyalikaiguan", 448, 2, "Overpressure Alarm (Pressure Switch)", 0));
        this.addPoint(new ExceptionField("ex_chaoyabaojingshedingzhi", 448, 2, "Overpressure Alarm( Setting Value)", 1));
        this.addPoint(new ExceptionField("ex_paiyanchaowenbaojing", 448, 2, "Discharged Flue Gas Over temperature Alarm", 2));
        this.addPoint(new ExceptionField("ex_ruanshuixiangqueshuibaojing", 448, 2, "Soft Water Tank Water Shortage Alarm", 3));
        this.addPoint(new ExceptionField("ex_shuidianjiluojicuobaojing", 448, 2, "Electrode Logic Error Alarm", 4));
        this.addPoint(new ExceptionField("ex_yalibiansongqiguzhangbaojing", 448, 2, "Pressure Transmitter Failure Alarm", 5));
        this.addPoint(new ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 448, 2, "Water Level Transmitter Failure Alarm", 6));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhangbaojing", 448, 2, "Discharged Flue Gas Temperature Transmitter Failure Alarm", 7));

        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 448, 2, "Burner Failure", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 448, 2, "Gas Leakage", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 448, 2, "Gas Pressure Abnormity", 10));
        this.addPoint(new ExceptionField("ex_shuiweiweidibaojingdianji", 448, 2, "Dangerous Low Water Level Alarm (Electrode)", 11));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingdianji", 448, 2, "Extrem Low Water Level Alarm( Electrode)", 12));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingdianji", 448, 2, "Extrem High Water Level Alarm( Electrode)", 13));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojingshedingzhi", 448, 2, "Extrem Low Water Level Alarm( Setting Value)", 14));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojingshedingzhi", 448, 2, "Extrem High Water Level Alarm( Setting Value)", 15));

        this.addPoint(new ExceptionField("ex_addshuibeng1guzhang", 450, 2, "Water Feeding Pump 1 Failure", 0));
        this.addPoint(new ExceptionField("ex_addshuibeng2guzhang", 450, 2, "Water Feeding Pump 2 Failure", 1));
        this.addPoint(new ExceptionField("ex_zhaoqifengjibianpinqiguzhang", 450, 2, "Fault of Frequency Converter of Biogas Fan", 2));

        this.addPoint(new ExceptionField("ex_chuyangqiqueshuibaojing", 450, 2, "De-aerator Water Shortage Alarm", 8));
        this.addPoint(new ExceptionField("ex_chuyangqigaoshuiweibaojing", 450, 2, "De-aerator High Water Level Alarm", 9));
        this.addPoint(new ExceptionField("ex_addshuibengbianpinqiguzhang", 450, 2, "Water Feeding Pump Frequency Converter Failure", 10));
        this.addPoint(new ExceptionField("ex_chuyangbengbianpinqiguzhang", 450, 2, "De-aerator Pump Frequency Converter Failure", 11));
        this.addPoint(new ExceptionField("ex_zhufengjibianpinqiguzhang", 450, 2, "Main Blower Frequency Converter Failure", 12));
        this.addPoint(new ExceptionField("ex_xunhuanfengjibianpinqiguzhang", 450, 2, "Circulating Blower Frequency Converter Failure", 13));
        this.addPoint(new ExceptionField("ex_jienengbeng1guzhang", 450, 2, "Energy-Saving Pump 1 Failure", 14));
        this.addPoint(new ExceptionField("ex_jienengbeng2guzhang", 450, 2, "Energy-Saving Pump 2 Failure", 15));

    }
}