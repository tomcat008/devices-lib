import { ExceptionField, MockField, SettingField, DeviceField } from '../../../../meta/NJZJ/meta'
import { Map_CTL_NJZJ_IP_Http } from './CTL_NJZJ_IP_Http'

export class Map_CTL_NJZJ_IP_Http_1526 extends Map_CTL_NJZJ_IP_Http {
    constructor() {
        super()

        //扩展报警
        this.addPoint(new ExceptionField('ex_cainuanchukouwendugaobaojing', 135, 1, '采暖出口温度高报警'))

        this.addPoint(new ExceptionField('ex_reshuichukouwendugaobaojing', 136, 1, '热水出口温度高报警'))

        this.addPoint(new ExceptionField('ex_jinkouwendugaobaojing', 137, 1, '进口温度高报警'))

        this.addPoint(new ExceptionField('ex_pengzhangguanwendugaobaojing', 138, 1, '膨胀罐温度高报警'))

        this.addPoint(new ExceptionField('ex_guodianliubaojing', 139, 1, '过电流报警'))

        this.addPoint(new ExceptionField('ex_jishuiyaligaobaojing', 140, 1, '给水压力高报警'))

        this.addPoint(new ExceptionField('ex_jienengqichukouyanwengaobaojing', 141, 1, '节能器出口烟温高报警'))

        this.addPoint(new ExceptionField('ex_lengningqichukouyanwengaobaojing', 142, 1, '冷凝器出口烟温高报警'))

        this.addPoint(new ExceptionField('ex_chushuiwendugaobaojing', 143, 1, '出水温度高报警'))

        this.addPoint(new ExceptionField('ex_gaowenbaohuwendugaobaojing', 144, 1, '高温保护温度高报警'))

        this.addPoint(new ExceptionField('ex_youwengaobaojing', 145, 1, '油温高报警'))

        this.addPoint(new ExceptionField('ex_wenchagaobaojing', 146, 1, '温差高报警'))

        this.addPoint(new ExceptionField('ex_shuibengguozaibaojing', 147, 1, '水泵过载报警'))

        this.addPoint(new ExceptionField('ex_jiarezuguozaibaojing', 148, 1, '加热组过载报警'))

        this.addPoint(new ExceptionField('ex_churexunhuanbengguzhangbaojing', 149, 1, '储热循环泵故障报警'))

        this.addPoint(new ExceptionField('ex_yandaodiefaguzhang', 150, 1, '烟道蝶阀故障'))

        this.addPoint(new ExceptionField('ex_nengliangshezhiwendugaobaojing', 151, 1, '能量设置温度高报警'))

        this.addPoint(new ExceptionField('ex_zhengqiwendugaobaojing', 152, 1, '蒸汽温度高报警'))

        this.addPoint(new ExceptionField('ex_shuixiangwendugaobaojing', 153, 1, '水箱温度高报警'))

        this.addPoint(new ExceptionField('ex_4#guodianliubaojing', 154, 1, '4#过电流报警'))

        this.addPoint(new ExceptionField('ex_5#guodianliubaojing', 155, 1, '5#过电流报警'))

        this.addPoint(new ExceptionField('ex_6#guodianliubaojing', 156, 1, '6#过电流报警'))

        this.addPoint(new ExceptionField('ex_7#guodianliubaojing', 157, 1, '7#过电流报警'))

        this.addPoint(new ExceptionField('ex_8#guodianliubaojing', 158, 1, '8#过电流报警'))

        this.addPoint(new ExceptionField('ex_gufengjiguzhangbaojing', 159, 1, '鼓风机故障报警'))

        this.addPoint(new ExceptionField('ex_jiezhigaowenbaojing', 160, 1, '介质高温报警'))

        this.addPoint(new ExceptionField('ex_jiezhidiwenbaojing', 161, 1, '介质低温报警'))
        //扩展故障
        this.addPoint(new ExceptionField('ex_cainuanchukouwenduchuanganqiguzhang', 250, 1, '采暖出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_reshuichukouwenduchuanganqiguzhang', 251, 1, '热水出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jinchukouyachachuanganqiguzhang', 252, 1, '进出口压差传感器故障'))

        this.addPoint(new ExceptionField('ex_1#chukouwenduchuanganqiguzhang', 253, 1, '1#出口温度传感器故障出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_2#chukouwenduchuanganqiguzhang', 254, 1, '2#出口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqichukouyanwenchuanganqiguzhang', 255, 1, '节能器出口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_jienengqijinkouyanwenchuanganqiguzhang', 256, 1, '节能器进口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqichukouwendu_shui_chuanganqiguzhang', 257, 1, '冷凝器出口温度（水）传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqijinkou_shui_chuanganqiguzhang', 258, 1, '冷凝器进口（水）传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqichukouyanwenchuanganqiguzhang', 259, 1, '冷凝器出口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_lengningqijinkouyanwenchuanganqiguzhang', 260, 1, '冷凝器进口烟温传感器故障'))

        this.addPoint(new ExceptionField('ex_cainuanjinkouwenduchuanganqiguzhang', 261, 1, '采暖进口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_reshuijinkouwenduchuanganqiguzhang', 262, 1, '热水进口温度传感器故障'))

        this.addPoint(new ExceptionField('ex_kongzhixiangwenduchuanganqiguzhang', 263, 1, '控制箱温度传感器故障'))

        this.addPoint(new ExceptionField('ex_zhenkongyalichuanganqiguzhang', 264, 1, '真空压力传感器故障'))

        this.addPoint(new ExceptionField('ex_chushuiwenduchuanganqiguzhang', 265, 1, '出水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jinshuiwenduchuanganqiguzhang', 266, 1, '进水温度传感器故障'))

        this.addPoint(new ExceptionField('ex_youwenjiancechuanganqiguzhang', 267, 1, '油温检测传感器故障'))

        this.addPoint(new ExceptionField('ex_gaowenbaohuchuanganqiguzhang', 268, 1, '高温保护传感器故障'))

        this.addPoint(new ExceptionField('ex_chukouyouwenchuanganqiguzhang', 269, 1, '出口油温传感器故障'))

        this.addPoint(new ExceptionField('ex_jinkouyouwenchuanganqiguzhang', 270, 1, '进口油温传感器故障'))

        this.addPoint(new ExceptionField('ex_huanrewenduchuanganqiguzhang', 271, 1, '换热温度传感器故障'))

        this.addPoint(new ExceptionField('ex_xitongwenduchuanganqiguzhang', 272, 1, '系统温度传感器故障'))

        this.addPoint(new ExceptionField('ex_nengliangshezhiwenduchuanganqiguzhang', 273, 1, '能量设置温度传感器故障'))

        this.addPoint(new ExceptionField('ex_zhengqiwenduchuanganqiguzhang', 274, 1, '蒸汽温度传感器故障'))

        this.addPoint(new ExceptionField('ex_shineiwenduchuanganqiguzhang', 275, 1, '室内温度传感器故障'))

        this.addPoint(new ExceptionField('ex_1#dianliufankuichuanganqiguzhang', 276, 1, '1#电流反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_2#dianliufankuichuanganqiguzhang', 982, 1, '2#电流反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_3#dianliufankuichuanganqiguzhang', 983, 1, '3#电流反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_4#dianliufankuichuanganqiguzhang', 984, 1, '4#电流反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_5#dianliufankuichuanganqiguzhang', 985, 1, '5#电流反馈传感器故障'))

        this.addPoint(new ExceptionField('ex_jiezhiwenduchuanganqiguzhang', 986, 1, '介质温度传感器故障'))

        this.addPoint(new ExceptionField('ex_xiyuwenduchuanganqiguzhang', 987, 1, '洗浴温度传感器故障'))

        this.addPoint(new ExceptionField('ex_huanjingwenduchuanganqiguzhang', 988, 1, '环境温度传感器故障'))

        this.addPoint(new ExceptionField('ex_jiezhiyalichuanganqiguzhang', 989, 1, '介质压力传感器故障'))
        //扩展模拟量
        this.addPoint(new MockField('mo_cainuanchukouwendu', 415, 2, '采暖出口温度'))

        this.addPoint(new MockField('mo_reshuichukouwendu', 417, 2, '热水出口温度'))

        this.addPoint(new MockField('mo_jinchukouyacha', 419, 2, '进出口压差'))

        this.addPoint(new MockField('mo_1#chukouwendu', 421, 2, '1#出口温度'))

        this.addPoint(new MockField('mo_2#chukouwendu', 423, 2, '2#出口温度'))

        this.addPoint(new MockField('mo_jienengqichukouyanwen', 425, 2, '节能器出口烟温'))

        this.addPoint(new MockField('mo_jienengqijinkouyanwen', 427, 2, '节能器进口烟温'))

        this.addPoint(new MockField('mo_lengningqichukouwendu_shui_', 429, 2, '冷凝器出口温度（水）'))

        this.addPoint(new MockField('mo_lengningqijinkouwendu_shui_', 431, 2, '冷凝器进口温度（水）'))

        this.addPoint(new MockField('mo_lengningqichukouyanwen', 433, 2, '冷凝器出口烟温'))

        this.addPoint(new MockField('mo_lengningqijinkouyanwen', 435, 2, '冷凝器进口烟温'))

        this.addPoint(new MockField('mo_cainuanjinkouwendu', 437, 2, '采暖进口温度'))

        this.addPoint(new MockField('mo_reshuijinkouwendu', 439, 2, '热水进口温度'))

        this.addPoint(new MockField('mo_kongzhixiangwendu', 441, 2, '控制箱温度'))

        this.addPoint(new MockField('mo_zhenkongyali', 443, 2, '真空压力'))

        this.addPoint(new MockField('mo_chushuiwendu', 445, 2, '出水温度'))

        this.addPoint(new MockField('mo_jinshuiwendu', 447, 2, '进水温度'))

        this.addPoint(new MockField('mo_youwenjiance', 449, 2, '油温检测'))

        this.addPoint(new MockField('mo_gaowenbaohu', 451, 2, '高温保护'))

        this.addPoint(new MockField('mo_chukouyouwen', 453, 2, '出口油温'))

        this.addPoint(new MockField('mo_jinkouyouwen', 455, 2, '进口油温'))

        this.addPoint(new MockField('mo_huanrewendu', 457, 2, '换热温度'))

        this.addPoint(new MockField('mo_xitongwendu', 459, 2, '系统温度'))

        this.addPoint(new MockField('mo_nengliangshezhiwendu', 461, 2, '能量设置温度'))

        this.addPoint(new MockField('mo_zhengqiwendu', 463, 2, '蒸汽温度'))

        this.addPoint(new MockField('mo_shineiwendu', 1046, 2, '室内温度'))

        this.addPoint(new MockField('mo_1#dianliufankui', 1048, 2, '1#电流反馈'))

        this.addPoint(new MockField('mo_2#dianliufankui', 1050, 2, '2#电流反馈'))

        this.addPoint(new MockField('mo_3#dianliufankui', 1052, 2, '3#电流反馈'))

        this.addPoint(new MockField('mo_4#dianliufankui', 1054, 2, '4#电流反馈'))

        this.addPoint(new MockField('mo_5#dianliufankui', 1056, 2, '5#电流反馈'))

        this.addPoint(new MockField('mo_jiezhiwendu', 1058, 2, '介质温度'))

        this.addPoint(new MockField('mo_xiyuwendu', 1060, 2, '洗浴温度'))

        this.addPoint(new MockField('mo_huanjingwendu', 1062, 2, '环境温度'))

        this.addPoint(new MockField('mo_jiezhiyali', 1064, 2, '介质压力'))
        //扩展设置
        this.addPoint(new SettingField('se_touqieshijian_jiarezuyong_', 631, 2, '投切时间（加热组用）', 's'))

        this.addPoint(new SettingField('se_diaojieshijian_jiarezuyong_', 633, 2, '调节时间（加热组用）', 'm'))

        this.addPoint(new SettingField('se_chukouchaoyabaojing', 635, 2, '出口超压报警', 'MPa', 100))

        this.addPoint(new SettingField('se_jinkouchaoyabaojing', 637, 2, '进口超压报警', 'MPa', 100))

        this.addPoint(new SettingField('se_cainuanbaojingwendu', 639, 2, '采暖报警温度', '℃'))

        this.addPoint(new SettingField('se_cainuankaibengwendu', 641, 2, '采暖开泵温度', '℃'))

        this.addPoint(new SettingField('se_cainuanguanbengwendu', 643, 2, '采暖关泵温度', '℃'))

        this.addPoint(new SettingField('se_reshuibaojingwendu', 645, 2, '热水报警温度', '℃'))

        this.addPoint(new SettingField('se_reshuikaibengwendu', 647, 2, '热水开泵温度', '℃'))

        this.addPoint(new SettingField('se_reshuiguanbengwendu', 649, 2, '热水关泵温度', '℃', 100))

        this.addPoint(new SettingField('se_meishuimubiaowendu', 651, 2, '媒水目标温度', '℃', 100))

        this.addPoint(new SettingField('se_meishuiqiluhuicha', 653, 2, '媒水启炉回差', '℃', 100))

        this.addPoint(new SettingField('se_chukoudiyabaojing', 655, 2, '出口低压报警', '℃', 100))

        this.addPoint(new SettingField('se_jinchukouyachagao', 657, 2, '进出口压差高', '℃', 100))

        this.addPoint(new SettingField('se_jinchukouyachadi', 659, 2, '进出口压差低', '℃', 100))

        this.addPoint(new SettingField('se_jinkoudiyabaojing', 661, 2, '进口低压报警', '℃'))

        this.addPoint(new SettingField('se_jinkouchaowenbaojing', 663, 2, '进口超温报警', '℃'))

        this.addPoint(new SettingField('se_jinkoudiwenbaojing', 665, 2, '进口低温报警', '℃'))

        this.addPoint(new SettingField('se_chukoudiwenbaojing', 667, 2, '出口低温报警', '℃'))

        this.addPoint(new SettingField('se_pengzhangguanchaowen', 669, 2, '膨胀罐超温', '℃'))

        this.addPoint(new SettingField('se_mubiaoyewei', 671, 2, '目标液位', 'mm'))

        this.addPoint(new SettingField('se_kaibengyewei', 673, 2, '开泵液位', 'mm'))

        this.addPoint(new SettingField('se_guanbengyewei', 675, 2, '关泵液位', 'mm'))

        this.addPoint(new SettingField('se_kongbengmubiao', 677, 2, '控泵目标', '℃'))

        this.addPoint(new SettingField('se_lengningqianyanshi', 679, 2, '冷凝前延时', 's'))
        this.addPoint(new SettingField('se_lengninghouyanshi', 1178, 2, '冷凝后延时', '℃'))

        this.addPoint(new SettingField('se_xieyashangxian', 1180, 2, '泄压上限', 'mm'))

        this.addPoint(new SettingField('se_xieyaxiaxian', 1182, 2, '泄压下限', 'mm'))

        this.addPoint(new SettingField('se_jishuibaojingyali', 1184, 2, '给水报警压力', 'mm'))

        this.addPoint(new SettingField('se_zhenkongbaojingyali', 1186, 2, '真空报警压力', 'mm'))

        this.addPoint(new SettingField('se_zhenkongyalishangxian', 1188, 2, '真空压力上限'))

        this.addPoint(new SettingField('se_zhenkongyalixiaxian', 1190, 2, '真空压力下限'))

        this.addPoint(new SettingField('se_jinchukoumubiaoyacha', 1192, 2, '进出口目标压差'))

        this.addPoint(new SettingField('se_jienengqichuyanchaowen', 1194, 2, '节能器出烟超温'))

        this.addPoint(new SettingField('se_lengningqichuyanchaowen', 1196, 2, '冷凝器出烟超温'))

        this.addPoint(new SettingField('se_jinshuitingluwendu', 1198, 2, '进水停炉温度'))

        this.addPoint(new SettingField('se_youwenbaohuwendu', 1200, 2, '油温保护温度'))

        this.addPoint(new SettingField('se_youwenshangxianwendu', 1202, 2, '油温上限温度'))

        this.addPoint(new SettingField('se_youwenzhongxianwendu', 1204, 2, '油温中限温度'))

        this.addPoint(new SettingField('se_gaowenbaohuwendu', 1206, 2, '高温保护温度'))

        this.addPoint(new SettingField('se_wenchabaohuwendu', 1208, 2, '温差保护温度'))

        this.addPoint(new SettingField('se_jinkoutingluwendu', 1210, 2, '进口停炉温度'))

        this.addPoint(new SettingField('se_jinkoumubiaowendu', 1212, 2, '进口目标温度'))

        this.addPoint(new SettingField('se_jinkouqiluhuicha', 1214, 2, '进口启炉回差'))

        this.addPoint(new SettingField('se_youwenxiaxianwendu', 1216, 2, '油温下限温度'))

        this.addPoint(new SettingField('se_huanrekaibengwendu', 1218, 2, '换热开泵温度'))

        this.addPoint(new SettingField('se_huanreguanbengwendu', 1220, 2, '换热关泵温度'))

        this.addPoint(new SettingField('se_xitongkaibengwendu', 1222, 2, '系统开泵温度'))

        this.addPoint(new SettingField('se_xitongguanbengwendu', 1224, 2, '系统关泵温度'))

        this.addPoint(new SettingField('se_yandaodiefaxingcheng', 1226, 2, '烟道蝶阀行程'))

        this.addPoint(new SettingField('se_yandaodiefayanshi', 1228, 2, '烟道蝶阀延时'))

        this.addPoint(new SettingField('se_wenchashangxianwendu', 1230, 2, '温差上限温度'))

        this.addPoint(new SettingField('se_wenchaxiaxianwendu', 1232, 2, '温差下限温度'))

        this.addPoint(new SettingField('se_chushuitingluwendu', 1234, 2, '出水停炉温度'))

        this.addPoint(new SettingField('se_zhengqibaojing', 1236, 2, '蒸汽报警'))

        this.addPoint(new SettingField('se_zhengqitinglu', 1238, 2, '蒸汽停炉'))

        this.addPoint(new SettingField('se_zhengqimubiao', 1240, 2, '蒸汽目标'))

        this.addPoint(new SettingField('se_zhengqihuicha', 1242, 2, '蒸汽回差'))

        this.addPoint(new SettingField('se_dibaojingyewei', 1244, 2, '低报警液位'))

        this.addPoint(new SettingField('se_gaobaojingyewei', 1246, 2, '高报警液位'))

        this.addPoint(new SettingField('se_cainuantingluwendu', 1248, 2, '采暖停炉温度'))

        this.addPoint(new SettingField('se_cainuanqiluwendu', 1250, 2, '采暖启炉温度'))

        this.addPoint(new SettingField('se_1#baojingdianliu', 1252, 2, '1#报警电流'))

        this.addPoint(new SettingField('se_2#baojingdianliu', 1254, 2, '2#报警电流'))

        this.addPoint(new SettingField('se_3#baojingdianliu', 1256, 2, '3#报警电流'))

        this.addPoint(new SettingField('se_4#baojingdianliu', 1258, 2, '4#报警电流'))

        this.addPoint(new SettingField('se_5#baojingdianliu', 1260, 2, '5#报警电流'))

        this.addPoint(new SettingField('se_jiezhichaowenbaojing', 1262, 2, '介质超温报警'))

        this.addPoint(new SettingField('se_jiezhichaowenhuifu', 1264, 2, '介质超温恢复'))

        this.addPoint(new SettingField('se_jiezhidiwenbaojing', 1266, 2, '介质低温报警'))

        this.addPoint(new SettingField('se_jiezhidiwenhuifu', 1268, 2, '介质低温恢复'))

        this.addPoint(new SettingField('se_xunhuanguanxingshijian', 1270, 2, '循环惯性时间'))

        this.addPoint(new SettingField('se_xiyubaojingwendu', 1272, 2, '洗浴报警温度'))

        this.addPoint(new SettingField('se_xiyukaibengwendu', 1274, 2, '洗浴开泵温度'))

        this.addPoint(new SettingField('se_xiyuguanbengwendu', 1276, 2, '洗浴关泵温度'))

        this.addPoint(new SettingField('se_jiezhichaoyabaojing', 1278, 2, '介质超压报警'))

        this.addPoint(new SettingField('se_jiezhichaoyahuifu', 1280, 2, '介质超压恢复'))
        //控制设备
        this.addPoint(new DeviceField('de_cainuanxunhuanbeng', 731, 2, '采暖循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_reshuixunhuanbeng', 733, 2, '热水循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_paiqifa', 735, 2, '排汽阀', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_xieyafa', 737, 2, '泄压阀', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_zhenkongfa', 739, 2, '真空阀', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_pangtongfa', 741, 2, '旁通阀', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_churexunhuanbeng', 743, 2, '储热循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_huanrexunhuanbeng', 745, 2, '换热循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_xitongxunhuanbeng', 747, 2, '系统循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_churebushuibeng', 749, 2, '储热补水泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_yandaodiefa', 751, 2, '烟道蝶阀', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_huishuibeng', 753, 2, '回水泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_santongfa', 755, 2, '三通阀', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_xiyuxunhuanbeng', 757, 2, '洗浴循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_reshuidiaojiefa', 759, 2, '热水调节阀', Map_CTL_NJZJ_IP_Http.coms_device))

        //1.6.5扩展内容
        //设备信息
        this.addPoint(new DeviceField('de_jieneng_beng', 761, 2, '节能泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_kongtiaoxunhuan_beng', 763, 2, '空调循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_dinuanxunhuan_beng', 765, 2, '地暖循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        this.addPoint(new DeviceField('de_yongchixunhuan_beng', 767, 2, '泳池循环泵', Map_CTL_NJZJ_IP_Http.coms_device))
        //故障
        this.addPoint(new ExceptionField('ex_huilu1jinkouwenduchuanganqiguzhang', 990, 1, '回路1进口温度传感器故障'))
        this.addPoint(new ExceptionField('ex_huilu2jinkouwenduchuanganqiguzhang', 991, 1, '回路2进口温度传感器故障'))
        this.addPoint(new ExceptionField('ex_huilu3jinkouwenduchuanganqiguzhang', 992, 1, '回路3进口温度传感器故障'))
        this.addPoint(new ExceptionField('ex_huilu4jinkouwenduchuanganqiguzhang', 993, 1, '回路4进口温度传感器故障'))
        this.addPoint(new ExceptionField('ex_huilu5jinkouwenduchuanganqiguzhang', 994, 1, '回路5进口温度传感器故障'))
        this.addPoint(new ExceptionField('ex_kongtiaowenduchuanganqiguzhang', 995, 1, '空调系统温度传感器故障'))
        this.addPoint(new ExceptionField('ex_kongtiaowenduchuanganqiguzhang', 996, 1, '空调系统温度传感器故障'))
        this.addPoint(new ExceptionField('ex_yongchiwenduchuanganqiguzhang', 997, 1, '泳池系统温度传感器故障'))
        this.addPoint(new ExceptionField('ex_phchuanganqiguzhang', 998, 1, 'PH值传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhi1wenduchuanganqiguzhang', 999, 1, '介质1温度传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhi2wenduchuanganqiguzhang', 1000, 1, '介质2温度传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhi3wenduchuanganqiguzhang', 1001, 1, '介质3温度传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhi4wenduchuanganqiguzhang', 1002, 1, '介质4温度传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhi5wenduchuanganqiguzhang', 1003, 1, '介质5温度传感器故障'))
        this.addPoint(new ExceptionField('ex_jiezhi6wenduchuanganqiguzhang', 1004, 1, '介质6温度传感器故障'))
        //模拟量
        this.addPoint(new MockField('mo_huilu1jinkouwendu', 1066, 1, '回路1进口温度', '℃'))
        this.addPoint(new MockField('mo_huilu2jinkouwendu', 1068, 1, '回路2进口温度', '℃'))
        this.addPoint(new MockField('mo_huilu3jinkouwendu', 1070, 1, '回路3进口温度', '℃'))
        this.addPoint(new MockField('mo_huilu4jinkouwendu', 1072, 1, '回路4进口温度', '℃'))
        this.addPoint(new MockField('mo_huilu5jinkouwendu', 1074, 1, '回路5进口温度', '℃'))
        this.addPoint(new MockField('mo_kongtiaowendu', 1076, 1, '空调系统温度', '℃'))
        this.addPoint(new MockField('mo_kongtiaowendu', 1078, 1, '空调系统温度', '℃'))
        this.addPoint(new MockField('mo_yongchiwendu', 1080, 1, '泳池系统温度', '℃'))
        this.addPoint(new MockField('mo_ph', 1082, 1, 'PH值', 'PH', 10))
        this.addPoint(new MockField('mo_jiezhi1wendu', 1084, 1, '介质1温度', '℃'))
        this.addPoint(new MockField('mo_jiezhi2wendu', 1086, 1, '介质2温度', '℃'))
        this.addPoint(new MockField('mo_jiezhi3wendu', 1088, 1, '介质3温度', '℃'))
        this.addPoint(new MockField('mo_jiezhi4wendu', 1090, 1, '介质4温度', '℃'))
        this.addPoint(new MockField('mo_jiezhi5wendu', 1092, 1, '介质5温度', '℃'))
        this.addPoint(new MockField('mo_jiezhi6wendu', 1094, 1, '介质6温度', '℃'))
        //设定参数
        this.addPoint(new SettingField('se_xunhuanbaojingliuliang1', 1282, 2, '循环报警流量1', 'm3/h', 10))
        this.addPoint(new SettingField('se_kongtiaobaojingwendu', 1284, 2, '空调报警温度', '℃'))
        this.addPoint(new SettingField('se_dinuanbaojingwendu', 1286, 2, '地暖报警温度', '℃'))
        this.addPoint(new SettingField('se_yongchibaojingwendu', 1288, 2, '泳池报警温度', '℃'))
        this.addPoint(new SettingField('se_xunhuanbaojingliuliang2', 1290, 2, '循环报警流量2', 'm3/h'))
        this.addPoint(new SettingField('se_qidongjiangeshijian', 1292, 2, '启动间隔时间', 's'))
        this.addPoint(new SettingField('se_tingzhijiangeshijian', 1294, 2, '停止间隔时间', 's'))
        this.addPoint(new SettingField('se_phshangxian', 1296, 2, 'PH值上限', 'ph', 10))
        this.addPoint(new SettingField('se_phxiaxian', 1298, 2, 'PH值下限', 'ph', 10))
        this.addPoint(new SettingField('se_baojingwendu1', 1300, 2, '报警温度1', '℃'))
        this.addPoint(new SettingField('se_tingluwendu1', 1302, 2, '停炉温度1', '℃'))
        this.addPoint(new SettingField('se_qiluwendu1', 1304, 2, '启炉温度1', '℃'))
        this.addPoint(new SettingField('se_baojingwendu2', 1306, 2, '报警温度2', '℃'))
        this.addPoint(new SettingField('se_tingluwendu2', 1308, 2, '停炉温度2', '℃'))
        this.addPoint(new SettingField('se_qiluwendu2', 1310, 2, '启炉温度2', '℃'))
        this.addPoint(new SettingField('se_baojingwendu3', 1312, 2, '报警温度3', '℃'))
        this.addPoint(new SettingField('se_tingluwendu3', 1314, 2, '停炉温度3', '℃'))
        this.addPoint(new SettingField('se_qiluwendu3', 1316, 2, '启炉温度3', '℃'))
        this.addPoint(new SettingField('se_jienengqijinyanwendu', 1318, 2, '节能器进烟超温', '℃'))
        this.addPoint(new SettingField('se_mubiaoliuliang1', 1320, 2, '目标流量1', 'm3/h', 10))
        this.addPoint(new SettingField('se_mubiaoliangliang2', 1322, 2, '目标流量2', 'm3/h'))
        this.addPoint(new SettingField('se_guyinqidongjiange', 1324, 2, '鼓引启动间隔', 's'))
        this.addPoint(new SettingField('se_guyintingzhijiange', 1326, 2, '鼓引停止间隔', 's'))
        this.addPoint(new SettingField('se_shuixiangbaojingwendu', 1328, 2, '水箱报警温度', '℃'))

    }
}