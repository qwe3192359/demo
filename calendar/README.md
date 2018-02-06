### 日历
一周七天，每周第一天为周日，每个月的第一天不确定是周几，最多需要6行才能显示完整的一个月。
获取到当日日期、日历上需显示的第一天就可以循环显示出当月的日历了
* 当天日期：`var today = new Date()`
* 当月第一天日期：`thisFirstDay = today.setDate(1)`
* 视图需要显示的第一天日期：
```
//当月第一天的日期
var thisMonthFirstDay = new Date(date);  
//当月第一天的天数（1-31）
var day = thisMonthFirstDay.getDate(); 
//当月第一天是星期几（0-6,0是周日）
var week = thisMonthFirstDay.getDay();  
//日历上该显示的第一天的日期
var firstDay = new Date(thisMonthFirstDay.setDate(day - week)); 
```