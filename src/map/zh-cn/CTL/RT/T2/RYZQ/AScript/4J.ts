import { Map_CTL_RT_T2_RYZQ_Ts } from "../../RYZQ_Base";
import { ExceptionField,OpenCloseField,SettingField } from "../../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../../ZH_CN";
import { CountShowField } from "../../../../../../../meta/CountShowField";
import { CTL_RT_T2_RYZQ_Ts } from "../../../../../../../devices/CTL/RT/T2/AScript/RYZQ";
import { INumberIndex } from "../../../../../../../entities/IIndex";

export class Map_CTL_RT_T2_RYZQ_4J extends Map_CTL_RT_T2_RYZQ_Ts{

    static ShuiWeiStatus: INumberIndex = {
        0: '缺水',
        1: '低位',
        2: '中位',
        3: '高位',
        4: '超高'
    }

    static KG_YaLiStatus: INumberIndex = {        
        0: '高压',
        1: '中压',
        3: '低压'
    }

    //4电极压力变送器内置比调
    constructor(){
        super();
       
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE,CTL_RT_T2_RYZQ_Ts.KEY_POINT_SHUI_WEI_STATUS, "水位状态",''));

        this.addPoint(new OpenCloseField("oc_queshuidianji", 5, 2, "缺水电极", 0, Map_ZH_CN.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "低水位报警电极（6电极特有）", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dishuiweidianji", 5, 2, "低水位电极", 2, Map_ZH_CN.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "中水位电极（6 电极特有）", 3, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaoshuiweidianji", 5, 2, "高水位电极", 4, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "高水位报警电极", 5, Map_ZH_CN.coms_open_close));
        

        this.addPoint(new OpenCloseField("oc_queshuidianji2", 5, 2, "缺水电极2",7,Map_ZH_CN.coms_open_close));

      

        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "超压报警", 2));
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "燃气压力高报警", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "燃气泄漏报警", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "燃烧器故障", 1));
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing2", 47, 2, "极限低水位报警2",4));

        this.addPoint(new SettingField("se_paiyanchaowen", 107, 2, "排烟超温","℃"));
        this.addPoint(new SettingField("se_chaoyabaojing", 109, 2, "超压报警","Mpa",100));
        this.addPoint(new SettingField("se_tingluyali", 111, 2, "停炉压力","Mpa",100));
        this.addPoint(new SettingField("se_qiluyali", 115, 2, "启炉压力","Mpa",100));
        this.addPoint(new SettingField("se_zuanhuoyali", 113, 2, "转火压力","Mpa",100));
        this.addPoint(new SettingField("se_shuchushangxian", 117, 2, "输出上限","%"));
        this.addPoint(new SettingField("se_shuchuxiaxian", 119, 2, "输出下限","%"));
        this.addPoint(new SettingField("se_ranshaozhouqi", 121, 2, "燃烧周期"));
        this.addPoint(new SettingField("se_ranshaoP", 123, 2, "燃烧P"));
        this.addPoint(new SettingField("se_ranshaoI", 125, 2, "燃烧I"));
        this.addPoint(new SettingField("se_ranshaoD", 127, 2, "燃烧D"));
        this.addPoint(new SettingField("se_xingcheng", 129, 2, "行程"));
        this.addPoint(new SettingField("se_gaobaojing", 131, 2, "高报警","%"));
        this.addPoint(new SettingField("se_gaoshuiwei", 133, 2, "高水位","%"));
        this.addPoint(new SettingField("se_dishuiwei", 135, 2, "低水位","%"));
        this.addPoint(new SettingField("se_mubiaoshuiwei", 137, 2, "目标水位","%"));
        this.addPoint(new SettingField("se_queshuishuiwei", 139, 2, "缺水水位","%"));
        this.addPoint(new SettingField("se_shuiweizhouqi", 141, 2, "水位周期"));
        this.addPoint(new SettingField("se_shuiweip", 143, 2, "水位P"));
        this.addPoint(new SettingField("se_shuiweiI", 145, 2, "水位I"));
        this.addPoint(new SettingField("se_shuiweiD", 147, 2, "水位D"));
        this.addPoint(new SettingField("se_chongxiyanshi", 157, 2, "冲洗延时","S"));
        this.addPoint(new SettingField("se_zhuanhuohuicha", 159, 2, "转火回差","Mpa",100));
    }
    
}