import { CTL_RT_T2_RYZQ_YLBSQ } from "./BaseMap";
import { ExceptionField, OpenCloseField, SettingField } from "../../../../../../../meta/RT/meta";
import { ZH_CN } from "../../../../../ZH_CN";



export = class CTL_RT_T2_RYZQ_YLBSQ_CK extends CTL_RT_T2_RYZQ_YLBSQ{
    constructor(){
        super();
        this.addPoint(new OpenCloseField("oc_queshuidianji2", 5, 2, "缺水电极2",7,ZH_CN.coms_open_close));
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
        this.addPoint(new SettingField("se_ranshaozhouqi", 121, 2, "燃烧  周期"));
        this.addPoint(new SettingField("se_ranshaoP", 123, 2, "燃烧  P"));
        this.addPoint(new SettingField("se_ranshaoI", 125, 2, "燃烧  I"));
        this.addPoint(new SettingField("se_ranshaoD", 127, 2, "燃烧  D"));
        this.addPoint(new SettingField("se_xingcheng", 129, 2, "行程"));
        this.addPoint(new SettingField("se_gaobaojing", 131, 2, "高报警","%"));
        this.addPoint(new SettingField("se_gaoshuiwei", 133, 2, "高水位","%"));
        this.addPoint(new SettingField("se_dishuiwei", 135, 2, "低水位","%"));
        this.addPoint(new SettingField("se_mubiaoshuiwei", 137, 2, "目标水位","%"));
        this.addPoint(new SettingField("se_queshuishuiwei", 139, 2, "缺水水位","%"));
        this.addPoint(new SettingField("se_shuiweizhouqi", 141, 2, "水位  周期"));
        this.addPoint(new SettingField("se_shuiweip", 143, 2, "水位  p"));
        this.addPoint(new SettingField("se_shuiweiI", 145, 2, "水位  I"));
        this.addPoint(new SettingField("se_shuiweiD", 147, 2, "水位  D"));
        this.addPoint(new SettingField("se_chongxiyanshi", 157, 2, "冲洗延时","S"));
        this.addPoint(new SettingField("se_zhuanhuohuicha", 159, 2, "转火回差","Mpa",100));
   

    }
}