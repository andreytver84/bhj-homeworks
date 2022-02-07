window.addEventListener('load', () => {

    const progress = document.getElementById('progress');
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        //request.setRequestHeader('Content-type','application/json');
        //xhr.send();
        const formData = new FormData(form);
        //const object = {};

        //formData.forEach(function (value, key) {
        //    object[key] = value;
        //});
        //console.log(object);

        //const json = JSON.stringify(object);

        xhr.send(formData);

        xhr.addEventListener('readystatechange', (event) => {

            xhr.upload.onprogress = function () {
                alert('Загружено на сервер');
            };
            xhr.upload.onload = function () {
                alert('Данные полностью загружены на сервер!');
                progress.value = 0.7;
            };
            xhr.upload.onerror = function () {
                alert('Произошла ошибка при загрузке данных на сервер!');
            };

        });
    });

});