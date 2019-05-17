import { Map_ZH_CN } from '../../ZH_CN'
import { SdcSoftDevice } from '../../../../devices/SdcSoftDevice'
import { BaseInfoField, ExceptionField, MockField, SettingField, RanShaoQiField, RunDaysField, DeviceField, StartStopField } from '../../../../meta/NJZJ/meta'
import { Map_CTL_NJZJ } from './CTL_NJZJ'

export class Map_CTL_NJZJ_IP_Http extends Map_CTL_NJZJ {
    constructor() {
        super()
        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_SYSTEM_STATUS, 20, 1, '系统状态', '', Map_CTL_NJZJ_IP_Http.coms_status))

        this.addPoint(new RunDaysField(SdcSoftDevice.KEY_POINT_RUN_DAYS, 21, 2, '运行天数', '天'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_RUN_HOURS, 23, 1, '运行小时数', '时'))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_POWER, 24, 1, '燃料类型', '', Map_ZH_CN.coms_power))

        this.addPoint(new BaseInfoField(SdcSoftDevice.KEY_POINT_MEDIA, 25, 1, '介质类型', '', Map_ZH_CN.coms_media))

        this.addPoint(new BaseInfoField('ba_guolushuiweizhuangtai', 26, 1, '锅炉液位状态', '', Map_ZH_CN.coms_level))

        this.addPoint(new BaseInfoField('ba_shuixiangshuiweizhuangtai', 27, 1, '水箱液位状态', '', Map_ZH_CN.coms_level))

        this.addPoint(new BaseInfoField('ba_guoluyalizhuangtai', 28, 1, '锅炉压力状态', '', Map_CTL_NJZJ_IP_Http.coms_yalistatus))
        this.addPoint(new BaseInfoField('ba_moshibianhao', 29, 1, '模式编号', ''))
        this.addPoint(new BaseInfoField('ba_fangdongkaiguan', 30, 1, '防冻开关', '', Map_ZH_CN.coms_open_close))
        this.addPoint(new ExceptionField('ex_paiyanwendugaobaojing', 32, 1, '排烟温度高报警'))
        this.addPoint(new ExceptionField('ex_lushuiwendugaobaojing', 33, 1, '炉水温度高报警'))

        this.addPoint(new ExceptionField('ex_chukouwendugaobaojing', 34, 1, '出口温度高报警'))

        this.addPoint(new ExceptionField('ex_chaoyabaojing', 35, 1, '超压报警'))

        this.addPoint(new ExceptionField('ex_jixiandishuiweibaojing', 36, 1, '极限低水位报警'))

        this.addPoint(new ExceptionField('ex_dishuiweibaojing', 37, 1, '低水位报警'))

        this.addPoint(new ExceptionField('ex_gaoshuiweibaojing', 38, 1, '高水位报警'))

        this.addPoint(new ExceptionField('ex_shuiweixinhaoluojicuobaojing', 39, 1, '水位信号逻辑错报警'))

        this.addPoint(new ExceptionField('ex_lubiwendugaobaojing', 40, 1, '炉壁温度高报警'))

        this.addPoint(new ExceptionField('ex_fuyazhengqiwendugaobaojing', 41, 1, '负压蒸汽温度高报警'))

        this.addPoint(new ExceptionField('ex_ranshaoqiguzhangbaojing', 42, 1, '燃烧器故障报警'))

        this.addPoint(new ExceptionField('ex_ranqixieloubaojing', 43, 1, '燃气泄漏报警'))

        this.addPoint(new ExceptionField('ex_ranqiyalidibaojing', 44, 1, '燃气压力低报警'))

        this.addPoint(new ExceptionField('ex_ranqiyaliyichangbaojing', 45, 1, '燃气压力异常报警'))

        this.addPoint(new ExceptionField('ex_ranqiyaligaobaojing', 46, 1, '燃气压力高报警'))

        this.addPoint(new ExceptionField('ex_jishuibianpinqiguzhangbaojing', 47, 1, '给水变频器故障报警'))

        this.addPoint(new ExceptionField('ex_xunhuanbianpinqiguzhangbaojing', 48, 1, '循环变频器故障报警'))

        this.addPoint(new ExceptionField('ex_yinfengbianpinqiguzhangbaojing', 49, 1, '引风变频器故障报警'))

        this.addPoint(new ExceptionField('ex_gufengbianpinqiguzhangbaojing', 50, 1, '鼓风变频器故障报警'))

        this.addPoint(new ExceptionField('ex_ecigufengbianpinqiguzhangbaojing', 51, 1, '二次鼓风变频器故障报警'))

        this.addPoint(new ExceptionField('ex_lupaibianpinqiguzhangbaojing', 52, 1, '炉排变频器故障报警'))

        this.addPoint(new ExceptionField('ex_addshuibengguzhangbaojing', 53, 1, '给水泵故障报警'))

        this.addPoint(new ExceptionField('ex_xunhuanbengguzhangbaojing', 54, 1, '循环泵故障报警'))

        this.addPoint(new ExceptionField('ex_qianyabaojing', 55, 1, '欠压报警'))

        this.addPoint(new ExceptionField('ex_didianyabaojing', 56, 1, '低电压报警'))

        this.addPoint(new ExceptionField('ex_gaodianyabaojing', 57, 1, '高电压报警'))

        this.addPoint(new ExceptionField('ex_quexiangbaojing', 58, 1, '缺相报警'))

        this.addPoint(new ExceptionField('ex_loudianbaojing', 59, 1, '漏电报警'))

        this.addPoint(new ExceptionField('ex_biansongqiguoyabaohu', 60, 1, '变送器过压保护'))

        this.addPoint(new ExceptionField('ex_guanjiancanshuyichang', 61, 1, '关键参数异常'))

        this.addPoint(new ExceptionField('ex_shedingcanshuyichang', 62, 1, '设定参数异常'))

        this.addPoint(new ExceptionField('ex_shizhongguzhang', 63, 1, '时钟故障'))

        this.addPoint(new ExceptionField('ex_cunchuqiguzhang', 64, 1, '存储器故障'))

        this.addPoint(new ExceptionField('ex_waibuliansuobaojing', 65, 1, '外部连锁报警'))

        this.addPoint(new ExceptionField('ex_queyoubaojing', 66, 1, '缺油报警'))

        this.addPoint(new ExceptionField('ex_diyouweibaojing', 67, 1, '低油位报警'))

        this.addPoint(new ExceptionField('ex_bentipaiyanwendugaobaojing', 68, 1, '本体排烟温度高报警'))

        this.addPoint(new ExceptionField('ex_bianpinqiguzhangbaojing', 69, 1, '变频器故障报警'))

        this.addPoint(new ExceptionField('ex_meishuiwendugaobaojing', 70, 1, '媒水温度高报警'))

        this.addPoint(new ExceptionField('ex_1haoguoluguzhang', 71, 1, '1号锅炉故障'))

        this.addPoint(new ExceptionField('ex_2haoguoluguzhang', 72, 1, '2号锅炉故障'))

        this.addPoint(new ExceptionField('ex_3haoguoluguzhang', 73, 1, '3号锅炉故障'))

        this.addPoint(new ExceptionField('ex_4haoguoluguzhang', 74, 1, '4号锅炉故障'))

        this.addPoint(new ExceptionField('ex_5haoguoluguzhang', 75, 1, '5号锅炉故障'))

        this.addPoint(new ExceptionField('ex_6haoguoluguzhang', 76, 1, '6号锅炉故障'))

        this.addPoint(new ExceptionField('ex_7haoguoluguzhang', 77, 1, '7号锅炉故障'))

        this.addPoint(new ExceptionField('ex_8haoguoluguzhang', 78, 1, '8号锅炉故障'))

        this.addPoint(new ExceptionField('ex_bushuibianpinqiguzhangbaojing', 79, 1, '补水变频器故障报警'))

        this.addPoint(new ExceptionField('ex_shuiliukaiguanbaohubaojing', 80, 1, '水流开关保护报警'))

        this.addPoint(new ExceptionField('ex_rukouwendudibaojing', 81, 1, '入口温度低报警'))

        this.addPoint(new ExceptionField('ex_xunhuanbengbianpinqiguzhang', 82, 1, '循环泵变频器故障'))

        this.addPoint(new ExceptionField('ex_ecixunhuanbengbianpinqiguzhang', 83, 1, '二次循环泵变频器故障'))

        this.addPoint(new ExceptionField('ex_reshuibengbianpinqiguzhang', 84, 1, '热水泵变频器故障'))

        this.addPoint(new ExceptionField('ex_buyoubengbianpinqiguzhang', 85, 1, '补油泵变频器故障'))

        this.addPoint(new ExceptionField('ex_ecigufengbianpinqiguzhang', 86, 1, '二次鼓风变频器故障'))

        this.addPoint(new ExceptionField('ex_songliaojibianpinqiguzhang', 87, 1, '送料机变频器故障'))

        this.addPoint(new ExceptionField('ex_zhenkongbengbianpinqiguzhang', 88, 1, '真空泵变频器故障'))

        this.addPoint(new ExceptionField('ex_lengningbengbianpinqiguzhang', 89, 1, '冷凝泵变频器故障'))

        this.addPoint(new ExceptionField('ex_addshuibengguzhang', 90, 1, '补水泵故障'))

        this.addPoint(new ExceptionField('ex_buyoubengguzhang', 91, 1, '补油泵故障'))

        this.addPoint(new ExceptionField('ex_lengningbengguzhang', 92, 1, '冷凝泵故障'))

        this.addPoint(new ExceptionField('ex_reshuibengguzhang', 93, 1, '热水泵故障'))

        this.addPoint(new ExceptionField('ex_zhenkongbengguzhang', 94, 1, '真空泵故障'))

        this.addPoint(new ExceptionField('ex_ecixunhuanbengguzhang', 95, 1, '二次循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu1xunhuanbengguzhang', 96, 1, '回路1循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu2xunhuanbengguzhang', 97, 1, '回路2循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu3xunhuanbengguzhang', 98, 1, '回路3循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu4xunhuanbengguzhang', 99, 1, '回路4循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu5xunhuanbengguzhang', 100, 1, '回路5循环泵故障'))

        this.addPoint(new ExceptionField('ex_huilu1wendugaobaojing', 101, 1, '回路1温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu2wendugaobaojing', 102, 1, '回路2温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu3wendugaobaojing', 103, 1, '回路3温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu4wendugaobaojing', 104, 1, '回路4温度高报警'))

        this.addPoint(new ExceptionField('ex_huilu5wendugaobaojing', 105, 1, '回路5温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan1wendugaobaojing', 106, 1, '盘管1温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan2wendugaobaojing', 107, 1, '盘管2温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan3wendugaobaojing', 108, 1, '盘管3温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan4wendugaobaojing', 109, 1, '盘管4温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan5wendugaobaojing', 110, 1, '盘管5温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan6wendugaobaojing', 111, 1, '盘管6温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan7wendugaobaojing', 112, 1, '盘管7温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan8wendugaobaojing', 113, 1, '盘管8温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan9wendugaobaojing', 114, 1, '盘管9温度高报警'))

        this.addPoint(new ExceptionField('ex_panguan10wendugaobaojing', 115, 1, '盘管10温度高报警'))

        this.addPoint(new ExceptionField('ex_shanzhengguanchaoyabaojing', 116, 1, '闪蒸罐超压报警'))

        this.addPoint(new ExceptionField('ex_lengningguanchaoyabaojing', 117, 1, '冷凝罐超压报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanchaoyabaojing', 118, 1, '膨胀罐超压报警'))

        this.addPoint(new ExceptionField('ex_shanzhengguanyeweigaobaojing', 119, 1, '闪蒸罐液位高报警'))

        this.addPoint(new ExceptionField('ex_shanzhengguanyeweidibaojing', 120, 1, '闪蒸罐液位低报警'))

        this.addPoint(new ExceptionField('ex_lengningguanyeweigaobaojing', 121, 1, '冷凝罐液位高报警'))

        this.addPoint(new ExceptionField('ex_lengningguanyeweidibaojing', 122, 1, '冷凝罐液位低报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanyeweigaobaojing', 123, 1, '膨胀罐液位高报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanyeweidibaojing', 124, 1, '膨胀罐液位低报警'))

        this.addPoint(new ExceptionField('ex_jinchukouyachadibaojing', 125, 1, '进出口压差低报警'))

        this.addPoint(new ExceptionField('ex_jinchukouyachagaobaojing', 126, 1, '进出口压差高报警'))

        this.addPoint(new ExceptionField('ex_zhenkongyalibuzubaojing', 127, 1, '真空压力不足报警'))

        this.addPoint(new ExceptionField('ex_jinchukouwenchadibaojing', 128, 1, '进出口温差低报警'))

        this.addPoint(new ExceptionField('ex_jinchukouwenchagaobaojing', 129, 1, '进出口温差高报警'))

        this.addPoint(new ExceptionField('ex_guoluhuohuiluchukouyaligaobaojing', 130, 1, '出口压力高报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_guoluhuohuiluchukouyalidibaojing', 131, 1, '出口压力低报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_guoluhuohuilurukouyaligaobaojing', 132, 1, '入口压力高报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_guoluhuohuilurukouyalidibaojing', 133, 1, '入口压力低报警（锅炉或回路）'))

        this.addPoint(new ExceptionField('ex_dongzuofankuiyichangyinfengjiguzhangbaojing', 134, 1, '引风机故障报警（动作反馈异常）'))

        this.addPoint(new ExceptionField('ex_paiyanwenduchuanganqiguzhang', 182, 1, '排烟温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lushuiwenduchuanganqiguzhang', 183, 1, '炉水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_chukouwenduchuanganqiguzhang', 184, 1, '出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_rukouwenduchuanganqiguzhang', 185, 1, '入口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqichukouwenduchuanganqiguzhang', 186, 1, '节能器出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqirukouwenduchuanganqiguzhang', 187, 1, '节能器入口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jishuiwenduchuanganqiguzhang', 188, 1, '给水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangwenduchuanganqiguzhang', 189, 1, '炉膛温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangchukouwenduchuanganqiguzhang', 190, 1, '炉膛出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lubiwenduchuanganqiguzhang', 191, 1, '炉壁温度传感器故障'))

        this.addPoint(new ExceptionField('ex_ranliaowenduchuanganqiguzhang', 192, 1, '燃料温度传感器故障'))

        this.addPoint(new ExceptionField('ex_refengwenduchuanganqiguzhang', 193, 1, '热风温度传感器故障'))

        this.addPoint(new ExceptionField('ex_fuyazhengqiwenduchuanganqiguzhang', 194, 1, '负压蒸汽温度传感器故障'))

        this.addPoint(new ExceptionField('ex_guorezhengqiwenduchuanganqiguzhang', 195, 1, '过热蒸汽温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu1wenduchuanganqiguzhang', 196, 1, '回路1温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu2wenduchuanganqiguzhang', 197, 1, '回路2温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu3wenduchuanganqiguzhang', 198, 1, '回路3温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu4wenduchuanganqiguzhang', 199, 1, '回路4温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huilu5wenduchuanganqiguzhang', 200, 1, '回路5温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shiwaiwenduchuanganqiguzhang', 201, 1, '室外温度传感器故障'))

        this.addPoint(new ExceptionField('ex_zhengqiyalichuanganqiguzhang', 202, 1, '蒸汽压力变送器故障'))

        this.addPoint(new ExceptionField('ex_jishuiyalichuanganqiguzhang', 203, 1, '给水压力传感器故障'))

        this.addPoint(new ExceptionField('ex_chukouyalichuanganqiguzhang', 204, 1, '出口压力传感器故障'))

        this.addPoint(new ExceptionField('ex_rukouyalichuanganqiguzhang', 205, 1, '入口压力传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangyalichuanganqiguzhang', 206, 1, '炉膛压力传感器故障'))

        this.addPoint(new ExceptionField('ex_lutangchukouyalichuanganqiguzhang', 207, 1, '炉膛出口压力传感器故障'))

        this.addPoint(new ExceptionField('ex_ranqiyalichuanganqiguzhang', 208, 1, '燃气压力传感器故障'))

        this.addPoint(new ExceptionField('ex_yicifengyachuanganqiguzhang', 209, 1, '一次风压传感器故障'))

        this.addPoint(new ExceptionField('ex_ecifengyachuanganqiguzhang', 210, 1, '二次风压传感器故障'))

        this.addPoint(new ExceptionField('ex_ranliaoliangchuanganqiguzhang', 211, 1, '燃料量传感器故障'))

        this.addPoint(new ExceptionField('ex_zhengqiliuliangchuanganqiguzhang', 212, 1, '蒸汽流量传感器故障'))

        this.addPoint(new ExceptionField('ex_jishuiliuliangchuanganqiguzhang', 213, 1, '给水流量传感器故障'))

        this.addPoint(new ExceptionField('ex_xunhuanliuliangchuanganqiguzhang', 214, 1, '循环流量传感器故障'))

        this.addPoint(new ExceptionField('ex_bushuiliuliangchuanganqiguzhang', 215, 1, '补水流量传感器故障'))

        this.addPoint(new ExceptionField('ex_guoluyeweichuanganqiguzhang', 216, 1, '锅炉液位传感器故障'))

        this.addPoint(new ExceptionField('ex_shuixiangyeweichuanganqiguzhang', 217, 1, '水箱液位传感器故障'))

        this.addPoint(new ExceptionField('ex_paiyanyanghanliangchuanganqiguzhang', 218, 1, '排烟氧含量传感器故障'))

        this.addPoint(new ExceptionField('ex_lupaisudufankuichuanganqiguzhang', 219, 1, '炉排速度反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_yinfengshuchufankuichuanganqiguzhang', 220, 1, '引风输出反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_gufengshuchufankuichuanganqiguzhang', 221, 1, '鼓风输出反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_jishuishuchufankuichuanganqiguzhang', 222, 1, '给水输出反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_meishuiwenduchuanganqiguzhang', 223, 1, '媒水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shuixiangwenduchuanganqiguzhang', 224, 1, '水箱温度传感器故障'))

        this.addPoint(new ExceptionField('ex_pengzhangguanyeweichuanganqiguzhang', 225, 1, '膨胀罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_shanzhengguanyeweichuanganqiguzhang', 226, 1, '闪蒸罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningyeguanyeweichuanganqiguzhang', 227, 1, '冷凝液罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_chuguanyeweichuanganqiguzhang', 228, 1, '储罐液位传感器故障'))

        this.addPoint(new ExceptionField('ex_pengzhangguanwenduchuanganqiguzhang', 229, 1, '膨胀罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shanzhengguanwenduchuanganqiguzhang', 230, 1, '闪蒸罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningyeguanwenduchuanganqiguzhang', 231, 1, '冷凝液罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_chuguanwenduchuanganqiguzhang', 232, 1, '储罐温度传感器故障'))

        this.addPoint(new ExceptionField('ex_guoluyalichuanganqiguzhang', 233, 1, '锅炉压力传感器故障'))

        this.addPoint(new ExceptionField('ex_guorezhengqiyalichuanganqiguzhang', 234, 1, '过热蒸汽压力传感器故障'))

        this.addPoint(new ExceptionField('ex_paiyanchuyalichuanganqiguzhang', 235, 1, '排烟处压力传感器故障'))

        this.addPoint(new ExceptionField('ex_fengshifengyachuanganqiguzhang', 236, 1, '风室风压传感器故障'))

        this.addPoint(new ExceptionField('ex_yinfengjidianliuchuanganqiguzhang', 237, 1, '引风机电流传感器故障'))

        this.addPoint(new ExceptionField('ex_gufengjidianliuchuanganqiguzhang', 238, 1, '鼓风机电流传感器故障'))

        this.addPoint(new ExceptionField('ex_jiliaojisudufankuichuanganqiguzhang', 239, 1, '给料机速度反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan1wenduchuanganqiguzhang', 240, 1, '盘管1温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan2wenduchuanganqiguzhang', 241, 1, '盘管2温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan3wenduchuanganqiguzhang', 242, 1, '盘管3温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan4wenduchuanganqiguzhang', 243, 1, '盘管4温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan5wenduchuanganqiguzhang', 244, 1, '盘管5温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan6wenduchuanganqiguzhang', 245, 1, '盘管6温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan7wenduchuanganqiguzhang', 246, 1, '盘管7温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan8wenduchuanganqiguzhang', 247, 1, '盘管8温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan9wenduchuanganqiguzhang', 248, 1, '盘管9温度传感器故障'))

        this.addPoint(new ExceptionField('ex_panguan10wenduchuanganqiguzhang', 249, 1, '盘管10温度传感器故障'))

        this.addPoint(new MockField('mo_bentipaiyanwendu', 277, 2, '本体排烟温度', '℃'))

        this.addPoint(new MockField('mo_paiyanwendu', 279, 2, '排烟温度', '℃'))

        this.addPoint(new MockField('mo_lushuiwendu', 281, 2, '炉水温度', '℃'))

        this.addPoint(new MockField('mo_chukouwendu', 283, 2, '出口温度', '℃'))

        this.addPoint(new MockField('mo_rukouwendu', 285, 2, '入口温度', '℃'))

        this.addPoint(new MockField('mo_jienengqichukouwendu', 287, 2, '节能器出口温度', '℃'))

        this.addPoint(new MockField('mo_jienengqirukouwendu', 289, 2, '节能器入口温度', '℃'))

        this.addPoint(new MockField('mo_jishuiwendu', 291, 2, '给水温度', '℃'))

        this.addPoint(new MockField('mo_lutangwendu', 293, 2, '炉膛温度', '℃'))

        this.addPoint(new MockField('mo_lutangchukouwendu', 295, 2, '炉膛出口温度', '℃'))

        this.addPoint(new MockField('mo_lubiwendu', 297, 2, '炉壁温度', '℃'))

        this.addPoint(new MockField('mo_ranliaowendu', 299, 2, '燃料温度', '℃'))

        this.addPoint(new MockField('mo_refengwendu', 301, 2, '热风温度', '℃'))

        this.addPoint(new MockField('mo_fuyazhengqiwendu', 303, 2, '负压蒸汽温度', '℃'))

        this.addPoint(new MockField('mo_guorezhengqiwendu', 305, 2, '过热蒸汽温度', '℃'))

        this.addPoint(new MockField('mo_huilu1wendu', 307, 2, '回路1温度', '℃'))

        this.addPoint(new MockField('mo_huilu2wendu', 309, 2, '回路2温度', '℃'))

        this.addPoint(new MockField('mo_huilu3wendu', 311, 2, '回路3温度', '℃'))

        this.addPoint(new MockField('mo_huilu4wendu', 313, 2, '回路4温度', '℃'))

        this.addPoint(new MockField('mo_huilu5wendu', 315, 2, '回路5温度', '℃'))

        this.addPoint(new MockField('mo_shiwaiwendu', 317, 2, '室外温度', '℃'))

        this.addPoint(new MockField('mo_zhengqiyali', 319, 2, '蒸汽压力', 'MPa', 100))

        this.addPoint(new MockField('mo_jishuiyali', 321, 2, '给水压力', 'MPa', 100))

        this.addPoint(new MockField('mo_chukouyali', 323, 2, '出口压力', 'MPa', 100))

        this.addPoint(new MockField('mo_rukouyali', 325, 2, '入口压力', 'MPa', 100))

        this.addPoint(new MockField('mo_lutangyali', 327, 2, '炉膛压力', 'Pa'))

        this.addPoint(new MockField('mo_lutangchukouyali', 329, 2, '炉膛出口压力', 'Pa'))

        this.addPoint(new MockField('mo_ranqiyali', 331, 2, '燃气压力', 'KPa'))

        this.addPoint(new MockField('mo_yicifengya', 333, 2, '一次风压', 'KPa'))

        this.addPoint(new MockField('mo_ecifengya', 335, 2, '二次风压', 'KPa'))

        this.addPoint(new MockField('mo_ranliaoliang', 337, 2, '燃料量'))

        this.addPoint(new MockField('mo_zhengqiliuliang', 339, 2, '蒸汽流量'))

        this.addPoint(new MockField('mo_jishuiliuliang', 341, 2, '给水流量'))

        this.addPoint(new MockField('mo_xunhuanliuliang', 343, 2, '循环流量'))

        this.addPoint(new MockField('mo_bushuiliuliang', 345, 2, '补水流量'))

        this.addPoint(new MockField('mo_guoluyewei', 347, 2, '锅炉液位', 'mm'))

        this.addPoint(new MockField('mo_shuixiangyewei', 349, 2, '水箱液位', 'mm'))

        this.addPoint(new MockField('mo_paiyanyanghanliang', 351, 2, '排烟氧含量', '%', 10))

        this.addPoint(new MockField('mo_lupaisudufankui', 353, 2, '炉排速度反馈', '%'))

        this.addPoint(new MockField('mo_yinfengshuchufankui', 355, 2, '引风输出反馈', '%'))

        this.addPoint(new MockField('mo_gufengshuchufankui', 357, 2, '鼓风输出反馈', '%'))

        this.addPoint(new MockField('mo_jishuishuchufankui', 359, 2, '给水输出反馈', '%'))

        this.addPoint(new MockField('mo_meishuiwendu', 361, 2, '媒水温度', '℃'))

        this.addPoint(new MockField('mo_shuixiangwendu', 363, 2, '水箱温度', '℃'))

        this.addPoint(new MockField('mo_pengzhangguanyewei', 365, 2, '膨胀罐液位', 'mm'))

        this.addPoint(new MockField('mo_shanzhengguanyewei', 367, 2, '闪蒸罐液位', 'mm'))

        this.addPoint(new MockField('mo_lengningyeguanyewei', 369, 2, '冷凝液罐液位', 'mm'))

        this.addPoint(new MockField('mo_chuguanyewei', 371, 2, '储罐液位', 'mm'))

        this.addPoint(new MockField('mo_pengzhangguanwendu', 373, 2, '膨胀罐温度', '℃'))

        this.addPoint(new MockField('mo_shanzhengguanwendu', 375, 2, '闪蒸罐温度', '℃'))

        this.addPoint(new MockField('mo_lengningyeguanwendu', 377, 2, '冷凝液罐温度', '℃'))

        this.addPoint(new MockField('mo_chuguanwendu', 379, 2, '储罐温度', '℃'))

        this.addPoint(new MockField('mo_guoluyali', 381, 2, '锅炉压力', 'MPa', 100))

        this.addPoint(new MockField('mo_guorezhengqiyali', 383, 2, '过热蒸汽压力', 'MPa', 100))

        this.addPoint(new MockField('mo_paiyanchuyali', 385, 2, '排烟处压力', 'Pa'))

        this.addPoint(new MockField('mo_fengshifengya', 387, 2, '风室风压', 'KPa'))

        this.addPoint(new MockField('mo_yinfengjidianliu', 389, 2, '引风机电流', 'A'))

        this.addPoint(new MockField('mo_gufengjidianliu', 391, 2, '鼓风机电流', 'A'))

        this.addPoint(new MockField('mo_jiliaojisudufankui', 393, 2, '给料机速度反馈', '%'))

        this.addPoint(new MockField('mo_panguan1wendu', 395, 2, '盘管1温度', '℃'))

        this.addPoint(new MockField('mo_panguan2wendu', 397, 2, '盘管2温度', '℃'))

        this.addPoint(new MockField('mo_panguan3wendu', 399, 2, '盘管3温度', '℃'))

        this.addPoint(new MockField('mo_panguan4wendu', 401, 2, '盘管4温度', '℃'))

        this.addPoint(new MockField('mo_panguan5wendu', 403, 2, '盘管5温度', '℃'))

        this.addPoint(new MockField('mo_panguan6wendu', 405, 2, '盘管6温度', '℃'))

        this.addPoint(new MockField('mo_panguan7wendu', 407, 2, '盘管7温度', '℃'))

        this.addPoint(new MockField('mo_panguan8wendu', 409, 2, '盘管8温度', '℃'))

        this.addPoint(new MockField('mo_panguan9wendu', 411, 2, '盘管9温度', '℃'))

        this.addPoint(new MockField('mo_panguan10wendu', 413, 2, '盘管10温度', '℃'))

        this.addPoint(new SettingField('se_paiyanwendu', 465, 2, '排烟温度', '℃'))

        this.addPoint(new SettingField('se_baojingwendu', 467, 2, '报警温度', '℃'))

        this.addPoint(new SettingField('se_tingluwendu', 469, 2, '停炉温度', '℃'))

        this.addPoint(new SettingField('se_mubiaowendu', 471, 2, '目标温度', '℃'))

        this.addPoint(new SettingField('se_qiluwendu', 473, 2, '启炉温度', '℃'))

        this.addPoint(new SettingField('se_zhuanhuohuichawendu', 475, 2, '转火回差温度', '℃'))

        this.addPoint(new SettingField('se_qiluhuichawendu', 477, 2, '启炉回差温度', '℃'))

        this.addPoint(new SettingField('se_kaibengwendu', 479, 2, '开泵温度', '℃'))

        this.addPoint(new SettingField('se_guanbengwendu', 481, 2, '关泵温度', '℃'))

        this.addPoint(new SettingField('se_baojingyali', 483, 2, '报警压力', 'MPa', 100))

        this.addPoint(new SettingField('se_tingluyali', 485, 2, '停炉压力', 'MPa', 100))

        this.addPoint(new SettingField('se_mubiaoyali', 487, 2, '目标压力', 'MPa', 100))

        this.addPoint(new SettingField('se_qiluyali', 489, 2, '启炉压力', 'MPa', 100))

        this.addPoint(new SettingField('se_zhuanhuohuichayali', 491, 2, '转火回差压力', 'MPa', 100))

        this.addPoint(new SettingField('se_qiluhuichayali', 493, 2, '启炉回差压力', 'MPa', 100))

        this.addPoint(new SettingField('se_qianyanshi', 495, 2, '前延时', 'S'))

        this.addPoint(new SettingField('se_houyanshimiao', 497, 2, '后延时秒', 'S'))

        this.addPoint(new SettingField('se_qianchuisao', 499, 2, '前吹扫', 'S'))

        this.addPoint(new SettingField('se_houchuisao', 501, 2, '后吹扫', 'S'))

        this.addPoint(new SettingField('se_lubibaojingwendu', 503, 2, '炉壁报警温度', '℃'))

        this.addPoint(new SettingField('se_lutangchukoubaojingwendu', 505, 2, '炉膛出口报警温度', '℃'))

        this.addPoint(new SettingField('se_baohuwendu', 507, 2, '保护温度', '℃'))

        this.addPoint(new SettingField('se_bentipaiyanwendubaojingzhi', 509, 2, '本体排烟温度报警值', '℃'))

        this.addPoint(new SettingField('se_jiarezushu', 511, 2, '加热组数'))

        this.addPoint(new SettingField('se_jianceyalishijian', 513, 2, '检测压力时间'))

        this.addPoint(new SettingField('se_houyanshifen', 515, 2, '后延时分', 'm'))

        this.addPoint(new SettingField('se_shedingwendu', 517, 2, '设定温度', '℃'))

        this.addPoint(new SettingField('se_mokuailutaishu', 519, 2, '模块炉台数'))

        this.addPoint(new SettingField('se_gufenghouyanshi', 521, 2, '鼓风后延时', 'S'))

        this.addPoint(new SettingField('se_yinfenghouyanshi', 523, 2, '引风后延时', 'S'))

        this.addPoint(new SettingField('se_shuixiangkaibengwendu', 525, 2, '水箱开泵温度', '℃'))

        this.addPoint(new SettingField('se_shuixiangguanbengwendu', 527, 2, '水箱关泵温度', '℃'))

        this.addPoint(new SettingField('se_lushuibaojingwendu', 529, 2, '炉水报警温度', '℃'))

        this.addPoint(new SettingField('se_buchangxishu', 531, 2, '补偿系数'))

        this.addPoint(new SettingField('se_cankaowendu', 533, 2, '参考温度', '℃'))

        this.addPoint(new SettingField('se_tingluzuidazhi', 535, 2, '停炉最大值', '℃'))

        this.addPoint(new SettingField('se_qiluzuixiaozhi', 537, 2, '启炉最小值', '℃'))

        this.addPoint(new SettingField('se_cankaohuicha', 539, 2, '参考回差', '℃'))

        this.addPoint(new SettingField('se_tingluwendu1', 541, 2, '停炉温度1', '℃'))

        this.addPoint(new SettingField('se_qiluwendu1', 543, 2, '启炉温度1', '℃'))

        this.addPoint(new SettingField('se_tingluwendu2', 545, 2, '停炉温度2', '℃'))

        this.addPoint(new SettingField('se_qiluwendu2', 547, 2, '启炉温度2', '℃'))

        this.addPoint(new SettingField('se_yusongliaoshijian', 549, 2, '预送料时间', 'S'))

        this.addPoint(new SettingField('se_dianhuoshijian', 551, 2, '点火时间', 'S'))

        this.addPoint(new SettingField('se_songliaoqidongshijian', 553, 2, '送料启动时间', 'S'))

        this.addPoint(new SettingField('se_songliaotingzhishijian', 555, 2, '送料停止时间', 'S'))

        this.addPoint(new SettingField('se_dianhuojiange', 557, 2, '点火间隔', 'm'))

        this.addPoint(new SettingField('se_dianhuochenggongwendu', 559, 2, '点火成功温度', '℃'))

        this.addPoint(new SettingField('se_lushuitingluwendu', 561, 2, '炉水停炉温度', '℃'))

        this.addPoint(new SettingField('se_lushuiqiluwendu', 563, 2, '炉水启炉温度', '℃'))

        this.addPoint(new SettingField('se_meishuibaojingwendu', 565, 2, '媒水报警温度', '℃'))

        this.addPoint(new SettingField('se_meishuitingluwendu', 567, 2, '媒水停炉温度', '℃'))

        this.addPoint(new SettingField('se_meishuiqiluwendu', 569, 2, '媒水启炉温度', '℃'))

        this.addPoint(new SettingField('se_kaibengyali', 571, 2, '开泵压力', 'MPa', 100))

        this.addPoint(new SettingField('se_guanbengyali', 573, 2, '关泵压力', 'MPa', 100))

        this.addPoint(new SettingField('se_panguanbaojingwendu', 575, 2, '盘管报警温度', '℃'))

        this.addPoint(new SettingField('se_huilu1baojingwendu', 577, 2, '回路1报警温度', '℃'))

        this.addPoint(new SettingField('se_huilu1kaibengwendu', 579, 2, '回路1开泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu1guanbengwendu', 581, 2, '回路1关泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu2baojingwendu', 583, 2, '回路2报警温度', '℃'))

        this.addPoint(new SettingField('se_huilu2kaibengwendu', 585, 2, '回路2开泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu2guanbengwendu', 587, 2, '回路2关泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu3baojingwendu', 589, 2, '回路3报警温度', '℃'))

        this.addPoint(new SettingField('se_huilu3kaibengwendu', 591, 2, '回路3开泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu3guanbengwendu', 593, 2, '回路3关泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu4baojingwendu', 595, 2, '回路4报警温度', '℃'))

        this.addPoint(new SettingField('se_huilu4kaibengwendu', 597, 2, '回路4开泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu4guanbengwendu', 599, 2, '回路4关泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu5baojingwendu', 601, 2, '回路5报警温度', '℃'))

        this.addPoint(new SettingField('se_huilu5kaibengwendu', 603, 2, '回路5开泵温度', '℃'))

        this.addPoint(new SettingField('se_huilu5guanbengwendu', 605, 2, '回路5关泵温度', '℃'))

        this.addPoint(new StartStopField('st_qidongshijian1', 607, 2, '启动时间1'))

        this.addPoint(new StartStopField('st_tingzhishijian1', 609, 2, '停止时间1'))

        this.addPoint(new StartStopField('st_qidongshijian2', 611, 2, '启动时间2'))

        this.addPoint(new StartStopField('st_tingzhishijian2', 613, 2, '停止时间2'))

        this.addPoint(new StartStopField('st_qidongshijian3', 615, 2, '启动时间3'))

        this.addPoint(new StartStopField('st_tingzhishijian3', 617, 2, '停止时间3'))

        this.addPoint(new StartStopField('st_qidongshijian4', 619, 2, '启动时间4'))

        this.addPoint(new StartStopField('st_tingzhishijian4', 621, 2, '停止时间4'))

        this.addPoint(new StartStopField('st_qidongshijian5', 623, 2, '启动时间5'))

        this.addPoint(new StartStopField('st_tingzhishijian5', 625, 2, '停止时间5'))

        this.addPoint(new StartStopField('st_qidongshijian6', 627, 2, '启动时间6'))

        this.addPoint(new StartStopField('st_tingzhishijian6', 629, 2, '停止时间6'))

        this.addPoint(new RanShaoQiField('de_ranshaoqi', 681, 2, '燃烧器', Map_CTL_NJZJ_IP_Http.coms_ranshaoqi_status))

        this.addPoint(new DeviceField(SdcSoftDevice.KEY_POINT_JIA_RE_ZU, 683, 2, '加热组', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_bushui_beng', 685, 2, '补水泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_jishui_beng', 687, 2, '给水泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_buyou_beng', 689, 2, '补油泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_xunhuan_beng', 691, 2, '循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_lengning_beng', 693, 2, '冷凝泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_reshui_beng', 695, 2, '热水泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_zhenkong_beng', 697, 2, '真空泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_ecixunhuan_beng', 699, 2, '二次循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_yinfengji_fan', 701, 2, '引风机', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_gufengji_fan', 703, 2, '鼓风机', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_lupai_fan', 705, 2, '炉排', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_chuzhaji_fan', 707, 2, '出渣机', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_ecigufengji_fan', 709, 2, '二次鼓风机', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_dianhuoqi', 711, 2, '点火器', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_shangmeiji', 713, 2, '上煤机', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_songliaoji', 715, 2, '送料机', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_jiayao_beng', 717, 2, '加药泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_paiwufa', 719, 2, '排污阀', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_huilu1xunhuan_beng', 721, 2, '回路1循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_huilu2xunhuan_beng', 723, 2, '回路2循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_huilu3xunhuan_beng', 725, 2, '回路3循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_huilu4xunhuan_beng', 727, 2, '回路4循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

        this.addPoint(new DeviceField('de_huilu5xunhuan_beng', 729, 2, '回路5循环泵', Map_CTL_NJZJ_IP_Http.coms_device))

    }
}