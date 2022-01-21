const menuSub = document.querySelectorAll('.menu_sub');
const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
    if (item.querySelector('.menu_sub')) {
        item.querySelector('.menu__link').onclick = function (evt) {
            evt.preventDefault();
            if (item.querySelector('.menu_active')) {
                item.querySelector('.menu_active').classList.remove('menu_active');
            } else {
                menuSub.forEach(sub => {
                    if (sub.classList.contains('menu_active')) {
                        sub.classList.remove('menu_active');
                    };
                });
                item.querySelector('.menu_sub').classList.add('menu_active');
            };
        };
    };
});