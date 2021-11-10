import { r as registerInstance, h } from './core-6f970d76.js';
import { m as moment } from './moment-hijri-c8d71422.js';

const DateCalender = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.arabicDayNames = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
        this.arabicFullDayNames = ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'];
        this.englishDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        /**
         * The language code
         */
        this.langCode = 'ar';
        this.dateFormat = 'iYYYY/iMM/iDD';
        this.selectedDate = '';
        this.currentTime = moment(this.selectedDate, this.dateFormat);
        this.subtractMonth = () => {
            let currentTime = moment(this.currentTime.format(this.dateFormat), this.dateFormat);
            this.currentTime = currentTime.subtract(1, 'iMonth');
        };
        this.addMonth = () => {
            let currentTime = moment(this.currentTime.format(this.dateFormat), this.dateFormat);
            this.currentTime = currentTime.add(1, 'iMonth');
        };
        this.setSelectedDate = (event) => {
            let time = this.currentTime;
            time.iDate(parseInt(event.target.value, 10));
            const selectedDate = time.format(this.dateFormat);
            this.selectedDate = selectedDate;
            this.setParentSelectedDate(this.selectedDate);
        };
        this.handleYearChange = (event) => {
            let time = this.currentTime;
            time.iYear(parseInt(event.target.value, 10));
            const selectedDate = time.format(this.dateFormat);
            this.selectedDate = selectedDate;
        };
        this.handleMonthChange = (event) => {
            let time = this.currentTime;
            time.iMonth(parseInt(event.target.value, 10));
            const selectedDate = time.format(this.dateFormat);
            this.selectedDate = selectedDate;
        };
    }
    getMonthStartDayName() {
        let time = this.currentTime;
        time.startOf('iMonth');
        return time.format('dd');
    }
    getMonthName() {
        return this.currentTime.format('iMMMM') + ' (' + this.currentTime.format('iMM') + ') ' + this.currentTime.format('iYYYY');
    }
    render() {
        return h("div", { class: 'date-calender' }, h("div", { class: 'date-calender-controls' }, h("button", { class: 'control-button previous-button', onClick: this.subtractMonth, type: "button" }, '<'), h("strong", { class: 'month-name' }, this.getMonthName()), h("button", { class: 'control-button next-button', onClick: this.addMonth, type: "button" }, " ", '>', " "), h("div", null, h("years-list", { currentTime: this.currentTime, handleYearChange: this.handleYearChange }), h("months-list", { currentTime: this.currentTime, handleMonthChange: this.handleMonthChange }))), h("day-names", { langCode: this.langCode }), h("month-days", { currentTime: this.currentTime, dateFormat: this.dateFormat, selectedDate: this.selectedDate, setSelectedDate: this.setSelectedDate }));
    }
    static get style() { return ".date-calender {\n  width: 266px;\n  direction: rtl;\n  background: #ffffff;\n  padding: 15px;\n  border: 1px solid #ddd;\n  margin-top: 2px;\n  font-family: serif;\n  box-sizing: unset;\n  -webkit-box-sizing: unset;\n  font-size: 14px;\n  border-radius: 4px;\n  z-index: 1000;\n  color: black !important;\n}\n\n.date-calender-controls {\n  direction: rtl;\n  text-align: center;\n}\n\n.control-button {\n  position: absolute;\n  border: 0px;\n  font-weight: bold;\n  font-size: 15px;\n  cursor: pointer;\n  background-color: #fff;\n}\n\n.control-button:hover {\n  color: #888888\n}\n\n.control-button:focus {\n  outline: unset\n}\n\n.previous-button {\n  right: 15px;\n}\n\n.next-button {\n  left: 15px;\n}"; }
};

export { DateCalender as date_calender };
