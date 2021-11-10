import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-6f970d76.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["day-names",[[1,"day-names",{"langCode":[1,"lang-code"],"selectedDayNames":[32]}]]],["month-days",[[1,"month-days",{"setSelectedDate":[8,"set-selected-date"],"currentTime":[8,"current-time"],"dateFormat":[8,"date-format"],"selectedDate":[8,"selected-date"]}]]],["months-list",[[1,"months-list",{"currentTime":[8,"current-time"],"handleMonthChange":[8,"handle-month-change"]}]]],["years-list",[[1,"years-list",{"currentTime":[8,"current-time"],"handleYearChange":[8,"handle-year-change"]}]]],["date-calender",[[1,"date-calender",{"langCode":[513,"lang-code"],"dateFormat":[513,"date-format"],"selectedDate":[513,"selected-date"],"setParentSelectedDate":[8,"set-parent-selected-date"],"currentTime":[32]}]]],["datepicker-hijri",[[0,"datepicker-hijri",{"placement":[1],"reference":[1],"selectedDate":[513,"selected-date"],"langCode":[513,"lang-code"],"dateFormat":[513,"date-format"],"onDateSelectClose":[4,"on-date-select-close"],"displayCalender":[32],"calenderContainerId":[32]},[[8,"click","handleOnClickOutSide"]]]]]], options);
});
