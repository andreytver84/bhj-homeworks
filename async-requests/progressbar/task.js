window.addEventListener('load', () => {

    const progress = document.getElementById('progress');
    const form = document.querySelector('form');
    const file = form.querySelector('#file');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let xhr = new XMLHttpRequest();

        const formData = new FormData(form);
        formData.append('file', file.files[0]);

        xhr.upload.onloadstart = function (event) {            
            progress.value = 0;
            //progress.max = event.total;
        };

        xhr.upload.onprogress = function (event) {
           // console.log(event.loaded);
           // progress.value = event.loaded;
            // progress.max = event.total;
            progress.value = 0.7;
        };
        xhr.upload.onloadend = function () {
            progress.value = 1;
            alert('Данные полностью загружены на сервер!');            
        };
        xhr.upload.onerror = function () {
            alert('Произошла ошибка при загрузке данных на сервер!');
        };

        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        xhr.send(formData);


    });

});