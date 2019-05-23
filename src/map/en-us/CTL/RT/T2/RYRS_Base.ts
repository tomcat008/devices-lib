import { INumberIndex } from '../../../../../entities/IIndex'
import { CountField } from '../../../../../meta/CountField'
import { BaseInfoField, OpenCloseField, DeviceField, MockField, ExceptionField, SettingField } from '../../../../../meta/RT/meta'
import { SdcSoftDevice } from '../../../../../devices/SdcSoftDevice'
import { CountShowField } from '../../../../../meta/CountShowField'
import { FixedValueField } from '../../../../../meta/FixedValueField'
import { CTL_RT } from '../../../../../devices/CTL/RT/RT'
import { Map_CTL_RT_T2_Ts } from '../AScript/T2'

export class Map_CTL_RT_T2_RYRS_Ts extends Map_CTL_RT_T2_Ts {
    static coms_guolu: INumberIndex = {
        0: "Ordinary Pressure",
        1: "Pressure-bearing",
    }
    static coms_ranshaoqi: INumberIndex = {
        0: "Built-in Than Tuning",
        1: "Two Pieces Of Fire",
    }
    static coms_bushuibeng: INumberIndex = {
        0: "4 Electrode",
        1: "Electric Contact Pressure Gauge",
    }
    static coms_xunhuanbeng: INumberIndex = {
        0: "The Water Temperature",
        1: "The Return Water Temperature",
        2: "Burner",
    }
    constructor() {
        super()
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, "Water Feeding Pump"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "Circulating Pump"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, "Burner"));

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "System State", '', Map_CTL_RT_T2_RYRS_Ts.coms_status));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "Running Time", "Hour"));
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYRS_Ts.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_DAYS, "Running Days", "Days"));
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYRS_Ts.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_HOURS, "Running Hours", "Hour"));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel Type", 0, Map_CTL_RT_T2_RYRS_Ts.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium Type", 0, Map_CTL_RT_T2_RYRS_Ts.coms_media));

        this.addPoint(new OpenCloseField("oc_queshuidianji", 5, 2, "Lack Of Water Electrode", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dishuiweidianji", 5, 2, "Low Water Level Electrode", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaoshuiweidianji", 5, 2, "High Water Level Electrode", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "High Water Level Alarm Electrode", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "Electric Contact Pressure Gauge Lower Needle", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "Electric Contact Pressure Gauge High Needle", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_chaoyabaojingxinhao", 5, 2, "Overpressure Alarm", 9, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhangxinhao", 5, 2, "Burner fault signal", 10, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranqiyalidibaojingxinhao", 5, 2, "Gas pressure low alarm signal", 12, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranqixieloubaojingxinhao", 5, 2, "Gas Leakage Alarm Signal", 11, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "Burner on-off Control", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "Burner Load Adjustment", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqibilijianxiao", 9, 2, "Reduction of Burner Proportion", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));

        this.addPoint(new DeviceField("de_bushuibengzhubei", 49, 2, "Water replenishing pump", 0, Map_CTL_RT_T2_RYRS_Ts.coms_master));
        this.addPoint(new DeviceField("de_bushuibengshoudongzidong", 49, 2, "Water replenishing pump", 1, Map_CTL_RT_T2_RYRS_Ts.coms_auto));
        this.addPoint(new DeviceField("de_xunhuanbengzhubei", 49, 2, "Circulating pump", 2, Map_CTL_RT_T2_RYRS_Ts.coms_master));
        this.addPoint(new DeviceField("de_xunhuanbengshoudongzidong", 49, 2, "Circulating pump", 3, Map_CTL_RT_T2_RYRS_Ts.coms_auto));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "Water Feeding Pump(On Duty)Control", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "Water Feeding Pump(Back-up)Control", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "Main Control of Circulating Pump", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_2, 9, 2, "Standby Control of Circulating Pump", 6, Map_CTL_RT_T2_RYRS_Ts.coms_open_close));

        this.addPoint(new MockField("mo_chushuiwendu", 13, 2, "Effluent temperature", "℃"));
        this.addPoint(new MockField("mo_huishuiwendu", 15, 2, "Backwater temperature", "℃"));
        this.addPoint(new MockField("mo_paiyanwendu", 21, 2, "Discharged Flue Gas Temperature", "℃"));

        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiduanlu1", 45, 2, "Outflow Temperature Sensor Break Circuit", 0));
        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiduanlu", 45, 2, "Short Circuit of Outlet Temperature Sensor", 1));
        this.addPoint(new ExceptionField("ex_chushuiwendugaobaojing_", 45, 2, "High temperature alarm of effluent", 2));
        this.addPoint(new ExceptionField("ex_chushuiwendugaobaojing_", 45, 2, "Circuit Break of Backwater Temperature Sensor", 3));
        this.addPoint(new ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "High Discharged Flue Gas Temperature Alarm", 4));
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "Extreme Low Water Level Alarm", 5));
        this.addPoint(new ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "Water-level Electrode Logic Error", 6));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "High Water Level Alarm", 7));
        this.addPoint(new ExceptionField("ex_dianjiedianyalibiaoduanlu", 45, 2, "Short Circuit of Electric Contact Pressure Gauge", 8));
        this.addPoint(new ExceptionField("ex_chaoyabaojing_kongzhiqi_", 45, 2, "Overvoltage alarm (controller)", 9));
        this.addPoint(new ExceptionField("ex_ranqiyalidibaojing", 45, 2, "Low Gas Pressure Alarm", 10));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "Gas Leakage Alarm", 11));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "Burner Failure", 12));

        this.addPoint(new SettingField("se_paiyanchaowen", 67, 2, "Over temperature of exhaust gas", "℃"));
        this.addPoint(new SettingField("se_lushuichaowen", 69, 2, "Over temperature of boiler water", "℃"));
        this.addPoint(new SettingField("se_kaibengwendu", 71, 2, "Pump temperature", "℃"));
        this.addPoint(new SettingField("se_guanbengwendu", 73, 2, "Shut off pump temperature", "℃"));
        this.addPoint(new SettingField("se_xunhuanbenghouyanshi", 75, 2, "Circulating Pump Delay", "分钟"));
        this.addPoint(new SettingField("se_ranshaozhouqi", 77, 2, "Combustion cycle"));
        this.addPoint(new SettingField("se_ranshaoP", 79, 2, "Burning  P"));
        this.addPoint(new SettingField("se_ranshaoI", 81, 2, "Burning  I"));
        this.addPoint(new SettingField("se_ranshaoD", 83, 2, "Burning  D"));
        this.addPoint(new SettingField("se_xingcheng", 85, 2, "Trip"));
        this.addPoint(new BaseInfoField("o_guoluleixing", 87, 2, "Boiler type", '', Map_CTL_RT_T2_RYRS_Ts.coms_guolu));
        this.addPoint(new BaseInfoField("o_ranshaoqigongzuofangshi", 89, 2, "Burner working mode", '', Map_CTL_RT_T2_RYRS_Ts.coms_ranshaoqi));
        this.addPoint(new BaseInfoField("o_bushuibengkongzhifangshi", 91, 2, "Control Mode of Supplementary Pump", '', Map_CTL_RT_T2_RYRS_Ts.coms_bushuibeng));
        this.addPoint(new BaseInfoField("o_xunhuanbengkongzhifangshi", 93, 2, "Control mode of circulating pump", '', Map_CTL_RT_T2_RYRS_Ts.coms_xunhuanbeng));

    }
}