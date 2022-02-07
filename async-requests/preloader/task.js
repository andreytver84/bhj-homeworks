window.addEventListener('load', () => {

    const items = document.getElementById('items');
    const loader = document.getElementById('loader');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
    let object;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            loader.classList.remove('loader_active');

            object = JSON.parse(xhr.responseText);
            const valute = object.response.Valute;
            
            for (let key in valute) {
                items.insertAdjacentHTML('beforeEnd',
                    `<div class="item">
               <div class="item__code">
                       ${valute[key]['CharCode']}
                   </div>
                   <div class="item__value">
                       ${valute[key]['Value']}
                   </div>   
                   <div class="item__currency">
                         руб.
                    </div>                
             </div>`);                
            }
        };
    };

});