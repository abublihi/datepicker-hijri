# date-calender



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                  | Description       | Type     | Default           |
| ----------------------- | -------------------------- | ----------------- | -------- | ----------------- |
| `dateFormat`            | `date-format`              |                   | `string` | `'iYYYY/iMM/iDD'` |
| `langCode`              | `lang-code`                | The language code | `string` | `'ar'`            |
| `selectedDate`          | `selected-date`            |                   | `string` | `''`              |
| `setParentSelectedDate` | `set-parent-selected-date` |                   | `any`    | `undefined`       |


## Dependencies

### Used by

 - [datepicker-hijri](../datepicker-hijri)

### Depends on

- [years-list](../years-list)
- [months-list](../months-list)
- [day-names](../day-names)
- [month-days](../month-days)

### Graph
```mermaid
graph TD;
  date-calender --> years-list
  date-calender --> months-list
  date-calender --> day-names
  date-calender --> month-days
  datepicker-hijri --> date-calender
  style date-calender fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
