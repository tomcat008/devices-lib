import { Map_PLC as PLC_Map } from "./BaseMap";
import { PLC } from "../../../devices/PLC/BaseDevice";
import { CountField } from "../../../meta/CountField";
import { MockField, SettingField, DeviceField, ExceptionField, OpenCloseField } from "../../../meta/PLC/meta";
import { BaseInfoField } from "../../../meta/NJZJ/485";
import { FixedValueField } from "../../../meta/FixedValueField";
import { SdcSoftDevice } from "../../../devices/SdcSoftDevice";
import { CountShowField } from "../../../meta/CountShowField";
import { GroupKeys } from "@sdcsoft/comms";


export = class Map_PLC_DianZhengQi extends PLC_Map {
    //static readonly Key = "PLC_DianReShui";


    constructor() {
        super();

        /**
         * 计算属性（不显示）
         */
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, "Make-up Pump"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, "Running Hours", "Hours"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, "Running Days", "Days"));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, "System State", '', PLC_Map.coms_status));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel", 1, Map_PLC_DianZhengQi.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium", 1, Map_PLC_DianZhengQi.coms_media));
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, SdcSoftDevice.KEY_POINT_JIA_RE_ZU, "Put into heating group", ''));
        this.addPoint(new BaseInfoField("ba_shuiweizhuangtai", 19, 2, "Water Level State", '', Map_PLC_DianZhengQi.coms_level));
        this.addPoint(new BaseInfoField("ba_ranshaoqizhuangtai", 21, 2, "Burner State", '', PLC_Map.coms_ranshaoqi_status));



        this.addPoint(new MockField("mo_zhengqiyali", 35, 4, "Steam Pressure", "MPa"));
        this.addPoint(new MockField("mo_zhengqiwendu", 39, 4, "Steam Temperature", "℃"));
        this.addPoint(new MockField("mo_guolushuiwei", 43, 4, "Boiler Water Level", "mm"));
        this.addPoint(new MockField("mo_zhengqishunshiliuliang", 47, 4, "Steam Instantaneous Flow Rate", "T/H"));
        this.addPoint(new MockField("mo_bushuishunshiliuliang", 51, 4, "Make-up Water Instantaneous Flow Rate", "T/H"));
        this.addPoint(new MockField("mo_zhengqileijiliuliang", 55, 4, "Steam  Integrated Flow Rate", "T"));
        this.addPoint(new MockField("mo_bushuileijiliuliang", 59, 4, "Make-up Water Integrated Flow Rate", "T"));
        this.addPoint(new MockField("mo_jinshuiwendu", 63, 4, "Inlet Water Temperature", "℃"));
        this.addPoint(new MockField("mo_jinshuiyali", 67, 4, "Inlet Water Pressure", "MPa"));
        this.addPoint(new MockField("mo_addshuibengpinlvfankui", 71, 4, "Make-up Pump Frequency Feedback", "Hz"));
        this.addPoint(new MockField("mo_ruanshuixiangyewei", 75, 4, "Soft Water Tank Water Level", "%"));
        this.addPoint(new MockField("mo_qidongjiarezushu", 79, 4, "Heating Blocks Starting Quantity", "groups"));
        this.addPoint(new MockField("mo_qidongjiarezushubaifenbi", 83, 4, "Heating Blocks Starting Percentage", "%"));

        this.addPoint(new SettingField("se_chaoyabaojingsheding", 127, 4, "Over-pressure Alarm Setting", "MPa"));
        this.addPoint(new SettingField("se_shiyongjiarezushusheding", 131, 4, "Qty of Heating Blocks in Service Setting", "groups"));
        this.addPoint(new SettingField("se_touqiejiangeshijiansheding", 135, 4, "Switching Interval Setting", "S"));
        this.addPoint(new SettingField("se_kuaiqiejiangeshijiansheding", 139, 4, "Quick Switching Interval Setting", "S"));
        this.addPoint(new SettingField("se_tingluyalisheding", 143, 4, "Boiler Shutdown Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_shiyongyalisheding", 147, 4, "Operation Pressure Setting", "MPa"));
        this.addPoint(new SettingField("se_qiluyalisheding", 151, 4, "Boiler Starting Temperature Setting", "MPa"));
        this.addPoint(new SettingField("se_guolushuiweijidibaojingsheding", 155, 4, "Extreme Low Boiler Water Level Alarm Setting", "mm"));
        this.addPoint(new SettingField("se_geishuibengshoudongpinlvsheding", 159, 4, "Manual Water Feeding Pump Frequency Setting", "Hz"));
        this.addPoint(new SettingField("se_bushuimubiaosheding", 163, 4, "Make-up water Setting", "mm"));
        this.addPoint(new SettingField("se_guolushuiweijigaobaojingsheding", 167, 4, "Extreme High Boiler Water Level Alarm Setting", "mm"));
        this.addPoint(new SettingField("se_qibengyeweisheding", 171, 4, "Water Pump-on Water Level Setting", "mm"));
        this.addPoint(new SettingField("se_tingbengyeweisheding", 175, 4, "Water Pump-off Water Level Setting", "mm"));


        this.addPoint(new DeviceField("de_1_addshuibeng_auto", 199, 2, "1#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, "1#Make-up Pump Manual/Automatic", PLC_Map.coms_start_stop));
        this.addPoint(new DeviceField("de_2_addshuibeng_auto", 203, 2, "2#Make-up Pump Manual/Automatic", PLC_Map.coms_atuo));
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, "2#Make-up Pump Manual/Automatic", PLC_Map.coms_start_stop));
        this.addPoint(new DeviceField("de_baojingshuchuzhishi", 207, 2, "Alarm Output Indication", Map_PLC_DianZhengQi.coms_open_close));


        this.addPoint(new ExceptionField("ex_shuidianjiluojicuobaojing", 233, 2, "Water Electrode Logic Error Alarm", 0));
        this.addPoint(new ExceptionField("ex_yalibiansongqiguzhangbaojing", 233, 2, "Pressure Transmitter Failure Alarm", 1));
        this.addPoint(new ExceptionField("ex_shuiweibiansongqiguzhangbaojing", 233, 2, "Water Level Transmitter Failure Alarm", 2));
        this.addPoint(new ExceptionField("ex_geishuibengbianpinqiguzhang", 233, 2, "Water Feeding Pump Frequency Converter Failure", 3));
        this.addPoint(new ExceptionField("ex_loudianbaojing", 233, 2, "Electric Leakage Alarm", 4));
        this.addPoint(new ExceptionField("ex_qianyabaojing", 233, 2, "Undervoltage Alarm", 5));

        this.addPoint(new ExceptionField("ex_shuiweiweidibaojing_dianji", 233, 2, "Dangerous Low Water Level Alarm( Electrode)", 8));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojing_dianji", 233, 2, "Extreme Low Water Level Alarm( Electrode)", 9));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojing_dianji", 233, 2, "Extreme High Water Level Alarm( Electrode)", 10));
        this.addPoint(new ExceptionField("ex_shuiweijidibaojing_shedingzhi", 233, 2, "Extreme Low Water Level Alarm( Setting Value)", 11));
        this.addPoint(new ExceptionField("ex_shuiweijigaobaojing_shedingzhi", 233, 2, "Extreme High Water Level Alarm( Setting Value)", 12));
        this.addPoint(new ExceptionField("ex_chaoyabaojing_yalikaiguan", 233, 2, "Over-pressure Alarm ( Pressure Switch)", 13));
        this.addPoint(new ExceptionField("ex_chaoyabaojing_shedingzhi", 233, 2, "Over-pressure Alarm ( Setting Value)", 14));
        this.addPoint(new ExceptionField("ex_ruanshuixiangqueshuibaojing", 233, 2, "Soft Water Tank Water Shortage Alarm", 15));


        this.addPoint(new OpenCloseField("oc_1#jiarezu", 237, 2, "1#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_2#jiarezu", 237, 2, "2#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_3#jiarezu", 237, 2, "3#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_4#jiarezu", 237, 2, "4#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_5#jiarezu", 237, 2, "5#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_6#jiarezu", 237, 2, "6#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_7#jiarezu", 237, 2, "7#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_8#jiarezu", 237, 2, "8#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_9#jiarezu", 237, 2, "9#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_10#jiarezu", 237, 2, "10#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_11#jiarezu", 237, 2, "11#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_12#jiarezu", 237, 2, "12#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_13#jiarezu", 237, 2, "13#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_14#jiarezu", 237, 2, "14#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_15#jiarezu", 237, 2, "15#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_16#jiarezu", 237, 2, "16#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_17#jiarezu", 239, 2, "17#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_18#jiarezu", 239, 2, "18#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_19#jiarezu", 239, 2, "19#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_20#jiarezu", 239, 2, "20#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_21#jiarezu", 239, 2, "21#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_22#jiarezu", 239, 2, "22#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_23#jiarezu", 239, 2, "23#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_24#jiarezu", 239, 2, "24#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_25#jiarezu", 239, 2, "25#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_26#jiarezu", 239, 2, "26#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_27#jiarezu", 239, 2, "27#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_28#jiarezu", 239, 2, "28#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_29#jiarezu", 239, 2, "29#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_30#jiarezu", 239, 2, "30#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_31#jiarezu", 239, 2, "31#Heating Block Feedback", 1));
        this.addPoint(new OpenCloseField("oc_32#jiarezu", 239, 2, "32#Heating Block Feedback", 1));

    }
}