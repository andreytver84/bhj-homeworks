window.addEventListener('load', () => {
    
    const toolTips = document.querySelectorAll('.has-tooltip');

    toolTips[0].insertAdjacentHTML("afterEnd", `<div class="tooltip"></div>`);

    const blockTip = document.querySelector('.tooltip');

    let ind;

    function getTips(link) {
        const tip = link.getAttribute('title');
        const text = blockTip.innerText;
        if (tip == text) {           
            blockTip.classList.toggle('tooltip_active');
            ind = 0;
        } else {
            blockTip.innerText = `${tip}`;       
            ind = 1 ;           
        }        
    } 

    function showTips(event) {
        
        event.preventDefault();
        const target = event.target;

        getTips(target);
        
        if (ind !== 0) {
            blockTip.classList.add('tooltip_active');                               
        }        
        
        blockTip.style.left = `${target.getBoundingClientRect().left}px`;
        blockTip.style.top = `${target.getBoundingClientRect().bottom}px`;       
    }

    toolTips.forEach(item => {
        item.addEventListener('click', showTips);
    });

});