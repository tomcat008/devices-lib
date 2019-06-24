import { INumberIndex } from '../../../../../entities/IIndex'
import { CountField } from '../../../../../meta/CountField'
import { BaseInfoField, OpenCloseField, DeviceField, MockField, ExceptionField, SettingField } from '../../../../../meta/RT/meta'
import { SdcSoftDevice } from '../../../../../devices/SdcSoftDevice'
import { CountShowField } from '../../../../../meta/CountShowField'
import { FixedValueField } from '../../../../../meta/FixedValueField'
import { CTL_RT } from '../../../../../devices/CTL/RT/RT'
import { Map_CTL_RT_T2_Ts } from '../AScript/T2'
import { OpenCloseCommand } from '../../../../../command/Command';
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'
import { GroupKeys } from '@sdcsoft/comms';

export class Map_CTL_RT_T2_RYRS_Ts extends Map_CTL_RT_T2_Ts {
    static coms_guolu: INumberIndex = {
        0: "常压",
        1: "承压",
    }
    static coms_ranshaoqi: INumberIndex = {
        0: "内置比调",
        1: "两段火力",
    }
    static coms_bushuibeng: INumberIndex = {
        0: "4电极",
        1: "电接点压力表",
    }
    static coms_xunhuanbeng: INumberIndex = {
        0: "出水温度",
        1: "回水温度",
        2: "燃烧器",
    }

