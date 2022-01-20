const modal = document.getElementById('modal_main');
const modalCloseBtns = document.querySelectorAll('.modal__close');
const  showSuccess = document.querySelector('.show-success');

modal.classList.add('modal_active');
modalCloseBtns.forEach(item => {
    item.onclick =  function() {
        this.closest('.modal').classList.remove('modal_active');
    };
});

showSuccess.onclick = function() {
    this.closest('.modal').classList.remove('modal_active');
    document.querySelector('#modal_success').classList.add('modal_active');
}
