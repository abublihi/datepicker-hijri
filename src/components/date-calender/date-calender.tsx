import { Component, Prop, h, State } from '@stencil/core';
import moment from 'moment-hijri';

@Component({
  tag: 'date-calender',
  styleUrl: 'date-calender.css',
  shadow: true
})
export class DateCalender {

  arabicDayNames = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
  arabicFullDayNames = ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'];
  englishDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  /**
   * The language code
   */
  @Prop({reflect: true}) langCode: string = 'ar';
  @Prop({reflect: true}) dateFormat: string = 'iYYYY/iMM/iDD';
  @Prop({reflect: true}) selectedDate: string = '';
  @Prop() setParentSelectedDate;

  @State() currentTime = moment(this.selectedDate, this.dateFormat);

  subtractMonth = () => {
    let currentTime = moment(this.currentTime.format(this.dateFormat), this.dateFormat);
    this.currentTime = currentTime.subtract(1, 'iMonth');
  }

  addMonth = () => {
    let currentTime = moment(this.currentTime.format(this.dateFormat), this.dateFormat);
    this.currentTime = currentTime.add(1, 'iMonth');
  }

  setSelectedDate = (event) => {
    let time = this.currentTime;
    time.iDate(parseInt(event.target.value, 10));
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;

    this.setParentSelectedDate(this.selectedDate);
  }

  getMonthStartDayName() {
    let time = this.currentTime
    time.startOf('iMonth')
    return time.format('dd')
  }

  getMonthName() {
    return this.currentTime.format('iMMMM') + ' ('+this.currentTime.format('iMM')+') ' + this.currentTime.format('iYYYY');
  }

  handleYearChange = (event) => {
    let time = this.currentTime
    time.iYear(parseInt(event.target.value, 10))
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;
  }

  handleMonthChange = (event) => {
    let time = this.currentTime
    time.iMonth(parseInt(event.target.value, 10))
    const selectedDate = time.format(this.dateFormat);
    this.selectedDate = selectedDate;
  }

  render() {
    return <div class='date-calender'>
    <div class='date-calender-controls'>
      <button class='control-button previous-button' onClick={this.subtractMonth} type="button">{'<'}</button>
      <strong class='month-name'>{this.getMonthName()}</strong>
      <button class='control-button next-button' onClick={this.addMonth} type="button" > {'>'} </button>
      <div>
        <years-list currentTime={this.currentTime} handleYearChange={this.handleYearChange}></years-list>
        <months-list currentTime={this.currentTime} handleMonthChange={this.handleMonthChange}></months-list>

      </div>
    </div>
    <day-names langCode={this.langCode}></day-names>
    <month-days currentTime={this.currentTime} dateFormat={this.dateFormat} selectedDate={this.selectedDate} setSelectedDate={this.setSelectedDate}></month-days>
  </div>;
  }
}


