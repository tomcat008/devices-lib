
import { MockField, SettingField, ExceptionField } from "../../../../../../meta/RT/meta"
import { FixedValueField } from '../../../../../../meta/FixedValueField'
import { SdcSoftDevice } from '../../../../../../devices/SdcSoftDevice'
import { Map_ZH_CN } from '../../../../ZH_CN'
import { Map_CTL_RT_X1_Base } from "./X1"

export class Map_CTL_RT_X1_ReShui extends Map_CTL_RT_X1_Base{
    

    constructor() {
        super()

        this.addPoint(new FixedValueField(SdcSoftDevice.KEY_POINT_MEDIA, "介质类型", 0, Map_ZH_CN.coms_media))
    

        this.addPoint(new ExceptionField('ex_jixiandishuiweibaojing', 45, 2, '极限低水位报警', 0))
        this.addPoint(new ExceptionField('ex_chushuiwenduchuanganqiguzhang', 45, 2, '出水温度传感器故障', 1))
        this.addPoint(new ExceptionField('ex_chushuiwendugaobaojing', 45, 2, '出水温度高报警', 2))
        

        this.addPoint(new MockField("mo_chushuiwendu", 13, 2, "出水温度", "℃"))

        this.addPoint(new SettingField("se_baojingwendu", 57, 2, "报警温度", "℃"))
        this.addPoint(new SettingField("se_shangxianwendu", 59, 2, "上限温度", "℃"))
        this.addPoint(new SettingField("se_xiaxianwendu", 61, 2, "下限温度", "℃"))
        this.addPoint(new SettingField("se_kaibengwendu", 63, 2, "开泵温度", "℃"))
        this.addPoint(new SettingField("se_guanbengwendu", 65, 2, "关泵温度", "℃"))
        // this.addPoint(new SettingField("se_NC1", 67, 2, "NC"))
        // this.addPoint(new SettingField("se_NC2", 69, 2, "NC"))
        // this.addPoint(new SettingField("se_NC3", 71, 2, "NC"))
        // this.addPoint(new SettingField("se_NC4", 73, 2, "NC"))
        // this.addPoint(new SettingField("se_NC5", 75, 2, "NC"))
        this.addPoint(new SettingField("se_qidongshiduans1", 77, 2, "启动时段1", "时"))
        this.addPoint(new SettingField("se_qidongshiduan1", 79, 2, "启动时段1", "分"))
        this.addPoint(new SettingField("se_tingzhishiduans1", 81, 2, "停止时段1", "时"))
        this.addPoint(new SettingField("se_tingzhishiduan1", 83, 2, "停止时段1", "分"))
        this.addPoint(new SettingField("se_qidongshiduans2", 85, 2, "启动时段2", "时"))
        this.addPoint(new SettingField("se_qidongshiduan2", 87, 2, "启动时段2", "分"))
        this.addPoint(new SettingField("se_tingzhishiduans2", 89, 2, "停止时段2", "时"))
        this.addPoint(new SettingField("se_tingzhishiduan2", 91, 2, "停止时段2", "分"))
        this.addPoint(new SettingField("se_qidongshiduans3", 93, 2, "启动时段3", "时"))
        this.addPoint(new SettingField("se_qidongshiduan3", 95, 2, "启动时段3", "分"))
        this.addPoint(new SettingField("se_tingzhishiduans3", 97, 2, "停止时段3", "时"))
        this.addPoint(new SettingField("se_tingzhishiduan3", 99, 2, "停止时段3", "分"))
        this.addPoint(new SettingField("se_qidongshiduans4", 101, 2, "启动时段4", "时"))
        this.addPoint(new SettingField("se_qidongshiduan4", 103, 2, "启动时段4", "分"))
        this.addPoint(new SettingField("se_tingzhishiduans4", 105, 2, "停止时段4", "时"))
        this.addPoint(new SettingField("se_tingzhishiduan4", 107, 2, "停止时段4", "分"))
    }
}