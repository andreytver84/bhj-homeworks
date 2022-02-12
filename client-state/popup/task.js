window.addEventListener('load', () => {

    const getCookie = (name) => {
        const value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts
                .pop()
                .split(";")
                .shift();
        }
    }

    const show = getCookie('showed');    

    const modal = document.querySelector('.modal');
    const close = modal.querySelector('.modal__close');

    function openModal() {
        modal.classList.add('modal_active');
    };

    close.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'showed=Да; secure; samesite=strict';
        console.log(document.cookie);
    });

    if (!show) {
        setTimeout(openModal, 2000);
    };

});