import { CountField } from "../../../../../../meta/CountField"
import { BaseInfoField, OpenCloseField, DeviceField, ExceptionField, MockField } from "../../../../../../meta/RT/meta"
import { CountShowField } from "../../../../../../meta/CountShowField"
import { FixedValueField } from "../../../../../../meta/FixedValueField"
import { SdcSoftDevice } from "../../../../../../devices/SdcSoftDevice"
import { CTL_RT } from "../../../../../../devices/CTL/RT/RT"
import { Map_CTL_RT_T3_Ts } from "../../AScript/T3"

export class Map_CTL_RT_T3_RYZQ_Ts extends Map_CTL_RT_T3_Ts {
    constructor() {
        super()
        // this.warningMsg='长按修改类型'
        // this.subTypes.clear()
        // this.subTypes.addItem('压力变送器','CTL_RT_T3_RYZQ_YLBSQ')
        // this.subTypes.addItem('压力控制器','CTL_RT_T3_RYZQ_YLKZQ')


        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, "补水泵"))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "冷凝泵"))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, "燃烧器"))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "工作状态", '', Map_CTL_RT_T3_RYZQ_Ts.coms_status))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "累计燃烧时间", "时"))
        this.addPoint(new CountShowField(Map_CTL_RT_T3_RYZQ_Ts.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"))
        this.addPoint(new CountShowField(Map_CTL_RT_T3_RYZQ_Ts.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, Map_CTL_RT_T3_RYZQ_Ts.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 1, Map_CTL_RT_T3_RYZQ_Ts.coms_media))

        this.addPoint(new OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 2, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 4, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 5, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_bianpinqiguzhangbaojing", 5, 2, "变频器故障报警", 6, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_chaoyabaojing", 5, 2, "超压报警", 9, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhang", 5, 2, "燃烧器故障", 10, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranqixieloubaojing", 5, 2, "燃气泄漏报警", 11, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranqiyalidibaojing", 5, 2, "燃气压力低报警", 12, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranqiyaligaobaojing", 5, 2, "燃气压力高报警", 13, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))

        this.addPoint(new OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "给水泵控制（主）", 3, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "给水泵控制（备）", 4, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "冷凝循环泵控制", 5, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_baojingzhuangtaishuchu", 9, 2, "报警状态输出", 8, Map_CTL_RT_T3_RYZQ_Ts.coms_open_close))

        this.addPoint(new MockField("mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃"))
        this.addPoint(new MockField("mo_jishuiwendu", 15, 2, "给水温度", "℃"))
        this.addPoint(new MockField("mo_shuiweixinhao", 19, 2, "水位信号", "%"))
        this.addPoint(new MockField("mo_paiyanwendu", 21, 2, "排烟温度", "℃"))
        this.addPoint(new MockField("mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃"))

        this.addPoint(new DeviceField("de_jishuibeng_zhu/bei_", 49, 2, "给水泵", 0, Map_CTL_RT_T3_RYZQ_Ts.coms_master))
        this.addPoint(new DeviceField("de_jishuibeng_shoudong/zidong_", 49, 2, "给水泵", 1, Map_CTL_RT_T3_RYZQ_Ts.coms_auto))
        this.addPoint(new DeviceField("de_lengningxunhuanbeng_zidong/shoudong_", 49, 2, "循环泵", 3, Map_CTL_RT_T3_RYZQ_Ts.coms_master))

        this.addPoint(new ExceptionField("ex_shuiweichuanganqiduanlu1", 45, 2, "水位传感器断路", 3))
        this.addPoint(new ExceptionField("ex_shuiweichuanganqiduanlu", 45, 2, "水位传感器短路", 4))
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing_dianliu_", 45, 2, "极限低水位报警（电流）", 5))
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing_dianliu_", 45, 2, "高水位报警（电流）", 6))
        this.addPoint(new ExceptionField("ex_paiyanwendugaobaojing", 45, 2, "排烟温度高报警", 7))
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing", 45, 2, "极限低水位报警", 8))
        this.addPoint(new ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 9))
        this.addPoint(new ExceptionField("ex_dishuiweibaojing", 45, 2, "低水位报警", 10))
        this.addPoint(new ExceptionField("ex_gaoshuiweibaojing", 45, 2, "高水位报警", 11))
        this.addPoint(new ExceptionField("ex_bianpinqiguzhang", 45, 2, "变频器故障", 12))
        this.addPoint(new ExceptionField("ex_chaoyabaojing_kongzhiqi_", 45, 2, "超压报警（控制器）", 13))
        this.addPoint(new ExceptionField("ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 14))
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15))
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0))
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1))
    }
}
