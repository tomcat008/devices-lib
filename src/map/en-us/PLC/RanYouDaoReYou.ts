import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";

export = class Map_PLC_RanYouDaoReYou extends PLC_Map {
    constructor() {
        super();
        this.addPoint(new CountField(PLC.KEY_POINT_ZHU_YOU_BENG, "Oil Filling Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 0, Map_PLC_RanYouDaoReYou.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 2, Map_PLC_RanYouDaoReYou.coms_media));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_RanYouDaoReYou.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));



        this.addPoint(new MockField("mo_jinkouwendu", 35, 4, "Inlet Temperature", "℃"));
        this.addPoint(new MockField("mo_chukouwendu", 39, 4, "Outlet Temperature", "℃"));
        this.addPoint(new MockField("mo_gaoweiyoucaowendu", 43, 4, "Head Oil Groove Temperature", "℃"));
        this.addPoint(new MockField("mo_paiyanwendu", 47, 4, "Discharged Flue Gas Temperature", "℃"));
        this.addPoint(new MockField("mo_lutangwendu", 51, 4, "Furnace Temperature", "℃"));
        this.addPoint(new MockField("mo_lutangchukouwendu", 55, 4, "Furnace Outlet Temperature", "℃"));
        this.addPoint(new MockField("mo_kongyuqianwendu", 59, 4, "Front Side Temperature of Air pre-heater", "℃"));
        this.addPoint(new MockField("mo_kongyuhouwendu", 63, 4, "Rear Side temperature of Air pre-heater", "℃"));
        this.addPoint(new MockField("mo_jinkouyali", 67, 4, "Inlet Pressure", "MPa"));
        this.addPoint(new MockField("mo_chukouyali", 71, 4, "Outlet Pressure", "MPa"));
        this.addPoint(new MockField("mo_danqiyali", 75, 4, "Nitrogen Pressure", "kPa"));
        this.addPoint(new MockField("mo_lutangyali", 79, 4, "Furnace Pressure", "kPa"));
        this.addPoint(new MockField("mo_gaoweiyoucaowei", 83, 4, "Head Tank Oil Level", "%"));
        this.addPoint(new MockField("mo_chuyouguanyouwei", 87, 4, "Oil Level of Oil Tank", "%"));
        this.addPoint(new MockField("mo_liuliangceliang", 91, 4, "Flow Rate Measurement", "m³/h"));
        this.addPoint(new MockField("mo_diandongtiaojiefashuchu", 95, 4, "Electric Regulating Valve Output", "%"));
        this.addPoint(new MockField("mo_bianpinqipinlvshuchu", 99, 4, "Frequency Output of Frequency Converter", "Hz"));

        this.addPoint(new SettingField("se_chukouwenduqiluwendusheding", 111, 4, "Outlet Temperature and Boiler Start Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_chukouwendubitiaowendusheding", 115, 4, "Outlet Temperature and Proportional Control Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_chukouwendutingluwendusheding", 119, 4, "Outlet Temperature and Boiler Shutdown Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_chukouwenduchaogaobaojingwendusheding", 123, 4, "Extrem High Outlet Temperature Alarm Setting", "℃"));
        this.addPoint(new SettingField("se_paiyanwenduchaogaobaojingsheding", 127, 4, "Ultrahigh Discharged Flue Gas Temperature Alarm Setting", "℃"));
        this.addPoint(new SettingField("se_gaoweicaoyouweidisheding", 131, 4, "Low Head Tank Oil Level Setting", "%"));
        this.addPoint(new SettingField("se_gaoweicaoyouweigaosheding", 135, 4, "High Head Tank Oil Level Setting", "%"));
        this.addPoint(new SettingField("se_anquanyouwensheding", 139, 4, "Safe Oil Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_fengjiqidongshijiansheding", 143, 4, "Blower Start Time Setting", "S"));
        this.addPoint(new SettingField("se_fengjiqidongpinlvsheding", 147, 4, "Blower Start Frequency Setting", "Hz"));
        this.addPoint(new SettingField("se_fengjiyunxingpinlvsheding", 151, 4, "Blower Operation Frequency Setting", "Hz"));
        this.addPoint(new SettingField("se_jinchukouyachagaobaojingsheding", 155, 4, "High Differential Pressure Alarm Setting of Inlet and Outlet", "MPa"));
        this.addPoint(new SettingField("se_jinchukouyachadibaojingsheding", 159, 4, "Low Differential Pressure Alarm Setting of Inlet and Outlet", "MPa"));
        this.addPoint(new SettingField("se_liuliangxiaxianbaojing", 163, 4, "Flow Rate Lower Limit Alarm", "m³/h"));
        this.addPoint(new SettingField("se_liuliangjidibaojing", 167, 4, "Extrem Low Flow Rate Alarm", "m³/h"));
        this.addPoint(new SettingField("se_danqiyalidisheding", 171, 4, "Low Nitrogen Pressure Setting", "kPa"));
        this.addPoint(new SettingField("se_danqiyaligaosheding", 175, 4, "High Nitrogen Pressure Setting", "kPa"));
        this.addPoint(new SettingField("se_diandongfashoudongkaidusheding", 179, 4, "Electric Valve Manually Opening Setting", "%"));

        this.addPoint(new DeviceField("de_1_xunhuanbeng_auto", 203, 2, "1#Circulating Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 205, 2, "1#Circulating Pump", Map_PLC_RanYouDaoReYou.coms_start_stop));
        this.addPoint(new DeviceField("de_2_xunhuanbeng_auto", 207, 2, "2#Circulating Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 209, 2, "2#Circulating Pump", Map_PLC_RanYouDaoReYou.coms_start_stop));
        this.addPoint(new DeviceField("de_3_xunhuanbeng_auto", 211, 2, "3#Circulating Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_3, 213, 2, "3#Circulating Pump", Map_PLC_RanYouDaoReYou.coms_start_stop));
        this.addPoint(new DeviceField("de_zhuyoubeng_auto", 215, 2, "Oil Filling Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHU_YOU_BENG_1, 217, 2, "Oil Filling Pump", Map_PLC_RanYouDaoReYou.coms_start_stop));

        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 229, 2, "Burner Failure", 8));
        this.addPoint(new ExceptionField("ex_ranqixielou", 229, 2, "Gas Leakage", 9));
        this.addPoint(new ExceptionField("ex_ranqiyaliyichang", 229, 2, "Gas Pressure Abnormity", 10));
        this.addPoint(new ExceptionField("ex_fengjiguzhang", 229, 2, "Blower Failure", 11));
        this.addPoint(new ExceptionField("ex_1_xunhuanbengguzhang", 229, 2, "1#Circulating Pump Failure", 12));
        this.addPoint(new ExceptionField("ex_2_xunhuanbengguzhang", 229, 2, "2#Circulating Pump Failure", 13));
        this.addPoint(new ExceptionField("ex_3_xunhuanbengguzhang", 229, 2, "3#Circulating Pump Failure", 14));
        this.addPoint(new ExceptionField("ex_zhuyoubengguzhang", 229, 2, "Oil Filling Pump Failure", 15));
        this.addPoint(new ExceptionField("ex_jinchukouyachachaogao", 229, 2, "Ultrahigh Inlet and Outlet Differential Pressure", 0));
        this.addPoint(new ExceptionField("ex_jinchukouyachachaodi", 229, 2, "Ultralow Inlet and Outlet Differential Pressure", 1));
        this.addPoint(new ExceptionField("ex_paiyanwenduchaogao", 229, 2, "Extrem High Discharged Flue Gas  Temperature", 2));
        this.addPoint(new ExceptionField("ex_chukouwenduchaogao", 229, 2, "Extrem High Outlet Temperature", 3));
        this.addPoint(new ExceptionField("ex_liuliangxiaxianbaojing", 229, 2, "Flow Rate Lower Limit Alarm", 4));
        this.addPoint(new ExceptionField("ex_liuliangjidibaojing", 229, 2, "Extrem Low Flow Rate Alarm", 5));
        this.addPoint(new ExceptionField("ex_queyoubaojingfuqiu", 229, 2, "Oil Shortage Alarm( Floating Ball)", 6));
        this.addPoint(new ExceptionField("ex_chuyouwenduchuanganqibaojing", 229, 2, "Outlet Oil Temperature Transmitter Failure", 7));

        this.addPoint(new ExceptionField("ex_huiyouwenduchuanganqibaojing", 231, 2, "Return Oil Temperature Transmitter Failure", 8));
        this.addPoint(new ExceptionField("ex_paiyanwenduchuanganqiguzhang", 231, 2, "Discharged Flue Gas Temperature Sensor Failure", 9));
        this.addPoint(new ExceptionField("ex_xunhuanbengliansuoguzhang", 231, 2, "Circulating Pump Interlock Failure", 10));
        this.addPoint(new ExceptionField("ex_wendushedingcuowuguzhang", 231, 2, "Temperature Setting Error", 11));
        this.addPoint(new ExceptionField("ex_gaoweiyoucaoyouweidibaojing", 231, 2, "Low Head Tank Oil Level Alarm", 12));
        this.addPoint(new ExceptionField("ex_gaoweiyoucaoyouweigaobaojing", 231, 2, "High Head Tank Oil Level Alarm", 13));
        this.addPoint(new ExceptionField("ex_1_zhiguanchaowenbaojing", 231, 2, "1#Branch Pipe Over-Temperature Alarm", 14));
        this.addPoint(new ExceptionField("ex_2_zhiguanchaowenbaojing", 231, 2, "2#Branch Pipe Over-Temperature Alarm", 15));
        this.addPoint(new ExceptionField("ex_3_zhiguanchaowenbaojing", 231, 2, "3#Branch Pipe Over-Temperature Alarm", 0));
        this.addPoint(new ExceptionField("ex_4_zhiguanchaowenbaojing", 231, 2, "4#Branch Pipe Over-Temperature Alarm", 1));
        this.addPoint(new ExceptionField("ex_5_zhiguanchaowenbaojing", 231, 2, "5#Branch Pipe Over-Temperature Alarm", 2));
        this.addPoint(new ExceptionField("ex_6_zhiguanchaowenbaojing", 231, 2, "6#Branch Pipe Over-Temperature Alarm", 3));
        this.addPoint(new ExceptionField("ex_7_zhiguanchaowenbaojing", 231, 2, "7#Branch Pipe Over-Temperature Alarm", 4));
        this.addPoint(new ExceptionField("ex_8_zhiguanchaowenbaojing", 231, 2, "8#Branch Pipe Over-Temperature Alarm", 5));
        this.addPoint(new ExceptionField("ex_9_zhiguanchaowenbaojing", 231, 2, "9#Branch Pipe Over-Temperature Alarm", 6));
        this.addPoint(new ExceptionField("ex_10_zhiguanchaowenbaojing", 231, 2, "10#Branch Pipe Over-Temperature Alarm", 7));
        this.addPoint(new ExceptionField("ex_plcguzhangbaojing", 233, 2, "PLCFailure Alarm", 8));

    }

}