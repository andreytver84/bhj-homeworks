document.addEventListener('scroll', actReveal);
const revealBlocks = document.querySelectorAll('.reveal');

var isInViewport = function (element) {
    const viewportHeight = window.innerHeight;
    const elementTop =
        element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
};

function actReveal() {
    for (const block of revealBlocks) {
        if (isInViewport(block)) {
            block.classList.add('reveal_active');
        }
    }
}