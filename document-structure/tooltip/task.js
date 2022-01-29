window.addEventListener('load', () => {

    document.addEventListener('scroll', () => hideTips());

    const toolTips = document.querySelectorAll('.has-tooltip');

    function addTips() {
        toolTips.forEach(item => {
            const tip = item.getAttribute('title');
            item.insertAdjacentHTML("afterEnd", `<div class="tooltip">${tip}</div>`);
        });
    }

    function hideTips() {
        document.querySelectorAll('.tooltip').forEach(item => item.classList.remove('tooltip_active'));
    }

    function showTips(event) {
        event.preventDefault();
        const target = event.target;
        const tipBlock = target.nextElementSibling;
        if (!tipBlock.classList.contains('tooltip_active')) {
            hideTips();
            tipBlock.classList.add('tooltip_active');
        } else {
            tipBlock.classList.remove('tooltip_active');
        }
        tipBlock.style.left = `${event.x}px`;
        tipBlock.style.top = `${event.y}px`;
        //tipBlock.dataset.position = "bottom";
    }

    toolTips.forEach(item => {
        item.addEventListener('click', showTips);
    });

    addTips();

});