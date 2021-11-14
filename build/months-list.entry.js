import { r as registerInstance, h } from './core-6f970d76.js';

const YearsList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.months = [
            { number: 0, name: 'محرم' },
            { number: 1, name: 'صفر' },
            { number: 2, name: 'ربيع 1' },
            { number: 3, name: 'ربيع 2' },
            { number: 4, name: 'جمادي 1' },
            { number: 5, name: 'جمادي 2' },
            { number: 6, name: 'رجب' },
            { number: 7, name: 'شعبان' },
            { number: 8, name: 'رمضان' },
            { number: 9, name: 'شوال' },
            { number: 10, name: 'ذو القعدة' },
            { number: 11, name: 'ذو الحجة' },
        ];
    }
    render() {
        let monthsList = [];
        for (let i = 0; i < this.months.length; i++) {
            monthsList.push(h("option", { key: this.months[i].number, value: this.months[i].number, selected: this.currentTime.iMonth() == this.months[i].number }, this.months[i].name));
        }
        return h("select", { class: "months-list", onChange: this.handleMonthChange }, monthsList);
    }
    static get style() { return ".months-list {\n  width: 100px;\n  background: transparent;\n  height: 25px;\n  border-radius: 4px;\n  font-family: sans-serif;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  margin-left: 4px;\n  margin-top: 5px;\n}"; }
};

export { YearsList as months_list };
