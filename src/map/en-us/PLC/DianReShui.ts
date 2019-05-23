import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField, OpenCloseField, BaseInfoField } from "../../../meta/PLC/meta";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { FixedValueField } from "../../../meta/FixedValueField";
import { CountShowField } from "../../../meta/CountShowField";


export = class Map_PLC_DianReShui extends PLC_Map {
    //static readonly Key = "PLC_DianReShui";
    //static readonly Commands_Key_Parameters_Setting = "参数设置";
    //static readonly Commands_Key_System_Ctl = "系统控制";

    constructor() {
        super();
        //this.addCommandGroup(PLC_Map.Commands_Key_Parameters_Setting);
        //this.addCommandGroup(PLC_Map.Commands_Key_System_Ctl);
        /**
         * 计算属性（不显示）
         */
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Make-up Pump"));
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG, "Circulating Pump"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 1, Map_PLC_DianReShui.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 0, Map_PLC_DianReShui.coms_media));
        this.addPoint(new CountShowField(Map_PLC_DianReShui.KEY_BASE, SdcSoftDevice.KEY_POINT_JIA_RE_ZU, "Put into heating group", ''));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_DianReShui.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));

        this.addPoint(new MockField("mo_chushuiwendu", 35, 4, "Outlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_huishuiwendu", 39, 4, "Return Water Temperature", "℃"));
        this.addPoint(new MockField("mo_chushuiyali", 43, 4, "Outlet Water Pressure", "Mpa"));
        this.addPoint(new MockField("mo_huishuiyali", 47, 4, "Return Water Pressure", "Mpa"));
        this.addPoint(new MockField("mo_qidongjiarezushu", 79, 4, "Heating Blocks Starting Quantity", "groups"));
        this.addPoint(new MockField("mo_qidongjiarezushubaifenbi", 83, 4, "Heating Blocks Starting Percentage", "%"));

        this.addPoint(new SettingField("se_chaowenbaojingsheding", 127, 4, "Over-temperature Alarm Setting", "℃", 0, Map_PLC_DianReShui.Commands_Key_Parameters_Setting, "003E", 10, 200));
        this.addPoint(new SettingField("se_shiyongjiarezushusheding", 131, 4, "Qty of Heating Blocks in Service Setting", "groups"));
        this.addPoint(new SettingField("se_touqiejiangeshijiansheding", 135, 4, "Switching Interval Setting", "S"));
        this.addPoint(new SettingField("se_kuaiqiejiangeshijiansheding", 139, 4, "Quick Switching Interval Setting", "S"));
        this.addPoint(new SettingField("se_tingluwendusheding", 143, 4, "Boiler Shutdown Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_shiyongwendusheding", 147, 4, "Operation Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_qiluwendusheding", 151, 4, "Boiler Starting Temperature Setting", "℃"));
        this.addPoint(new SettingField("se_yalidibaojingsheding", 155, 4, "Low Pressure Alarm Setting", "Mpa"));
        this.addPoint(new SettingField("se_yaligaobaojingsheding", 159, 4, "High Pressure Alarm Setting", "Mpa"));
        this.addPoint(new SettingField("se_qibengyalisheding", 163, 4, "Pump-on Pressure Setting", "Mpa"));
        this.addPoint(new SettingField("se_tingbengyalisheding", 167, 4, "Pump-off Pressure Setting", "Mpa"));
        this.addPoint(new SettingField("se_xunhuanbengshangxianwendusheding", 171, 4, "Circulating Pump Upper Limit Setting", "℃"));
        this.addPoint(new SettingField("se_xunhuanbengxiaxianwendusheding", 175, 4, "Circulating Pump Lower Limit Setting", "℃"));


        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 199, 2, "1#Make-up Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, "1#Make-up Pump", Map_PLC_DianReShui.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 203, 2, "2#Make-up Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, "2#Make-up Pump", PLC_Map.coms_start_stop));
        this.addPoint(new DeviceField("de_baojingshuchuzhishi", 207, 2, "Alarm Output Indication", Map_PLC_DianReShui.coms_open_close));
        this.addPoint(new DeviceField("de_1_xunhuanbeng_auto", 209, 2, "1#Circulating Pump", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 211, 2, "1#Circulating Pump On-off", PLC_Map.coms_start_stop));
        this.addPoint(new DeviceField("de_2_xunhuanbeng_auto", 213, 2, "2#Circulating Pump ", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 215, 2, "2#Circulating Pump On-off", PLC_Map.coms_start_stop));

        this.addPoint(new ExceptionField("ex_shuiweijidibaojing（dianji）", 233, 2, "Extrem Low Water Level Alarm( Electrode)", 8));
        this.addPoint(new ExceptionField("ex_xitongchaoyabaojing（shedingzhi）", 233, 2, "System Over-pressure Alarm(Setting Value)", 9));
        this.addPoint(new ExceptionField("ex_xitongyalidibaojing（shedingzhi）", 233, 2, "System Low pressure Alarm ( Setting Value)", 10));
        this.addPoint(new ExceptionField("ex_xitongchaoyabaojing（dianjiedianyalibiao）", 233, 2, "System Over-pressure Alarm( Electro Connecting Pressure Gauge)", 11));
        this.addPoint(new ExceptionField("ex_xitongyalidibaojing（dianjiedianyalibiao）", 233, 2, "SystemLow pressure Alarm( Electro Connecting Pressure Gauge)", 12));
        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiguzhang", 233, 2, "Outlet Temperature Sensor Failure", 13));
        this.addPoint(new ExceptionField("ex_huishuiwenduchuanganqiguzhang）", 233, 2, "Return Water Temperature Sensor Failure", 14));
        this.addPoint(new ExceptionField("ex_chushuiyalibiansongqiguzhang", 233, 2, "Outlet Water Pressure Transmitter Failure", 15));
        this.addPoint(new ExceptionField("ex_huishuiyalibiansongqiguzhang", 233, 2, "Return Water Pressure transmitter Failure", 0));
        this.addPoint(new ExceptionField("ex_lubichaowenbaojing", 233, 2, "Furnace Wall Over-temperature Alarm", 1));
        this.addPoint(new ExceptionField("ex_waibuliansuoduankaibaojing", 233, 2, "External Interlock Break Alarm", 2));
        this.addPoint(new ExceptionField("ex_xunhuanbengliansuoduankaibaojing", 233, 2, "Circulating Pump Interlock Break Alarm", 3));
        this.addPoint(new ExceptionField("ex_loudianbaojing", 233, 2, "Electric Leakage Alarm", 4));
        this.addPoint(new ExceptionField("ex_qianyabaojing", 233, 2, "Undervoltage Alarm", 5));
        this.addPoint(new ExceptionField("ex_chushuichaowenbaojing", 233, 2, "Outlet Water Over-temperature Alarm", 6));
        this.addPoint(new ExceptionField("ex_wendushedingcuowubaojing", 233, 2, "Temperature Setting Error Alarm", 7));
        this.addPoint(new ExceptionField("ex_Axiangguoliubaojing", 235, 2, "A Phase Over-current Alarm", 8));
        this.addPoint(new ExceptionField("ex_Bxiangguoliubaojing", 235, 2, "B Phase Over-current Alarm", 9));
        this.addPoint(new ExceptionField("ex_Cxiangguoliubaojing", 235, 2, "C Phase Over-current Alarm", 10));


        this.addPoint(new OpenCloseField("oc_1#jiarezu", 237, 2, "1#Heating Block Feedback", 0));
        this.addPoint(new OpenCloseField("oc_2#jiarezu", 237, 2, "2#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_3#jiarezu", 237, 2, "3#Heating Block Feedback", 2));
        this.addPoint(new OpenCloseField("oc_4#jiarezu", 237, 2, "4#Heating Block Feedback", 3));
        this.addPoint(new OpenCloseField("oc_5#jiarezu", 237, 2, "5#Heating Block Feedback", 4));
        this.addPoint(new OpenCloseField("oc_6#jiarezu", 237, 2, "6#Heating Block Feedback", 5));
        this.addPoint(new OpenCloseField("oc_7#jiarezu", 237, 2, "7#Heating Block Feedback", 6));
        this.addPoint(new OpenCloseField("oc_8#jiarezu", 237, 2, "8#Heating Block Feedback", 7));
        this.addPoint(new OpenCloseField("oc_9#jiarezu", 237, 2, "9#Heating Block Feedback", 8));
        this.addPoint(new OpenCloseField("oc_10#jiarezu", 237, 2, "10#Heating Block Feedback", 9));
        this.addPoint(new OpenCloseField("oc_11#jiarezu", 237, 2, "11#Heating Block Feedback", 10));
        this.addPoint(new OpenCloseField("oc_12#jiarezu", 237, 2, "12#Heating Block Feedback", 11));
        this.addPoint(new OpenCloseField("oc_13#jiarezu", 237, 2, "13#Heating Block Feedback", 12));
        this.addPoint(new OpenCloseField("oc_14#jiarezu", 237, 2, "14#Heating Block Feedback", 13));
        this.addPoint(new OpenCloseField("oc_15#jiarezu", 237, 2, "15#Heating Block Feedback", 14));
        this.addPoint(new OpenCloseField("oc_16#jiarezu", 237, 2, "16#Heating Block Feedback", 15));
        this.addPoint(new OpenCloseField("oc_17#jiarezu", 239, 2, "17#Heating Block Feedback", 16));
        this.addPoint(new OpenCloseField("oc_18#jiarezu", 239, 2, "18#Heating Block Feedback", 17));
        this.addPoint(new OpenCloseField("oc_19#jiarezu", 239, 2, "19#Heating Block Feedback", 18));
        this.addPoint(new OpenCloseField("oc_20#jiarezu", 239, 2, "20#Heating Block Feedback", 19));
        this.addPoint(new OpenCloseField("oc_21#jiarezu", 239, 2, "21#Heating Block Feedback", 20));
        this.addPoint(new OpenCloseField("oc_22#jiarezu", 239, 2, "22#Heating Block Feedback", 21));
        this.addPoint(new OpenCloseField("oc_23#jiarezu", 239, 2, "23#Heating Block Feedback", 22));
        this.addPoint(new OpenCloseField("oc_24#jiarezu", 239, 2, "24#Heating Block Feedback", 23));
        this.addPoint(new OpenCloseField("oc_25#jiarezu", 239, 2, "25#Heating Block Feedback", 24));
        this.addPoint(new OpenCloseField("oc_26#jiarezu", 239, 2, "26#Heating Block Feedback", 25));
        this.addPoint(new OpenCloseField("oc_27#jiarezu", 239, 2, "27#Heating Block Feedback", 26));
        this.addPoint(new OpenCloseField("oc_28#jiarezu", 239, 2, "28#Heating Block Feedback", 27));
        this.addPoint(new OpenCloseField("oc_29#jiarezu", 239, 2, "29#Heating Block Feedback", 28));
        this.addPoint(new OpenCloseField("oc_30#jiarezu", 239, 2, "30#Heating Block Feedback", 29));
        this.addPoint(new OpenCloseField("oc_31#jiarezu", 239, 2, "31#Heating Block Feedback", 30));
        this.addPoint(new OpenCloseField("oc_32#jiarezu", 239, 2, "32#Heating Block Feedback", 31));
    }
}