const rotator = document.querySelectorAll('.rotator');
//let mySpeed;  пробовал через эту переменную длинну интервала устанавливать. Не получилось

function changing(rot) {
    let rotArr = Array.from(rot);
    let activIndex = rotArr.findIndex(item => item.classList.contains('rotator__case_active'));
    rotArr[activIndex].classList.remove('rotator__case_active');
    if (activIndex == rotArr.length - 1) {
        rotArr[0].classList.add('rotator__case_active');
    } else {
        rotArr[activIndex + 1].classList.add('rotator__case_active');
    }
    if (rotArr[activIndex + 1].dataset.color) {
        let color = rotArr[activIndex + 1].dataset.color;
        rotArr[activIndex + 1].style.color = color;
    }
    //mySpeed = +rotArr[activIndex + 1].dataset.speed;
    
}
rotator.forEach(item => setInterval(changing, 1000, item.querySelectorAll('.rotator__case')));