import { Map_PLC as PLC_Map } from './BaseMap'
import { PLC } from '../../../devices/PLC/BaseDevice'
import { CountField } from '../../../meta/CountField'
import { MockField, SettingField, DeviceField, ExceptionField } from '../../../meta/PLC/meta'
import { BaseInfoField } from '../../../meta/NJZJ/485'
import { SdcSoftDevice } from '../../../devices/SdcSoftDevice'
import { FixedValueField } from '../../../meta/FixedValueField'

export = class Map_PLC_RanYouZhenKong extends PLC_Map {
    constructor() {
        super()
        this.addPoint(new CountField(PLC.KEY_POINT_Add_SHUI_BENG, '给水泵'))
        this.addPoint(new CountField(PLC.KEY_POINT_XUN_HUAN_BENG, '循环泵'))
        this.addPoint(new CountField(PLC.KEY_POINT_ZHEN_KONG_BENG, '真空泵'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 9, 2, '运行小时数', '时'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 11, 2, '运行天数', '天'))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 13, 2, '系统状态', '', PLC_Map.coms_status))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_POWER, '燃料', 0, Map_PLC_RanYouZhenKong.coms_power))
        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, '介质', 4, Map_PLC_RanYouZhenKong.coms_media))
        this.addPoint(new BaseInfoField('ba_shuiweizhuangtai', 19, 2, '水位状态', '', Map_PLC_RanYouZhenKong.coms_level))
        this.addPoint(new BaseInfoField('ba_ranshaoqizhuangtai', 21, 2, '燃烧器状态', '', PLC_Map.coms_ranshaoqi_status))


        this.addPoint(new MockField('mo_remeishuiwendu', 35, 4, '热媒水温度', '℃'))
        this.addPoint(new MockField('mo_zhenkongyali', 39, 4, '真空压力', 'Kpa'))
        this.addPoint(new MockField('mo_jinyanwendu', 43, 4, '进烟温度', '℃'))
        this.addPoint(new MockField('mo_paiyanwendu', 47, 4, '排烟温度', '℃'))
        this.addPoint(new MockField('mo_shiwaiwendu', 51, 4, '室外温度', '℃'))
        this.addPoint(new MockField('mo_cainuanchushuiwendu', 55, 4, '采暖出水温度', '℃'))
        this.addPoint(new MockField('mo_cainuanhuishuiwendu', 59, 4, '采暖回水温度', '℃'))
        this.addPoint(new MockField('mo_cainuanchushuiyali', 63, 4, '采暖出水压力', 'Mpa'))
        this.addPoint(new MockField('mo_cainuanhuishuiyali', 67, 4, '采暖回水压力', 'Mpa'))
        this.addPoint(new MockField('mo_shenghuochushuiwendu', 71, 4, '生活出水温度', '℃'))
        this.addPoint(new MockField('mo_shenghuohuishuiwendu', 75, 4, '生活回水温度', '℃'))
        this.addPoint(new MockField('mo_shenghuochushuiyali', 79, 4, '生活出水压力', 'Mpa'))
        this.addPoint(new MockField('mo_shenghuohuishuiyali', 83, 4, '生活回水压力', 'Mpa'))

        this.addPoint(new SettingField('se_qiluwendusheding', 111, 4, '启炉温度设定', '℃', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '0036', 0, 400))
        this.addPoint(new SettingField('se_mubiaowendusheding', 115, 4, '目标温度设定', '℃', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '0038', 0, 400))
        this.addPoint(new SettingField('se_tingluwendusheding', 119, 4, '停炉温度设定', '℃', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '003A', 0, 400))
        this.addPoint(new SettingField('se_zhenkongyalidisheding', 123, 4, '真空压力低设定', 'KPa', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '003C', 0, 2.5))
        this.addPoint(new SettingField('se_zhenkongyaligaosheding', 127, 4, '真空压力高设定', 'KPa', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '003E', 0, 2.5))
        this.addPoint(new SettingField('se_paiyanwenduchaogaobaojingsheding', 131, 4, '排烟温度超高报警设定', '℃', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '0040', 0, 400))
        this.addPoint(new SettingField('se_chukouwenduchaogaobaojingsheding', 135, 4, '出口温度超高报警设定', '℃', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '0042', 0, 400))
        this.addPoint(new SettingField('se_zhenkongyalichaogaobaojingsheding', 139, 4, '真空压力超高报警设定', 'KPa', 0, Map_PLC_RanYouZhenKong.Commands_Key_Parameters_Setting, '0044', 0, 2.5))

        this.addPoint(new DeviceField('de_ranshaojiqiting', 163, 2, '燃烧器', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField('de_1_xunhuanbeng_auto', 165, 2, '1#循环泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_1, 167, 2, '1#循环泵', Map_PLC_RanYouZhenKong.coms_start_stop))
        this.addPoint(new DeviceField('de_2_xunhuanbeng_auto', 169, 2, '2#循环泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_XUN_HUAN_BENG_2, 171, 2, '2#循环泵', Map_PLC_RanYouZhenKong.coms_start_stop))
        this.addPoint(new DeviceField('de_1_addshuibeng_auto', 173, 2, '1#补水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_1, 175, 2, '1#补水泵', Map_PLC_RanYouZhenKong.coms_start_stop))
        this.addPoint(new DeviceField('de_2_addshuibeng_auto', 177, 2, '2#补水泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_Add_SHUI_BENG_2, 179, 2, '2#补水泵', Map_PLC_RanYouZhenKong.coms_start_stop))
        this.addPoint(new DeviceField('de_zhenkongbeng_auto', 181, 2, '真空泵', PLC_Map.coms_atuo))
        this.addPoint(new DeviceField(PLC.KEY_POINT_ZHEN_KONG_BENG_1, 183, 2, '真空泵', Map_PLC_RanYouZhenKong.coms_start_stop))

        this.addPoint(new ExceptionField('ex_lubichaowenbaojing', 203, 2, '炉壁超温报警', 0))
        this.addPoint(new ExceptionField('ex_remeishuiwenduchuanganqiguzhang', 203, 2, '热媒水温度传感器故障', 1))
        this.addPoint(new ExceptionField('ex_paiyanwenduchuanganqiguzhang', 203, 2, '排烟温度传感器故障', 2))
        this.addPoint(new ExceptionField('ex_cainuanchushuiwenduchuanganqiguzhang', 203, 2, '采暖出水温度传感器故障', 3))
        this.addPoint(new ExceptionField('ex_shenghuochushuiwenduchuanganqiguzhang', 203, 2, '生活出水温度传感器故障', 4))
        this.addPoint(new ExceptionField('ex_wendushedingcuowubaojing', 203, 2, '温度设定错误报警', 5))
        this.addPoint(new ExceptionField('ex_xunhuanbengliansuoduankaibaojing', 203, 2, '循环泵连锁断开报警', 6))
        this.addPoint(new ExceptionField('ex_waibuliansuoduankaibaojing', 203, 2, '外部连锁断开报警', 7))

        this.addPoint(new ExceptionField('ex_ranshaojiguzhang', 203, 2, '燃烧器故障', 8))
        this.addPoint(new ExceptionField('ex_ranqixielou', 203, 2, '燃气泄漏', 9))
        this.addPoint(new ExceptionField('ex_ranqiyaliyichang', 203, 2, '燃气压力异常', 10))
        this.addPoint(new ExceptionField('ex_luneiyaligaobaojingshedingzhi', 203, 2, '炉内压力高报警（设定值）', 11))
        this.addPoint(new ExceptionField('ex_luneiyaligaobaojingyalikaiguan', 203, 2, '炉内压力高报警（压力开关）', 12))
        this.addPoint(new ExceptionField('ex_paiyanwenduchaogaobaojing', 203, 2, '排烟温度超高报警', 13))
        this.addPoint(new ExceptionField('ex_remeishuiwenduchaogaobaojing', 203, 2, '热媒水温度超高报警', 14))
        this.addPoint(new ExceptionField('ex_queshuibaohubaojing', 203, 2, '缺水保护报警', 15))


    }
}