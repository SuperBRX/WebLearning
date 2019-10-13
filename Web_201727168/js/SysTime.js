function realSysTime(clock) {
    let now = new Date();
    let year = now.getFullYear(); //获取年份
    let month = now.getMonth();  //获取月份
    let date = now.getDate(); //获取日期
    let day = now.getDay(); //获取星期
    let hour = now.getHours(); //获取小时
    let minute = now.getMinutes(); //获取分钟
    let seconds = now.getSeconds(); //获取秒

    month = month + 1;
    let arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    let week = arr_week[day];
    let time = year + "年" + month + "月" + date + "日" + week + "  " + hour + ":" + minute + ":" + seconds;
    clock.innerHTML = "当前时间" + time;
}

function show() {
    window.setInterval("realSysTime(clock)",1000);
}