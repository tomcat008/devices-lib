import { Map_CTL_RT_T2_RYZQ_Ts } from "../../RYZQ_Base";
import { ExceptionField,OpenCloseField,SettingField } from "../../../../../../../meta/RT/meta";
import { Map_EN_US } from "../../../../../EN_US";
import { CountShowField } from "../../../../../../../meta/CountShowField";
import { INumberIndex } from "../../../../../../../entities/IIndex";
import { CTL_RT_T2_RYZQ_4J } from "../../../../../../../devices/CTL/RT/T2/RYZQ/AScript/4J";

export class Map_CTL_RT_T2_RYZQ_4J extends Map_CTL_RT_T2_RYZQ_Ts{

    static readonly KEY_POINT_SHUI_WEI_STATUS='ba_shuiwei_status'

    static ShuiWeiStatus: INumberIndex = {
        0: 'Water shortage',
        1: 'Low position',
        2: 'Median position',
        3: 'High position',
        4: 'Super high'
    }

    
    
    //4电极
    constructor(){
        super();
       
        this.addPoint(new CountShowField(Map_CTL_RT_T2_RYZQ_4J.KEY_BASE,CTL_RT_T2_RYZQ_4J.KEY_POINT_SHUI_WEI_STATUS, "Water Leval",''));

        this.addPoint(new OpenCloseField("oc_queshuidianji", 5, 2, "Water deficient electrode", 0, Map_EN_US.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_dishuiweibaojingdianji_6dianjiteyou_", 5, 2, "Low Water Level Alarm Electrode (6 Electrodes)", 1, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_dishuiweidianji", 5, 2, "Low Water Level Electrode", 2, Map_EN_US.coms_open_close));
        //this.addPoint(new OpenCloseField("oc_zhongshuiweidianji_6dianjiteyou_", 5, 2, "Medium Water Level Electrode (6 Electrode)", 3, Map_ZH_CN.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaoshuiweidianji", 5, 2, "High Water Level Electrode", 4, Map_EN_US.coms_open_close));
        this.addPoint(new OpenCloseField("oc_gaoshuiweibaojingdianji", 5, 2, "High Water Level Alarm Electrode", 5, Map_EN_US.coms_open_close));
        

        this.addPoint(new OpenCloseField("oc_queshuidianji2", 5, 2, "Water deficiency electrode 2",7,Map_EN_US.coms_open_close));

      

        this.addPoint(new ExceptionField("ex_chaoyabaojing", 45, 2, "Overpressure alarm", 2));
        this.addPoint(new ExceptionField("ex_ranqiyaligaobaojing", 45, 2, "High Gas Pressure Alarm", 15));
        this.addPoint(new ExceptionField("ex_ranqixieloubaojing", 47, 2, "Gas Leakage Alarm", 0));
        this.addPoint(new ExceptionField("ex_ranshaoqiguzhang", 47, 2, "Burner Failure", 1));
        this.addPoint(new ExceptionField("ex_jixiandishuiweibaojing2", 47, 2, "Limit low water level alarm 2",4));

        this.addPoint(new SettingField("se_paiyanchaowen", 107, 2, "Over temperature of exhaust gas","℃"));
        this.addPoint(new SettingField("se_chaoyabaojing", 109, 2, "Overpressure alarm","Mpa",100));
        this.addPoint(new SettingField("se_tingluyali", 111, 2, "Shutdown pressure","Mpa",100));
        this.addPoint(new SettingField("se_qiluyali", 115, 2, "Starting pressure","Mpa",100));
        this.addPoint(new SettingField("se_zuanhuoyali", 113, 2, "Fire pressure","Mpa",100));
        this.addPoint(new SettingField("se_shuchushangxian", 117, 2, "Upper limit of output","%"));
        this.addPoint(new SettingField("se_shuchuxiaxian", 119, 2, "Lower limit of output","%"));
        this.addPoint(new SettingField("se_ranshaozhouqi", 121, 2, "Combustion cycle"));
        this.addPoint(new SettingField("se_ranshaoP", 123, 2, "Burning P"));
        this.addPoint(new SettingField("se_ranshaoI", 125, 2, "Burning I"));
        this.addPoint(new SettingField("se_ranshaoD", 127, 2, "Burning D"));
        this.addPoint(new SettingField("se_xingcheng", 129, 2, "Trip"));
        this.addPoint(new SettingField("se_gaobaojing", 131, 2, "High alarm","%"));
        this.addPoint(new SettingField("se_gaoshuiwei", 133, 2, "High water level","%"));
        this.addPoint(new SettingField("se_dishuiwei", 135, 2, "Low water level","%"));
        this.addPoint(new SettingField("se_mubiaoshuiwei", 137, 2, "Target water level","%"));
        this.addPoint(new SettingField("se_queshuishuiwei", 139, 2, "Water deficient stage","%"));
        this.addPoint(new SettingField("se_shuiweizhouqi", 141, 2, "Water level cycle"));
        this.addPoint(new SettingField("se_shuiweip", 143, 2, "Water level P"));
        this.addPoint(new SettingField("se_shuiweiI", 145, 2, "Water level I"));
        this.addPoint(new SettingField("se_shuiweiD", 147, 2, "Water level D"));
        this.addPoint(new SettingField("se_chongxiyanshi", 157, 2, "Flushing delay","S"));
        this.addPoint(new SettingField("se_zhuanhuohuicha", 159, 2, "Return to fire","Mpa",100));
    }
    
}