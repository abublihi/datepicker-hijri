![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Hijridate picker web component, simple and can be integrated easily with any frameworks. (محدد التاريخ الهجري)

# Installation

## Stand alone: 

* Use CDN

```html 
<script src="https://cdn.jsdelivr.net/gh/abublihi/datepicker-hijri@v1.1/build/datepicker-hijri.js"></script>
```
* Download files

1. Download all files in the `build` directory
2. Include the script `datepicker-hijri.js` file like in the code below

```html
<script src="build/datepicker-hijri.js"></script>
```

# Usage

## Attributes:
|      name       | required | description |
|-----------------|----------|-------------|
| reference       |    yes   | an identifier for the  element where the datepicker will appear it must be an id for an html element |
| placement       |    no    | the placement of the the datepicker 'bottom', 'top', 'right', 'left' and 'auto' `default:` bottom, you can use any placement in [popper.js](https://popper.js.org/popper-documentation.html#Popper.placements) |
| date-format     |    no    | the date format, it is string, `default:` iYYYY/iMM/iDD, any format in [moment-hijri](https://github.com/xsoh/moment-hijri) will work|
| selected-date   |    no    | the selected date it is string with the same format of `date-format` prop |
| on-date-select-close   |    no    | if you want the datepicker to disapeare on chosing the date only add `on-date-select-close` |


## Example

In the Example below the `input` with id calender is the reference for the datepicker-hijri web component, so if you click or focus on the input the datepicker will be shown.

```html
<input type="text" id="calender">
<datepicker-hijri reference="calender" placement="bottom" date-format="iYYYY/iMM/iDD" selected-date="1441/02/01"></datepicker-hijri>
```

## Event `onchange`

in any change on the date, will be firing a `change` event. so you can listen and respond to the change.

```html
<input type="text" id="calender" onchange="console.log('changed')">
                                <!-- ^^^^^^^^ -->
<datepicker-hijri reference="calender" placement="bottom" date-format="iYYYY/iMM/iDD" selected-date="1441/02/01"></datepicker-hijri>
```
## Demo 
[Codepen Hijridate picker](https://codepen.io/abublihi/pen/RwwMJwz)

![Demo Image](https://i.ibb.co/SmZwqfH/hijri-datepicker-1.gif)

## how it works 

So the datepicker shown and every thing is good, but what is happening, when the user chooses the day, the datepicker will modify the attribute `value` on the reference with the new value.


# Credits

- [@xsoh](https://github.com/xsoh/moment-hijri) Thank for the awesome package moment-hijir.
- [@FezVrasta](https://github.com/FezVrasta/popper.js) Thank you for the package popper.js.
