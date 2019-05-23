import { Map_PLC as PLC_Map } from './BaseMap'
import { PLC } from '../../../devices/PLC/BaseDevice'
import { CountField } from '../../../meta/CountField'
import { MockField, SettingField, DeviceField, ExceptionField, OpenCloseField, BaseInfoField } from '../../../meta/PLC/meta'
import { SdcSoftDevice } from '../../../devices/SdcSoftDevice'
import { FixedValueField } from '../../../meta/FixedValueField'
import { CountShowField } from '../../../meta/CountShowField'


export = class Map_PLC_DianReShui extends PLC_Map {
    //static readonly Key = 'PLC_DianReShui'
    //static readonly Commands_Key_Parameters_Setting = '参数设置'
    //static readonly Commands_Key_System_Ctl = '系统控制'

    constructor() {
        super()
        //this.addCommandGroup(PLC_Map.Commands_Key_Parameters_Setting)
        //this.addCommandGroup(PLC_Map.Commands_Key_System_Ctl)
        /**
         * 计算属性（不显示）
         */
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, '补水泵'))
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG, '循环泵'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', PLC_Map.coms_status))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, '燃料', 1, Map_PLC_DianReShui.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, '介质', 0, Map_PLC_DianReShui.coms_media))
        this.addPoint(new CountShowField(Map_PLC_DianReShui.KEY_BASE, SdcSoftDevice.KEY_POINT_JIA_RE_ZU, '投入加热组', ''))
        this.addPoint(new BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_DianReShui.coms_level))
        this.addPoint(new BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', PLC_Map.coms_ranshaoqi_status))

        this.addPoint(new MockField('mo_chushuiwendu', 35, 4, '出水温度', '℃'))
        this.addPoint(new MockField('mo_huishuiwendu', 39, 4, '回水温度', '℃'))
        this.addPoint(new MockField('mo_chushuiyali', 43, 4, '出水压力', 'Mpa'))
        this.addPoint(new MockField('mo_huishuiyali', 47, 4, '回水压力', 'Mpa'))
        this.addPoint(new MockField('mo_qidongjiarezushu', 79, 4, '启动加热组数', '组'))
        this.addPoint(new MockField('mo_qidongjiarezushubaifenbi', 83, 4, '启动加热组数百分比', '%'))

        this.addPoint(new SettingField('se_chaowenbaojingsheding', 127, 4, '超温报警设定', '℃', 0, Map_PLC_DianReShui.Commands_Key_Parameters_Setting, '003E', 10, 200))
        this.addPoint(new SettingField('se_shiyongjiarezushusheding', 131, 4, '使用加热组数设定', '组'))
        this.addPoint(new SettingField('se_touqiejiangeshijiansheding', 135, 4, '投切间隔时间设定', 'S'))
        this.addPoint(new SettingField('se_kuaiqiejiangeshijiansheding', 139, 4, '快切间隔时间设定', 'S'))
        this.addPoint(new SettingField('se_tingluwendusheding', 143, 4, '停炉温度设定', '℃'))
        this.addPoint(new SettingField('se_shiyongwendusheding', 147, 4, '使用温度设定', '℃'))
        this.addPoint(new SettingField('se_qiluwendusheding', 151, 4, '启炉温度设定', '℃'))
        this.addPoint(new SettingField('se_yalidibaojingsheding', 155, 4, '压力低报警设定', 'Mpa'))
        this.addPoint(new SettingField('se_yaligaobaojingsheding', 159, 4, '压力高报警设定', 'Mpa'))
        this.addPoint(new SettingField('se_qibengyalisheding', 163, 4, '启泵压力设定', 'Mpa'))
        this.addPoint(new SettingField('se_tingbengyalisheding', 167, 4, '停泵压力设定', 'Mpa'))
        this.addPoint(new SettingField('se_xunhuanbengshangxianwendusheding', 171, 4, '循环泵上限温度设定', '℃'))
        this.addPoint(new SettingField('se_xunhuanbengxiaxianwendusheding', 175, 4, '循环泵下限温度设定', '℃'))


        this.addPoint(new DeviceField('de_1_addshuibeng_auto', 199, 2, '1#补水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, '1#补水泵', Map_PLC_DianReShui.coms_start_stop))
        this.addPoint(new DeviceField('de_2_addshuibeng_auto', 203, 2, '2#补水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, '2#补水泵', PLC_Map.coms_start_stop))
        this.addPoint(new DeviceField('de_baojingshuchuzhishi', 207, 2, '报警输出指示', Map_PLC_DianReShui.coms_open_close))
        this.addPoint(new DeviceField('de_1_xunhuanbeng_auto', 209, 2, '1#循环泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 211, 2, '1#循环泵', PLC_Map.coms_start_stop))
        this.addPoint(new DeviceField('de_2_xunhuanbeng_auto', 213, 2, '2#循环泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 215, 2, '2#循环泵', PLC_Map.coms_start_stop))

        this.addPoint(new ExceptionField('ex_shuiweijidibaojing（dianji）', 233, 2, '水位极低报警（电极）', 8))
        this.addPoint(new ExceptionField('ex_xitongchaoyabaojing（shedingzhi）', 233, 2, '系统超压报警（设定值）', 9))
        this.addPoint(new ExceptionField('ex_xitongyalidibaojing（shedingzhi）', 233, 2, '系统压力低报警（设定值）', 10))
        this.addPoint(new ExceptionField('ex_xitongchaoyabaojing（dianjiedianyalibiao）', 233, 2, '系统超压报警（电接点压力表）', 11))
        this.addPoint(new ExceptionField('ex_xitongyalidibaojing（dianjiedianyalibiao）', 233, 2, '系统压力低报警（电接点压力表）', 12))
        this.addPoint(new ExceptionField('ex_chushuiwenduchuanganqiguzhang', 233, 2, '出水温度传感器故障', 13))
        this.addPoint(new ExceptionField('ex_huishuiwenduchuanganqiguzhang）', 233, 2, '回水温度传感器故障', 14))
        this.addPoint(new ExceptionField('ex_chushuiyalibiansongqiguzhang', 233, 2, '出水压力变送器故障', 15))
        this.addPoint(new ExceptionField('ex_huishuiyalibiansongqiguzhang', 233, 2, '回水压力变送器故障', 0))
        this.addPoint(new ExceptionField('ex_lubichaowenbaojing', 233, 2, '炉壁超温报警', 1))
        this.addPoint(new ExceptionField('ex_waibuliansuoduankaibaojing', 233, 2, '外部连锁断开报警', 2))
        this.addPoint(new ExceptionField('ex_xunhuanbengliansuoduankaibaojing', 233, 2, '循环泵连锁断开报警', 3))
        this.addPoint(new ExceptionField('ex_loudianbaojing', 233, 2, '漏电报警', 4))
        this.addPoint(new ExceptionField('ex_qianyabaojing', 233, 2, '欠压报警', 5))
        this.addPoint(new ExceptionField('ex_chushuichaowenbaojing', 233, 2, '出水超温报警', 6))
        this.addPoint(new ExceptionField('ex_wendushedingcuowubaojing', 233, 2, '温度设定错误报警', 7))
        this.addPoint(new ExceptionField('ex_Axiangguoliubaojing', 235, 2, 'A相过流报警', 8))
        this.addPoint(new ExceptionField('ex_Bxiangguoliubaojing', 235, 2, 'B相过流报警', 9))
        this.addPoint(new ExceptionField('ex_Cxiangguoliubaojing', 235, 2, 'C相过流报警', 10))


        this.addPoint(new OpenCloseField('oc_1#jiarezu', 237, 2, '1#加热组反馈', 0))
        this.addPoint(new OpenCloseField('oc_2#jiarezu', 237, 2, '2#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_3#jiarezu', 237, 2, '3#加热组反馈', 2))
        this.addPoint(new OpenCloseField('oc_4#jiarezu', 237, 2, '4#加热组反馈', 3))
        this.addPoint(new OpenCloseField('oc_5#jiarezu', 237, 2, '5#加热组反馈', 4))
        this.addPoint(new OpenCloseField('oc_6#jiarezu', 237, 2, '6#加热组反馈', 5))
        this.addPoint(new OpenCloseField('oc_7#jiarezu', 237, 2, '7#加热组反馈', 6))
        this.addPoint(new OpenCloseField('oc_8#jiarezu', 237, 2, '8#加热组反馈', 7))
        this.addPoint(new OpenCloseField('oc_9#jiarezu', 237, 2, '9#加热组反馈', 8))
        this.addPoint(new OpenCloseField('oc_10#jiarezu', 237, 2, '10#加热组反馈', 9))
        this.addPoint(new OpenCloseField('oc_11#jiarezu', 237, 2, '11#加热组反馈', 10))
        this.addPoint(new OpenCloseField('oc_12#jiarezu', 237, 2, '12#加热组反馈', 11))
        this.addPoint(new OpenCloseField('oc_13#jiarezu', 237, 2, '13#加热组反馈', 12))
        this.addPoint(new OpenCloseField('oc_14#jiarezu', 237, 2, '14#加热组反馈', 13))
        this.addPoint(new OpenCloseField('oc_15#jiarezu', 237, 2, '15#加热组反馈', 14))
        this.addPoint(new OpenCloseField('oc_16#jiarezu', 237, 2, '16#加热组反馈', 15))
        this.addPoint(new OpenCloseField('oc_17#jiarezu', 239, 2, '17#加热组反馈', 16))
        this.addPoint(new OpenCloseField('oc_18#jiarezu', 239, 2, '18#加热组反馈', 17))
        this.addPoint(new OpenCloseField('oc_19#jiarezu', 239, 2, '19#加热组反馈', 18))
        this.addPoint(new OpenCloseField('oc_20#jiarezu', 239, 2, '20#加热组反馈', 19))
        this.addPoint(new OpenCloseField('oc_21#jiarezu', 239, 2, '21#加热组反馈', 20))
        this.addPoint(new OpenCloseField('oc_22#jiarezu', 239, 2, '22#加热组反馈', 21))
        this.addPoint(new OpenCloseField('oc_23#jiarezu', 239, 2, '23#加热组反馈', 22))
        this.addPoint(new OpenCloseField('oc_24#jiarezu', 239, 2, '24#加热组反馈', 23))
        this.addPoint(new OpenCloseField('oc_25#jiarezu', 239, 2, '25#加热组反馈', 24))
        this.addPoint(new OpenCloseField('oc_26#jiarezu', 239, 2, '26#加热组反馈', 25))
        this.addPoint(new OpenCloseField('oc_27#jiarezu', 239, 2, '27#加热组反馈', 26))
        this.addPoint(new OpenCloseField('oc_28#jiarezu', 239, 2, '28#加热组反馈', 27))
        this.addPoint(new OpenCloseField('oc_29#jiarezu', 239, 2, '29#加热组反馈', 28))
        this.addPoint(new OpenCloseField('oc_30#jiarezu', 239, 2, '30#加热组反馈', 29))
        this.addPoint(new OpenCloseField('oc_31#jiarezu', 239, 2, '31#加热组反馈', 30))
        this.addPoint(new OpenCloseField('oc_32#jiarezu', 239, 2, '32#加热组反馈', 31))
    }
}