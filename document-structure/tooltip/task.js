window.addEventListener('load', () => {

    //document.addEventListener('scroll', () => hideTips());

    const toolTips = document.querySelectorAll('.has-tooltip');

    toolTips[0].insertAdjacentHTML("afterEnd", `<div class="tooltip"></div>`);

    const blockTip = document.querySelector('.tooltip');

    function getTips(link) {
        const tip = link.getAttribute('title');
        blockTip.innerText = `${tip}`;
        console.log(blockTip);
    }

    function removeActive(block) {
        block.classList.remove('tooltip_active');
    }

    function showTips(event) {
        event.preventDefault();
        const target = event.target;
        getTips(target);
        console.dir(target);
        if (!blockTip.classList.contains('tooltip_active')) {
            blockTip.classList.add('tooltip_active');
        }


        blockTip.style.left = `${target.offsetLeft}px`;
        blockTip.style.top = `${target.getBoundingClientRect().bottom}px`;

        setTimeout(removeActive, 2000, blockTip);
    }

    toolTips.forEach(item => {
        item.addEventListener('click', showTips);
    });

});