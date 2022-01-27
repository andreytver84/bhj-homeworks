const checkboxes = document.querySelectorAll('.interests_main > ul > li > label .interest__check');

checkboxes.forEach(item => item.onchange = function() {    
    let subCheckboxes =this.closest('.interest').querySelectorAll('.interests_active input');
    if (this.checked) {
        subCheckboxes.forEach(item => item.checked = true);               
    } else {
        subCheckboxes.forEach(item => item.checked = false);
    }
});