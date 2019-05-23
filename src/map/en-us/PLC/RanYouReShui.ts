import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_RanYouReShui extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Make-up Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 0, Map_PLC_RanYouReShui.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 0, Map_PLC_RanYouReShui.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanYouReShui.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));



        this.addPoint(new MockField("mo_chushuiwendu", 35, 4, "Outlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_huishuiwendu", 39, 4, "Return Water Temperature", "℃"));
        this.addPoint(new MockField("mo_paiyanwendu", 43, 4, "Discharged Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_chushuiyali", 47, 4, "Outlet Water Pressure", "Mpa"));
        this.addPoint(new MockField("mo_huishuiyali", 51, 4, "Return Water Pressure", "Mpa"));
        this.addPoint(new MockField("mo_yacha", 55, 4, "Differential Pressure", "Mpa"));
        this.addPoint(new MockField("mo_lengningqijinyanwendu", 59, 4, "Condenser Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_lengningqijinyanyali", 63, 4, "Condenser Inlet Flue Gas Pressure", "Pa"));
        this.addPoint(new MockField("mo_jienengqijinyanwendu", 67, 4, "Economizer Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_jienengqijinyanyali", 71, 4, "Economizser Inlet Flue Gas Pressure", "Pa"));
        this.addPoint(new MockField("mo_lutangwendu", 75, 4, "Furnace Temperature", "℃"));
        this.addPoint(new MockField("mo_lutangyali", 79, 4, "Furnace Pressure", "Pa"));
        this.addPoint(new MockField("mo_kongyuqijinyanwendu", 83, 4, "Air Pre-heater Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinyanyali", 87, 4, "Air Pre-heater Inlet Flue Gas Pressure", "Pa"));
        this.addPoint(new MockField("mo_kongyuqijinfengwendu", 91, 4, "Air Pre-heater Inlet Air Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqijinfengyali", 95, 4, "Air Pre-heater Inlet Air Pressure", "Kpa"));
        this.addPoint(new MockField("mo_kongyuqichufengwendu", 99, 4, "Air Pre-heater Outlet Air Temperature", "℃"));
        this.addPoint(new MockField("mo_zhufengjipinlüfankui", 103, 4, "Main Blower Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_xunhuanfengjipinlüfankui", 107, 4, "Circulating Blower Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_addshuibengpinlüfankui", 111, 4, "Make-up Pump Feedback", "Hz"));
        this.addPoint(new MockField("mo_shiwaiwendu", 115, 4, "Outdoor Temperature", "℃"));
        this.addPoint(new MockField("mo_xunhuanbeng1pinlüfankui", 119, 4, "Circulating Pump 1 Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_xunhuanbeng2pinlüfankui", 123, 4, "Circulating Pump 2 Frequency Feedback", "Hz"));

        this.addPoint(new SettingField("se_qiluwendusheding", 248, 4, "Boiler Start Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_mubiaowendusheding", 252, 4, "Target Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_tingluwendusheding", 256, 4, "Boiler Shutdown Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_yalidisheding", 260, 4, "Low Pressure Setting", "Mpa"));
        this.addPoint(new SettingField("se_yaligaosheding", 264, 4, "High Pressure Setting", "Mpa"));
        this.addPoint(new SettingField("se_paiyanwenduchaogaobaojingsheding", 268, 4, "se_paiyanwenduchaogaobaojingsheding", "℃"));
        this.addPoint(new SettingField("se_chukouwenduchaogaobaojingsheding", 272, 4, "se_chukouwenduchaogaobaojingsheding", "℃"));
        this.addPoint(new SettingField("se_yalichaogaobaojingsheding", 276, 4, "se_yalichaogaobaojingsheding", "Mpa"));
        this.addPoint(new SettingField("se_yalichaodibaojingsheding", 280, 4, "se_yalichaodibaojingsheding", "Mpa"));


        this.addPoint(new DeviceField("de_ranshaoqiqiting", 368, 2, "Burner On-off", PLC_Map.coms_ranshaoqi_status));
        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 370, 2, "1#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 372, 2, "1#Make-up Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 374, 2, "2#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 376, 2, "2#Make-up Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        this.addPoint(new DeviceField("de_1_xunhuanbeng_auto", 378, 2, "1#Circulating Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 380, 2, "1#Circulating Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));
        this.addPoint(new DeviceField("de_2_xunhuanbeng_auto", 382, 2, "2#Circulating Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 384, 2, "2#Circulating Pump On/Off", Map_PLC_RanYouReShui.coms_start_stop));


        this.addPoint(new ExceptionField("ex_lubichaowenbaojing", 448, 2, "Furnace Wall Over Temperature Alarm", 0));
        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiguzhang", 448, 2, "Outlet Water Temperature Transmitter Failure", 1));
        this.addPoint(new ExceptionField("ex_huishuiwenduchuanganqiguzhang", 448, 2, "Return Water Temperature Transmitter Failure", 2));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 448, 2, "Discharged Flue Gas Temperature Transmitter Failure", 3));
        this.addPoint(new ExceptionField("ex_wendushedingcuowubaojing", 448, 2, "Temperature Setting Error Alarm", 4));
        this.addPoint(new ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 448, 2, "Circulating Pump Interlock Break Alarm", 5));
        this.addPoint(new ExceptionField("ex_waibuliansuoduankaibaojing", 448, 2, "External Interlock Break Alarm", 6));
        this.addPoint(new ExceptionField("ex_chushuiyalibiansongqiguzhang", 448, 2, "Outlet Water Pressure Transmitter Failure", 7));

        this.addPoint(new ExceptionField("ex_ranshaojiguzhang", 448, 2, "Burner Failure", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 448, 2, "Gas Leakage", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 448, 2, "Gas Pressure Abnormity", 10));
        this.addPoint(new ExceptionField("ex_yalichaogaobaojing", 448, 2, "Ultrahigh Pressure Alarm", 11));
        this.addPoint(new ExceptionField("ex_yalichaodibaojing", 448, 2, "Ultralow Pressure Alarm", 12));
        this.addPoint(new ExceptionField("ex_paiyanwenduchaogaobaojing", 448, 2, "Ultrahigh Discharged Flue Gas Temperature Alarm", 13));
        this.addPoint(new ExceptionField("ex_chushuiwenduchaogaobaojing", 448, 2, "Ultrahigh Outlet Water Temperature Alarm", 14));
        this.addPoint(new ExceptionField("ex_queshuibaohubaojing", 448, 2, "Water Shortage Protection Alarm", 15));

        this.addPoint(new ExceptionField("ex_huishuiyalibiansongqiguzhang", 450, 2, "Return Water Pressure Transmitter Failure", 8));


    }
}