    constructor() {
        super()
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG, "补水泵"))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_LENG_NING_BENG, "循环泵"))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI, "燃烧器"))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, "工作状态", '', Map_CTL_RT_T2_RYRS_Ts.coms_status))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, "累计燃烧时间", "时"))
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_DAYS, "运行天数", "天"))
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, SdcSoftDevice.KEY_POINT_RUN_HOURS, "运行小时数", "时"))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, "燃料类型", 0, Map_CTL_RT_T2_RYRS_Ts.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, Map_CTL_RT_T2_RYRS_Ts.coms_media))

        this.addPoint(new OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaodizhen", 5, 2, "电接点压力表低针", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_dianjiedianyalibiaogaozhen", 5, 2, "电接点压力表高针", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField(FixFieldNames.KEY_Expt_ChaoYa, 5, 2, "超压报警", 9, Map_CTL_RT_T2_RYRS_Ts.coms_open_close),"oc_chaoyabaojingxinhao")
        this.addPoint(new OpenCloseField("oc_ranshaoqiguzhangxinhao", 5, 2, "燃烧器故障信号", 10, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranqiyalidibaojingxinhao", 5, 2, "燃气压力低报警信号", 12, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranqixieloubaojingxinhao", 5, 2, "燃气泄漏报警信号", 11, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, "燃烧器启停控制", 0, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhediaojie/zengdadiaojie", 9, 2, "燃烧器负荷增大调节", 1, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new OpenCloseField("oc_ranshaoqibilijianxiao", 9, 2, "燃烧器比例减小", 2, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))

        this.addPoint(new DeviceField("de_bushuibengzhubei", 49, 2, "补水泵", 0, Map_CTL_RT_T2_RYRS_Ts.coms_master))
        this.addPoint(new DeviceField("de_bushuibengshoudongzidong", 49, 2, "补水泵", 1, Map_CTL_RT_T2_RYRS_Ts.coms_auto))
        this.addPoint(new DeviceField("de_xunhuanbengzhubei", 49, 2, "循环泵", 2, Map_CTL_RT_T2_RYRS_Ts.coms_master))
        this.addPoint(new DeviceField("de_xunhuanbengshoudongzidong", 49, 2, "循环泵", 3, Map_CTL_RT_T2_RYRS_Ts.coms_auto))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, "补水泵主控制", 3, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, "补水泵备控制", 4, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_1, 9, 2, "循环泵主控制", 5, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_LENG_NING_BENG_2, 9, 2, "循环泵备控制", 6, Map_CTL_RT_T2_RYRS_Ts.coms_open_close))

        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_ChuKouWenDu, 13, 2, "出水温度", "℃"),"mo_chushuiwendu")
        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_HuiLiuWenDu, 15, 2, "回水温度", "℃"),"mo_huishuiwendu")
        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_PaiYanWenDu, 21, 2, "排烟温度", "℃") ,"mo_paiyanwendu")

        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiduanlu1", 45, 2, "出水温度传感器断路", 0))
        this.addPoint(new ExceptionField("ex_chushuiwenduchuanganqiduanlu", 45, 2, "出水温度传感器短路", 1))
        this.addPoint(new ExceptionField("ex_chushuiwendugaobaojing_", 45, 2, "出水温度高报警", 2))
        this.addPoint(new ExceptionField("ex_huishuiwenduchuanganqiduanlu1", 45, 2, "回水温度传感器断路", 3))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_PaiYanWenDuChaoGao, 45, 2, "排烟温度高报警", 4),"ex_paiyanwendugaobaojing")
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianDiShuiWei, 45, 2, "极限低水位报警", 5),"ex_jixiandishuiweibaojing")
        this.addPoint(new ExceptionField("ex_shuiweidianjiluojicuo", 45, 2, "水位电极逻辑错", 6))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianGaoShuiWei, 45, 2, "高水位报警", 7),"ex_gaoshuiweibaojing")
        this.addPoint(new ExceptionField("ex_dianjiedianyalibiaoduanlu", 45, 2, "电接点压力表短路", 8))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_ChaoYa, 45, 2, "超压报警（控制器）", 9),"ex_chaoyabaojing_kongzhiqi_")
        this.addPoint(new ExceptionField("ex_ranqiyalidibaojing", 45, 2, "燃气压力低报警", 10))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_RanQiXieLou, 47, 2, "燃气泄漏报警", 11),"ex_ranqixieloubaojing")
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 12))

        this.addPoint(new SettingField("se_paiyanchaowen", 67, 2, "排烟超温", "℃"))
        this.addPoint(new SettingField("se_lushuichaowen", 69, 2, "炉水超温", "℃"))
        this.addPoint(new SettingField("se_kaibengwendu", 71, 2, "开泵温度", "℃"))
        this.addPoint(new SettingField("se_guanbengwendu", 73, 2, "关泵温度", "℃"))
        this.addPoint(new SettingField("se_xunhuanbenghouyanshi", 75, 2, "循环泵后延时", "分钟"))
        this.addPoint(new SettingField("se_ranshaozhouqi", 77, 2, "燃烧  周期"))
        this.addPoint(new SettingField("se_ranshaoP", 79, 2, "燃烧  P"))
        this.addPoint(new SettingField("se_ranshaoI", 81, 2, "燃烧  I"))
        this.addPoint(new SettingField("se_ranshaoD", 83, 2, "燃烧  D"))
        this.addPoint(new SettingField("se_xingcheng", 85, 2, "行程"))
        this.addPoint(new BaseInfoField("o_guoluleixing", 87, 2, "锅炉类型", '', Map_CTL_RT_T2_RYRS_Ts.coms_guolu))
        this.addPoint(new BaseInfoField("o_ranshaoqigongzuofangshi", 89, 2, "燃烧器工作方式", '', Map_CTL_RT_T2_RYRS_Ts.coms_ranshaoqi))
        this.addPoint(new BaseInfoField("o_bushuibengkongzhifangshi", 91, 2, "补水泵控制方式", '', Map_CTL_RT_T2_RYRS_Ts.coms_bushuibeng))
        this.addPoint(new BaseInfoField("o_xunhuanbengkongzhifangshi", 93, 2, "循环泵控制方式", '', Map_CTL_RT_T2_RYRS_Ts.coms_xunhuanbeng))

        this.addCommand('设备控制', new OpenCloseCommand('控制器 运行|待命', '00a0', 1, 2))

    }
}