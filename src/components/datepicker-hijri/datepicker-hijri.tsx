import { Component, Listen, h, State, Prop } from '@stencil/core';
import Popper from 'popper.js';
import {Placement} from 'popper.js';
import uuid from 'uuid';

@Component({
  tag: 'datepicker-hijri',
  // styleUrl: 'tippy.js/dist/tippy.css'
})
export class DatepickerHijri {

  @Prop() placement: Placement = 'bottom';
  @Prop() reference: string;
  @Prop({reflect: true}) selectedDate: string;
  @Prop({reflect: true}) langCode: string = 'ar';
  @Prop({reflect: true}) dateFormat: string = 'iYYYY/iMM/iDD';

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

  setSelectedDate = (selectedDate) => {
    this.selectedDate = selectedDate;

    var reference = document.querySelector('#'+this.reference);
    reference.setAttribute('value', this.selectedDate);
  }

  componentWillLoad() {
    this.calenderContainerId = uuid('datepicker-hijri')
  }

  componentDidLoad(){

    var reference = document.querySelector('#'+this.reference);
    reference.addEventListener('focus', () => this.handleOnfocus())
    reference.addEventListener('click', () => this.handleOnfocus())
    var popper = document.getElementById(this.calenderContainerId);
    new Popper(reference, popper, {
      placement: this.placement
    });

  }

  render() {
    return <div id={this.calenderContainerId}>
        { this.displayCalender
          && <date-calender langCode={this.langCode} dateFormat={this.dateFormat} selectedDate={this.selectedDate} setParentSelectedDate={this.setSelectedDate}></date-calender>
        }
    </div>
  }
}


