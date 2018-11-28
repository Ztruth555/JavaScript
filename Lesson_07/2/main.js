let timer = document.querySelector('.timer');

let clock = setTimeout(function timerRun() {
    let time = new Date(),
        h = time.getHours().toString(),     // 0-23
        m = time.getMinutes().toString(),   // 0-59
        s = time.getSeconds().toString();   //0-59

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    timer.textContent = h + ':' + m + ':' + s;
    // color = '#' + h + m + s;

    setTimeout(timerRun, 1000);
});