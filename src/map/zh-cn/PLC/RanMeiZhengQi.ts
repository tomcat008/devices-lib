import { Map_PLC as PLC_Map } from './BaseMap'
import { PLC } from '../../../devices/PLC/BaseDevice'
import { CountField } from '../../../meta/CountField'
import { MockField, SettingField, DeviceField, ExceptionField } from '../../../meta/PLC/meta'
import { BaseInfoField } from '../../../meta/NJZJ/485'
import { SdcSoftDevice } from '../../../devices/SdcSoftDevice'
import { FixedValueField } from '../../../meta/FixedValueField'
import { GroupFieldsRelationalMapping as FixFieldNames } from '@sdcsoft/gfrm'

export = class Map_PLC_RanMeiZhengQi extends PLC_Map {

    constructor() {
        super()
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, '补水泵'))
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_YANG_BENG, '除氧泵'))
        this.addPoint(new CountField(PLC.KEY_POINT_GU_FENG_FAN, '鼓风'))
        this.addPoint(new CountField(PLC.KEY_POINT_YIN_FENG_FAN, '引风'))
        this.addPoint(new CountField(PLC.KEY_POINT_LU_PAI_FAN, '炉排'))
        this.addPoint(new CountField(PLC.KEY_POINT_CHU_ZHA_FAN, '出渣'))


        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', PLC_Map.coms_status))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, '燃料', 2, Map_PLC_RanMeiZhengQi.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, '介质', 1, Map_PLC_RanMeiZhengQi.coms_media))
        this.addPoint(new BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_RanMeiZhengQi.coms_level))
        this.addPoint(new BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', PLC_Map.coms_ranshaoqi_status))


        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_ZhengQiYaLi, 35, 4, '蒸汽压力', 'MPa'))
        this.addPoint(new MockField('mo_guoluyewei', 39, 4, '锅炉液位', 'mm'))
        this.addPoint(new MockField('mo_zhengqishunshiliuliang', 43, 4, '蒸汽瞬时流量', 'T/h'))
        this.addPoint(new MockField('mo_bushuishunshiliuliang', 47, 4, '补水瞬时流量', 'm³/h'))
        this.addPoint(new MockField('mo_lutangwendu', 51, 4, '炉膛温度', '℃'))
        this.addPoint(new MockField('mo_lutangyali', 55, 4, '炉膛压力', 'Pa'))
        this.addPoint(new MockField('mo_shengmeiqijinkouyanwen', 59, 4, '省煤器进口烟温', '℃'))
        this.addPoint(new MockField(FixFieldNames.KEY_MOCK_PaiYanWenDu, 63, 4, '排烟温度', '℃'))
        this.addPoint(new MockField('mo_zhengqileijiliuliang', 67, 4, '蒸汽累计流量', 'T'))
        this.addPoint(new MockField('mo_bushuileijiliuliang', 71, 4, '补水累计流量', 'm³'))
        this.addPoint(new MockField('mo_shengmeiqijinshuiwendu', 75, 4, '省煤器进水温度', '℃'))
        this.addPoint(new MockField('mo_shengmeiqichushuiwendu', 79, 4, '省煤器出水温度', '℃'))
        this.addPoint(new MockField('mo_bushuiwendu', 83, 4, '补水温度', '℃'))
        this.addPoint(new MockField('mo_paiyanyali', 87, 4, '排烟压力', 'Pa'))
        this.addPoint(new MockField('mo_addshuibengpinlvfankui', 91, 4, '给水泵频率反馈', 'Hz'))
        this.addPoint(new MockField('mo_yinfengjipinlvfankui', 95, 4, '引风机频率反馈', 'Hz'))
        this.addPoint(new MockField('mo_gufengjipinlvfankui', 99, 4, '鼓风机频率反馈', 'Hz'))
        this.addPoint(new MockField('mo_ruanshuixiangyewei', 103, 4, '软水箱液位', '%'))
        this.addPoint(new MockField('mo_guorezhengqiyali', 107, 4, '过热蒸汽压力', 'MPa'))
        this.addPoint(new MockField('mo_chuyangqiyewei', 111, 4, '除氧器液位', '%'))
        this.addPoint(new MockField('mo_guoreqichukouyanwen', 115, 4, '过热器出口烟温', '℃'))
        this.addPoint(new MockField('mo_guoreqizhengqiwendu', 119, 4, '过热器蒸汽温度', '℃'))
        this.addPoint(new MockField('mo_baohezhengqiwendu', 123, 4, '饱和蒸汽温度', '℃'))
        this.addPoint(new MockField('mo_yureqijinyanwendu', 127, 4, '预热器进烟温度', '℃'))
        this.addPoint(new MockField('mo_yureqijinyanyali', 131, 4, '预热器进烟压力', 'Pa'))
        this.addPoint(new MockField('mo_chuyangqiwendu', 135, 4, '除氧器温度', '℃'))
        this.addPoint(new MockField('mo_chuyangqiyali', 139, 4, '除氧器压力', 'KPa'))
        this.addPoint(new MockField('mo_chuyangbengpinlvfankui', 143, 4, '除氧泵频率反馈', 'Hz'))
        this.addPoint(new MockField('mo_bushuidiandongfafankui', 147, 4, '补水电动阀反馈', '%'))
        this.addPoint(new MockField('mo_jianwenshuidiandongfafankui', 151, 4, '减温水电动阀反馈', '%'))
        this.addPoint(new MockField('mo_chuyangjiarediandongfafankui', 155, 4, '除氧加热电动阀反馈', '%'))
        this.addPoint(new MockField('mo_zhaoqiyali', 159, 4, '沼气压力', 'kPa'))
        this.addPoint(new MockField('mo_lutangchukouyanwen', 163, 4, '炉膛出口烟温', '℃'))
        this.addPoint(new MockField('mo_kongyuqichukouyanwen', 167, 4, '空预器出口烟温', '℃'))
        this.addPoint(new MockField('mo_shengmeiqichukouyanwen', 171, 4, '省煤器出口烟温', '℃'))



        this.addPoint(new SettingField('se_qiluyalisheding', 248, 4, '启炉压力设定', 'MPa'))
        this.addPoint(new SettingField('se_mubiaoyalisheding', 252, 4, '目标压力设定', 'MPa'))
        this.addPoint(new SettingField('se_tingluyalisheding', 256, 4, '停炉压力设定', 'MPa'))
        this.addPoint(new SettingField('se_chaoyabaojingyalisheding', 260, 4, '超压报警压力设定', 'MPa'))
        this.addPoint(new SettingField('se_paiyanchaowenbaojing', 264, 4, '排烟超温报警', '℃'))
        this.addPoint(new SettingField('se_guolushuiweimubiaosheding', 268, 4, '锅炉水位目标设定', 'mm'))
        this.addPoint(new SettingField('se_guolushuiweijigaobaojingsheding', 272, 4, '锅炉水位极高报警设定', 'mm'))
        this.addPoint(new SettingField('se_guolutingbengshuiweisheding', 276, 4, '锅炉停泵水位设定', 'mm'))
        this.addPoint(new SettingField('se_guoluqibengshuiweisheding', 280, 4, '锅炉启泵水位设定', 'mm'))
        this.addPoint(new SettingField('se_guolushuiweijidibaojingsheding', 284, 4, '锅炉水位极低报警设定', 'mm'))
        this.addPoint(new SettingField('se_guolushuiweishoudonggeisu', 288, 4, '锅炉水位手动给速', '%'))

        this.addPoint(new DeviceField('de_yinfeng_auto', 368, 2, '引风', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_YIN_FENG_FAN_1, 370, 2, '引风', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_gufeng_auto', 372, 2, '鼓风', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_GU_FENG_FAN_1, 374, 2, '鼓风', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_lupai_auto', 376, 2, '炉排', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_LU_PAI_FAN_1, 378, 2, '炉排', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_chuzha_auto', 380, 2, '除渣', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_ZHA_FAN_1, 382, 2, '除渣', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_1_addshuibeng_auto', 384, 2, '1#给水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 386, 2, '1#给水泵', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_2_addshuibeng_auto', 388, 2, '2#给水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 390, 2, '2#给水泵', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_1_chuyangbeng_auto', 392, 2, '1#除氧泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_1, 394, 2, '1#除氧泵', Map_PLC_RanMeiZhengQi.coms_start_stop))
        this.addPoint(new DeviceField('de_2_chuyangbeng_auto', 396, 2, '2#除氧泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_CHU_YANG_BENG_2, 398, 2, '2#除氧泵', Map_PLC_RanMeiZhengQi.coms_start_stop))

        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianDiShuiWei, 448, 2, '水位极低报警（设定值）', 0),'ex_shuiweijidibaojing_shedingzhi')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianGaoShuiWei, 448, 2, '水位极高报警（设定值）', 1),'ex_shuiweijigaobaojing_shedingzhi')
        this.addPoint(new ExceptionField('ex_chaoyabaojing_yalikaiguan', 448, 2, '超压报警（压力开关）', 2))
        this.addPoint(new ExceptionField('ex_chaoyabaojing_shedingzhi', 448, 2, '超压报警（设定值）', 3))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_PaiYanWenDuChaoGao, 448, 2, '排烟超温报警', 4))
        this.addPoint(new ExceptionField('ex_ruanshuixiangqueshuibaojing', 448, 2, '软水箱缺水报警', 5))
        this.addPoint(new ExceptionField('ex_shuidianjiluojicuobaojing', 448, 2, '水电极逻辑错报警', 6))
        this.addPoint(new ExceptionField('ex_yalibiansongqiguzhangbaojing', 448, 2, '压力变送器故障报警', 7))

        this.addPoint(new ExceptionField('ex_yinfengjibianpinqiguzhang', 448, 2, '引风机变频器故障', 8))
        this.addPoint(new ExceptionField('ex_gufengjibianpinqiguzhang', 448, 2, '鼓风机变频器故障', 9))
        this.addPoint(new ExceptionField('ex_lupaibianpinqiguzhang', 448, 2, '炉排变频器故障', 10))
        this.addPoint(new ExceptionField('ex_chuzhabianpinqiguzhang', 448, 2, '除渣变频器故障', 11))
        this.addPoint(new ExceptionField('ex_jishuibianpinqiguzhang', 448, 2, '给水变频器故障', 12))
        this.addPoint(new ExceptionField('ex_shuiweiweidibaojing', 448, 2, '水位危低报警（电极）', 13))
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianDiShuiWei, 448, 2, '水位极低报警（电极）', 14),'ex_shuiweijidibaojing_dianji')
        this.addPoint(new ExceptionField(FixFieldNames.KEY_Expt_JiXianGaoShuiWei, 448, 2, '水位极高报警（电极）', 15),'ex_shuiweijigaobaojing_dianji')


        this.addPoint(new ExceptionField('ex_shuiweibiansongqiguzhangbaojing', 450, 2, '水位变送器故障报警', 8))
        this.addPoint(new ExceptionField('ex_paiyanwenduchuanganqiguzhangbaojing', 450, 2, '排烟温度传感器故障报警', 9))
        this.addPoint(new ExceptionField('ex_chuyangqiqueshuibaojing', 450, 2, '除氧器缺水报警', 10))
        this.addPoint(new ExceptionField('ex_chuyangqigaoshuiweibaojing', 450, 2, '除氧器高水位报警', 11))

    }
}