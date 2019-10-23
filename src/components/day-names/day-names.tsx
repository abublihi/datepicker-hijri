import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'day-names',
  styleUrl: 'day-names.css',
  shadow: true
})
export class DayNames {

  arabicDayNames = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
  arabicFullDayNames = ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'];
  englishDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  /**
   * The language code
   */
  @Prop() langCode: string = 'ar';
  @State() selectedDayNames;

  componentWillLoad() {
    if (this.langCode == 'ar')
      this.selectedDayNames = this.arabicDayNames;
    else
      this.selectedDayNames = this.englishDayNames;
  }
  render() {
    return <div class='day-names-container'>
        {
          this.selectedDayNames.map((item, key) =>  <div class="day-name" key={key.toString()}>{item}</div>)
        }
    </div>;
  }
}


