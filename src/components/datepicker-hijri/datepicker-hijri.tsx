import { Component, Listen, h, State, Prop } from '@stencil/core';
import Popper from 'popper.js';
import {Placement} from 'popper.js';import uuid from 'uuid';
import moment from 'moment-hijri';

@Component({
  tag: 'datepicker-hijri',
  // styleUrl: 'tippy.js/dist/tippy.css'
})
export class DatepickerHijri {

  @Prop() placement: Placement = 'bottom';
  @Prop() reference: string;
  @Prop({reflect: true}) selectedDate: string = '';
  @Prop({reflect: true}) langCode: string = 'ar';
  @Prop({reflect: true}) dateFormat: string = 'iYYYY/iMM/iDD';
  @Prop() onDateSelectClose: boolean = false;

  @State() displayCalender: boolean = false;
  @State() calenderContainerId: string;

  handleOnfocus()
  {
    this.displayCalender = true;
  }

  @Listen('click', { target: 'window' })
  handleOnClickOutSide(e){
    if (!this.hasSomeParentId(e.target, this.calenderContainerId) && !(e.target.id == this.reference))
      this.displayCalender = false;
  }

  // Check if the element
  hasSomeParentId(element, idName) {
    //
    // If we are here we didn't find the searched class in any parents node
    //
    if (!element.parentNode) return false;
    //
    // If the current node has the class return true, otherwise we will search
    // it in the parent node
    //
    if (element.id == idName) return true;
    return this.hasSomeParentId(element.parentNode, idName);
  }

  setSelectedDate = (selectedDate, triggerEvent = true) => {
    this.selectedDate = selectedDate;

    var reference = document.querySelector('#'+this.reference);
    reference.setAttribute('value', this.selectedDate);
    (reference as HTMLInputElement).value = this.selectedDate;
    if (triggerEvent)
      reference.dispatchEvent(new Event('change'));

    if (this.onDateSelectClose)
      this.displayCalender = false;
  }

  componentWillLoad() {
    this.calenderContainerId = uuid('datepicker-hijri')

    // This will fix the datepicker when the selected date is null or empty
    if (!moment(this.selectedDate, this.dateFormat)._isValid){
      var selectedDate;

      if (!moment(document.querySelector('#'+this.reference).getAttribute('value'), this.dateFormat)._isValid){
        selectedDate = moment().format(this.dateFormat);
      } else {
        selectedDate = document.querySelector('#'+this.reference).getAttribute('value');
      }

      this.selectedDate = selectedDate;
      this.setSelectedDate(this.selectedDate, false)
    }
  }

  componentDidLoad(){

    var reference = document.querySelector('#'+this.reference);
    reference.addEventListener('focus', () => this.handleOnfocus())
    reference.addEventListener('click', () => this.handleOnfocus())
    var popperEl = document.getElementById(this.calenderContainerId);
    new Popper(reference, popperEl, {
      placement: this.placement
    });

  }

  render() {
    return <div id={this.calenderContainerId} style={{ 'visibility': this.displayCalender ? 'visible' : 'hidden', 'z-index': '99999', 'margin': '5px'}}>
            <date-calender langCode={this.langCode} dateFormat={this.dateFormat} selectedDate={this.selectedDate} setParentSelectedDate={this.setSelectedDate}></date-calender>
      </div>
  }
}


