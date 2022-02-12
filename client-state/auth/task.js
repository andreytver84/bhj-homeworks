window.addEventListener('load', () => {

    const signin = document.querySelector('#signin');
    const welcome = document.querySelector('#welcome');
    const form = document.querySelector('form');
    const signOut = document.querySelector('#signout__btn ');
    let userId = document.querySelector('#user_id');
    let requestObj = {};

    function addWelcome(text) {
        welcome.classList.toggle('welcome_active');
        userId.textContent = text;
    }

    if (localStorage.getItem('user_id')) {
        signin.classList.remove('signin_active');
        addWelcome(localStorage.getItem('user_id'));
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

        const formData = new FormData(form);

        request.send(formData);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                requestObj = JSON.parse(request.response);
                form.reset();
                if (requestObj.success) {
                    signin.classList.remove('signin_active');
                    addWelcome(requestObj.user_id);
                    localStorage.setItem('user_id', `${requestObj.user_id}`);
                } else {
                    alert('Неверный логин/пароль»');
                }
            } else {
                console.log("Что то не так");
            }
        });
    });

    signOut.addEventListener('click', () => {
        localStorage.removeItem('user_id');
        requestObj.success = false;
        addWelcome();
        signin.classList.add('signin_active');
    });

});