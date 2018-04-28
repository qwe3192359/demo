/**
 * Created by yy on 2018/4/24.
 * 计算日期
 * 计算以周日为第一天的日历视图上的第一天的日期
 */
function date() {
    let today = new Date(); //当日日期

    let thisMonthFirstDay = new Date(today.setDate(1));     //当月第一天的日期

    let week = thisMonthFirstDay.getDay();      //本月第一天是星期几（0-6,0是周日）
    let month = thisMonthFirstDay.getMonth();   //本月月份(0-11,0是1月)

    let firstDayDate = new Date(thisMonthFirstDay.setDate(1 - week)); //日历上该显示的第一天的日期（周日是每周的第一天）


    let obj = {
        month,
        firstDayDate
    };
    return obj
}
export default date();