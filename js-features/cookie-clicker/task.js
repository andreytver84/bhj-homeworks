let cookie = document.getElementById('cookie');
let counter = + document.getElementById('clicker__counter').textContent;

cookie.onclick = function() {
    if (cookie.width == 200) {
        cookie.width += 20;
    } else {
        cookie.width -= 20;
    }
    counter = counter + 1;
    document.getElementById('clicker__counter').textContent = counter;
    
}