import { INumberIndex } from '../../../../../entities/IIndex'
import { CountField } from '../../../../../meta/CountField'
import { BaseInfoField, OpenCloseField, ExceptionField, MockField, DeviceField, SettingField } from '../../../../../meta/RT/meta'
import { SdcSoftDevice } from '../../../../../devices/SdcSoftDevice'
import { FixedValueField } from '../../../../../meta/FixedValueField'
import { CTL_RT } from '../../../../../devices/CTL/RT/RT'
import { CountShowField } from '../../../../../meta/CountShowField'
import { Map_CTL_RT_H1_Ts } from '../AScript/H1'

export = class Map_CTL_RT_H1_RYRS extends Map_CTL_RT_H1_Ts {

    static coms_status: INumberIndex = {
        0: '待命',
        1: '报警',
        2: '运行'
    }
    constructor() {
        super()
        // this.warningMsg=''
        this.addPoint(new CountField(CTL_RT.KEY_POINT_Add_SHUI_BENG,  '给水泵'))
        this.addPoint(new CountField(CTL_RT.KEY_POINT_RAN_SHAO_QI,   '燃烧器'))



        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 3, 2, '工作状态', '', Map_CTL_RT_H1_RYRS.coms_status))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_LIFE, 53, 2, '累计燃烧时间', '时'))
        this.addPoint(new CountShowField(Map_CTL_RT_H1_RYRS.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_DAYS, '运行天数', '天'))
        this.addPoint(new CountShowField(Map_CTL_RT_H1_RYRS.KEY_BASE,SdcSoftDevice.KEY_POINT_RUN_HOURS, '运行小时数', '时'))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, '燃料类型', 0, Map_CTL_RT_H1_RYRS.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, '介质类型', 1, Map_CTL_RT_H1_RYRS.coms_media))
        this.addPoint(new DeviceField('de_bushuibengzhubei', 49, 2, '给水泵', 0, Map_CTL_RT_H1_RYRS.coms_master))
        this.addPoint(new DeviceField('de_bushuibengshoudongzidong', 49, 2, '给水泵', 1, Map_CTL_RT_H1_RYRS.coms_auto))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_1, 9, 2, '补水泵主控制', 3, Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_Add_SHUI_BENG_2, 9, 2, '补水泵备控制', 4, Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new ExceptionField('ex_jixiandishuiweibaojing', 45, 2, '极限低水位报警',0))
        this.addPoint(new ExceptionField('ex_zhengqiyalibiansongqiduanlu', 45, 2, '蒸汽压力变送器断路',1))
        this.addPoint(new ExceptionField('ex_zhengqiyalibiansongqiduanlu', 45, 2, '蒸汽压力变送器短路',2))
        this.addPoint(new ExceptionField('ex_chaoyabaojing_biansongqi_', 45, 2, '超压报警（变送器）',3))
        this.addPoint(new ExceptionField('ex_paiyanwendugaobaojing', 45, 2, '排烟温度高报警',4))
        this.addPoint(new ExceptionField('ex_chaoyabaojing_kongzhiqi_', 45, 2, '超压报警（控制器）',5))
        this.addPoint(new ExceptionField('ex_ranshaoqiguzhang', 45, 2, '燃烧器故障',6))
        this.addPoint(new ExceptionField('ex_ranqiyalidi', 45, 2, '燃气压力低',7))
        this.addPoint(new ExceptionField('ex_ranqixieloubaojing', 45, 2, '燃气泄漏报警',8))
        this.addPoint(new ExceptionField('ex_shuiweidianjiluojicuo', 45, 2, '水位电极逻辑错',9))
        this.addPoint(new ExceptionField('ex_gaoshuiweibaojing', 45, 2, '高水位报警',10))
        this.addPoint(new ExceptionField('ex_paiyanwenduchuanganqiduanlu', 45, 2, '排烟温度传感器断路',11))
        this.addPoint(new ExceptionField('ex_dishuiweibaojing', 45, 2, '低水位报警',12))
        this.addPoint(new ExceptionField('ex_bianpinqiguzhangbaojing', 45, 2, '变频器故障报警',13))
        this.addPoint(new ExceptionField('ex_shuiweichuanganqiduanlu', 45, 2, '水位传感器断路',14))
        this.addPoint(new ExceptionField('ex_shuiweichuanganqiduanlu', 45, 2, '水位传感器短路',15))
        this.addPoint(new ExceptionField('ex_jixiandishuiweibaojing4-20mA', 47, 2, '极限低水位报警4-20mA',1))
        this.addPoint(new ExceptionField('ex_gaoshuiweibaojing4-20mA', 47, 2, '高水位报警4-20mA',2))

        this.addPoint(new OpenCloseField('oc_jixiandishuiweibaojingdianji', 5, 2, '极限低水位报警电极',0,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_dishuiweibaojingdianji_6dianjiteyou_', 5, 2, '低水位报警电极（6 电极特有）',1,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_dishuiweidianji', 5, 2, '低水位电极',2,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_zhongshuiweidianji_6dianjiteyou_', 5, 2, '中水位电极（6 电极特有）',3,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_gaoshuiweidianji', 5, 2, '高水位电极',4,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_gaoshuiweibaojingdianji', 5, 2, '高水位报警电极',5,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_bianpinqiguzhangbaojing', 5, 2, '变频器故障报警',6,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_fuhediaojiekongzhi_yalikongzhiqifangshi_', 5, 2, '负荷调节控制（压力控制器方式）',7,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_qitingkongzhi_yalikongzhiqifangshi_', 5, 2, '启停控制（压力控制器方式）',8,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_chaoyabaojingxinhao', 5, 2, '超压报警信号',9,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_ranshaoqiguzhangxinhao', 5, 2, '燃烧器故障信号',10,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_ranqiyaliyichangbaojingxinhao', 5, 2, '燃气压力异常报警信号',11,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_ranqixieloubaojingxinhao', 5, 2, '燃气泄漏报警信号',12,Map_CTL_RT_H1_RYRS.coms_open_close))

        this.addPoint(new DeviceField(CTL_RT.KEY_POINT_RAN_SHAO_QI_KONGZHI, 9, 2, '燃烧器启停控制',0,Map_CTL_RT_H1_RYRS.coms_open_close))

        this.addPoint(new OpenCloseField('oc_ranshaoqifuhediaojie/zengdadiaojie', 9, 2, '燃烧器负荷调节/增大调节',1,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_jianxiaodiaojie', 9, 2, '减小调节',2,Map_CTL_RT_H1_RYRS.coms_open_close))
        this.addPoint(new OpenCloseField('oc_baojingzhuangtaishuchu', 9, 2, '报警状态输出',6,Map_CTL_RT_H1_RYRS.coms_open_close))

        this.addPoint(new SettingField('se_paiyanchaowen', 81, 2, '排烟超温','℃'))
        this.addPoint(new SettingField('se_yalishezhi', 83, 2, '压力设置'))
        this.addPoint(new SettingField( 'se_chaoyabaojing', 85, 2, '超压报警','Mpa',100))
        this.addPoint(new SettingField('se_shangxianyali', 87, 2, '上限压力','Mpa',100))
        this.addPoint(new SettingField('se_xiaxianyali', 89, 2, '下线压力','Mpa',100))
        this.addPoint(new SettingField('se_dianjishezhi', 91, 2, '电极设置'))
        this.addPoint(new SettingField('se_ranshaoshezhi', 93, 2, '燃烧设置'))
        this.addPoint(new SettingField('se_shuchushangxian', 95, 2, '输出上限'))
        this.addPoint(new SettingField( 'se_shuchuxiaxian', 97, 2, '输出下限','%'))
        this.addPoint(new SettingField( 'se_mubiaoyali', 99, 2, '目标压力','Mpa',100))
        this.addPoint(new SettingField('se_zhouqi', 101, 2, '周期'))
        this.addPoint(new SettingField('se_Pshezhizhi', 103, 2, 'P设置值'))
        this.addPoint(new SettingField('se_Ishezhizhi', 105, 2, 'I设置值'))
        this.addPoint(new SettingField('se_Dshezhizhi', 107, 2, 'D设置值'))
        this.addPoint(new SettingField('se_xingcheng', 109, 2, '行程'))
        this.addPoint(new SettingField('se_zhuanhuoyali', 111, 2, '转火压力','Mpa',100))
        this.addPoint(new SettingField('se_zhouqi', 113, 2, '水位周期'))
        this.addPoint(new SettingField('se_Pshezhizhi', 115, 2, '水位P设置值'))
        this.addPoint(new SettingField('se_Ishezhizhi', 117, 2, '水位I设置值'))
        this.addPoint(new SettingField('se_Dshezhizhi', 119, 2, '水位D设置值'))
        this.addPoint(new SettingField('se_queshuishuiwei', 121, 2, '缺水水位','%'))
        this.addPoint(new SettingField('se_dishuiwei', 123, 2, '低水位','%'))
        this.addPoint(new SettingField('se_gaoshuiwei', 125, 2, '高水位','%'))
        this.addPoint(new SettingField('se_gaobaojingshuiwei', 127, 2, '高报警水位','%'))
        this.addPoint(new SettingField('se_mubiaoshuiwei', 129, 2, '目标水位','%'))

        this.addPoint(new MockField('mo_paiyanwendu', 19, 2, '排烟温度', '℃'))
        this.addPoint(new MockField('mo_zhengqiyali', 21, 2, '蒸汽压力','Mpa',100))
        this.addPoint(new MockField('mo_4-20mAxinhaolianxujishui', 23, 2, '4-20mA信号连续给水','%'))
    }
}