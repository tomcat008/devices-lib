import { Map_CTL_NJZJ } from './CTL_NJZJ'
import { SdcSoftDevice } from '../../../../devices/SdcSoftDevice'
import { SystemStatusField, BaseInfoField, ExceptionField, DeviceField, MockField, SettingField, StartStopField, } from '../../../../meta/NJZJ/485'


export class Map_CTL_NJZJ_IP_485 extends Map_CTL_NJZJ {
    static readonly Commands_Key_Parameters_Setting = '参数设置'
    static readonly Commands_Key_System_Ctl = '系统控制'

    constructor() {
        super()
        // this.addCommandGroup(Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting)
        // this.addCommandGroup(Map_CTL_NJZJ_IP_485.Commands_Key_System_Ctl)

        this.addPoint(new SystemStatusField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 7, 2, '系统状态', Map_CTL_NJZJ.coms_status, Map_CTL_NJZJ_IP_485.Commands_Key_System_Ctl, '0602', 1, 2))
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 51, 2, '工作天数', '天'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 53, 2, '工作小时数', '时'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_POWER, 3, 2, '燃料类型', '', Map_CTL_NJZJ_IP_485.coms_power))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_MEDIA, 5, 2, '介质类型', '', Map_CTL_NJZJ_IP_485.coms_media))

        this.addPoint(new BaseInfoField('ba_guolushuiweizhuangtai', 25, 2, '锅炉液位状态', '', Map_CTL_NJZJ_IP_485.coms_level))

        this.addPoint(new BaseInfoField('ba_shuixiangshuiweizhuangtai', 27, 2, '水箱液位状态', '', Map_CTL_NJZJ_IP_485.coms_level))

        this.addPoint(new BaseInfoField('ba_guoluyalizhuangtai', 29, 2, '锅炉压力状态', '', Map_CTL_NJZJ.coms_yalistatus))

        //this.addPoint(new BaseInfoField('ba_leijijiaretianshu', 51, 2, '累计加热', '天'))

        //this.addPoint(new BaseInfoField('ba_leijijiarexiaoshi', 53, 2, '累计加热', '时'))

        this.addPoint(new BaseInfoField('ba_dahuoshijian', 55, 2, '大火工作时间', '时'))

        this.addPoint(new BaseInfoField('ba_xiaohuoshijian', 57, 2, '小火工作时间', '时'))

        this.addPoint(new BaseInfoField('ba_fangdongkaiguan', 61, 2, '防冻开关', '', Map_CTL_NJZJ_IP_485.coms_open_close))
        //
        this.addPoint(new ExceptionField('ex_paiyanwendugaobaojing', 88, 2, '排烟温度高报警'))

        this.addPoint(new ExceptionField('ex_lushuiwendugaobaojing', 90, 2, '炉水温度高报警'))

        this.addPoint(new ExceptionField('ex_chukouwendugaobaojing', 92, 2, '出口温度高报警', ExceptionField.Exception_Error))

        this.addPoint(new ExceptionField('ex_chaoyabaojing', 94, 2, '超压报警'))

        this.addPoint(new ExceptionField('ex_jixiandishuiweibaojing', 96, 2, '极限低水位报警'))

        this.addPoint(new ExceptionField('ex_dishuiweibaojing', 98, 2, '低水位报警'))

        this.addPoint(new ExceptionField('ex_gaoshuiweibaojing', 100, 2, '高水位报警'))

        this.addPoint(new ExceptionField('ex_shuiweixinhaoluojicuobaojing', 102, 2, '水位信号逻辑错报警'))

        this.addPoint(new ExceptionField('ex_lubiwendugaobaojing', 104, 2, '炉壁温度高报警'))

        this.addPoint(new ExceptionField('ex_fuyazhengqiwendugaobaojing', 106, 2, '负压蒸汽温度高报警'))

        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 108, 2, '燃烧器故障报警'))

        this.addPoint(new ExceptionField('ex_ranqixieloubaojing', 110, 2, '燃气泄漏报警'))

        this.addPoint(new ExceptionField('ex_ranqiyalidibaojing', 112, 2, '燃气压力低报警'))

        this.addPoint(new ExceptionField('ex_ranqiyaliyichangbaojing', 114, 2, '燃气压力异常报警'))

        this.addPoint(new ExceptionField('ex_ranqiyaligaobaojing', 116, 2, '燃气压力高报警'))

        this.addPoint(new ExceptionField('ex_jishuibianpinqiguzhangbaojing', 118, 2, '给水变频器故障报警'))

        this.addPoint(new ExceptionField('ex_xunhuanbianpinqiguzhangbaojing', 120, 2, '循环变频器故障报警'))

        this.addPoint(new ExceptionField('ex_yinfengbianpinqiguzhangbaojing', 122, 2, '引风变频器故障报警'))

        this.addPoint(new ExceptionField('ex_gufengbianpinqiguzhangbaojing', 124, 2, '鼓风变频器故障报警'))

        this.addPoint(new ExceptionField('ex_ecigufengbianpinqiguzhangbaojing', 126, 2, '二次鼓风变频器故障报警'))

        this.addPoint(new ExceptionField('ex_lupaibianpinqiguzhangbaojing', 128, 2, '炉排变频器故障报警'))

        this.addPoint(new ExceptionField('ex_jishuibengguzhangbaojing', 130, 2, '给水泵故障报警'))

        this.addPoint(new ExceptionField('ex_xunhuanbengguzhangbaojing', 132, 2, '循环泵故障报警'))

        this.addPoint(new ExceptionField('ex_chaodiyabaojing', 134, 2, '超低压报警'))

        this.addPoint(new ExceptionField('ex_qiandianyabaojing', 136, 2, '欠电压报警'))

        this.addPoint(new ExceptionField('ex_guodianyabaojing', 138, 2, '过电压报警'))

        this.addPoint(new ExceptionField('ex_quexiangbaojing', 140, 2, '缺相报警'))

        this.addPoint(new ExceptionField('ex_loudianbaojing', 142, 2, '漏电报警'))

        this.addPoint(new ExceptionField('ex_biansongqiguoyabaohu', 144, 2, '变送器过压保护'))

        this.addPoint(new ExceptionField('ex_guanjiancanshuyichang', 146, 2, '关键参数异常'))

        this.addPoint(new ExceptionField('ex_shedingcanshuyichang', 148, 2, '设定参数异常'))

        this.addPoint(new ExceptionField('ex_shizhongguzhang', 150, 2, '时钟故障'))

        this.addPoint(new ExceptionField('ex_cunchuqiguzhang', 152, 2, '存储器故障'))

        this.addPoint(new ExceptionField('ex_waibuliansuobaojing', 154, 2, '外部连锁报警'))

        this.addPoint(new ExceptionField('ex_queyoubaojing', 156, 2, '缺油报警'))

        this.addPoint(new ExceptionField('ex_diyouweibaojing', 158, 2, '低油位报警'))

        this.addPoint(new ExceptionField('ex_bentipaiyanwendugaobaojing', 160, 2, '本体排烟温度高报警'))

        this.addPoint(new ExceptionField('ex_bianpinqiguzhangbaojing', 162, 2, '变频器故障报警'))

        this.addPoint(new ExceptionField('ex_meishuiwendugaobaojing', 164, 2, '媒水温度高报警'))

        this.addPoint(new ExceptionField('ex_1#guoluguzhang', 166, 2, '1#锅炉故障'))

        this.addPoint(new ExceptionField('ex_2#guoluguzhang', 168, 2, '2#锅炉故障'))

        this.addPoint(new ExceptionField('ex_3#guoluguzhang', 170, 2, '3#锅炉故障'))

        this.addPoint(new ExceptionField('ex_4#guoluguzhang', 172, 2, '4#锅炉故障'))

        this.addPoint(new ExceptionField('ex_5#guoluguzhang', 174, 2, '5#锅炉故障'))

        this.addPoint(new ExceptionField('ex_6#guoluguzhang', 176, 2, '6#锅炉故障'))

        this.addPoint(new ExceptionField('ex_7#guoluguzhang', 178, 2, '7#锅炉故障'))

        this.addPoint(new ExceptionField('ex_8#guoluguzhang', 180, 2, '8#锅炉故障'))

        this.addPoint(new ExceptionField('ex_bushuibianpinqiguzhangbaojing', 182, 2, '补水变频器故障报警'))

        this.addPoint(new ExceptionField('ex_diliuliangbaojing', 184, 2, '低流量报警'))

        this.addPoint(new ExceptionField('ex_jinkouwendudibaojing', 186, 2, '进口温度低报警'))

        this.addPoint(new ExceptionField('ex_xunhuanbengbianpinqiguzhang', 188, 2, '循环泵变频器故障'))

        this.addPoint(new ExceptionField('ex_ecixunhuanbengbianpinqiguzhang', 190, 2, '二次循环泵变频器故障'))

        this.addPoint(new ExceptionField('ex_reshuibengbianpinqiguzhang', 192, 2, '热水泵变频器故障'))

        this.addPoint(new ExceptionField('ex_buyoubengbianpinqiguzhang', 194, 2, '补油泵变频器故障'))

        this.addPoint(new ExceptionField('ex_ecigufengbianpinqiguzhang', 196, 2, '二次鼓风变频器故障'))

        this.addPoint(new ExceptionField('ex_songliaojibianpinqiguzhang', 198, 2, '送料机变频器故障'))

        this.addPoint(new ExceptionField('ex_zhenkongbengbianpinqiguzhang', 200, 2, '真空泵变频器故障'))

        this.addPoint(new ExceptionField('ex_lengningbengbianpinqiguzhang', 202, 2, '冷凝泵变频器故障'))

        this.addPoint(new ExceptionField('ex_bushuibengguzhang', 204, 2, '补水泵故障'))

        this.addPoint(new ExceptionField('ex_buyoubengguzhang', 206, 2, '补油泵故障'))

        this.addPoint(new ExceptionField('ex_lengningbengguzhang', 208, 2, '冷凝泵故障'))

        this.addPoint(new ExceptionField('ex_reshuibengguzhang', 210, 2, '热水泵故障'))

        this.addPoint(new ExceptionField('ex_zhenkongbengguzhang', 212, 2, '真空泵故障'))

        this.addPoint(new ExceptionField('ex_ecixunhuanbengguzhang', 214, 2, '二次循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu1xunhuanbengguzhang', 216, 2, '回路1循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu2xunhuanbengguzhang', 218, 2, '回路2循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu3xunhuanbengguzhang', 220, 2, '回路3循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu4xunhuanbengguzhang', 222, 2, '回路4循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu5xunhuanbengguzhang', 224, 2, '回路5循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu1wendugaobaojing', 226, 2, '回路1温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu2wendugaobaojing', 228, 2, '回路2温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu3wendugaobaojing', 230, 2, '回路3温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu4wendugaobaojing', 232, 2, '回路4温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu5wendugaobaojing', 234, 2, '回路5温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan1wendugaobaojing', 236, 2, '盘管1温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan2wendugaobaojing', 238, 2, '盘管2温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan3wendugaobaojing', 240, 2, '盘管3温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan4wendugaobaojing', 242, 2, '盘管4温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan5wendugaobaojing', 244, 2, '盘管5温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan6wendugaobaojing', 246, 2, '盘管6温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan7wendugaobaojing', 248, 2, '盘管7温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan8wendugaobaojing', 250, 2, '盘管8温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan9wendugaobaojing', 252, 2, '盘管9温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan10wendugaobaojing', 254, 2, '盘管10温度高报警'))

        this.addPoint(new ExceptionField('ex_shanzhengguanchaoyabaojing', 256, 2, '闪蒸罐超压报警'))

        this.addPoint(new ExceptionField('ex_lengningguanchaoyabaojing', 258, 2, '冷凝罐超压报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanchaoyabaojing', 260, 2, '膨胀罐超压报警'))

        this.addPoint(new ExceptionField('ex_shanzhengguanyeweigaobaojing', 262, 2, '闪蒸罐液位高报警'))

        this.addPoint(new ExceptionField('ex_shanzhengguanyeweidibaojing', 264, 2, '闪蒸罐液位低报警'))

        this.addPoint(new ExceptionField('ex_lengningguanyeweigaobaojing', 266, 2, '冷凝罐液位高报警'))

        this.addPoint(new ExceptionField('ex_lengningguanyeweidibaojing', 268, 2, '冷凝罐液位低报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanyeweigaobaojing', 270, 2, '膨胀罐液位高报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanyeweidibaojing', 272, 2, '膨胀罐液位低报警'))

        this.addPoint(new ExceptionField('ex_jinchukouyachadibaojing', 274, 2, '进出口压差低报警'))

        this.addPoint(new ExceptionField('ex_jinchukouyachagaobaojing', 276, 2, '进出口压差高报警'))

        this.addPoint(new ExceptionField('ex_zhenkongyalibuzubaojing', 278, 2, '真空压力不足报警,'))

        this.addPoint(new ExceptionField('ex_jinchukouwenchadibaojing', 280, 2, '进出口温差低报警'))

        this.addPoint(new ExceptionField('ex_jinchukouwenchagaobaojing', 282, 2, '进出口温差高报警'))

        this.addPoint(new ExceptionField('ex_chukouyaligaobaojing_guoluhuohuilu_', 284, 2, '出口压力高报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_chukouyalidibaojing_guoluhuohuilu_', 286, 2, '出口压力低报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_jinkouyaligaobaojing_guoluhuohuilu_', 288, 2, '进口压力高报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_jinkouyalidibaojing_guoluhuohuilu_', 290, 2, '进口压力低报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_yinfengjiguzhangbaojing_dongzuofankuiyichang_', 292, 2, '引风机故障报警（动作反馈异常）'))

        this.addPoint(new ExceptionField('ex_cainuanchukouwendugaobaojing', 294, 2, '采暖出口温度高报警'))

        this.addPoint(new ExceptionField('ex_reshuichukouwendugaobaojing', 296, 2, '热水出口温度高报警'))

        this.addPoint(new ExceptionField('ex_jinkouwendugaobaojing', 298, 2, '进口温度高报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanwendugaobaojing', 300, 2, '膨胀罐温度高报警'))

        this.addPoint(new ExceptionField('ex_guodianliubaojing', 302, 2, '过电流报警'))

        this.addPoint(new ExceptionField('ex_jishuiyaligaobaojing', 304, 2, '给水压力高报警'))

        this.addPoint(new ExceptionField('ex_jienengqichukouyanwengaobaojing', 306, 2, '节能器出口烟温高报警'))

        this.addPoint(new ExceptionField('ex_lengningqichukouyanwengaobaojing', 308, 2, '冷凝器出口烟温高报警'))

        this.addPoint(new ExceptionField('ex_chushuiwendugaobaojing', 310, 2, '出水温度高报警'))

        this.addPoint(new ExceptionField('ex_gaowenbaohuwendugaobaojing', 312, 2, '高温保护温度高报警'))

        this.addPoint(new ExceptionField('ex_youwengaobaojing', 314, 2, '油温高报警'))

        this.addPoint(new ExceptionField('ex_wenchagaobaojing', 316, 2, '温差高报警'))

        this.addPoint(new ExceptionField('ex_shuibengguozaibaojing', 318, 2, '水泵过载报警'))

        this.addPoint(new ExceptionField('ex_jiarezuguozaibaojing', 320, 2, '加热组过载报警'))

        this.addPoint(new ExceptionField('ex_churexunhuanbengguzhangbaojing', 322, 2, '储热循环泵故障报警'))

        this.addPoint(new ExceptionField('ex_yandaodiefaguzhang', 324, 2, '烟道蝶阀故障'))

        this.addPoint(new ExceptionField('ex_nengliangshezhiwendugaobaojing', 326, 2, '能量设置温度高报警'))
        //
        this.addPoint(new ExceptionField('ex_zhengqiwendugaobaojing', 333, 2, '蒸汽温度高报警'))

        this.addPoint(new ExceptionField('ex_shuixiangwendugaobaojing', 335, 2, '水箱温度高报警'))

        this.addPoint(new ExceptionField('ex_1#guodianliubaojing', 337, 2, '1#过电流报警'))
        this.addPoint(new ExceptionField('ex_2#guodianliubaojing', 339, 2, '2#过电流报警'))
        this.addPoint(new ExceptionField('ex_3#guodianliubaojing', 341, 2, '3#过电流报警'))
        this.addPoint(new ExceptionField('ex_4#guodianliubaojing', 343, 2, '4#过电流报警'))
        this.addPoint(new ExceptionField('ex_5#guodianliubaojing', 345, 2, '5#过电流报警'))
        this.addPoint(new ExceptionField('ex_gufengjiguzhangbaojing', 347, 2, '鼓风机故障报警'))
        this.addPoint(new ExceptionField('ex_jiezhigaowenbaojing', 349, 2, '介质高温报警'))
        this.addPoint(new ExceptionField('ex_jiezhidiwenbaojing', 351, 2, '介质低温报警'))
        //
        this.addPoint(new ExceptionField('ex_bentipaiyanwenduchuanganqiguzhang', 578, 2, '本体排烟温度传感器故障'))

        this.addPoint(new ExceptionField('ex_paiyanwenduchuanganqiguzhang', 580, 2, '排烟温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lushuiwenduchuanganqiguzhang', 582, 2, '炉水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_chukouwenduchuanganqiguzhang', 584, 2, '出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jinkouwenduchuanganqiguzhang', 586, 2, '进口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqichukouwenduchuanganqiguzhang(shui_', 588, 2, '节能器出口温度传感器故障(水）'))

        this.addPoint(new ExceptionField('ex_jienengqijinkouwenduchuanganqiguzhang(shui_', 590, 2, '节能器进口温度传感器故障(水）'))

        this.addPoint(new ExceptionField('ex_jishuiwenduchuanganqiguzhang', 592, 2, '给水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangwenduchuanganqiguzhang', 594, 2, '炉膛温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangchukouwenduchuanganqiguzhang', 596, 2, '炉膛出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lubiwenduchuanganqiguzhang', 598, 2, '炉壁温度传感器故障'))

        this.addPoint(new ExceptionField('ex_ranliaowenduchuanganqiguzhang', 600, 2, '燃料温度传感器故障'))

        this.addPoint(new ExceptionField('ex_refengwenduchuanganqiguzhang_kongyuqichukou_', 602, 2, '热风温度传感器故障（空预器出口）'))

        this.addPoint(new ExceptionField('ex_fuyazhengqiwenduchuanganqiguzhang', 604, 2, '负压蒸汽温度传感器故障'))

        this.addPoint(new ExceptionField('ex_guorezhengqiwenduchuanganqiguzhang', 606, 2, '过热蒸汽温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu1wenduchuanganqiguzhang', 608, 2, '回路1温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu2wenduchuanganqiguzhang', 610, 2, '回路2温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu3wenduchuanganqiguzhang', 612, 2, '回路3温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu4wenduchuanganqiguzhang', 614, 2, '回路4温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu5wenduchuanganqiguzhang', 616, 2, '回路5温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shiwaiwenduchuanganqiguzhang', 618, 2, '室外温度传感器故障'))

        this.addPoint(new ExceptionField('ex_zhengqiyalichuanganqiguzhang', 620, 2, '蒸汽压力传感器故障'))

        this.addPoint(new ExceptionField('ex_jishuiyalichuanganqiguzhang', 622, 2, '给水压力传感器故障'))

        this.addPoint(new ExceptionField('ex_chukouyalichuanganqiguzhang', 624, 2, '出口压力传感器故障'))

        this.addPoint(new ExceptionField('ex_jinkouyalichuanganqiguzhang', 626, 2, '进口压力传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangyalichuanganqiguzhang', 628, 2, '炉膛压力传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangchukouyalichuanganqiguzhang', 630, 2, '炉膛出口压力传感器故障'))

        this.addPoint(new ExceptionField('ex_ranqiyalichuanganqiguzhang', 632, 2, '燃气压力传感器故障'))

        this.addPoint(new ExceptionField('ex_yicifengyachuanganqiguzhang', 634, 2, '一次风压传感器故障'))

        this.addPoint(new ExceptionField('ex_ecifengyachuanganqiguzhang', 636, 2, '二次风压传感器故障'))

        this.addPoint(new ExceptionField('ex_ranliaoliangchuanganqiguzhang_shunshizhi_', 638, 2, '燃料量传感器故障（瞬时值）'))

        this.addPoint(new ExceptionField('ex_zhengqiliuliangchuanganqiguzhang_shunshizhi_', 640, 2, '蒸汽流量传感器故障（瞬时值）'))

        this.addPoint(new ExceptionField('ex_jishuiliuliangchuanganqiguzhang_shunshizhi_', 642, 2, '给水流量传感器故障（瞬时值）'))

        this.addPoint(new ExceptionField('ex_xunhuanliuliangchuanganqiguzhang_shunshizhi_', 644, 2, '循环流量传感器故障（瞬时值）'))

        this.addPoint(new ExceptionField('ex_bushuiliuliangchuanganqiguzhang_shunshizhi_', 646, 2, '补水流量传感器故障（瞬时值）'))

        this.addPoint(new ExceptionField('ex_guoluyeweichuanganqiguzhang', 648, 2, '锅炉液位传感器故障'))

        this.addPoint(new ExceptionField('ex_shuixiangyeweichuanganqiguzhang', 650, 2, '水箱液位传感器故障'))

        this.addPoint(new ExceptionField('ex_paiyanyanghanliangchuanganqiguzhang', 652, 2, '排烟氧含量传感器故障'))

        this.addPoint(new ExceptionField('ex_lupaisudufankuichuanganqiguzhang', 654, 2, '炉排速度反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_yinfengshuchufankuichuanganqiguzhang', 656, 2, '引风输出反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_gufengshuchufankuichuanganqiguzhang', 658, 2, '鼓风输出反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_jishuishuchufankuichuanganqiguzhang', 660, 2, '给水输出反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_meishuiwenduchuanganqiguzhang', 662, 2, '媒水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shuixiangwenduchuanganqiguzhang', 664, 2, '水箱温度传感器故障'))

        this.addPoint(new ExceptionField('ex_pengzhangguanyeweichuanganqiguzhang', 666, 2, '膨胀罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_shanzhengguanyeweichuanganqiguzhang', 668, 2, '闪蒸罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningyeguanyeweichuanganqiguzhang', 670, 2, '冷凝液罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_chuguanyeweichuanganqiguzhang', 672, 2, '储罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_pengzhangguanwenduchuanganqiguzhang', 674, 2, '膨胀罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shanzhengguanwenduchuanganqiguzhang', 676, 2, '闪蒸罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningyeguanwenduchuanganqiguzhang', 678, 2, '冷凝液罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_chuguanwenduchuanganqiguzhang', 680, 2, '储罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_xitongyalichuanganqiguzhang', 682, 2, '系统压力传感器故障'))

        this.addPoint(new ExceptionField('ex_guorezhengqiyalichuanganqiguzhang', 684, 2, '过热蒸汽压力传感器故障'))

        this.addPoint(new ExceptionField('ex_paiyanchuyalichuanganqiguzhang', 686, 2, '排烟处压力传感器故障'))

        this.addPoint(new ExceptionField('ex_fengshifengyachuanganqiguzhang', 688, 2, '风室风压传感器故障'))

        this.addPoint(new ExceptionField('ex_yinfengjidianliuchuanganqiguzhang', 690, 2, '引风机电流传感器故障'))

        this.addPoint(new ExceptionField('ex_gufengjidianliuchuanganqiguzhang', 692, 2, '鼓风机电流传感器故障'))

        this.addPoint(new ExceptionField('ex_jiliaojisudufankuichuanganqiguzhang', 694, 2, '给料机速度反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan1wenduchuanganqiguzhang', 696, 2, '盘管1温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan2wenduchuanganqiguzhang', 698, 2, '盘管2温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan3wenduchuanganqiguzhang', 700, 2, '盘管3温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan4wenduchuanganqiguzhang', 702, 2, '盘管4温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan5wenduchuanganqiguzhang', 704, 2, '盘管5温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan6wenduchuanganqiguzhang', 706, 2, '盘管6温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan7wenduchuanganqiguzhang', 708, 2, '盘管7温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan8wenduchuanganqiguzhang', 710, 2, '盘管8温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan9wenduchuanganqiguzhang', 712, 2, '盘管9温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan10wenduchuanganqiguzhang', 714, 2, '盘管10温度传感器故障'))

        this.addPoint(new ExceptionField('ex_cainuanchukouwenduchuanganqiguzhang', 716, 2, '采暖出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_reshuichukouwenduchuanganqiguzhang', 718, 2, '热水出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jinchukouyachachuanganqiguzhang', 720, 2, '进出口压差传感器故障'))

        this.addPoint(new ExceptionField('ex_1#chukouwenduchuanganqiguzhang', 722, 2, '1#出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_2#chukouwenduchuanganqiguzhang', 724, 2, '2#出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqichukouyanwenchuanganqiguzhang', 726, 2, '节能器出口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqijinkouyanwenchuanganqiguzhang', 728, 2, '节能器进口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqichukouwendu_shui_chuanganqiguzhang', 730, 2, '冷凝器出口温度（水）传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqijinkou_shui_chuanganqiguzhang', 732, 2, '冷凝器进口（水）传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqichukouyanwenchuanganqiguzhang', 734, 2, '冷凝器出口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqijinkouyanwenchuanganqiguzhang', 736, 2, '冷凝器进口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_cainuanjinkouwenduchuanganqiguzhang', 738, 2, '采暖进口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_reshuijinkouwenduchuanganqiguzhang', 740, 2, '热水进口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_kongzhixiangwenduchuanganqiguzhang', 742, 2, '控制箱温度传感器故障'))

        this.addPoint(new ExceptionField('ex_zhenkongyalichuanganqiguzhang', 744, 2, '真空压力传感器故障'))

        this.addPoint(new ExceptionField('ex_chushuiwenduchuanganqiguzhang', 746, 2, '出水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jinshuiwenduchuanganqiguzhang', 748, 2, '进水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_youwenjiancechuanganqiguzhang', 750, 2, '油温检测传感器故障'))

        this.addPoint(new ExceptionField('ex_gaowenbaohuchuanganqiguzhang', 752, 2, '高温保护传感器故障'))

        this.addPoint(new ExceptionField('ex_chukouyouwenchuanganqiguzhang', 754, 2, '出口油温传感器故障'))

        this.addPoint(new ExceptionField('ex_jinkouyouwenchuanganqiguzhang', 756, 2, '进口油温传感器故障'))

        this.addPoint(new ExceptionField('ex_huanrewenduchuanganqiguzhang', 758, 2, '换热温度传感器故障'))

        this.addPoint(new ExceptionField('ex_xitongwenduchuanganqiguzhang', 760, 2, '系统温度传感器故障'))

        this.addPoint(new ExceptionField('ex_nengliangshezhiwenduchuanganqiguzhang', 762, 2, '能量设置温度传感器故障'))

        this.addPoint(new ExceptionField('ex_zhengqiwenduchuanganqiguzhang', 764, 2, '蒸汽温度传感器故障'))
        this.addPoint(new ExceptionField('ex_shineiwenduchuanganqiguzhang', 766, 2, '室内温度传感器故障'))
        this.addPoint(new ExceptionField('ex_1#dianliufankuichuanganqiguzhang', 768, 2, '1#电流反馈传感器故障'))
        this.addPoint(new ExceptionField('ex_2#dianliufankuichuanganqiguzhang', 770, 2, '2#电流反馈传感器故障'))
        this.addPoint(new ExceptionField('ex_3#dianliufankuichuanganqiguzhang', 772, 2, '3#电流反馈传感器故障'))
        this.addPoint(new ExceptionField('ex_4#dianliufankuichuanganqiguzhang', 774, 2, '4#电流反馈传感器故障'))
        this.addPoint(new ExceptionField('ex_5#dianliufankuichuanganqiguzhang', 776, 2, '5#电流反馈传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhiwenduchuanganqiguzhang', 778, 2, '介质温度传感器故障'))
        this.addPoint(new ExceptionField('ex_xiyuwenduchuanganqiguzhang', 780, 2, '洗浴温度传感器故障'))
        this.addPoint(new ExceptionField('ex_huanjingwenduchuanganqiguzhang', 782, 2, '环境温度传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhiyalichuanganqiguzhang', 784, 2, '介质压力传感器故障'))
        //
        this.addPoint(new MockField('mo_bentipaiyanwendu', 823, 2, '本体排烟温度', '℃'))
        this.addPoint(new MockField('mo_paiyanwendu', 825, 2, '排烟温度', '℃'))
        this.addPoint(new MockField('mo_lushuiwendu', 827, 2, '炉水温度', '℃'))
        this.addPoint(new MockField('mo_chukouwendu', 829, 2, '出口温度', '℃'))
        this.addPoint(new MockField('mo_jinkouwendu', 831, 2, '进口温度', '℃'))
        this.addPoint(new MockField('mo_jienengqichukouwendu(shui_', 833, 2, '节能器出口温度(水）', '℃'))
        this.addPoint(new MockField('mo_jienengqijinkouwendu(shui_', 835, 2, '节能器进口温度(水）', '℃'))
        this.addPoint(new MockField('mo_jishuiwendu', 837, 2, '给水温度', '℃'))
        this.addPoint(new MockField('mo_lutangwendu', 839, 2, '炉膛温度', '℃'))
        this.addPoint(new MockField('mo_lutangchukouwendu', 841, 2, '炉膛出口温度', '℃'))
        this.addPoint(new MockField('mo_lubiwendu', 843, 2, '炉壁温度', '℃'))
        this.addPoint(new MockField('mo_ranliaowendu', 845, 2, '燃料温度', '℃'))
        this.addPoint(new MockField('mo_refengwendu_kongyuqichukou_', 847, 2, '热风温度（空预器出口）', '℃'))
        this.addPoint(new MockField('mo_fuyazhengqiwendu', 849, 2, '负压蒸汽温度', '℃'))
        this.addPoint(new MockField('mo_guorezhengqiwendu', 851, 2, '过热蒸汽温度', '℃'))
        this.addPoint(new MockField('mo_huilu1wendu', 853, 2, '回路1温度', '℃'))
        this.addPoint(new MockField('mo_huilu2wendu', 855, 2, '回路2温度', '℃'))
        this.addPoint(new MockField('mo_huilu3wendu', 857, 2, '回路3温度', '℃'))
        this.addPoint(new MockField('mo_huilu4wendu', 859, 2, '回路4温度', '℃'))
        this.addPoint(new MockField('mo_huilu5wendu', 861, 2, '回路5温度', '℃'))
        this.addPoint(new MockField('mo_shiwaiwendu', 863, 2, '室外温度', '℃'))
        this.addPoint(new MockField('mo_zhengqiyali', 865, 2, '蒸汽压力', 'MPa', 100))
        this.addPoint(new MockField('mo_jishuiyali', 867, 2, '给水压力', 'MPa', 100))
        this.addPoint(new MockField('mo_chukouyali', 869, 2, '出口压力', 'MPa', 100))
        this.addPoint(new MockField('mo_jinkouyali', 871, 2, '进口压力', 'MPa', 100))
        this.addPoint(new MockField('mo_lutangyali', 873, 2, '炉膛压力', 'Pa'))
        this.addPoint(new MockField('mo_lutangchukouyali', 875, 2, '炉膛出口压力', 'Pa'))
        this.addPoint(new MockField('mo_ranqiyali', 877, 2, '燃气压力', 'KPa'))
        this.addPoint(new MockField('mo_yicifengya', 879, 2, '一次风压', 'KPa'))
        this.addPoint(new MockField('mo_ecifengya', 881, 2, '二次风压', 'KPa'))
        this.addPoint(new MockField('mo_ranliaoliang_shunshizhi_', 883, 2, '燃料量（瞬时值）', ''))
        this.addPoint(new MockField('mo_zhengqiliuliang_shunshizhi_', 885, 2, '蒸汽流量（瞬时值）', ''))
        this.addPoint(new MockField('mo_jishuiliuliang_shunshizhi_', 887, 2, '给水流量（瞬时值）', ''))
        this.addPoint(new MockField('mo_xunhuanliuliang_shunshizhi_', 889, 2, '循环流量（瞬时值）', ''))
        this.addPoint(new MockField('mo_bushuiliuliang_shunshizhi_', 891, 2, '补水流量（瞬时值）', ''))
        this.addPoint(new MockField('mo_guoluyewei', 893, 2, '锅炉液位', 'mm'))
        this.addPoint(new MockField('mo_shuixiangyewei', 895, 2, '水箱液位', 'mm'))
        this.addPoint(new MockField('mo_paiyanyanghanliang', 897, 2, '排烟氧含量', '%', 10))
        this.addPoint(new MockField('mo_lupaisudufankui', 899, 2, '炉排速度反馈', '%'))
        this.addPoint(new MockField('mo_yinfengshuchufankui', 901, 2, '引风输出反馈', '%'))
        this.addPoint(new MockField('mo_gufengshuchufankui', 903, 2, '鼓风输出反馈', '%'))
        this.addPoint(new MockField('mo_jishuishuchufankui', 905, 2, '给水输出反馈', '%'))
        this.addPoint(new MockField('mo_meishuiwendu', 907, 2, '媒水温度', '℃'))
        this.addPoint(new MockField('mo_shuixiangwendu', 909, 2, '水箱温度', '℃'))
        this.addPoint(new MockField('mo_pengzhangguanyewei', 911, 2, '膨胀罐液位', 'mm'))
        this.addPoint(new MockField('mo_shanzhengguanyewei', 913, 2, '闪蒸罐液位', 'mm'))
        this.addPoint(new MockField('mo_lengningyeguanyewei', 915, 2, '冷凝液罐液位', 'mm'))
        this.addPoint(new MockField('mo_chuguanyewei', 917, 2, '储罐液位', 'mm'))
        this.addPoint(new MockField('mo_pengzhangguanwendu', 919, 2, '膨胀罐温度', '℃'))
        this.addPoint(new MockField('mo_shanzhengguanwendu', 921, 2, '闪蒸罐温度', '℃'))
        this.addPoint(new MockField('mo_lengningyeguanwendu', 923, 2, '冷凝液罐温度', '℃'))
        this.addPoint(new MockField('mo_chuguanwendu', 925, 2, '储罐温度', '℃'))
        this.addPoint(new MockField('mo_xitongyali_yongyuchengyareshuiguolu_', 927, 2, '系统压力（用于承压热水锅炉）', 'MPa', 100))
        this.addPoint(new MockField('mo_guorezhengqiyali', 929, 2, '过热蒸汽压力', 'MPa', 100))
        this.addPoint(new MockField('mo_paiyanchuyali', 931, 2, '排烟处压力', 'Pa'))
        this.addPoint(new MockField('mo_fengshifengya', 933, 2, '风室风压', 'KPa'))
        this.addPoint(new MockField('mo_yinfengjidianliu', 935, 2, '引风机电流', 'A'))
        this.addPoint(new MockField('mo_gufengjidianliu', 937, 2, '鼓风机电流', 'A'))
        this.addPoint(new MockField('mo_jiliaojisudufankui', 939, 2, '给料机速度反馈', '%'))
        this.addPoint(new MockField('mo_panguan1wendu', 941, 2, '盘管1温度', '℃'))
        this.addPoint(new MockField('mo_panguan2wendu', 943, 2, '盘管2温度', '℃'))
        this.addPoint(new MockField('mo_panguan3wendu', 945, 2, '盘管3温度', '℃'))
        this.addPoint(new MockField('mo_panguan4wendu', 947, 2, '盘管4温度', '℃'))
        this.addPoint(new MockField('mo_panguan5wendu', 949, 2, '盘管5温度', '℃'))
        this.addPoint(new MockField('mo_panguan6wendu', 951, 2, '盘管6温度', '℃'))
        this.addPoint(new MockField('mo_panguan7wendu', 953, 2, '盘管7温度', '℃'))
        this.addPoint(new MockField('mo_panguan8wendu', 955, 2, '盘管8温度', '℃'))
        this.addPoint(new MockField('mo_panguan9wendu', 957, 2, '盘管9温度', '℃'))
        this.addPoint(new MockField('mo_panguan10wendu', 959, 2, '盘管10温度', '℃'))
        this.addPoint(new MockField('mo_cainuanchukouwendu', 961, 2, '采暖出口温度', '℃'))
        this.addPoint(new MockField('mo_reshuichukouwendu', 963, 2, '热水出口温度', '℃'))
        this.addPoint(new MockField('mo_jinchukouyacha', 965, 2, '进出口压差', 'MPa', 100))
        this.addPoint(new MockField('mo_1#chukouwendu', 967, 2, '1#出口温度', '℃'))
        this.addPoint(new MockField('mo_2#chukouwendu', 969, 2, '2#出口温度', '℃'))
        this.addPoint(new MockField('mo_jienengqichukouyanwen', 971, 2, '节能器出口烟温', '℃'))
        this.addPoint(new MockField('mo_jienengqijinkouyanwen', 973, 2, '节能器进口烟温', '℃'))
        this.addPoint(new MockField('mo_lengningqichukouwendu_shui_', 975, 2, '冷凝器出口温度（水）', '℃'))
        this.addPoint(new MockField('mo_lengningqijinkouwendu_shui_', 977, 2, '冷凝器进口温度（水）', '℃'))
        this.addPoint(new MockField('mo_lengningqichukouyanwen', 979, 2, '冷凝器出口烟温', '℃'))
        this.addPoint(new MockField('mo_lengningqijinkouyanwen', 981, 2, '冷凝器进口烟温', '℃'))
        this.addPoint(new MockField('mo_cainuanjinkouwendu', 983, 2, '采暖进口温度', '℃'))
        this.addPoint(new MockField('mo_reshuijinkouwendu', 985, 2, '热水进口温度', '℃'))
        this.addPoint(new MockField('mo_kongzhixiangwendu', 987, 2, '控制箱温度', '℃'))
        this.addPoint(new MockField('mo_zhenkongyali', 989, 2, '真空压力', 'KPa'))
        this.addPoint(new MockField('mo_chushuiwendu', 991, 2, '出水温度', '℃'))
        this.addPoint(new MockField('mo_jinshuiwendu', 993, 2, '进水温度', '℃'))
        this.addPoint(new MockField('mo_youwenjiance', 995, 2, '油温检测', '℃'))
        this.addPoint(new MockField('mo_gaowenbaohu', 997, 2, '高温保护', '℃'))
        this.addPoint(new MockField('mo_chukouyouwen', 999, 2, '出口油温', '℃'))
        this.addPoint(new MockField('mo_jinkouyouwen', 1001, 2, '进口油温', '℃'))
        this.addPoint(new MockField('mo_huanrewendu', 1003, 2, '换热温度', '℃'))
        this.addPoint(new MockField('mo_xitongwendu', 1005, 2, '系统温度', '℃'))
        this.addPoint(new MockField('mo_nengliangshezhiwendu', 1007, 2, '能量设置温度', '℃'))
        this.addPoint(new MockField('mo_zhengqiwendu', 1009, 2, '蒸汽温度', '℃'))
        this.addPoint(new MockField('mo_shineiwendu', 1011, 2, '室内温度', '℃'))
        this.addPoint(new MockField('mo_1#dianliufankui', 1013, 2, '1#电流反馈', 'A'))
        this.addPoint(new MockField('mo_2#dianliufankui', 1015, 2, '2#电流反馈', 'A'))
        this.addPoint(new MockField('mo_3#dianliufankui', 1017, 2, '3#电流反馈', 'A'))
        this.addPoint(new MockField('mo_4#dianliufankui', 1019, 2, '4#电流反馈', 'A'))
        this.addPoint(new MockField('mo_5#dianliufankui', 1021, 2, '5#电流反馈', 'A'))
        this.addPoint(new MockField('mo_jiezhiwendu', 1023, 2, '介质温度', '℃'))
        this.addPoint(new MockField('mo_xiyuwendu', 1025, 2, '洗浴温度', '℃'))
        this.addPoint(new MockField('mo_huanjingwendu', 1027, 2, '环境温度', '℃'))
        this.addPoint(new MockField('mo_jiezhiyali', 1029, 2, '介质压力', 'KPa'))
        //
        this.addPoint(new SettingField('se_paiyanbaojingwendu', 1068, 2, '排烟报警温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0500', 50, 300))
        this.addPoint(new SettingField('se_baojingwendu', 1070, 2, '报警温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0501', 0, 200))
        this.addPoint(new SettingField('se_tingluwendu', 1072, 2, '停炉温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0502', 30, 200))
        this.addPoint(new SettingField('se_mubiaowendu', 1074, 2, '目标温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0503', 30, 200))
        this.addPoint(new SettingField('se_qiluwendu', 1076, 2, '启炉温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0504', 0, 200))
        this.addPoint(new SettingField('se_zhuanhuohuicha', 1078, 2, '转火回差', '℃'))
        this.addPoint(new SettingField('se_qiluhuicha', 1080, 2, '启炉回差', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0506', 1, 100))
        this.addPoint(new SettingField('se_kaibengwendu', 1082, 2, '开泵温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0507', 0, 200))
        this.addPoint(new SettingField('se_guanbengwendu', 1084, 2, '关泵温度', '℃', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0508', 0, 200))
        this.addPoint(new SettingField('se_baojingyali', 1086, 2, '报警压力', 'MPa', 100))
        this.addPoint(new SettingField('se_tingluyali', 1088, 2, '停炉压力', 'MPa', 100))
        this.addPoint(new SettingField('se_mubiaoyali', 1090, 2, '目标压力', 'MPa', 100))
        this.addPoint(new SettingField('se_qiluyali', 1092, 2, '启炉压力', 'MPa', 100))
        this.addPoint(new SettingField('se_zhuanhuohuicha_yali_', 1094, 2, '转火回差（压力）', 'MPa', 100))
        this.addPoint(new SettingField('se_qiluhuicha_yali_', 1096, 2, '启炉回差（压力）', 'MPa', 100))
        this.addPoint(new SettingField('se_qianyanshi', 1098, 2, '前延时', 's'))
        this.addPoint(new SettingField('se_houyanshi', 1100, 2, '后延时', 's'))
        this.addPoint(new SettingField('se_qianchuisao', 1102, 2, '前吹扫', 's'))
        this.addPoint(new SettingField('se_houchuisao', 1104, 2, '后吹扫', 's'))
        this.addPoint(new SettingField('se_lubibaojingwendu', 1106, 2, '炉壁报警温度', '℃'))
        this.addPoint(new SettingField('se_lutangchukouwendu', 1108, 2, '炉膛出口温度', '℃'))
        this.addPoint(new SettingField('se_baohuwendu', 1110, 2, '保护温度', '℃'))
        this.addPoint(new SettingField('se_bentipaiyanwendu', 1112, 2, '本体排烟温度', '℃'))
        this.addPoint(new SettingField('se_jiarezushu', 1114, 2, '加热组数', '组', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0517', 1, 100))
        this.addPoint(new SettingField('se_jianceyalishijian', 1116, 2, '检测压力时间', 's'))
        this.addPoint(new SettingField('se_houyanshi', 1118, 2, '后延时', 'm'))
        this.addPoint(new SettingField('se_shedingwendu', 1120, 2, '设定温度', '℃'))
        this.addPoint(new SettingField('se_mokuailutaishu', 1122, 2, '模块炉台数', '台'))
        this.addPoint(new SettingField('se_gufenghouyanshi', 1124, 2, '鼓风后延时', 's'))
        this.addPoint(new SettingField('se_yinfenghouyanshi', 1126, 2, '引风后延时', 's'))
        this.addPoint(new SettingField('se_shuixiangkaibengwendu', 1128, 2, '水箱开泵温度', '℃'))
        this.addPoint(new SettingField('se_shuixiangguanbengwendu', 1130, 2, '水箱关泵温度', '℃'))
        this.addPoint(new SettingField('se_lushuibaojingwendu', 1132, 2, '炉水报警温度', '℃'))
        this.addPoint(new SettingField('se_buchangxishu', 1134, 2, '补偿系数', '%'))
        this.addPoint(new SettingField('se_cankaowendu', 1136, 2, '参考温度', '℃'))
        this.addPoint(new SettingField('se_tingluzuidazhi', 1138, 2, '停炉最大值', '℃'))
        this.addPoint(new SettingField('se_qiluzuixiaozhi', 1140, 2, '启炉最小值', '℃'))
        this.addPoint(new SettingField('se_cankaohuicha', 1142, 2, '参考回差', '℃'))
        this.addPoint(new SettingField('se_tingluwendu1', 1144, 2, '停炉温度1', '℃'))
        this.addPoint(new SettingField('se_qiluwendu1', 1146, 2, '启炉温度1', '℃'))
        this.addPoint(new SettingField('se_tingluwendu2', 1148, 2, '停炉温度2', '℃'))
        this.addPoint(new SettingField('se_qiluwendu2', 1150, 2, '启炉温度2', '℃'))
        this.addPoint(new SettingField('se_yusongliaoshijian', 1152, 2, '预送料时间', 's'))
        this.addPoint(new SettingField('se_dianhuoshijian', 1154, 2, '点火时间', 's'))
        this.addPoint(new SettingField('se_songliaoqidongshijian', 1156, 2, '送料启动时间', 's'))
        this.addPoint(new SettingField('se_songliaotingzhishijian', 1158, 2, '送料停止时间', 's'))
        this.addPoint(new SettingField('se_dianhuojiange', 1160, 2, '点火间隔', 'min'))
        this.addPoint(new SettingField('se_dianhuochenggongwendu', 1162, 2, '点火成功温度', '℃'))
        this.addPoint(new SettingField('se_lushuitingluwendu', 1164, 2, '炉水停炉温度', '℃'))
        this.addPoint(new SettingField('se_lushuiqiluwendu', 1166, 2, '炉水启炉温度', '℃'))
        this.addPoint(new SettingField('se_meishuibaojingwendu', 1168, 2, '媒水报警温度', '℃'))
        this.addPoint(new SettingField('se_meishuitingluwendu', 1170, 2, '媒水停炉温度', '℃'))
        this.addPoint(new SettingField('se_meishuiqiluwendu', 1172, 2, '媒水启炉温度', '℃'))
        this.addPoint(new SettingField('se_kaibengyali_yongyudingyakongzhi_', 1174, 2, '开泵压力（用于定压控制）', 'MPa', 100))
        this.addPoint(new SettingField('se_guanbengyali_yongyudingyakongzhi_', 1176, 2, '关泵压力（用于定压控制）', 'MPa', 100))
        this.addPoint(new SettingField('se_panguanbaojingwendu', 1178, 2, '盘管报警温度', '℃'))
        this.addPoint(new SettingField('se_huilu1baojingwendu', 1180, 2, '回路1报警温度', '℃'))
        this.addPoint(new SettingField('se_huilu1kaibengwendu', 1182, 2, '回路1开泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu1guanbengwendu', 1184, 2, '回路1关泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu2baojingwendu', 1186, 2, '回路2报警温度', '℃'))
        this.addPoint(new SettingField('se_huilu2kaibengwendu', 1188, 2, '回路2开泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu2guanbengwendu', 1190, 2, '回路2关泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu3baojingwendu', 1192, 2, '回路3报警温度', '℃'))
        this.addPoint(new SettingField('se_huilu3kaibengwendu', 1194, 2, '回路3开泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu3guanbengwendu', 1196, 2, '回路3关泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu4baojingwendu', 1198, 2, '回路4报警温度', '℃'))
        this.addPoint(new SettingField('se_huilu4kaibengwendu', 1200, 2, '回路4开泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu4guanbengwendu', 1202, 2, '回路4关泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu5baojingwendu', 1204, 2, '回路5报警温度', '℃'))
        this.addPoint(new SettingField('se_huilu5kaibengwendu', 1206, 2, '回路5开泵温度', '℃'))
        this.addPoint(new SettingField('se_huilu5guanbengwendu', 1208, 2, '回路5关泵温度', '℃'))
        this.addPoint(new SettingField('se_touqieshijian_jiarezuyong_', 1210, 2, '投切时间（加热组用）', 's', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0547', 1, 10))
        this.addPoint(new SettingField('se_diaojieshijian_jiarezuyong_', 1212, 2, '调节时间（加热组用）', 'm', 0, Map_CTL_NJZJ_IP_485.Commands_Key_Parameters_Setting, '0548', 1, 10))
        this.addPoint(new SettingField('se_chukouchaoyabaojing', 1214, 2, '出口超压报警', 'MPa', 100))
        this.addPoint(new SettingField('se_jinkouchaoyabaojing', 1216, 2, '进口超压报警', 'MPa', 100))
        this.addPoint(new SettingField('se_cainuanbaojingwendu', 1218, 2, '采暖报警温度', '℃'))
        this.addPoint(new SettingField('se_cainuankaibengwendu', 1220, 2, '采暖开泵温度', '℃'))
        this.addPoint(new SettingField('se_cainuanguanbengwendu', 1222, 2, '采暖关泵温度', '℃'))
        this.addPoint(new SettingField('se_reshuibaojingwendu', 1224, 2, '热水报警温度', '℃'))
        this.addPoint(new SettingField('se_reshuikaibengwendu', 1226, 2, '热水开泵温度', '℃'))
        this.addPoint(new SettingField('se_reshuiguanbengwendu', 1228, 2, '热水关泵温度', '℃'))
        this.addPoint(new SettingField('se_meishuimubiaowendu', 1230, 2, '媒水目标温度', '℃'))
        this.addPoint(new SettingField('se_meishuiqiluhuicha', 1232, 2, '媒水启炉回差', '℃'))
        this.addPoint(new SettingField('se_chukoudiyabaojing', 1234, 2, '出口低压报警', '℃'))
        this.addPoint(new SettingField('se_jinchukouyachagao', 1236, 2, '进出口压差高', '℃'))
        this.addPoint(new SettingField('se_jinchukouyachadi', 1238, 2, '进出口压差低', '℃'))
        this.addPoint(new SettingField('se_jinkoudiyabaojing', 1240, 2, '进口低压报警', '℃'))
        this.addPoint(new SettingField('se_jinkouchaowenbaojing', 1242, 2, '进口超温报警', '℃'))
        this.addPoint(new SettingField('se_jinkoudiwenbaojing', 1244, 2, '进口低温报警', '℃'))
        this.addPoint(new SettingField('se_chukoudiwenbaojing', 1246, 2, '出口低温报警', '℃'))
        this.addPoint(new SettingField('se_pengzhangguanchaowen', 1248, 2, '膨胀罐超温', '℃'))
        this.addPoint(new SettingField('se_mubiaoyewei', 1250, 2, '目标液位', 'mm'))
        this.addPoint(new SettingField('se_kaibengyewei', 1252, 2, '开泵液位', 'mm'))
        this.addPoint(new SettingField('se_guanbengyewei', 1254, 2, '关泵液位', 'mm'))
        this.addPoint(new SettingField('se_kongbengmubiao', 1256, 2, '控泵目标', '℃'))
        this.addPoint(new SettingField('se_lengningqianyanshi', 1258, 2, '冷凝前延时', 's'))
        this.addPoint(new SettingField('se_lengninghouyanshi', 1260, 2, '冷凝后延时', 's'))
        this.addPoint(new SettingField('se_xieyashangxian', 1262, 2, '泄压上限', 'MPa', 100))
        this.addPoint(new SettingField('se_xieyaxiaxian', 1264, 2, '泄压下限', 'MPa', 100))
        this.addPoint(new SettingField('se_jishuibaojingyali', 1266, 2, '给水报警压力', 'MPa', 100))
        this.addPoint(new SettingField('se_zhenkongbaojingyali', 1268, 2, '真空报警压力', 'KPa'))
        this.addPoint(new SettingField('se_zhenkongyalishangxian', 1270, 2, '真空压力上限', 'KPa'))
        this.addPoint(new SettingField('se_zhenkongyalixiaxian', 1272, 2, '真空压力下限', 'KPa'))
        this.addPoint(new SettingField('se_jinchukoumubiaoyacha', 1274, 2, '进出口目标压差', 'MPa', 100))
        this.addPoint(new SettingField('se_jienengqichuyanchaowen', 1276, 2, '节能器出烟超温', '℃'))
        this.addPoint(new SettingField('se_lengningqichuyanchaowen', 1278, 2, '冷凝器出烟超温', '℃'))
        this.addPoint(new SettingField('se_jinshuitingluwendu', 1280, 2, '进水停炉温度', '℃'))
        this.addPoint(new SettingField('se_youwenbaohuwendu', 1282, 2, '油温保护温度', '℃'))
        this.addPoint(new SettingField('se_youwenshangxianwendu', 1284, 2, '油温上限温度', '℃'))
        this.addPoint(new SettingField('se_youwenzhongxianwendu', 1286, 2, '油温中限温度', '℃'))
        this.addPoint(new SettingField('se_gaowenbaohuwendu', 1288, 2, '高温保护温度', '℃'))
        this.addPoint(new SettingField('se_wenchabaohuwendu', 1290, 2, '温差保护温度', '℃'))
        this.addPoint(new SettingField('se_jinkoutingluwendu', 1292, 2, '进口停炉温度', '℃'))
        this.addPoint(new SettingField('se_jinkoumubiaowendu', 1294, 2, '进口目标温度', '℃'))
        this.addPoint(new SettingField('se_jinkouqiluhuicha', 1296, 2, '进口启炉回差', '℃'))
        this.addPoint(new SettingField('se_youwenxiaxianwendu', 1298, 2, '油温下限温度', '℃'))
        this.addPoint(new SettingField('se_huanrekaibengwendu', 1300, 2, '换热开泵温度', '℃'))
        this.addPoint(new SettingField('se_huanreguanbengwendu', 1302, 2, '换热关泵温度', '℃'))
        this.addPoint(new SettingField('se_xitongkaibengwendu', 1304, 2, '系统开泵温度', '℃'))
        this.addPoint(new SettingField('se_xitongguanbengwendu', 1306, 2, '系统关泵温度', '℃'))
        //
        this.addPoint(new SettingField('se_zhengqihuicha', 1313, 2, '蒸汽回差', '℃'))
        this.addPoint(new SettingField('se_dibaojingyewei', 1315, 2, '低报警液位', 'mm'))
        this.addPoint(new SettingField('se_gaobaojingyewei', 1317, 2, '高报警液位', 'mm'))
        this.addPoint(new SettingField('se_cainuantingluwendu', 1319, 2, '采暖停炉温度', 'mm'))
        this.addPoint(new SettingField('se_cainuanqiluwendu', 1321, 2, '采暖启炉温度', 'mm'))
        //
        this.addPoint(new StartStopField('st_qidongshijian1_shifen_', 1558, 2, '启动时间1（时 分）'))
        this.addPoint(new StartStopField('st_tingzhishijian1_shifen_', 1560, 2, '停止时间1（时 分）'))
        this.addPoint(new StartStopField('st_qidongshijian2_shifen_', 1562, 2, '启动时间2（时 分）'))
        this.addPoint(new StartStopField('st_tingzhishijian2_shifen_', 1564, 2, '停止时间2（时 分）'))
        this.addPoint(new StartStopField('st_qidongshijian3_shifen_', 1566, 2, '启动时间3（时 分）'))
        this.addPoint(new StartStopField('st_tingzhishijian3_shifen_', 1568, 2, '停止时间3（时 分）'))
        this.addPoint(new StartStopField('st_qidongshijian4_shifen_', 1570, 2, '启动时间4（时 分）'))
        this.addPoint(new StartStopField('st_tingzhishijian4_shifen_', 1572, 2, '停止时间4（时 分）'))
        this.addPoint(new StartStopField('st_qidongshijian5_shifen_', 1574, 2, '启动时间5（时 分）'))
        this.addPoint(new StartStopField('st_tingzhishijian5_shifen_', 1576, 2, '停止时间5（时 分）'))
        this.addPoint(new StartStopField('st_qidongshijian6_shifen_', 1578, 2, '启动时间6（时 分）'))
        this.addPoint(new StartStopField('st_tingzhishijian6_shifen_', 1580, 2, '停止时间6（时 分）'))
        //
        this.addPoint(new DeviceField('de_ranshaoqi', 1587, 2, '燃烧器', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField(SdcSoftDevice.KEY_POINT_JIA_RE_ZU, 1589, 2, '加热组', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_bushui_beng', 1591, 2, '补水泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_jishui_beng', 1593, 2, '给水泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_buyou_beng', 1595, 2, '补油泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_xunhuan_beng', 1597, 2, '循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_lengning_beng', 1599, 2, '冷凝泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_reshui_beng', 1601, 2, '热水泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_zhenkong_beng', 1603, 2, '真空泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_ecixunhuan_beng', 1605, 2, '二次循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_yinfengji_fan', 1607, 2, '引风机', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_gufengji_fan', 1609, 2, '鼓风机', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_lupai_fan', 1611, 2, '炉排', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_chuzhaji_fan', 1613, 2, '出渣机', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_ecigufengji_fan', 1615, 2, '二次鼓风机', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_dianhuoqi', 1617, 2, '点火器', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_shangmeiji_fan', 1619, 2, '上煤机', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_songliaoji_fan', 1621, 2, '送料机', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_jiayao_beng', 1623, 2, '加药泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_paiwufa_fan', 1625, 2, '排污阀', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huilu1xunhuan_beng', 1627, 2, '回路1循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huilu2xunhuan_beng', 1629, 2, '回路2循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huilu3xunhuan_beng', 1631, 2, '回路3循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huilu4xunhuan_beng', 1633, 2, '回路4循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huilu5xunhuan_beng', 1635, 2, '回路5循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_cainuanxunhuan_beng', 1637, 2, '采暖循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_reshuixunhuan_beng', 1639, 2, '热水循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_paiqifa', 1641, 2, '排汽阀', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_xieyafa', 1643, 2, '泄压阀', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_zhenkongfa', 1645, 2, '真空阀', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_pangtongfa', 1647, 2, '旁通阀', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_churexunhuan_beng', 1649, 2, '储热循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huanrexunhuan_beng', 1651, 2, '换热循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_xitongxunhuan_beng', 1653, 2, '系统循环泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_churebushui_beng', 1655, 2, '储热补水泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_yandaodiefa', 1657, 2, '烟道蝶阀', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_huishui_beng', 1659, 2, '回水泵', Map_CTL_NJZJ.coms_device))
        this.addPoint(new DeviceField('de_santongfa', 1661, 2, '三通阀', Map_CTL_NJZJ.coms_device))

    }
}