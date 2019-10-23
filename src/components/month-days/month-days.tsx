import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'month-days',
  styleUrl: 'month-days.css',
  shadow: true
})
export class MonthDays {

  englishDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  @Prop() setSelectedDate;
  @Prop() currentTime;
  @Prop() dateFormat;
  @Prop() selectedDate;

  getMonthStartDayName() {
    let time = this.currentTime
    time.startOf('iMonth')
    return time.format('dd')
  }
  monthDays() {
    return this.currentTime.iDaysInMonth()
  }

  isSelectedDate(i) {
    let time = this.currentTime
    time.iDate(parseInt(i, 10))
    return this.selectedDate === time.format(this.dateFormat)
  }

  render() {
    let daysList = []
    for (let i = this.englishDayNames.indexOf(this.getMonthStartDayName()); i > 0; i--){
      daysList.push(
        <div class='month-day no-hover' key={daysList.length.toString()}></div>
      )
    }
    for (let i = 1; i < this.monthDays() + 1; i++) {
      daysList.push(
        <div class={'month-day ' + (this.isSelectedDate(i)? 'selected' : '')} key={daysList.length.toString()}>
          <button class={'month-day-button ' + (this.isSelectedDate(i)? 'selected' : '')} onClick={this.setSelectedDate} value={i} type="button">{i}</button>
        </div>
      )
    }

    return <div class='month-days'>
      {
        daysList
      }
    </div>
  }
}


