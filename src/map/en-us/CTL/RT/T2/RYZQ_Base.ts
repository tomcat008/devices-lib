import { BaseInfoField, OpenCloseField, DeviceField, MockField, ExceptionField } from "../../../../../meta/RT/meta"
import { CountShowField } from "../../../../../meta/CountShowField"
import { FixedValueField } from "../../../../../meta/FixedValueField"
import { CountField } from "../../../../../meta/CountField"
import { CTL_RT } from "../../../../../devices/CTL/RT/RT"
import { SdcSoftDevice } from "../../../../../devices/SdcSoftDevice"
import { INumberIndex } from "../../../../../entities/IIndex"
import { Map_CTL_RT_T2_Ts } from "../AScript/T2"
import { GroupKeys } from "@sdcsoft/comms";


export class Map_CTL_RT_T2_RYZQ_Ts extends Map_CTL_RT_T2_Ts {

    static ShuiWei_JianCe: INumberIndex = {
        0: "4 Electrode",
        1: "6 Electrode",
        2: "4-20mA"
    }

    static RanShaoQi_KongZhi: INumberIndex = {
        0: "CONTR",
        1: "TRANS"
    }

    static RanShaoQi_GongZuo: INumberIndex = {
        0: "Built-in TUN",
        1: "2 fires"
    }

    constructor() {
        super()
        // this.warningMsg='长按修改类型'
        // this.subTypes.clear()

        // this.subTypes.addItem('压力变送器18','CTL_RT_T2_RYZQ_YLBSQ_18')
        // this.subTypes.addItem('压力变送器19','CTL_RT_T2_RYZQ_YLBSQ_19')
        // this.subTypes.addItem('压力变送器出口','CTL_RT_T2_RYZQ_YLBSQ_CK')

        // this.subTypes.addItem('压力控制器18','CTL_RT_T2_RYZQ_YLBSQ_18')
        // this.subTypes.addItem('压力控制器19','CTL_RT_T2_RYZQ_YLBSQ_19')
        // this.subTypes.addItem('压力控制器出口','CTL_RT_T2_RYZQ_YLBSQ_CK')
        // this.subTypes.addItem('燃油热水','CTL_RT_T2_RYRS')

        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, "Burner"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, "Feed Water Pump"));
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "Circulat Pump"));


        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "System State", '', Map_CTL_RT_T2_RYZQ_Ts.coms_status));
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "Running Time", "Hour"));
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_DAYS, "Running Days", "Day"));
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_HOURS, "Running Hours", "Hour"));

        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "Fuel Type", 0, Map_CTL_RT_T2_RYZQ_Ts.coms_power));
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "Medium Type", 1, Map_CTL_RT_T2_RYZQ_Ts.coms_media));

        // this.addPoint(new OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_ZH_CN.coms_open_close))
        //this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_ZH_CN.coms_open_close))
        // this.addPoint(new OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 2, Map_ZH_CN.coms_open_close))
        //this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_ZH_CN.coms_open_close))
        // this.addPoint(new OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 4, Map_ZH_CN.coms_open_close))
        // this.addPoint(new OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 5, Map_ZH_CN.coms_open_close))
        this.addPoint(new OpenCloseField("oc_bianpinqiguzhangbaojing", 5, 2, "Frequency Converter Fault Alarm", 6, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));


        this.addPoint(new OpenCloseField("oc_chaoyabaojing", 5, 2, "Overpressure alarm", 9, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "Burner failure", 10, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranqixieloubaojing", 5, 2, "Gas Leakage Alarm", 11, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranqiyalidibaojing", 5, 2, "Low Gas Pressure Alarm", 12, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranqiyaligaobaojing", 5, 2, "High Gas Pressure Alarm", 13, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "Feed pump control (main)", 3, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "Feed pump control (equipment)", 4, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "Circulating pump control", 5, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));
        this.addPoint(new OpenCloseField("oc_baojingzhuangtaishuchu", 9, 2, "Alarm state output", 6, Map_CTL_RT_T2_RYZQ_Ts.coms_open_close));

        //this.addPoint(new MockField("mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃"))
        //this.addPoint(new MockField("mo_jishuiwendu", 15, 2, "给水温度", "℃"))
        //this.addPoint(new MockField("mo_shuiweixinhao", 19, 2, "水位信号", "%"))
        this.addPoint(new MockField("mo_paiyanwendu", 21, 2, "Exhaust gas temperature", "℃"));
        //this.addPoint(new MockField("mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃"))

        this.addPoint(new DeviceField("de_jishuibeng_zhu/bei_", 49, 2, "Feed water pump", 0, Map_CTL_RT_T2_RYZQ_Ts.coms_master));
        this.addPoint(new DeviceField("de_jishuibeng_shoudong/zidong_", 49, 2, "Feed water pump", 1, Map_CTL_RT_T2_RYZQ_Ts.coms_auto));
        this.addPoint(new DeviceField("de_lengningxunhuanbeng_zidong/shoudong_", 49, 2, "Circulating pump", 3, Map_CTL_RT_T2_RYZQ_Ts.coms_auto));


        this.addPoint(new ExceptionField("ex_shuiweichuanganqiduanlu1", 45, 2, "Water Level Sensor Break Circuit", 3));
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiduanlu", 45, 2, "Short Circuit of Water Level Sensor", 4));
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing_dianliu_", 45, 2, "Limit Low Water Level Alarm (Current)", 5));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing_dianliu_", 45, 2, "High Water Level Alarm (Current)", 6));
        this.addPoint(new ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "High Discharged Flue Gas Temperature Alarm", 7));
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "Extreme Low Water Level Alarm", 8));
        this.addPoint(new ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "Water-level Electrode Logic Error", 9));
        this.addPoint(new ExceptionField("ex_dishuiweibaojing", 45, 2, "Low Water Level Alarm", 10));
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "High Water Level Alarm", 11));
        this.addPoint(new ExceptionField("ex_bianpinqiguzhang", 45, 2, "Frequency Converter Failure", 12));
        this.addPoint(new ExceptionField("ex_ranqiyalidibaojing", 45, 2, "Low Gas Pressure Alarm", 14));

        //缺少
        //水位测试 4电极/6电极/4-20mA 
        //燃烧器控制方式 压力控制器/压力变送器选择信息
        //燃烧器工作方式 2段火/内置比调

        this.addPoint(new BaseInfoField("de_shuiweiceliangfangshi", 149, 2, "Water Level Measurement ", '', Map_CTL_RT_T2_RYZQ_Ts.ShuiWei_JianCe));
        this.addPoint(new BaseInfoField("de_ranshaoqikongzhifangshi", 151, 2, "Burner control", '', Map_CTL_RT_T2_RYZQ_Ts.RanShaoQi_KongZhi));
        this.addPoint(new BaseInfoField("de_ranshaoqigongzuofangshi", 153, 2, "Burner working", '', Map_CTL_RT_T2_RYZQ_Ts.RanShaoQi_GongZuo));

    }
}