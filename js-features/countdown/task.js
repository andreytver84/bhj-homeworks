const startTimer = function() {
    let timerBlock = + document.getElementById('timer').textContent;
    if (timerBlock > 0) {
        timerBlock = timerBlock -1;    
        document.getElementById('timer').textContent = timerBlock;
    } else {
        alert('Вы победили в конкурсе!');
        document.getElementById('timer').textContent = 59;
    }    
}
setInterval(startTimer, 1000);