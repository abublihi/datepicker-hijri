import { r as registerInstance, h } from './core-6f970d76.js';

const DayNames = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.arabicDayNames = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
        this.arabicFullDayNames = ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'];
        this.englishDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        /**
         * The language code
         */
        this.langCode = 'ar';
    }
    componentWillLoad() {
        if (this.langCode == 'ar')
            this.selectedDayNames = this.arabicDayNames;
        else
            this.selectedDayNames = this.englishDayNames;
    }
    render() {
        return h("div", { class: 'day-names-container' }, this.selectedDayNames.map((item, key) => h("div", { class: "day-name", key: key.toString() }, item)));
    }
    static get style() { return ".day-names-container {\n  text-align: right;\n  border-bottom: 1px solid #ddd;\n}\n\n.day-name {\n  display: inline-block;\n  margin: 2px;\n  width: 30px;\n  height: 25px;\n  padding: 1px;\n  border: 1px solid #fff;\n  text-align: center;\n  -webkit-box-sizing: unset !important;\n  box-sizing: unset;\n}"; }
};

export { DayNames as day_names };
