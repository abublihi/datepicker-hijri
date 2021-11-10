import { r as registerInstance, h } from './core-6f970d76.js';

const YearsList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.minYear = 1356;
        this.maxYear = 1500;
    }
    render() {
        let yearsList = [];
        for (let i = this.minYear; i <= this.maxYear; i++) {
            yearsList.push(h("option", { key: i, value: i, selected: this.currentTime.iYear() == i }, i));
        }
        return h("select", { class: "years-list", onChange: this.handleYearChange }, yearsList);
    }
    static get style() { return ".years-list {\n  width: 100px;\n  background: transparent;\n  height: 25px;\n  border-radius: 4px;\n  font-family: sans-serif;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  margin-left: 4px;\n  margin-top: 5px;\n}"; }
};

export { YearsList as years_list };
