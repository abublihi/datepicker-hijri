import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'months-list',
  styleUrl: 'months-list.css',
  shadow: true
})
export class YearsList {

  months = [
    {number: 0, name: 'محرم'},
    {number: 1, name: 'صفر'},
    {number: 2, name: 'ربيع 1'},
    {number: 3, name: 'ربيع 2'},
    {number: 4, name: 'جمادي 1'},
    {number: 5, name: 'جمادي 2'},
    {number: 6, name: 'رجب'},
    {number: 7, name: 'شعبان'},
    {number: 8, name: 'رمضان'},
    {number: 9, name: 'شوال'},
    {number: 10, name: 'ذو القعدة'},
    {number: 11, name: 'ذو الحجة'},
  ];

  @Prop() currentTime;
  @Prop() handleMonthChange;

  render() {
    let monthsList = []

    for (let i = 0; i < this.months.length; i++) {
      monthsList.push(
        <option key={this.months[i].number} value={this.months[i].number} selected={this.currentTime.iMonth() == this.months[i].number}>{this.months[i].name}</option>
      )
    }

    return <select class="months-list" onChange={this.handleMonthChange}>
      {
        monthsList
      }
    </select>
  }
}


