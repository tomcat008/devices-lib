import { Map_PLC as PLC_Map } from './BaseMap'
import { PLC } from '../../../devices/PLC/BaseDevice'
import { CountField } from '../../../meta/CountField'
import { MockField, SettingField, DeviceField, ExceptionField, OpenCloseField } from '../../../meta/PLC/meta'
import { BaseInfoField } from '../../../meta/NJZJ/485'
import { FixedValueField } from '../../../meta/FixedValueField'
import { SdcSoftDevice } from '../../../devices/SdcSoftDevice'
import { CountShowField } from '../../../meta/CountShowField'
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'
import { GroupKeys } from '@sdcsoft/comms';


export = class Map_PLC_DianZhengQi extends PLC_Map {
    //static readonly Key = 'PLC_DianReShui'


    constructor() {
        super()

        /**
         * 计算属性（不显示）
         */
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, '补水泵'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', PLC_Map.coms_status))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, '燃料', 1, Map_PLC_DianZhengQi.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, '介质', 1, Map_PLC_DianZhengQi.coms_media))
        this.addPoint(new CountShowField(GroupKeys.KEY_BASE, SdcSoftDevice.KEY_POINT_JIA_RE_ZU, '投入加热组', ''))
        this.addPoint(new BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_DianZhengQi.coms_level))
        this.addPoint(new BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', PLC_Map.coms_ranshaoqi_status))



        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_ZhengQiYaLi, 35, 4, '蒸汽压力', 'MPa'))
        this.addPoint(new MockField('mo_zhengqiwendu', 39, 4, '蒸汽温度', '℃'))
        this.addPoint(new MockField('mo_guolushuiwei', 43, 4, '锅炉水位', 'mm'))
        this.addPoint(new MockField('mo_zhengqishunshiliuliang', 47, 4, '蒸汽瞬时流量', 'T/H'))
        this.addPoint(new MockField('mo_bushuishunshiliuliang', 51, 4, '补水瞬时流量', 'T/H'))
        this.addPoint(new MockField('mo_zhengqileijiliuliang', 55, 4, '蒸汽累计流量', 'T'))
        this.addPoint(new MockField('mo_bushuileijiliuliang', 59, 4, '补水累计流量', 'T'))
        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_HuiLiuWenDu, 63, 4, '进水温度', '℃'))
        this.addPoint(new MockField('mo_jinshuiyali', 67, 4, '进水压力', 'MPa'))
        this.addPoint(new MockField('mo_addshuibengpinlvfankui', 71, 4, '给水泵频率反馈', 'Hz'))
        this.addPoint(new MockField('mo_ruanshuixiangyewei', 75, 4, '软水箱液位', '%'))
        this.addPoint(new MockField('mo_qidongjiarezushu', 79, 4, '启动加热组数', '组'))
        this.addPoint(new MockField('mo_qidongjiarezushubaifenbi', 83, 4, '启动加热组数百分比', '%'))

        this.addPoint(new SettingField('se_chaoyabaojingsheding', 127, 4, '超压报警设定', 'MPa'))
        this.addPoint(new SettingField('se_shiyongjiarezushusheding', 131, 4, '使用加热组数设定', '组'))
        this.addPoint(new SettingField('se_touqiejiangeshijiansheding', 135, 4, '投切间隔时间设定', 'S'))
        this.addPoint(new SettingField('se_kuaiqiejiangeshijiansheding', 139, 4, '快切间隔时间设定', 'S'))
        this.addPoint(new SettingField('se_tingluyalisheding', 143, 4, '停炉压力设定', 'MPa'))
        this.addPoint(new SettingField('se_shiyongyalisheding', 147, 4, '使用压力设定', 'MPa'))
        this.addPoint(new SettingField('se_qiluyalisheding', 151, 4, '启炉压力设定', 'MPa'))
        this.addPoint(new SettingField('se_guolushuiweijidibaojingsheding', 155, 4, '锅炉水位极低报警设定', 'mm'))
        this.addPoint(new SettingField('se_geishuibengshoudongpinlvsheding', 159, 4, '给水泵手动频率设定', 'Hz'))
        this.addPoint(new SettingField('se_bushuimubiaosheding', 163, 4, '补水目标设定', 'mm'))
        this.addPoint(new SettingField('se_guolushuiweijigaobaojingsheding', 167, 4, '锅炉水位极高报警设定', 'mm'))
        this.addPoint(new SettingField('se_qibengyeweisheding', 171, 4, '启泵液位设定', 'mm'))
        this.addPoint(new SettingField('se_tingbengyeweisheding', 175, 4, '停泵液位设定', 'mm'))


        this.addPoint(new DeviceField('de_1_addshuibeng_auto', 199, 2, '1#给水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 201, 2, '1#给水泵', PLC_Map.coms_start_stop))
        this.addPoint(new DeviceField('de_2_addshuibeng_auto', 203, 2, '2#给水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 205, 2, '2#给水泵', PLC_Map.coms_start_stop))
        this.addPoint(new DeviceField('de_baojingshuchuzhishi', 207, 2, '报警输出指示', Map_PLC_DianZhengQi.coms_open_close))


        this.addPoint(new ExceptionField('ex_shuidianjiluojicuobaojing', 233, 2, '水电极逻辑错报警', 0))
        this.addPoint(new ExceptionField('ex_yalibiansongqiguzhangbaojing', 233, 2, '压力变送器故障报警', 1))
        this.addPoint(new ExceptionField('ex_shuiweibiansongqiguzhangbaojing', 233, 2, '水位变送器故障报警', 2))
        this.addPoint(new ExceptionField('ex_geishuibengbianpinqiguzhang', 233, 2, '给水泵变频器故障', 3))
        this.addPoint(new ExceptionField('ex_loudianbaojing', 233, 2, '漏电报警', 4))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_QianYa, 233, 2, '欠压报警', 5))

        this.addPoint(new ExceptionField('ex_shuiweiweidibaojing_dianji', 233, 2, '水位危低报警（电极）', 8))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianDiShuiWei, 233, 2, '水位极低报警（电极）', 9),'ex_shuiweijidibaojing_dianji')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianGaoShuiWei, 233, 2, '水位极高报警（电极）', 10),'ex_shuiweijigaobaojing_dianji')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianDiShuiWei, 233, 2, '水位极低报警（设定值）', 11),'ex_shuiweijidibaojing_shedingzhi')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianGaoShuiWei, 233, 2, '水位极高报警（设定值）', 12),'ex_shuiweijigaobaojing_shedingzhi')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_ChaoYa, 233, 2, '超压报警（压力开关）', 13),'ex_chaoyabaojing_yalikaiguan')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_ChaoYa, 233, 2, '超压报警（设定值）', 14),'ex_chaoyabaojing_shedingzhi')
        this.addPoint(new ExceptionField('ex_ruanshuixiangqueshuibaojing', 233, 2, '软水箱缺水报警', 15))


        this.addPoint(new OpenCloseField('oc_1#jiarezu', 237, 2, '1#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_2#jiarezu', 237, 2, '2#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_3#jiarezu', 237, 2, '3#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_4#jiarezu', 237, 2, '4#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_5#jiarezu', 237, 2, '5#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_6#jiarezu', 237, 2, '6#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_7#jiarezu', 237, 2, '7#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_8#jiarezu', 237, 2, '8#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_9#jiarezu', 237, 2, '9#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_10#jiarezu', 237, 2, '10#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_11#jiarezu', 237, 2, '11#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_12#jiarezu', 237, 2, '12#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_13#jiarezu', 237, 2, '13#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_14#jiarezu', 237, 2, '14#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_15#jiarezu', 237, 2, '15#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_16#jiarezu', 237, 2, '16#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_17#jiarezu', 239, 2, '17#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_18#jiarezu', 239, 2, '18#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_19#jiarezu', 239, 2, '19#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_20#jiarezu', 239, 2, '20#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_21#jiarezu', 239, 2, '21#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_22#jiarezu', 239, 2, '22#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_23#jiarezu', 239, 2, '23#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_24#jiarezu', 239, 2, '24#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_25#jiarezu', 239, 2, '25#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_26#jiarezu', 239, 2, '26#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_27#jiarezu', 239, 2, '27#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_28#jiarezu', 239, 2, '28#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_29#jiarezu', 239, 2, '29#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_30#jiarezu', 239, 2, '30#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_31#jiarezu', 239, 2, '31#加热组反馈', 1))
        this.addPoint(new OpenCloseField('oc_32#jiarezu', 239, 2, '32#加热组反馈', 1))

    }
}