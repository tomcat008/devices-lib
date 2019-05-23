import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_RanYouZhenKong extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Feed water pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_ZHEN_KONG_BENG, "Vacuum pump"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Day"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 0, Map_PLC_RanYouZhenKong.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 4, Map_PLC_RanYouZhenKong.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanYouZhenKong.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));


        this.addPoint(new MockField("mo_remeishuiwendu", 35, 4, "Hot Medium Water Temperature", "℃"));
        this.addPoint(new MockField("mo_zhenkongyali", 39, 4, "Vacuum Pressure", "Kpa"));
        this.addPoint(new MockField("mo_jinyanwendu", 43, 4, "Inlet Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_paiyanwendu", 47, 4, "Discharged Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_shiwaiwendu", 51, 4, "Outdoor Temperature", "℃"));
        this.addPoint(new MockField("mo_cainuanchushuiwendu", 55, 4, "Heating Outlet Temperature", "℃"));
        this.addPoint(new MockField("mo_cainuanhuishuiwendu", 59, 4, "Heating Backwater Temperature", "℃"));
        this.addPoint(new MockField("mo_cainuanchushuiyali", 63, 4, "Heating effluent pressure", "Mpa"));
        this.addPoint(new MockField("mo_cainuanhuishuiyali", 67, 4, "Heating Return Water Pressure", "Mpa"));
        this.addPoint(new MockField("mo_shenghuochushuiwendu", 71, 4, "Domesic Outlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_shenghuohuishuiwendu", 75, 4, "Domestic Return Water Temperature", "℃"));
        this.addPoint(new MockField("mo_shenghuochushuiyali", 79, 4, "Domestic Outlet Water Pressure", "Mpa"));
        this.addPoint(new MockField("mo_shenghuohuishuiyali", 83, 4, "Domestic Return Water Pressure", "Mpa"));

        this.addPoint(new SettingField("se_qiluwendusheding", 111, 4, "Boiler Start Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_mubiaowendusheding", 115, 4, "Target Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_tingluwendusheding", 119, 4, "Boiler Shutdown Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_zhenkongyalidisheding", 123, 4, "Low Vocuum Pressure Setting", "KPa"));
        this.addPoint(new SettingField("se_zhenkongyaligaosheding", 127, 4, "High Vocuum Pressure Setting ", "KPa"));
        this.addPoint(new SettingField("se_paiyanwenduchaogaobaojingsheding", 131, 4, "Ultrahigh Discharged Flue Gas Temperature Alarm Setting ", "℃"));
        this.addPoint(new SettingField("se_chukouwenduchaogaobaojingsheding", 135, 4, "Ultrahigh Hot Medium Water Temperature Alarm Setting ", "℃"));
        this.addPoint(new SettingField("se_zhenkongyalichaogaobaojingsheding", 139, 4, "Ultrahigh Vocuum Pressure Alarm Setting", "KPa"));

        this.addPoint(new DeviceField("de_ranshaojiqiting", 163, 2, "Burner On-off", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField("de_1_xunhuanbeng_auto", 165, 2, "1#Circulating Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 167, 2, "1#Circulating Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        this.addPoint(new DeviceField("de_2_xunhuanbeng_auto", 169, 2, "2#Circulating Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 171, 2, "2#Circulating Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 173, 2, "1#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 175, 2, "1#Make-up Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 177, 2, "2#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 179, 2, "2#Make-up Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));
        this.addPoint(new DeviceField("de_zhenkongbeng_auto", 181, 2, "Vocuum Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHEN_KONG_BENG_1, 183, 2, "Vocuum Pump On/Off", Map_PLC_RanYouZhenKong.coms_start_stop));

        this.addPoint(new ExceptionField("ex_lubichaowenbaojing", 203, 2, "Furnace Wall Over temperature Alarm", 0));
        this.addPoint(new ExceptionField("ex_remeishuiwenduchuanganqiguzhang", 203, 2, "Hot Medium Water Temperature Transmitter Failture", 1));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 203, 2, "Discharged Flue Gas Temperature Transmitter Failture", 2));
        this.addPoint(new ExceptionField("ex_cainuanchushuiwenduchuanganqiguzhang", 203, 2, "Heating Outlet Water Temperature Transmitter Failure", 3));
        this.addPoint(new ExceptionField("ex_shenghuochushuiwenduchuanganqiguzhang", 203, 2, "Domestic Outlet Water Temperature Transmitter Failure", 4));
        this.addPoint(new ExceptionField("ex_wendushedingcuowubaojing", 203, 2, "Temperature Setting Error Alarm", 5));
        this.addPoint(new ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 203, 2, "Circulating Pump Interlock Break Alarm", 6));
        this.addPoint(new ExceptionField("ex_waibuliansuoduankaibaojing", 203, 2, "External Interlock Break Alarm", 7));

        this.addPoint(new ExceptionField("ex_ranshaojiguzhang", 203, 2, "Burner failure", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 203, 2, "Gas Leakage", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 203, 2, "Gas Pressure Abnormity", 10));
        this.addPoint(new ExceptionField("ex_luneiyaligaobaojingshedingzhi", 203, 2, "Alarm of high pressure in furnace (set value)", 11));
        this.addPoint(new ExceptionField("ex_luneiyaligaobaojingyalikaiguan", 203, 2, "High Pressure Alarm in Furnace (Pressure Switch)", 12));
        this.addPoint(new ExceptionField("ex_paiyanwenduchaogaobaojing", 203, 2, "Ultrahigh Temperature Discharged Flue Gas Alarm", 13));
        this.addPoint(new ExceptionField("ex_remeishuiwenduchaogaobaojing", 203, 2, "Ultrahigh Hot Medium Water Temperature Alarm", 14));
        this.addPoint(new ExceptionField("ex_queshuibaohubaojing", 203, 2, "Water Shortage Protection Alarm", 15));


    }
}