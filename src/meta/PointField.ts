//namespace DevicesLib.meta {
    export abstract class PointField {
        protected name: string=''
        protected unit: string=''
        protected title: string=''

        getName() {
            return this.name
        }

        setName(name: string) {
            this.name = name
        }

        getUnit() {
            return null == this.unit ? '' : this.unit
        }

        setUnit(unit: string) {
            this.unit = unit
        }

        getTitle() {
            return this.title
        }

        setTitle(title: string) {
            this.title = title
        }
    }
//}