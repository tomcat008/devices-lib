import { OpenCloseField, MockField, ExceptionField } from "../../../../../../../meta/RT/meta";
import { Map_CTL_RT_T2_RYZQ_6J } from "./6J";

export class Map_CTL_RT_T2_RYZQ_6JBS extends Map_CTL_RT_T2_RYZQ_6J {
    //6电极压力变送器2段火
    constructor() {
        super();
        this.addPoint(new MockField("mo_zhengqiyali", 17, 2, "Steam pressure", "MPa", 100));

        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu", 45, 2, "Breaking of Pressure Transmitter", 0));
        this.addPoint(new ExceptionField("ex_yalibiansongqiduanlu1", 45, 2, "Short Circuit of Pressure Transmitter", 1));
    }

}