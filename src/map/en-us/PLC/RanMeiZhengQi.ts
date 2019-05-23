import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_RanMeiZhengQi extends PLC_Map {

    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Water Feeding Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_YANG_BENG, "De-aerator Water Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_GU_FENG_FAN, "FD Fan"));
        this.addPoint(new CountField(PLC.KEY_POINT_YIN_FENG_FAN, "ID Fan"));
        this.addPoint(new CountField(PLC.KEY_POINT_LU_PAI_FAN, "Chain Grate"));
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_ZHA_FAN, "Slag Remover"));


        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 2, Map_PLC_RanMeiZhengQi.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 1, Map_PLC_RanMeiZhengQi.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanMeiZhengQi.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));


        this.addPoint(new MockField("mo_zhengqiyali", 35, 4, "Steam Pressure", "MPa"));
        this.addPoint(new MockField("mo_guoluyewei", 39, 4, "Boiler Water Level", "mm"));
        this.addPoint(new MockField("mo_zhengqishunshiliuliang", 43, 4, "Steam Instantaneous Flow Rate", "T/h"));
        this.addPoint(new MockField("mo_bushuishunshiliuliang", 47, 4, "Make-up Water Instantaneous Flow Rate", "m³/h"));
        this.addPoint(new MockField("mo_lutangwendu", 51, 4, "Furnace Temperature", "℃"));
        this.addPoint(new MockField("mo_lutangyali", 55, 4, "Furnace Pressure", "Pa"));
        this.addPoint(new MockField("mo_shengmeiqijinkouyanwen", 59, 4, "Economizer Inlet Flus Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_zuizhongpaiyanwendu", 63, 4, "Discharged Flus Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_zhengqileijiliuliang", 67, 4, "Steam  Integrated Flow Rate", "T"));
        this.addPoint(new MockField("mo_bushuileijiliuliang", 71, 4, "Make-up Integrated Flow Rate", "m³"));
        this.addPoint(new MockField("mo_shengmeiqijinshuiwendu", 75, 4, "Economizer Inlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_shengmeiqichushuiwendu", 79, 4, "Economizer Outlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_bushuiwendu", 83, 4, "Make-up Water Temperature", "℃"));
        this.addPoint(new MockField("mo_paiyanyali", 87, 4, "Discharged Flue Gas Pressure", "Pa"));
        this.addPoint(new MockField("mo_addshuibengpinlvfankui", 91, 4, "Water Feeding Pump Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_yinfengjipinlvfankui", 95, 4, "ID Fan Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_gufengjipinlvfankui", 99, 4, "FD Fan Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_ruanshuixiangyewei", 103, 4, "Soft Water Tank Water Level", "%"));
        this.addPoint(new MockField("mo_guorezhengqiyali", 107, 4, "Super-heated Steam Pressure", "MPa"));
        this.addPoint(new MockField("mo_chuyangqiyewei", 111, 4, "De-aerator Water Level", "%"));
        this.addPoint(new MockField("mo_guoreqichukouyanwen", 115, 4, "Super-heater Outlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_guoreqizhengqiwendu", 119, 4, "Super-heater Steam Temperature", "℃"));
        this.addPoint(new MockField("mo_baohezhengqiwendu", 123, 4, "Saturated Steam Temperature", "℃"));
        this.addPoint(new MockField("mo_yureqijinyanwendu", 127, 4, "Ai Pre-heater Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_yureqijinyanyali", 131, 4, "Air Pre-heater Inlet Flue Gas Pressure", "Pa"));
        this.addPoint(new MockField("mo_chuyangqiwendu", 135, 4, "De-aerator Temperature", "℃"));
        this.addPoint(new MockField("mo_chuyangqiyali", 139, 4, "De-aerator Pressure", "KPa"));
        this.addPoint(new MockField("mo_chuyangbengpinlvfankui", 143, 4, "De-aerator Water Pump Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_bushuidiandongfafankui", 147, 4, "Make-up Electric Valve Feedback", "%"));
        this.addPoint(new MockField("mo_jianwenshuidiandongfafankui", 151, 4, "Attemperating Water Electric Valve Feedback", "%"));
        this.addPoint(new MockField("mo_chuyangjiarediandongfafankui", 155, 4, "De-aerator Heating Electric Valve Feedback", "%"));
        this.addPoint(new MockField("mo_zhaoqiyali", 159, 4, "Biogas Pressure", "kPa"));
        this.addPoint(new MockField("mo_lutangchukouyanwen", 163, 4, "Furnace Outlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqichukouyanwen", 167, 4, "Air Pre-heater Outlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_shengmeiqichukouyanwen", 171, 4, "Economizer Outlet Flus Gas Temperature", "℃"));



        this.addPoint(new SettingField("se_qiluyalisheding", 248, 4, "Boiler Start Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_mubiaoyalisheding", 252, 4, "Boiler target Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_tingluyalisheding", 256, 4, "Bolier Shutdown Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_chaoyabaojingyalisheding", 260, 4, "Over-pressure Alarm Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_paiyanchaowenbaojing", 264, 4, "Flue Gas Over-temperature Alarm", "℃"));
        this.addPoint(new SettingField("se_guolushuiweimubiaosheding", 268, 4, "Boiler Water Level Setting", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijigaobaojingsheding", 272, 4, "Boiler Extrem Water Level Alarm Setting", "mm"));
        this.addPoint(new SettingField("se_guolutingbengshuiweisheding", 276, 4, "Boiler Water Pump Shutdown Water Level Setting", "mm"));
        this.addPoint(new SettingField("se_guoluqibengshuiweisheding", 280, 4, "Boiler Water Pump Start Water Level Setting", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijidibaojingsheding", 284, 4, "Boiler Extrem Low Water Level Alarm Setting", "mm"));
        this.addPoint(new SettingField("se_guolushuiweishoudonggeisu", 288, 4, "Manual Boiler Water Level Feeding", "%"));

        this.addPoint(new DeviceField("de_yinfeng_auto", 368, 2, "ID Fan Manual/ Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_YIN_FENG_FAN_1, 370, 2, "ID Fan Start/ Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_gufeng_auto", 372, 2, "FD Fan Manual/ Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_GU_FENG_FAN_1, 374, 2, "FD Fan Start/ Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_lupai_auto", 376, 2, "Chain Grate Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_LU_PAI_FAN_1, 378, 2, "Chain Grate Start/Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_chuzha_auto", 380, 2, "Slag Removing Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_ZHA_FAN_1, 382, 2, "Slag Removing Start/Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 384, 2, "1#Water Feeding Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 386, 2, "1#Water Feeding Pump Start/Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 388, 2, "2#Water Feeding Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 390, 2, "2#Water Feeding Pump Start/Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_1_chuyangbeng_auto", 392, 2, "1#De-aerator Water Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_1, 394, 2, "1#De-aerator Water Pump Start/Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));
        this.addPoint(new DeviceField("de_2_chuyangbeng_auto", 396, 2, "2#De-aerator Water Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_2, 398, 2, "2#De-aerator Water Pump Start/Stop", Map_PLC_RanMeiZhengQi.coms_start_stop));

        this.addPoint(new ExceptionField("ex_shuiweijidibaojing_shedingzhi", 448, 2, "Extrem Low Water Level( Setting Value)", 0));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojing_shedingzhi", 448, 2, "Extrem High Water Level Alarm( Setting Value)", 1));
        this.addPoint(new ExceptionField("ex_chaoyabaojing_yalikaiguan", 448, 2, "Over-pressure Alarm( Pressure Switch)", 2));
        this.addPoint(new ExceptionField("ex_chaoyabaojing_shedingzhi", 448, 2, "Over-pressure Alarm(Setting Value)", 3));
        this.addPoint(new ExceptionField("ex_paiyanchaowenbaojing", 448, 2, "Flue Gas Over-temperature Alarm", 4));
        this.addPoint(new ExceptionField("ex_ruanshuixiangqueshuibaojing", 448, 2, "Soft Water Tank Water Shortage Alarm", 5));
        this.addPoint(new ExceptionField("ex_shuidianjiluojicuobaojing", 448, 2, "Water Electrode Logic Failure Alarm", 6));
        this.addPoint(new ExceptionField("ex_yalibiansongqiguzhangbaojing", 448, 2, "Pressure Transmitter Failure Alarm", 7));

        this.addPoint(new ExceptionField("ex_yinfengjibianpinqiguzhang", 448, 2, "ID Fan Frequency Converter Failure", 8));
        this.addPoint(new ExceptionField("ex_gufengjibianpinqiguzhang", 448, 2, "FD Fan Frequency Converter Failure", 9));
        this.addPoint(new ExceptionField("ex_lupaibianpinqiguzhang", 448, 2, "Chain Grate Frequency Converter Failure", 10));
        this.addPoint(new ExceptionField("ex_chuzhabianpinqiguzhang", 448, 2, "Slag Remover Frequency Converter Failure", 11));
        this.addPoint(new ExceptionField("ex_jishuibianpinqiguzhang", 448, 2, "Water Feeding Pump Frequency Converter Failure", 12));
        this.addPoint(new ExceptionField("ex_shuiweiweidibaojing", 448, 2, "Dangerous Low Water Level Alarm (Electrode)", 13));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojing_dianji", 448, 2, "Extrem Low Water Level( Electrode)", 14));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojing_dianji", 448, 2, "Extrem High Water Level Alarm( Setting Value)", 15));


        this.addPoint(new ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 450, 2, "Water level Transmitter Failure Alarm", 8));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhangbaojing", 450, 2, "Flue Gas Temperature Sensor Failure Alarm", 9));
        this.addPoint(new ExceptionField("ex_chuyangqiqueshuibaojing", 450, 2, "De-aerator Water Shortage Alarm", 10));
        this.addPoint(new ExceptionField("ex_chuyangqigaoshuiweibaojing", 450, 2, "High De-aerator Water Level Alarm", 11));

    }
}