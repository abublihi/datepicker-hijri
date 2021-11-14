import { r as registerInstance, h } from './core-6f970d76.js';

const MonthDays = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.englishDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }
    getMonthStartDayName() {
        let time = this.currentTime;
        time.startOf('iMonth');
        return time.format('dd');
    }
    monthDays() {
        return this.currentTime.iDaysInMonth();
    }
    isSelectedDate(i) {
        let time = this.currentTime;
        time.iDate(parseInt(i, 10));
        return this.selectedDate === time.format(this.dateFormat);
    }
    render() {
        let daysList = [];
        for (let i = this.englishDayNames.indexOf(this.getMonthStartDayName()); i > 0; i--) {
            daysList.push(h("div", { class: 'month-day no-hover', key: daysList.length.toString() }));
        }
        for (let i = 1; i < this.monthDays() + 1; i++) {
            daysList.push(h("div", { class: 'month-day ' + (this.isSelectedDate(i) ? 'selected' : ''), key: daysList.length.toString() }, h("button", { class: 'month-day-button ' + (this.isSelectedDate(i) ? 'selected' : ''), onClick: this.setSelectedDate, value: i, type: "button" }, i)));
        }
        return h("div", { class: 'month-days' }, daysList);
    }
    static get style() { return ".month-days {\n  text-align: right;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: wrap;\n  flex-flow: wrap;\n}\n\n.month-day {\n  margin: 2px;\n  width: 30px;\n  padding: 1px;\n  border: 1px solid #fff;\n  text-align: center;\n  -webkit-box-sizing: unset !important;\n  box-sizing: unset;\n  border-radius: 4px;\n}\n\n.month-day:hover {\n  border: 1px solid black\n}\n\n.no-hover:hover {\n  border: 1px solid white !important;\n}\n\n.month-day-button {\n  cursor: pointer;\n  border: 0px;\n  width: 30px;\n  padding: 5px;\n  font-size: 14px;\n  border-radius: 4px;\n  background-color: #f0f0f0;\n}\n\n.month-day-button.selected {\n  background-color: black !important;\n  color: white !important;\n}\n\n.month-day-button:focus {\n  outline: unset;\n}"; }
};

export { MonthDays as month_days };
