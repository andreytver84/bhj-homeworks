const tabsWrap = document.querySelectorAll('.tabs');
let tabs;
let tabContents;

function selectTab(event) {
    tabs.forEach(item => item.classList.remove('tab_active'));
    tabContents.forEach(item => item.classList.remove('tab__content_active'));
    event.target.classList.add('tab_active');
    let tabIndex = tabs.indexOf(event.target);
    tabContents[tabIndex].classList.add('tab__content_active');    
}

tabsWrap.forEach(item => {
    tabs = Array.from(item.querySelectorAll('.tab'));
    tabContents = Array.from(item.querySelectorAll('.tab__content'));
    tabs.forEach(item => {
        item.addEventListener('click', selectTab);
    });
});