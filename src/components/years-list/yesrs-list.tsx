import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'years-list',
  styleUrl: 'years-list.css',
  shadow: true
})
export class YearsList {

  minYear = 1356;
  maxYear = 1500;

  @Prop() currentTime;
  @Prop() handleYearChange;

  render() {
    let yearsList = []

    for (let i = this.minYear; i <= this.maxYear; i++) {
      yearsList.push(
        <option key={i} value={i} selected={this.currentTime.iYear() == i}>{i}</option>
      )
    }

    return <select class="years-list" onChange={this.handleYearChange}>
      {
        yearsList
      }
    </select>
  }
}


