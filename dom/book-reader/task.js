const control = document.querySelectorAll('.font-size');
let size;
const changeSettings = (event) => {
    event.preventDefault();
    let btn = event.currentTarget;
    control.forEach(item => item.classList.remove('font-size_active'));
    btn.classList.toggle('font-size_active');
    size = btn.dataset.size;
    let sizeClass = `book`;
    if (size) {
        sizeClass = `book book_fs-${size}`;
    }   
    btn.closest('.book').className = sizeClass;
}
control.forEach(item => {
    item.addEventListener('click', changeSettings);    
});