import { Map_CTL_RT_T2_RYZQ_Ts } from "../RYZQ_Base";
import { ExceptionField,MockField, OpenCloseField, SettingField } from "../../../../../../meta/RT/meta";
import { Map_ZH_CN } from "../../../../ZH_CN";



export = class Map_CTL_RT_T2_RYZQ_YLBSQ_CK extends Map_CTL_RT_T2_RYZQ_Ts{
    constructor(){
        super();
        // this.warningMsg='';
        //this.addPoint(new OpenCloseField(CTL_RT_T2_RYZQ_YLBSQ_Ts.KEY_POINT_RAN_SHAO_QI_STATUS, 9, 2, "燃烧器负荷增大调节", 1, ZH_CN.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_jianxiaodiaojie", 9, 2, "减小调节", 2, ZH_CN.coms_open_close));
        
        
        
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_zengda", 9, 2, "燃烧器负荷增大调节", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_ranshaoqifuhe_jianxiao", 9, 2, "燃烧器负荷减小调节", 2, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_queshuidianji2", 5, 2, "缺水电极2",7,Map_ZH_CN.coms_open_close));

        this.addPoint(new MockField("mo_lengningqiyanwen", 13, 2, "冷凝器烟温", "℃"));
        this.addPoint(new MockField("mo_jishuiwendu", 15, 2, "给水温度", "℃"));
        this.addPoint(new MockField("mo_zhengqiyali", 17, 2, "蒸汽压力", "MPa",100));
        this.addPoint(new MockField("mo_jienengqiyanwen", 23, 2, "节能器烟温", "℃"));

        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "压力变送器断路", 0));
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "压力变送器短路", 1));
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