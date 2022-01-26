const dropdownBlocks = document.querySelectorAll('.dropdown');
const dropdownItems = document.querySelectorAll('.dropdown__item');

function dropdown(event) {
    const dropBtn = event.currentTarget.parentElement;
    const dropMenu = dropBtn.querySelector('.dropdown__list');
    if (dropMenu.classList.contains('dropdown__list_active')) {
        dropMenu.classList.remove('dropdown__list_active');
    } else {
        dropdownBlocks.forEach(item => {
            item.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        });
        dropMenu.classList.add('dropdown__list_active');
    }
}

function select(event) {
    event.preventDefault();
    const btn = event.target;
    let textLink = btn.textContent;
    event.currentTarget.parentElement.previousElementSibling.textContent = textLink;
    event.currentTarget.parentElement.classList.remove('dropdown__list_active');
}

dropdownBlocks.forEach(item => {
    item.querySelector('.dropdown__value').addEventListener('click', dropdown);
});

dropdownItems.forEach(item => {
    item.addEventListener('click', select);
});