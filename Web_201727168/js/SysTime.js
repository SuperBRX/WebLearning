function realSysTime(clock) {
    let now = new Date();
    let year = now.getFullYear(); //获取年份
    let month = now.getMonth();  //获取月份
    let date = now.getDate(); //获取日期
    let hour = now.getHours() < 10? "0" + now.getHours(): now.getHours(); //获取小时
    let minute = now.getMinutes() < 10? "0" + now.getMinutes(): now.getMinutes(); //获取分钟
    let seconds = now.getSeconds() < 10? "0" + now.getSeconds(): now.getSeconds(); //获取秒

    month = month + 1;
    let time = year + "-" + month + "-" + date + "  " + hour + ":" + minute + ":" + seconds;
    clock.innerHTML = time;
}

function show() {
    window.setInterval("realSysTime(clock)",1000);
}